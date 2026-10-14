// 1. Resume Experience Data (Grounded in Christopher Palac's Workspace Files)
    const resumeExperience = [
      {
        id: 'exp-adaptive',
        company: 'Adaptive USA',
        role: 'Manager',
        location: 'Philadelphia, PA',
        period: 'Jun 2026 – Present',
        badge: 'Current Role',
        summary: 'Leading enterprise consulting engagements, strategic account delivery, and commercial growth initiatives.',
        highlights: [
          'Transitioned in June 2026 to lead enterprise management consulting workstreams and strategic account delivery alongside executive leadership.',
          'Bridging executive stakeholder alignment, technology implementation, and commercial growth across enterprise client portfolios.'
        ]
      },
      {
        id: 'exp-ivg-pm',
        company: 'InnerView Group',
        role: 'Product Manager (GTM & Product Development)',
        location: 'Bala Cynwyd, PA',
        period: 'Dec 2022 – Jun 2026',
        badge: '$3M+ New Revenue',
        summary: 'Owned core product portfolio governance, 0-to-1 offering launches, and partner technology integrations.',
        highlights: [
          'Conceived, built, and launched a proprietary research and internal alignment scoring product that generated $3M+ in net-new revenue over three years and lifted top-line company revenue by 15%.',
          'Evolved core product portfolio, integrated partner technologies (including AI call monitoring platforms), and led Go-To-Market (GTM) strategy for 7+ new commercial offerings.',
          'Led product governance, R&D, analytics, quality assurance, and roadmap execution across 10 core offerings—improving delivery timelines by 33%.'
        ]
      },
      {
        id: 'exp-ivg-mc',
        company: 'InnerView Group',
        role: 'Managing Consultant (Product & GTM Strategy)',
        location: 'Bala Cynwyd, PA',
        period: 'Nov 2020 – Dec 2022',
        badge: '21+ Enterprise Clients',
        summary: 'Advised Fortune 500 and mid-market leaders on sales enablement, GTM alignment, and CX transformation.',
        highlights: [
          'Delivered strategic consulting across sales enablement, GTM strategy, omnichannel effectiveness, and customer experience (CX) initiatives.',
          'Led 21+ enterprise client engagements spanning Telecommunications (Fortune 50 $120B+ & $9B+ broadband leaders), Pharmaceuticals (Global $38B+ biopharma leader), Building Materials (Fortune 500 $11B+ flooring, $2B+ window/door & $1.4B+ exterior manufacturers), Banking & Insurance (Top-10 $35B+ North American bank, $2B+ regional bank, $2.8B+ mutual bank & Fortune 500 high-net-worth insurer), Home Security & Care (Fortune 1000 $6B+ security provider & 170+ location care network), and CPG & Retail ($2.5B+ audio tech leader, national retail & commercial packaging providers).'
        ]
      },
      {
        id: 'exp-ivg-ops',
        company: 'InnerView Group',
        role: 'Business Operations Manager (Operations & Scaling)',
        location: 'Bala Cynwyd, PA',
        period: 'May 2019 – Nov 2020',
        badge: '+200% Headcount Growth',
        summary: 'Scaled internal company operations, talent management, and strategic execution during rapid expansion.',
        highlights: [
          'Scaled company-wide operational initiatives, standardized talent management, and streamlined delivery workflows during a 200%+ headcount growth phase.',
          'Translated CEO and COO strategic priorities into measurable operational execution across full-time employees and specialized contractor networks.'
        ]
      },
      {
        id: 'exp-dv',
        company: 'Digital Valley',
        role: 'Independent Consultant (Scaling Strategy)',
        location: 'Philadelphia, PA',
        period: 'Jan 2019 – Apr 2021',
        badge: 'Founder & SMB Advisory',
        summary: 'Provided independent management consulting in GTM strategy, product ideation, and startup scaling.',
        highlights: [
          'Advised small businesses and early-stage founders on go-to-market strategy, 0-to-1 product lifecycle design, operational scaling, deal brokering, and commercial negotiation.'
        ]
      },
      {
        id: 'exp-nsg',
        company: 'Nerd Street (Nerd Street Gamers)',
        role: 'Chief of Staff to CEO (Strategy & Growth)',
        location: 'Philadelphia, PA',
        period: 'Oct 2017 – Jul 2018',
        badge: '10x Valuation ($20M)',
        summary: 'Scaled national IT deployment infrastructure and white-label licensing during hyper-growth.',
        highlights: [
          'Scaled deployment IT infrastructure and white-label licensing model, helping propel company from $200K seed funding ($2M valuation) to a $20M valuation in one year.',
          'Built turn-key national event deployment teams and resourcing models to expand domestic footprint across major esports venues and broadcasts.'
        ]
      },
      {
        id: 'exp-aramark-mkt',
        company: 'Aramark',
        role: 'Marketing & Strategy Coordinator',
        location: 'Philadelphia, PA',
        period: 'Jul 2017 – Oct 2017',
        badge: 'Executive Strategy',
        summary: 'Supported the Chief Marketing Officer and SVP of Strategy on enterprise strategic initiatives.',
        highlights: [
          'Partnered directly with the Office of the Chief Marketing Officer (CMO) and Senior Vice President of Strategy to coordinate cross-functional enterprise initiatives.'
        ]
      },
      {
        id: 'exp-aramark-a2l',
        company: 'Aramark (University of Pennsylvania — Chemistry Facilities)',
        role: 'A2L Leadership Program Manager',
        location: 'Philadelphia, PA',
        period: 'Jul 2016 – Jul 2017',
        badge: 'Top 10% Fast Tracked',
        summary: 'Managed 25 unionized employees across 6 UPenn locations and restructured under-performing sites.',
        highlights: [
          'Managed a team of 25 unionized employees across 6 University of Pennsylvania facilities, restructuring operations at under-performing sites.',
          'Awarded "Fast Tracked" designation, ranking in the Top 10% of 400+ national A2L Leadership Program candidates.'
        ]
      }
    ];

    // 2. Skills Matrix Data
    const skillsData = [
      { category: 'data', title: 'Python & Data Engineering', items: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Pytest', 'DateTime Testing', 'SQL', 'Relational Databases', 'R', 'RStudio', 'XML', 'HTML', 'CSS'], level: 'Advanced' },
      { category: 'data', title: 'Machine Learning, Cloud & BI', items: ['PyTorch', 'LangChain', 'Google Cloud Platform (GCP)', 'Tableau', 'Power BI', 'KNIME', 'IBM SPSS', 'Displayr', 'Google Analytics'], level: 'Advanced' },
      { category: 'product', title: '0-to-1 Product Management', items: ['Concept-to-Delivery Lifecycle', 'Product Governance', 'Roadmapping', 'Packaging Strategy', 'Pricing Strategy', 'Partner Tech Integrations', 'Research', 'Development', 'Quality Assurance'], level: 'Expert' },
      { category: 'product', title: 'Go-To-Market & Consulting', items: ['B2B GTM Strategy', 'B2C GTM Strategy', 'Value-Based Selling', 'Consultative Selling', 'Forrester CX Journey Mapping', 'Dealer Alignment', 'Channel Alignment', 'Program Scaling', 'Operational Scaling'], level: 'Expert' },
      { category: 'product', title: 'Product & Agile Tooling', items: ['Jira', 'Confluence', 'Figma', 'Miro', 'Smartsheet', 'Wrike', 'ClickUp', 'Trello', 'Agile Sprint Governance'], level: 'Expert' },
      { category: 'business', title: 'Enterprise CRM & Operations', items: ['HubSpot CRM', 'Zoho CRM', 'Adobe Creative Suite', 'DocuSign', 'Contract Workflows', 'Microsoft 365', 'Excel Modeling', 'Google Workspace'], level: 'Expert' }
    ];

    // 3. Flagship Projects & Case Studies Data
    const flagshipProjects = [
      {
        id: 'proj-scoring',
        category: 'product',
        badge: '0-to-1 Commercial Launch',
        title: 'Proprietary CX & Internal Alignment Scoring Product',
        subtitle: 'InnerView Group • Dec 2022 – Jun 2026',
        metric: '$3M+ New Revenue | +15% Top-Line Lift',
        summary: 'Designed, governed, and commercialized a proprietary research and scoring product that quantified internal stakeholder alignment and customer experience gaps for Fortune 500 enterprises.',
        details: [
          'Identified a critical market gap: enterprise leaders lacked a quantitative, repeatable diagnostic to measure how well front-line sales and care teams understood and executed new GTM strategies.',
          'Led end-to-end 0-to-1 product development, scoring methodology, packaging, pricing, and executive dashboarding using Displayr, Python, and BI workflows.',
          'Generated more than $3,000,000 in net-new product revenue over three years, contributing a 15% increase in InnerView Group top-line revenue while improving delivery velocity by 33% across 10 portfolio offerings.'
        ],
        links: [
          { label: 'View Experience in Resume', page: 'resume' }
        ]
      },
      {
        id: 'proj-mustache',
        category: 'venture',
        badge: '509(a)(2) Nonprofit & Esports',
        title: 'Mustache Masters Charity Esports Series (Seasons 1–6)',
        subtitle: 'Co-Founder & President • 2019 – Present',
        metric: '$122,000+ Raised | 1.6M+ Mins Watched',
        summary: 'Co-founded and scaled an annual Counter-Strike (CS:GO / CS2) charity tournament and live broadcast benefiting the Movember Foundation and men\'s mental health awareness.',
        details: [
          'Built a custom-activation sponsorship and partnership engine (including tournament logistics with FACEIT / EFG) without rigid cookie-cutter tiers.',
          'Produced 6 weekend events featuring 750+ tournament competitors, 100+ broadcast guests (494.6K+ combined talent reach), 61,000+ unique viewers, 50+ volunteers, and custom Counter-Strike workshop maps (MM_Warehouse by SinFul & KZ events).',
          'Featured on NBC Sports and scaled cumulative fundraising from a $10,000 Season 1 pilot in 2019 to over $122,000 raised across 6 events.'
        ],
        links: [
          { label: 'Watch NBC Sports Feature', url: 'https://www.youtube.com/watch?v=HzW29OXA5dY' },
          { label: 'MM_Warehouse Steam Map', url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2718366308' }
        ]
      },
      {
        id: 'proj-ai-call',
        category: 'data',
        badge: 'Enterprise AI Implementation',
        title: 'AI Call Monitoring & Sales Playbook Integration',
        subtitle: 'Fortune 500 Flooring Leader ($11B+ Rev) & National Window Manufacturer ($2B+ Rev)',
        metric: 'AI Conversation Intelligence at Scale',
        summary: 'Led the partner technology integration and sales channel rollout of AI-powered call monitoring and consultative selling playbooks for national building materials leaders.',
        details: [
          'Integrated third-party AI call monitoring and conversation intelligence technology directly into enterprise inside-sales and dealer support channels for a Fortune 500 global flooring manufacturer ($11B+ annual revenue) and a leading national window and door manufacturer ($2B+ annual revenue).',
          'Aligned AI call scoring rubrics with custom sales playbooks so managers could coach front-line reps using real-time customer sentiment and objection-handling data.',
          'Combined qualitative dealer network research with automated call analytics to close messaging gaps between corporate brand strategy and field execution.'
        ],
        links: [
          { label: 'View Experience in Resume', page: 'resume' }
        ]
      },
      {
        id: 'proj-telecom',
        category: 'product',
        badge: 'National Telecom GTM & Audit',
        title: 'Fortune 50 Telecom ($120B+ Rev): 17-Region MDU-Bulk Audit & Handoff Playbook',
        subtitle: 'Fortune 50 Telecommunications & Media Conglomerate ($120B+ Annual Revenue)',
        metric: '17 US Regions Unified | Multi-Workstream Lead',
        summary: 'Directed four distinct strategic workstreams for a Fortune 50 telecommunications leader ($120B+ annual revenue) spanning a 17-region national MDU-Bulk operational audit, sales-to-operations handoff playbooks that increased bulk deal conversion, omnichannel sales research, and enterprise tech integration.',
        details: [
          'National MDU-Bulk Audit: Audited the Multi-Dwelling Unit (MDU) bulk sales and operations process across 17 US regions and architected a unified national operating framework.',
          'Sales-to-Operations Handoff Playbook: Developed a standardized playbook for sales handoffs to operations teams that increased the conversion rate of bulk deals and standardized the customer experience.',
          'Enterprise Tech Integration & Omnichannel Research: Served as Project Manager for new sales technology integration initiatives and led multi-channel sales behavior trend studies.'
        ],
        links: [
          { label: 'View Experience in Resume', page: 'resume' }
        ]
      },
      {
        id: 'proj-datasci',
        category: 'data',
        badge: 'Data Science & Research',
        title: 'Applied Data Science, Pandas Time-Series & AI Market Research',
        subtitle: 'Illinois Tech MAS-DS & Enterprise Sales Research • 2025 – 2026',
        metric: 'Python / Pandas • AI Infrastructure & SPM Analysis',
        summary: 'Graduate data science engineering in Python/Pandas alongside comprehensive market research on AI-driven Sales Performance Management (SPM) and AI data center compute demand.',
        details: [
          'Engineered and inspected Python Pandas datetime array and conversion test suites (datetimes.py, test_to_datetime.py, _test_decorators.py) covering timezone localization, ISO8601 parsing, and NaT coercion.',
          'Authored in-depth industry whitepapers on "Sales Performance Consulting Trends for Large US Enterprises ($100M+)" and "Navigating the Customer-Centric Shift: Value-Based vs. Consultative Selling in B2B & B2C".',
          'Modeled hyperscaler and enterprise share of AI accelerator data center compute demand across leading global cloud providers ($200B+–$600B+ revenue tech giants) and frontier AI research laboratories.'
        ],
        links: [
          { label: 'View Data Science Stack in Resume', page: 'resume' }
        ]
      }
    ];

    // 4. All 21 Enterprise Consulting Engagements (Grounded in Christopher Palac - Clients - 2026 v6)
    const clientEngagements = [
      { client: 'Fortune 1000 Smart Home Security Provider ($6B+ Annual Revenue)', industry: 'Home Security & Care', brief: 'Evolved acquisition sales process and consultative workflows for bundled home security offers.' },
      { client: 'Major US Broadband & Telecom Operator ($9B+ Annual Revenue)', industry: 'Telecommunications', brief: 'Designed customer retention processes and led consultation across customer care and sales channels.' },
      { client: 'National Exterior Building Products Manufacturer ($1.4B+ Annual Revenue)', industry: 'Building Materials', brief: 'Aligned national dealer network for exterior siding products Go-To-Market (GTM) approach.' },
      { client: 'Fortune 500 High-Net-Worth Specialty Insurer ($12B+ Parent Revenue)', industry: 'Banking', brief: 'Conducted internal portfolio research and aligned high-net-worth insurance dealer network messaging.' },
      { client: 'Fortune 50 Telecom & Media Leader — Software Division ($120B+ Annual Revenue)', industry: 'Software', brief: 'Developed outbound prospecting methodology and GTM strategy for new B2B/B2C software offering.' },
      { client: 'Fortune 50 Telecom & Media Leader — MDU-Bulk Division ($120B+ Annual Revenue)', industry: 'Telecommunications', brief: 'Audited the USA Multi-Dwelling Unit (MDU) process across 17 regions and built a unified national approach.' },
      { client: 'Fortune 50 Telecom & Media Leader — Sales Research ($120B+ Annual Revenue)', industry: 'Telecommunications', brief: 'Researched emerging sales behavior trends across omnichannel retail, care, and field channels.' },
      { client: 'Fortune 50 Telecom & Media Leader — Enterprise Tech ($120B+ Annual Revenue)', industry: 'Telecommunications', brief: 'Served as Project Manager for enterprise technology integration initiatives.' },
      { client: 'Global Fortune 500 Biopharmaceutical Leader ($38B+ Annual Revenue)', industry: 'Pharmaceuticals', brief: 'Led internal behavioral studies on field sales teams and Healthcare Professional (HCP) engagement for two vaccines.' },
      { client: 'National Non-Medical Home Care Franchise Network (170+ Locations)', industry: 'Home Security & Care', brief: 'Evolved brand positioning and supported national launch of franchise network messaging.' },
      { client: 'Global Audio & Video Conferencing Technology Leader ($2.5B+ Group Revenue)', industry: 'CPG', brief: 'Executed internal market study for new B2B/B2C market expansion of commercial webcam products.' },
      { client: 'Fortune 500 Global Flooring Manufacturer ($11B+ Annual Revenue)', industry: 'Building Materials', brief: 'Conducted internal research and delivered strategic recommendations for commercial & residential flooring portfolio.' },
      { client: 'Fortune 500 Global Flooring Manufacturer — Sales Tech ($11B+ Annual Revenue)', industry: 'Building Materials', brief: 'Led implementation of AI call monitoring technology into enterprise sales channels.' },
      { client: 'Leading National Window & Door Manufacturer ($2B+ Annual Revenue)', industry: 'Building Materials', brief: 'Aligned national sales processes and developed consultative selling playbooks.' },
      { client: 'Leading National Window & Door Manufacturer — AI Tech ($2B+ Annual Revenue)', industry: 'Building Materials', brief: 'Implemented AI call monitoring and conversation intelligence technology across sales channels.' },
      { client: 'Regional Mutual Banking Institution ($2.8B+ Assets)', industry: 'Banking', brief: 'Advised executive team on Net Promoter Score (NPS) drivers and GTM strategy for key customer segments.' },
      { client: 'Mid-Market Commercial Printing & Packaging Solutions Provider', industry: 'CPG', brief: 'Delivered executive brand positioning and internal/external messaging alignment consultation.' },
      { client: 'International Food Import & CPG Distribution Leader ($500M+ Category)', industry: 'CPG', brief: 'Led internal research on product portfolio value proposition and commercial messaging.' },
      { client: 'National Department Store & Appliance Retailer (Multi-Billion Retail)', industry: 'CPG', brief: 'Conducted retail sales effectiveness research and front-line process consultation.' },
      { client: 'Major Regional Commercial & Retail Bank ($2B+ Annual Revenue)', industry: 'Banking', brief: 'Performed in-branch customer experience (CX) analysis and care channel recommendations.' },
      { client: 'Top-10 North American Retail & Commercial Bank ($35B+ Annual Revenue)', industry: 'Banking', brief: 'Delivered in-branch customer experience (CX) analysis and front-line banking care recommendations.' }
    ];

    // State Management
    let currentPage = 'home';
    let expandedRoles = { 'exp-adaptive': true, 'exp-ivg-pm': true };
    let industryChartInstance = null;
    let mustacheChartInstance = null;

    // Keep the dark design as the default, and persist an explicit choice.
    function updateThemeControls() {
      const light = document.documentElement.classList.contains('theme-light');
      const button = document.getElementById('theme-toggle');
      if (!button) return;
      button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
      button.setAttribute('title', light ? 'Switch to dark mode' : 'Switch to light mode');
      button.setAttribute('aria-pressed', String(light));
      document.getElementById('theme-label').textContent = light ? 'Dark mode' : 'Light mode';
      document.getElementById('theme-icon-sun').classList.toggle('hidden', light);
      document.getElementById('theme-icon-moon').classList.toggle('hidden', !light);
    }

    function toggleTheme() {
      const light = document.documentElement.classList.toggle('theme-light');
      try {
        localStorage.setItem('cp_portfolio_theme', light ? 'light' : 'dark');
      } catch (e) {}
      updateThemeControls();
      if (industryChartInstance) initIndustryChart();
      if (mustacheChartInstance) initMustacheChart();
    }

    // Switch Active Page
    function switchPage(pageId) {
      currentPage = pageId;
      const pages = ['home', 'about', 'resume', 'projects', 'hobbies'];
      pages.forEach(function(p) {
        const el = document.getElementById('page-' + p);
        if (el) {
          if (p === pageId) {
            el.classList.add('active');
          } else {
            el.classList.remove('active');
          }
        }
        const navBtn = document.getElementById('nav-' + p);
        if (navBtn) {
          if (p === pageId) {
            navBtn.className = 'nav-tab px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all bg-blue-600 text-white shadow';
          } else {
            navBtn.className = 'nav-tab px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all text-slate-300 hover:text-white hover:bg-slate-800/60';
          }
        }
        const mNavBtn = document.getElementById('mnav-' + p);
        if (mNavBtn) {
          if (p === pageId) {
            mNavBtn.className = 'w-full text-left px-3 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white';
          } else {
            mNavBtn.className = 'w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800';
          }
        }
      });

      // Close mobile menu if open
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }

      try {
        localStorage.setItem('cp_portfolio_page', pageId);
      } catch (e) {}

      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Initialize or resize charts when their page becomes visible
      if (pageId === 'about') {
        setTimeout(initIndustryChart, 60);
      } else if (pageId === 'hobbies') {
        setTimeout(initMustacheChart, 60);
      }
    }

    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      if (menu) {
        menu.classList.toggle('hidden');
      }
    }

    // Render Resume Experience Timeline
    function renderResume() {
      const container = document.getElementById('experience-timeline');
      if (!container) return;
      container.innerHTML = resumeExperience.map(function(item) {
        const isOpen = !!expandedRoles[item.id];
        const bulletsHtml = item.highlights.map(function(b) {
          return '<li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"><span class="text-blue-400 mt-1">•</span><span>' + b + '</span></li>';
        }).join('');
        return (
          '<div class="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 transition-all">' +
            '<button type="button" onclick="toggleRoleDetails(\'' + item.id + '\')" class="w-full text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 focus:outline-none">' +
              '<div>' +
                '<div class="flex flex-wrap items-center gap-2">' +
                  '<h3 class="text-base sm:text-lg font-bold text-white">' + item.role + '</h3>' +
                  '<span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">' + item.badge + '</span>' +
                '</div>' +
                '<div class="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">' + item.company + ' • ' + item.location + '</div>' +
              '</div>' +
              '<div class="flex items-center gap-3 self-start sm:self-center">' +
                '<span class="text-xs font-semibold text-slate-300 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">' + item.period + '</span>' +
                '<span class="text-slate-400 text-xs font-bold">' + (isOpen ? '▲ Hide' : '▼ Details') + '</span>' +
              '</div>' +
            '</button>' +
            '<p class="text-xs sm:text-sm text-slate-400 mt-2">' + item.summary + '</p>' +
            (isOpen ? '<ul class="mt-4 pt-3 border-t border-slate-800/80 space-y-2">' + bulletsHtml + '</ul>' : '') +
          '</div>'
        );
      }).join('');
    }

    function toggleRoleDetails(roleId) {
      expandedRoles[roleId] = !expandedRoles[roleId];
      renderResume();
    }

    function filterResumeSection(section) {
      const sections = ['experience', 'education', 'skills'];
      sections.forEach(function(s) {
        const block = document.getElementById('resume-block-' + s);
        if (block) {
          block.style.display = (section === 'all' || section === s) ? 'block' : 'none';
        }
      });
      const btns = ['all', 'experience', 'education', 'skills'];
      btns.forEach(function(b) {
        const btn = document.getElementById('res-filter-' + b);
        if (btn) {
          btn.className = (b === section)
            ? 'res-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 text-white'
            : 'res-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white';
        }
      });
    }

    // Render & Filter Skills
    function filterSkills(cat) {
      const btns = ['all', 'data', 'product', 'business'];
      btns.forEach(function(b) {
        const btn = document.getElementById('skill-cat-' + b);
        if (btn) {
          btn.className = (b === cat)
            ? 'skill-cat-btn px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-600 text-white'
            : 'skill-cat-btn px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white';
        }
      });
      const container = document.getElementById('skills-grid');
      if (!container) return;
      const filtered = skillsData.filter(function(s) {
        return cat === 'all' || s.category === cat;
      });
      container.innerHTML = filtered.map(function(group) {
        const pills = group.items.map(function(item) {
          return '<span class="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200">' + item + '</span>';
        }).join('');
        return (
          '<div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">' +
            '<div class="flex items-center justify-between">' +
              '<h3 class="text-sm font-bold text-white">' + group.title + '</h3>' +
              '<span class="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">' + group.level + '</span>' +
            '</div>' +
            '<div class="flex flex-wrap gap-1.5">' + pills + '</div>' +
          '</div>'
        );
      }).join('');
    }

    // Render & Filter Flagship Projects
    function filterProjects(category) {
      const btns = ['all', 'product', 'data', 'venture'];
      btns.forEach(function(b) {
        const btn = document.getElementById('proj-filter-' + b);
        if (btn) {
          btn.className = (b === category)
            ? 'proj-filter-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white'
            : 'proj-filter-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white';
        }
      });

      const grid = document.getElementById('flagship-projects-grid');
      if (!grid) return;
      const list = flagshipProjects.filter(function(p) {
        return category === 'all' || p.category === category;
      });

      grid.innerHTML = list.map(function(proj) {
        return (
          '<div class="bg-slate-900/85 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-6 flex flex-col justify-between transition-all shadow-lg">' +
            '<div class="space-y-3">' +
              '<div class="flex items-center justify-between gap-2">' +
                '<span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">' + proj.badge + '</span>' +
              '</div>' +
              '<h3 class="text-lg font-bold text-white leading-snug">' + proj.title + '</h3>' +
              '<div class="text-xs font-medium text-slate-400">' + proj.subtitle + '</div>' +
              '<div class="p-3 rounded-xl bg-slate-950/90 border border-slate-800/90 text-xs font-bold text-emerald-400">' +
                proj.metric +
              '</div>' +
              '<p class="text-xs sm:text-sm text-slate-300 leading-relaxed">' + proj.summary + '</p>' +
            '</div>' +
            '<div class="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between gap-2">' +
              '<button type="button" onclick="openProjectModal(\'' + proj.id + '\')" class="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold transition-all flex items-center justify-between">' +
                '<span>Inspect Case Study &amp; Links</span>' +
                '<span>→</span>' +
              '</button>' +
            '</div>' +
          '</div>'
        );
      }).join('');
    }

    function openProjectModal(projId) {
      const proj = flagshipProjects.find(function(p) { return p.id === projId; });
      if (!proj) return;
      document.getElementById('modal-proj-badge').textContent = proj.badge + ' • ' + proj.metric;
      document.getElementById('modal-proj-title').textContent = proj.title;
      document.getElementById('modal-proj-subtitle').textContent = proj.subtitle;

      const bodyEl = document.getElementById('modal-proj-body');
      bodyEl.innerHTML =
        '<p class="text-slate-200 font-medium">' + proj.summary + '</p>' +
        '<div class="space-y-2 pt-2">' +
          '<div class="text-xs font-bold uppercase tracking-wider text-blue-400">Execution &amp; Measurable Outcomes</div>' +
          '<ul class="space-y-2">' +
            proj.details.map(function(d) {
              return '<li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"><span class="text-blue-400 mt-1">•</span><span>' + d + '</span></li>';
            }).join('') +
          '</ul>' +
        '</div>';

      const linksEl = document.getElementById('modal-proj-links');
      linksEl.innerHTML =
        '<div class="flex flex-wrap gap-2">' +
          proj.links.map(function(l) {
            if (l.page) {
              return '<button type="button" onclick="closeProjectModal(); switchPage(\'' + l.page + '\')" class="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all">' + l.label + ' →</button>';
            }
            return '<a href="' + l.url + '" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all">' + l.label + ' ↗</a>';
          }).join('') +
        '</div>' +
        '<button type="button" onclick="closeProjectModal()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold">Close</button>';

      document.getElementById('project-modal').classList.remove('hidden');
    }

    function closeProjectModal() {
      document.getElementById('project-modal').classList.add('hidden');
    }

    // Filter 21 Client Engagements Directory
    function filterClientsTable() {
      const query = (document.getElementById('client-search-input').value || '').toLowerCase().trim();
      const sector = document.getElementById('client-industry-select').value;
      const tbody = document.getElementById('clients-table-body');
      const status = document.getElementById('client-count-status');
      if (!tbody) return;

      const filtered = clientEngagements.filter(function(item) {
        const matchesSector = (sector === 'all') || (item.industry === sector);
        const matchesQuery = !query ||
          item.client.toLowerCase().indexOf(query) !== -1 ||
          item.industry.toLowerCase().indexOf(query) !== -1 ||
          item.brief.toLowerCase().indexOf(query) !== -1;
        return matchesSector && matchesQuery;
      });

      if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="py-6 px-4 text-center text-slate-400 text-sm">No matching client engagements found. Try clearing your search filter.</td></tr>';
      } else {
        tbody.innerHTML = filtered.map(function(c) {
          return (
            '<tr class="hover:bg-slate-900/90 transition-colors">' +
              '<td class="py-3 px-4 font-semibold text-white whitespace-nowrap">' + c.client + '</td>' +
              '<td class="py-3 px-4 whitespace-nowrap"><span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-blue-300 border border-slate-700">' + c.industry + '</span></td>' +
              '<td class="py-3 px-4 text-slate-300 text-xs sm:text-sm">' + c.brief + '</td>' +
            '</tr>'
          );
        }).join('');
      }
      if (status) {
        status.textContent = 'Showing ' + filtered.length + ' of ' + clientEngagements.length + ' enterprise engagements';
      }
    }

    // Contact Modal & Clipboard Helpers
    function openContactModal() {
      document.getElementById('contact-modal').classList.remove('hidden');
    }

    function closeContactModal() {
      document.getElementById('contact-modal').classList.add('hidden');
    }

    function handleContactSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('visitor-name').value.trim();
      const topic = document.getElementById('visitor-topic').value;
      const msg = document.getElementById('visitor-message').value.trim();
      const formattedNote = '[Portfolio Inquiry] ' + topic + ' — ' + name + '\n\nHi Chris,\n\n' + msg + '\n\nBest regards,\n' + name;
      closeContactModal();
      copyText(formattedNote, 'Inquiry note copied to clipboard! Connect on LinkedIn to send.');
    }

    function copyText(text, message) {
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      } catch (err) {}
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(function() {});
      }
      showToast(message || 'Copied to clipboard!');
    }

    let toastTimeout = null;
    function showToast(msg) {
      const toast = document.getElementById('toast-notification');
      const label = document.getElementById('toast-message');
      if (!toast || !label) return;
      label.textContent = msg;
      toast.classList.remove('hidden');
      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(function() {
        toast.classList.add('hidden');
      }, 3200);
    }

    // Charts Initialization
    function chartTextColor() { return document.documentElement.classList.contains('theme-light') ? '#25443a' : '#cbd5e1'; }
    function chartMutedColor() { return document.documentElement.classList.contains('theme-light') ? '#635844' : '#94a3b8'; }
    function chartGridColor() { return document.documentElement.classList.contains('theme-light') ? 'rgba(36, 72, 57, 0.18)' : 'rgba(148, 163, 184, 0.12)'; }

    function initIndustryChart() {
      const canvas = document.getElementById('industryChart');
      if (!canvas || typeof Chart === 'undefined') return;
      if (industryChartInstance) {
        industryChartInstance.destroy();
      }
      industryChartInstance = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: ['Building Materials', 'Telecom', 'CPG & Retail', 'Banking & Ins.', 'Home Sec. & Care', 'Pharma & Software'],
          datasets: [{
            label: 'Enterprise Engagements',
            data: [5, 4, 4, 4, 2, 2],
             backgroundColor: document.documentElement.classList.contains('theme-light') ? [
               '#12382d', '#825022', '#32604b', '#9a6431', '#486e58', '#ad7a42'
             ] : [
              'rgba(59, 130, 246, 0.85)',
              'rgba(99, 102, 241, 0.85)',
              'rgba(16, 185, 129, 0.85)',
              'rgba(245, 158, 11, 0.85)',
              'rgba(168, 85, 247, 0.85)',
              'rgba(236, 72, 153, 0.85)'
            ],
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
               ticks: { color: chartMutedColor(), stepSize: 1 },
               grid: { color: chartGridColor() }
            },
            x: {
               ticks: { color: chartTextColor(), font: { size: 11 } },
              grid: { display: false }
            }
          }
        }
      });
    }

    function initMustacheChart() {
      const canvas = document.getElementById('mustacheChart');
      if (!canvas || typeof Chart === 'undefined') return;
      if (mustacheChartInstance) {
        mustacheChartInstance.destroy();
      }
      mustacheChartInstance = new Chart(canvas, {
        type: 'line',
        data: {
          labels: ['S1 (2019)', 'S2 (2020)', 'S3 (2021)', 'S4 (2022)', 'S5 (2023)', 'S6 (2025)'],
          datasets: [{
            label: 'Cumulative Funds Raised ($ USD)',
            data: [10000, 37304, 64734, 85734, 101734, 122000],
             borderColor: document.documentElement.classList.contains('theme-light') ? '#12382d' : '#3b82f6',
             backgroundColor: document.documentElement.classList.contains('theme-light') ? 'rgba(18, 56, 45, 0.15)' : 'rgba(59, 130, 246, 0.18)',
            borderWidth: 3,
             pointBackgroundColor: document.documentElement.classList.contains('theme-light') ? '#825022' : '#60a5fa',
            pointRadius: 5,
            fill: true,
            tension: 0.32
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
               labels: { color: chartTextColor(), font: { size: 12 } }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                 color: chartMutedColor(),
                callback: function(value) { return '$' + (value / 1000) + 'k'; }
              },
               grid: { color: chartGridColor() }
            },
            x: {
               ticks: { color: chartTextColor() },
              grid: { display: false }
            }
          }
        }
      });
    }

    // Initialize Portfolio on Load
    window.addEventListener('DOMContentLoaded', function() {
      updateThemeControls();
      renderResume();
      filterSkills('all');
      filterProjects('all');
      filterClientsTable();
    });
