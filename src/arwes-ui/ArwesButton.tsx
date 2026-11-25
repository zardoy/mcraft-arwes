import { cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'
import { addStyles, background, cornersBackground, palette, rgba } from './theme'

// The game button gets the arwes frame through a class on the game's own <button>:
// no wrapping element (a <button> inside a <button> was invalid, focused twice and shifted the corners off the border), so every layout keeps working.
// Frame of the v1 Frame component: a dim 1px border, bright corner brackets that light up on hover, a flicker when it appears.

addStyles(/* css */ `
  button.arwes-btn {
    color: ${palette.control.base} !important;
    text-shadow: 1px 1px #000;
    background: ${rgba(background.primary, 0.7)};
    border: 1px solid ${rgba(palette.primary.base, 0.35)};
    transition: color 0.15s ease-out, background-color 0.15s ease-out, border-color 0.15s ease-out;
    animation: aw-flicker 0.4s linear both;
  }
  /* the halves of the game texture: the left one is hidden, the right one draws the corners */
  button.arwes-btn::after {
    display: none !important;
  }
  button.arwes-btn::before {
    content: '';
    inset: -1px;
    width: auto;
    height: auto;
    z-index: 1;
    pointer-events: none;
    opacity: 1;
    background: ${cornersBackground(palette.primary.base, '5px', '2px')};
    transition: opacity 0.15s ease-out;
  }
  button.arwes-btn:not(:disabled):hover,
  button.arwes-btn:focus-visible {
    color: #fff !important;
    background: ${rgba(background.control, 0.92)};
    border-color: ${rgba(palette.primary.base, 0.75)};
  }
  button.arwes-btn:not(:disabled):hover::before,
  button.arwes-btn:focus-visible::before {
    background: ${cornersBackground(palette.primary.light, '5px', '2px')};
  }
  button.arwes-btn:not(:disabled):active {
    background: ${rgba(palette.primary.base, 0.2)};
  }
  button.arwes-btn:disabled {
    color: ${palette.disabled.base} !important;
    background: ${rgba(background.disabled, 0.6)};
    border-color: ${rgba(palette.disabled.base, 0.25)};
  }
  button.arwes-btn:disabled::before {
    background: ${cornersBackground(palette.disabled.dark, '5px', '2px')};
  }
`, 'arwes-button-styles')

const ArwesButton = ({ children }: { children?: ReactNode }) => {
  if (!isValidElement(children)) return children
  const child = children as ReactElement<{ className?: string }>
  return cloneElement(child, { className: `${child.props.className ?? ''} arwes-btn` })
}

window.mcraft.ui.registerReactWrapper('button', 'arwes', ArwesButton)
