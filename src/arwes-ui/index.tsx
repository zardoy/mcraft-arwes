// import { createTheme, ThemeProvider as ArwesThemeProvider, Animation, Button, Arwes as ArwesRoot, Loading as ArwesLoading, Words as ArwesWords, Frame } from 'arwes'
// import { useEffect, useState } from 'react'
import './ArwesButton'
import './mainMenu'
import './screens'
import './SciFiLoader'
// import { ButtonWithFrame, FrameNeroSandbox } from './ArwesButton'

// const theme = createTheme({
// })

export const ArwesPlayground = ({ children }) => {
  return <>
  {/* <ArwesThemeProvider theme={theme}> */}
    {children}

    {/* old arwes playground */}
    {/* <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black' }}>
      <Sandbox />
    </div> */}
    {/* <ButtonWithFrame>
      <AppButton>test</AppButton>
    </ButtonWithFrame> */}

    {/* {children} */}
    {/* <Button animate style={{ width: 200 }}>Hello</Button>
    <ArwesLoading />
    <ArwesWords animate>Hello</ArwesWords>
    <Frame
      key={key}
      show={true}
      animate={true}
      level={3}
      corners={4}
      layer='primary'
      animation={{ timeout: SLOW_ANIM_TIMEOUT, appear: true }}
    >
      <div style={{ padding: '20px 40px', fontSize: '32px' }}>
        Cyberpunk
      </div>
    </Frame> */}
  {/* </ArwesThemeProvider> */}
    {/* <Background /> */}
    </>
}

window.mcraft.ui.registerReactWrapper('root', 'arwes', ArwesPlayground)


const patchStylesToInject = /* css */ `
  button::before, button::after {
    opacity: 0;
  }
  body button {
    background: transparent;
    color: inherit !important;
  }
  .dirt-bg {
    display: none;
  }
  .slider::before, .slider::after, .slider-thumb::before, .slider-thumb::after {
    display: none;
  }
  .slider {
    background: rgb(75, 239, 239, 0.1);
    border: 1px solid rgb(75, 239, 239);
    color: #a9fdff;
  }
  .slider-thumb {
    background: rgba(75, 239, 239, 0.5);
    border: 1px solid rgb(75, 239, 239);
  }
`

const style = document.createElement('style')
style.textContent = patchStylesToInject
document.head.appendChild(style)
