import { addStyles, background, cornersBackground, palette, rgba } from './theme'

// Theme for the client's own screens. Only targeted selectors: the old `body button { background: transparent; color: inherit !important }`
// patch also recoloured every custom button of the client (switches, danger buttons...).
const line = rgba(palette.primary.base, 0.35)

addStyles(/* css */ `
  .dirt-bg {
    display: none;
  }
  .backdrop {
    background: ${rgba(background.primary, 0.78)};
  }

  /* screen titles: header colour, spaced capitals, a short separator under them (v1 Project header) */
  .screen-title {
    color: ${palette.header.base};
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-shadow: 1px 1px #000;
  }
  .screen-title::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    margin: 3px auto 0;
    background: ${palette.primary.dark};
  }

  /* text fields: the frame is on the container of the game's input */
  #input-container {
    background: ${rgba(background.primary, 0.85)};
    border-color: ${line};
  }
  #input-container:hover,
  #input-container:focus-within {
    border-color: ${palette.primary.base};
  }
  #input-container input {
    color: ${palette.control.base};
    caret-color: ${palette.primary.base};
  }
  #input-container input::placeholder {
    color: ${rgba(palette.primary.base, 0.45)};
  }

  /* slider: track like a frame, the thumb a solid block */
  .slider::before, .slider::after, .slider-thumb::before, .slider-thumb::after {
    display: none;
  }
  .slider {
    color: ${palette.control.base};
    background: ${rgba(background.primary, 0.7)};
    border: 1px solid ${line};
  }
  .slider-thumb {
    background: ${rgba(palette.primary.base, 0.55)};
    border: 1px solid ${palette.primary.base};
  }

  /* settings screen and multiplayer screen of newer clients: they expose their colours as variables */
  .settings-screen {
    --settings-bg: ${rgba(background.primary, 0.9)};
    --settings-rail-bg: ${rgba(background.header, 0.6)};
    --settings-border: ${rgba(palette.primary.base, 0.22)};
    --settings-row-hover: ${rgba(palette.primary.base, 0.07)};
    --settings-text: ${palette.control.base};
    --settings-muted: ${rgba(palette.control.base, 0.55)};
    --settings-accent: ${palette.primary.base};
    --settings-accent-bg: ${rgba(palette.primary.base, 0.22)};
    --settings-control-bg: ${rgba(background.control, 0.85)};
    --settings-control-border: ${line};
    --settings-danger: ${palette.alert.base};
  }
  .servers-screen, .add-server-screen {
    --servers-bg: ${rgba(background.primary, 0.9)};
    --servers-border: ${rgba(palette.primary.base, 0.22)};
    --servers-muted: ${rgba(palette.control.base, 0.55)};
    --servers-accent: ${palette.primary.base};
    --servers-accent-bg: ${rgba(palette.primary.base, 0.22)};
    --servers-field-border: ${line};
    color: ${palette.control.base};
  }
  /* their panels get the corner brackets */
  .settings-screen > div,
  .servers-screen > div,
  .add-server-screen > form {
    position: relative;
  }
  .settings-screen > div::before,
  .servers-screen > div::before,
  .add-server-screen > form::before {
    content: '';
    position: absolute;
    inset: -2px;
    pointer-events: none;
    z-index: 2;
    background: ${cornersBackground(palette.primary.base, '12px', '2px')};
  }
  .flat-button {
    --flat-bg: ${rgba(background.control, 0.85)};
    --flat-border: ${line};
    --flat-color: ${palette.control.base};
  }
  .flat-button[class*='primary'] {
    --flat-bg: ${rgba(palette.primary.base, 0.22)};
    --flat-border: ${palette.primary.base};
    --flat-color: #fff;
  }
  .flat-button[class*='danger'] {
    --flat-color: ${palette.alert.light};
  }
  .flat-button:not(:disabled):hover,
  .flat-button:focus-visible {
    --flat-bg: ${rgba(palette.primary.base, 0.3)};
    --flat-border: ${palette.primary.light};
  }

  /* notifications (toasts) of the client: frame instead of the rounded black box */
  .app-notification {
    color: ${palette.control.base};
    background: ${rgba(background.primary, 0.9)} !important;
    border: 1px solid ${line};
    border-radius: 0 !important;
  }
  .app-notification::before {
    content: '';
    position: absolute;
    inset: -2px;
    pointer-events: none;
    background: ${cornersBackground(palette.primary.base, '6px', '2px')};
  }
  .app-notification.error-notification {
    color: ${palette.alert.light};
    background: ${rgba(background.alert, 0.92)} !important;
    border-color: ${rgba(palette.alert.base, 0.45)};
  }
  .app-notification.error-notification::before {
    background: ${cornersBackground(palette.alert.base, '6px', '2px')};
  }
`, 'arwes-global-styles')
