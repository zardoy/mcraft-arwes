// Arwes v1 palette (arwes@1.0.0-alpha.5 createTheme): every colour has base / light / dark, backgrounds are near black tints used at `alpha` opacity.
// Kept small on purpose: thin lines, bright corners, no glow ("bloom") and no decorative arcs.

export const palette = {
  primary: { base: '#26dafd', light: '#8cecfe', dark: '#029dbb' },
  header: { base: '#a1ecfb', light: '#ffffff', dark: '#43d7f5' },
  control: { base: '#acf9fb', light: '#ffffff', dark: '#4ff3f6' },
  secondary: { base: '#df9527', light: '#ecbc76', dark: '#9c6516' },
  success: { base: '#00ff00', light: '#66ff66', dark: '#009900' },
  alert: { base: '#ff3b3b', light: '#ff8f8f', dark: '#b30000' },
  disabled: { base: '#999999', light: '#cccccc', dark: '#666666' },
} as const

export const background = {
  primary: '#021114',
  header: '#032026',
  control: '#041e1f',
  alert: '#140202',
  disabled: '#141414',
} as const

export const alpha = 0.65

export const rgba = (hex: string, a: number) => {
  const n = Number.parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`
}

export type Layer = 'primary' | 'alert' | 'secondary' | 'success'

/** CSS custom properties for one colour layer, used by the frame and panel classes */
export const layerVars = (layer: Layer) => {
  const color = palette[layer]
  const bg = layer === 'alert' ? background.alert : background.primary
  return {
    '--aw-color': color.base,
    '--aw-light': color.light,
    '--aw-dark': color.dark,
    '--aw-line': rgba(color.base, 0.35),
    '--aw-bg': rgba(bg, 0.82),
  } as Record<string, string>
}

export const addStyles = (css: string, id: string): void => {
  document.getElementById(id)?.remove()
  const styleElement = document.createElement('style')
  styleElement.id = id
  styleElement.textContent = css
  document.head.appendChild(styleElement)
}

/** Four L-shaped corner brackets drawn with backgrounds (no extra elements, any size). */
export const cornersBackground = (color: string, length = '6px', width = '2px') => [
  `linear-gradient(${color}, ${color}) left top / ${length} ${width} no-repeat`,
  `linear-gradient(${color}, ${color}) left top / ${width} ${length} no-repeat`,
  `linear-gradient(${color}, ${color}) right top / ${length} ${width} no-repeat`,
  `linear-gradient(${color}, ${color}) right top / ${width} ${length} no-repeat`,
  `linear-gradient(${color}, ${color}) left bottom / ${length} ${width} no-repeat`,
  `linear-gradient(${color}, ${color}) left bottom / ${width} ${length} no-repeat`,
  `linear-gradient(${color}, ${color}) right bottom / ${length} ${width} no-repeat`,
  `linear-gradient(${color}, ${color}) right bottom / ${width} ${length} no-repeat`,
].join(',\n    ')

// shared classes: a framed panel (dim border, bright corners) and the short fade used when things appear
addStyles(/* css */ `
  /* things appear with one short fade, no blinking */
  @keyframes aw-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .aw-panel {
    position: relative;
    background: var(--aw-bg);
    border: 1px solid var(--aw-line);
    animation: aw-fade-in 0.2s ease-out both;
  }
  .aw-panel::before {
    content: '';
    position: absolute;
    inset: -2px;
    pointer-events: none;
    background: ${cornersBackground('var(--aw-color)', '14px', '2px')};
  }
  .aw-header {
    color: var(--aw-light);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .aw-muted {
    color: ${rgba(palette.primary.base, 0.6)};
  }
`, 'aw-theme-base')
