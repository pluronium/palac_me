(function() {
  const toggle = document.getElementById('chat-toggle');
  const panel = document.getElementById('chat-panel');
  const close = document.getElementById('chat-close');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-question');
  const send = document.getElementById('chat-send');
  const messages = document.getElementById('chat-messages');
  let busy = false;

  function addMessage(text, kind, sources) {
    const item = document.createElement('div');
    item.className = 'chat-message chat-' + kind;
    item.textContent = text;
    if (sources && sources.length) {
      const links = document.createElement('div');
      links.className = 'chat-sources';
      sources.forEach(function(source) {
        if (!['home', 'about', 'resume', 'projects', 'hobbies'].includes(source.page)) return;
        const link = document.createElement('a');
        link.href = '#' + source.page;
        link.textContent = source.title;
        link.addEventListener('click', function() {
          if (typeof switchPage === 'function') switchPage(source.page);
        });
        links.appendChild(link);
      });
      item.appendChild(links);
    }
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
    return item;
  }

  function show(open) {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) input.focus();
    else toggle.focus();
  }

  toggle.addEventListener('click', function() { show(panel.hidden); });
  close.addEventListener('click', function() { show(false); });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !panel.hidden) show(false);
  });

  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    if (busy) return;
    const question = input.value.trim();
    if (!question) return;
    addMessage(question, 'user');
    input.value = '';
    const endpoint = window.PORTFOLIO_CHAT_ENDPOINT;
    if (!endpoint || !/^https:\/\//.test(endpoint)) {
      addMessage('This assistant is not connected yet. Please use the portfolio navigation or LinkedIn to get in touch.', 'assistant');
      return;
    }
    busy = true;
    send.disabled = true;
    const status = addMessage('Thinking…', 'assistant');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
        signal: AbortSignal.timeout(20000)
      });
      const result = await response.json();
      status.remove();
      if (!response.ok) throw new Error(result.error || 'The assistant is unavailable. Please try again later.');
      addMessage(result.answer, 'assistant', result.sources);
    } catch (error) {
      status.remove();
      addMessage(error.message || 'The assistant is unavailable. Please try again later.', 'assistant');
    } finally {
      busy = false;
      send.disabled = false;
      input.focus();
    }
  });
})();