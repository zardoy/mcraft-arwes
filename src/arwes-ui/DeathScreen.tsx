import { useEffect } from 'react'
import { Animator, Text } from '@arwes/react'
import { addStyles, background, layerVars, palette, rgba } from './theme'
import { playUiSound } from './sounds'

// Death screen in the alert layer: red frame, the cause deciphered, Respawn first.

interface MessagePart {
  text?: string
  color?: string
}

interface Props {
  dieReasonMessage: MessagePart[]
  respawnCallback: () => void
  disconnectCallback: () => void
}

addStyles(/* css */ `
  .aw-death {
    position: fixed;
    inset: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background:
      repeating-linear-gradient(0deg, ${rgba(palette.alert.base, 0.05)} 0 1px, transparent 1px 3px),
      ${rgba(background.alert, 0.72)};
    font-family: minecraft, mojangles, monospace;
    text-shadow: 1px 1px #000;
  }
  .aw-death-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    min-width: min(220px, 100%);
    max-width: 100%;
    padding: 12px 18px;
  }
  .aw-death-code {
    font-size: 7px;
    letter-spacing: 0.3em;
    color: ${rgba(palette.alert.base, 0.8)};
  }
  .aw-death-title {
    font-size: 20px;
    color: ${palette.alert.light};
    letter-spacing: 0.15em;
  }
  .aw-death-reason {
    max-width: 260px;
    font-size: 9px;
    line-height: 1.3;
    color: #fff;
    text-align: center;
    white-space: pre-wrap;
  }
  .aw-death-buttons {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 6px;
  }
`, 'arwes-death-styles')

const DeathScreen = ({ dieReasonMessage, respawnCallback, disconnectCallback }: Props) => {
  const Button = window.builtinComponents.Button
  useEffect(() => {
    playUiSound('error', 0.7)
  }, [])

  return <div className='aw-death'>
    <div className='aw-death-panel aw-panel' style={layerVars('alert')}>
      <span className='aw-death-code'>VITAL SIGNS LOST</span>
      <Animator duration={{ enter: 0.6 }}>
        <Text as='h1' className='aw-death-title' manager='decipher' fixed>YOU DIED</Text>
      </Animator>
      {dieReasonMessage?.length > 0 && <div className='aw-death-reason'>
        {dieReasonMessage.map((part, i) => <span key={i} style={{ color: part.color }}>{part.text}</span>)}
      </div>}
      <div className='aw-death-buttons'>
        <Button label='Respawn' onClick={respawnCallback} />
        <Button label='Disconnect' onClick={disconnectCallback} />
      </div>
    </div>
  </div>
}

window.mcraft.ui.registerReactWrapper('deathScreen', 'arwes', DeathScreen)
