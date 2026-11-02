# Generate a 1200 x 630 social preview PNG using Windows' built-in System.Drawing.
Add-Type -AssemblyName System.Drawing
$width = 1200
$height = 630
$output = Join-Path (Split-Path $PSScriptRoot -Parent) 'assets/images/social-preview.png'
$bitmap = [System.Drawing.Bitmap]::new($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

function Color([int]$r, [int]$g, [int]$b, [int]$a = 255) {
  return [System.Drawing.Color]::FromArgb($a, $r, $g, $b)
}
function Line($x1, $y1, $x2, $y2, $color, $stroke = 1) {
  $pen = [System.Drawing.Pen]::new($color, $stroke)
  try { $graphics.DrawLine($pen, [float]$x1, [float]$y1, [float]$x2, [float]$y2) } finally { $pen.Dispose() }
}
function Ellipse($x, $y, $diameter, $color, $stroke = 1) {
  $pen = [System.Drawing.Pen]::new($color, $stroke)
  try { $graphics.DrawEllipse($pen, [float]$x, [float]$y, [float]$diameter, [float]$diameter) } finally { $pen.Dispose() }
}
function Dot($x, $y, $diameter, $color) {
  $brush = [System.Drawing.SolidBrush]::new($color)
  try { $graphics.FillEllipse($brush, [float]($x - $diameter / 2), [float]($y - $diameter / 2), [float]$diameter, [float]$diameter) } finally { $brush.Dispose() }
}
function Text($value, $x, $y, $size, $color, $weight = [System.Drawing.FontStyle]::Regular) {
  $font = [System.Drawing.Font]::new('Segoe UI', [float]$size, $weight, [System.Drawing.GraphicsUnit]::Pixel)
  $brush = [System.Drawing.SolidBrush]::new($color)
  try { $graphics.DrawString($value, $font, $brush, [float]$x, [float]$y) } finally { $font.Dispose(); $brush.Dispose() }
}

try {
  $background = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Point]::new(0, 0), [System.Drawing.Point]::new($width, $height),
    (Color 13 38 32), (Color 23 49 40))
  try { $graphics.FillRectangle($background, 0, 0, $width, $height) } finally { $background.Dispose() }

  # Subtle engineering grid and a translucent panel establish depth without visual noise.
  for ($x = 50; $x -lt $width; $x += 48) { Line $x 0 $x $height (Color 222 185 120 18) }
  for ($y = 24; $y -lt $height; $y += 48) { Line 0 $y $width $y (Color 222 185 120 18) }
  $panel = [System.Drawing.SolidBrush]::new((Color 9 31 26 185))
  try { $graphics.FillRectangle($panel, 45, 49, 1110, 532) } finally { $panel.Dispose() }
  Line 45 49 1155 49 (Color 232 215 187 78)
  Line 45 581 1155 581 (Color 232 215 187 78)

  # Interconnected orbital paths: technology, data and strategy represented abstractly.
  foreach ($ring in @(330, 270, 202, 126)) {
    $offset = (330 - $ring) / 2
    Ellipse (796 + $offset) (150 + $offset) $ring (Color 211 164 92 77) 2
  }
  $edges = @(
    @(816, 232, 904, 174), @(904, 174, 1034, 218), @(1034, 218, 1104, 324),
    @(1104, 324, 1020, 432), @(1020, 432, 899, 477), @(899, 477, 816, 390),
    @(816, 390, 816, 232), @(816, 232, 947, 311), @(904, 174, 947, 311),
    @(1034, 218, 947, 311), @(1104, 324, 947, 311), @(1020, 432, 947, 311),
    @(899, 477, 947, 311), @(816, 390, 947, 311)
  )
  foreach ($edge in $edges) { Line $edge[0] $edge[1] $edge[2] $edge[3] (Color 189 112 54 118) 2 }
  foreach ($point in @(@(816,232), @(904,174), @(1034,218), @(1104,324), @(1020,432), @(899,477), @(816,390))) {
    Dot $point[0] $point[1] 10 (Color 217 175 104)
    Dot $point[0] $point[1] 4 (Color 250 237 185)
  }
  $core = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Point]::new(890, 254), [System.Drawing.Point]::new(1010, 390),
    (Color 139 72 27), (Color 213 165 90))
  try { $graphics.FillEllipse($core, 895, 259, 104, 104) } finally { $core.Dispose() }
  Text 'CP' 915 289 39 (Color 255 244 220) ([System.Drawing.FontStyle]::Bold)

  # Left column is kept spacious so the name remains legible in small link cards.
  Dot 103 122 8 (Color 214 166 92)
  Text 'EXECUTIVE PORTFOLIO' 122 110 18 (Color 218 179 117) ([System.Drawing.FontStyle]::Bold)
  Text 'Christopher' 94 208 63 (Color 250 237 211) ([System.Drawing.FontStyle]::Bold)
  Text 'Palac' 94 285 76 (Color 250 237 211) ([System.Drawing.FontStyle]::Bold)
  Line 100 393 456 393 (Color 178 103 51) 3
  Text 'Building what comes next.' 94 414 30 (Color 232 215 187)
  Text 'Product | Strategy | Development' 94 504 23 (Color 232 215 187) ([System.Drawing.FontStyle]::Bold)

  $bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Output "Created $output"
} finally {
  $graphics.Dispose()
  $bitmap.Dispose()
}