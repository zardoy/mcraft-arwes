import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Animator, Text } from '@arwes/react'
import { ScreenBackdrop } from './screens'
import { addStyles, background, cornersBackground, layerVars, palette, rgba } from './theme'
import { playUiSound } from './sounds'

// Loading and error screen (the client's `appStatus` UI).
// Shows what the client reports: the stage of the load with its overall progress (0..1), the detail (downloaded MB...), the sub-step that runs,
// and "no progress for N s" with Reload when nothing moves. Older clients without progress get a moving strip instead of the bar.

interface Progress {
  value: number
  label: string
  detail?: string
  step?: string
}

interface Props {
  status: string
  isError: boolean
  hideDots?: boolean
  lastStatus?: string
  backAction?: () => void
  description?: React.ReactNode
  actionsSlot?: React.ReactNode
  showReconnect?: boolean
  onReconnect?: () => void
  progress?: Progress
  stalledSeconds?: number
  /** the client's own loading screen: kept mounted (hidden) because its children tell the client the screen is shown (saving a world waits for it) */
  children?: React.ReactNode
}

const SEGMENTS = 32
const LOG_SIZE = 4

addStyles(/* css */ `
  .aw-loading {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    font-family: minecraft, mojangles, monospace;
    color: ${palette.control.base};
    text-shadow: 1px 1px #000;
  }
  .aw-loading-panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(560px, 100%);
    padding: 16px 18px 14px;
  }
  /* error screens: the alert colour for the buttons too */
  .aw-loading-error button.arwes-btn {
    color: ${palette.alert.light} !important;
    border-color: ${rgba(palette.alert.base, 0.4)};
  }
  .aw-loading-error button.arwes-btn::before {
    background: ${cornersBackground(palette.alert.base, '5px', '2px')};
  }
  .aw-loading-error button.arwes-btn:not(:disabled):hover {
    color: #fff !important;
    background: ${rgba(palette.alert.base, 0.18)};
    border-color: ${palette.alert.base};
  }
  .aw-loading-top {
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    letter-spacing: 0.2em;
    color: ${rgba(palette.primary.base, 0.65)};
  }
  .aw-loading-title {
    min-height: 1.3em;
    font-size: 20px;
    line-height: 1.3;
    word-break: break-word;
    white-space: pre-wrap;
  }
  .aw-loading-error .aw-loading-title {
    user-select: text;
  }
  .aw-loading-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .aw-loading-bar {
    display: flex;
    gap: 2px;
    flex: 1;
    height: 14px;
  }
  .aw-loading-segment {
    flex: 1;
    background: ${rgba(palette.primary.base, 0.12)};
  }
  .aw-loading-segment.on {
    background: ${palette.primary.base};
  }
  .aw-loading-segment.current {
    background: ${rgba(palette.primary.base, 0.55)};
    animation: aw-flicker 0.9s linear infinite;
  }
  .aw-loading-strip {
    flex: 1;
    height: 6px;
    background: repeating-linear-gradient(-45deg, ${rgba(palette.primary.base, 0.7)} 0 6px, transparent 6px 12px);
    background-size: 40px 6px;
    border: 1px solid ${rgba(palette.primary.base, 0.35)};
    animation: aw-strip 0.8s linear infinite;
  }
  .aw-loading-percent {
    min-width: 3.2em;
    font-size: 22px;
    color: ${palette.header.base};
    text-align: right;
  }
  .aw-loading-info {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    min-height: 1.2em;
    font-size: 11px;
    color: ${rgba(palette.control.base, 0.7)};
  }
  .aw-loading-info span:first-child {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .aw-loading-log {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding-top: 8px;
    font-size: 10px;
    border-top: 1px solid ${rgba(palette.primary.base, 0.18)};
  }
  .aw-loading-log div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${rgba(palette.control.base, 0.45)};
  }
  .aw-loading-log div.current {
    color: ${palette.control.base};
  }
  .aw-loading-stall {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 6px 8px;
    font-size: 11px;
    color: ${palette.secondary.light};
    background: ${rgba(palette.secondary.base, 0.12)};
    border-left: 2px solid ${palette.secondary.base};
  }
  .aw-loading-description {
    font-size: 12px;
    line-height: 1.4;
    color: ${palette.alert.light};
    white-space: pre-wrap;
    user-select: text;
    max-height: 40vh;
    overflow: auto;
  }
  .aw-loading-context {
    font-size: 9px;
    color: ${rgba(palette.control.base, 0.45)};
    user-select: text;
    word-break: break-all;
  }
  .aw-loading-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
    padding-top: 4px;
  }
  .aw-loading-actions > * {
    flex-shrink: 0;
  }
  /* the rotating circuit rings of the first arwes loader, with the progress in the middle */
  .aw-loading-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: min(560px, 100%);
    max-height: 100%;
  }
  .aw-rings {
    position: relative;
    flex-shrink: 0;
    width: min(46vh, 80vw, 420px);
    aspect-ratio: 1;
    animation: aw-rings-in 0.7s ease-out both;
  }
  .aw-rings svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  /* every rotating part is symmetric around the centre: its own box centre is the centre of the rings */
  .aw-rings .spin {
    transform-box: fill-box;
    transform-origin: center;
    animation: aw-spin var(--spin, 20s) linear infinite;
  }
  .aw-rings .spin.reverse {
    animation-direction: reverse;
  }
  .aw-rings-center {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    pointer-events: none;
  }
  .aw-rings-percent {
    font-size: min(6.5vh, 11vw, 44px);
    line-height: 1;
    color: ${palette.header.base};
  }
  .aw-rings-caption {
    font-size: min(1.8vh, 11px);
    letter-spacing: 0.25em;
    color: ${rgba(palette.primary.base, 0.65)};
  }
  @keyframes aw-spin {
    to { transform: rotate(360deg); }
  }
  @keyframes aw-rings-in {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  /* short landscape screens (phones): rings beside the information */
  @media (max-height: 500px) and (min-aspect-ratio: 4/3) {
    .aw-loading-stack {
      flex-direction: row;
      gap: 16px;
      width: min(820px, 100%);
    }
    .aw-rings {
      width: min(70vh, 40vw);
    }
    .aw-rings-percent {
      font-size: min(10vh, 6vw);
    }
  }
  @media (max-width: 500px), (max-height: 420px) {
    .aw-loading-panel {
      gap: 7px;
      padding: 12px;
    }
    .aw-loading-title {
      font-size: 15px;
    }
    .aw-loading-percent {
      font-size: 16px;
    }
    .aw-loading-log {
      display: none;
    }
  }
`, 'arwes-loading-styles')

const formatElapsed = (ms: number) => {
  const s = Math.floor(ms / 1000)
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

const useElapsed = () => {
  const [startedAt] = useState(() => Date.now())
  const [, setTick] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 1000)
    return () => clearInterval(interval)
  }, [])
  return formatElapsed(Date.now() - startedAt)
}

/** the last stages shown, newest last */
const useStageLog = (label: string) => {
  const [log, setLog] = useState<string[]>([])
  useEffect(() => {
    if (!label) return
    setLog(old => (old.at(-1) === label ? old : [...old, label].slice(-LOG_SIZE)))
  }, [label])
  return log
}

const DecipherTitle = ({ text }: { text: string }) => {
  // a new animator per text: every status change deciphers again
  return <Animator key={text} duration={{ enter: Math.min(0.8, 0.2 + text.length * 0.012) }}>
    <Text as='div' className='aw-loading-title aw-header' manager='decipher' fixed>{text}</Text>
  </Animator>
}

const SegmentBar = ({ value }: { value: number }) => {
  const filled = value * SEGMENTS
  return <div className='aw-loading-bar' role='progressbar' aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(value * 100)}>
    {Array.from({ length: SEGMENTS }, (_, i) => (
      <div key={i} className={`aw-loading-segment ${i < Math.floor(filled) ? 'on' : i === Math.floor(filled) && value < 1 ? 'current' : ''}`} />
    ))}
  </div>
}

const RING_COLOR = rgba(palette.primary.base, 0.3)

/** the circuit rings of the first loader: dashed rings turning at different speeds, a tick ring, four bars orbiting; progress as an arc on the outside */
const CircuitRings = ({ value, connected }: { value?: number, connected: boolean }) => {
  const dashed = [
    { r: 220, dash: '12 5', spin: 35 },
    { r: 190, dash: '10 5', spin: 30 },
    { r: 160, dash: '15 3', spin: 25 },
    { r: 130, dash: '8 4', spin: 20 },
    { r: 100, dash: '5 3', spin: 15 },
    { r: 70, dash: '4 2', spin: 10 },
  ]
  const progressR = 252
  const circumference = 2 * Math.PI * progressR
  const accent = connected ? rgba(palette.success.base, 0.6) : rgba(palette.primary.base, 0.55)
  return <div className='aw-rings' aria-hidden>
    <svg viewBox='-260 -260 520 520'>
      {/* tick ring */}
      <g stroke={RING_COLOR} strokeWidth={4}>
        {Array.from({ length: 72 }, (_, i) => {
          const a = (i * 5 * Math.PI) / 180
          return <line key={i} x1={Math.sin(a) * 228} y1={-Math.cos(a) * 228} x2={Math.sin(a) * 240} y2={-Math.cos(a) * 240} />
        })}
      </g>
      {dashed.map(({ r, dash, spin }, i) => (
        <circle
          key={r}
          className={`spin ${i % 2 ? 'reverse' : ''}`}
          style={{ '--spin': `${spin}s` } as React.CSSProperties}
          r={r}
          fill='none'
          stroke={RING_COLOR}
          strokeWidth={2}
          strokeDasharray={dash}
        />
      ))}
      {/* four bars orbiting slowly (green once connected) */}
      <g className='spin' style={{ '--spin': '40s' } as React.CSSProperties} stroke={accent} strokeWidth={4} strokeLinecap='round'>
        {[0, 90, 180, 270].map(deg => {
          const a = (deg * Math.PI) / 180
          return <line key={deg} x1={Math.sin(a) * 214} y1={-Math.cos(a) * 214} x2={Math.sin(a) * 246} y2={-Math.cos(a) * 246} />
        })}
      </g>
      {/* progress arc, starts at the top */}
      {value !== undefined && <>
        <circle r={progressR} fill='none' stroke={rgba(palette.primary.base, 0.12)} strokeWidth={3} />
        <circle
          r={progressR}
          fill='none'
          stroke={palette.primary.base}
          strokeWidth={3}
          strokeDasharray={`${circumference * value} ${circumference}`}
          transform='rotate(-90)'
          style={{ transition: 'stroke-dasharray 0.3s ease-out' }}
        />
      </>}
      {/* inner spinner, while there is no percentage to show in the middle */}
      {value === undefined && <g className='spin reverse' style={{ '--spin': '2s' } as React.CSSProperties} fill='none' strokeWidth={5}>
        <circle r={36} stroke={rgba(palette.primary.base, 0.12)} />
        <circle r={36} stroke={palette.primary.base} strokeDasharray={`${Math.PI * 36 * 0.5} ${Math.PI * 72}`} />
      </g>}
    </svg>
    <div className='aw-rings-center'>
      {value !== undefined
        ? <>
          <span className='aw-rings-percent'>{Math.round(value * 100)}%</span>
          <span className='aw-rings-caption'>LOADING</span>
        </>
        : null}
    </div>
  </div>
}

const connectionContext = () => {
  const options = (window as any).lastConnectOptions?.value
  if (!options) return ''
  const proxy = options.server && !/^wss?:\/\//.test(options.server) ? options.proxy : undefined
  return `S: ${options.server ?? 'N/A'}  P: ${proxy ?? 'N/A'}  V: ${options.botVersion ?? 'auto'}  U: ${options.username ?? 'N/A'}`
}

const LoadingScreen = ({ status, isError, lastStatus, backAction, description, actionsSlot, showReconnect, onReconnect, progress, stalledSeconds, children }: Props) => {
  const Button = window.builtinComponents.Button
  const { hadConnected } = window.mcraft.valtio.useSnapshot(window.miscUiState)
  const elapsed = useElapsed()
  const title = isError ? (status || 'Something went wrong') : (progress?.label || status || 'Loading')
  const log = useStageLog(isError ? '' : title)
  const lockConnect = new URLSearchParams(location.search).get('lockConnect') === 'true'

  const firstRender = useRef(true)
  useEffect(() => {
    if (isError) playUiSound('error', 0.6)
    else if (!firstRender.current) playUiSound('type', 0.25)
    firstRender.current = false
  }, [isError, title])

  const panel = isError
    ? <div className='aw-loading-panel aw-panel aw-loading-error' style={layerVars('alert')}>
      <div className='aw-loading-top' style={{ color: palette.alert.base }}>
        <span>MCRAFT // ERROR</span>
        <span>{elapsed}</span>
      </div>
      <DecipherTitle text={title} />
      {description && <div className='aw-loading-description'>{description}</div>}
      {lastStatus && <div className='aw-loading-context'>Last status: {lastStatus}</div>}
      <div className='aw-loading-context'>{connectionContext()}</div>
      <div className='aw-loading-actions'>
        {showReconnect && onReconnect && <Button label='Reconnect' onClick={onReconnect} />}
        {actionsSlot}
        {!lockConnect && <Button
          label='Reset App'
          title='Reload the page without the parameters of the link'
          onClick={() => {
            if (location.search) location.search = ''
            else location.reload()
          }}
        />}
        {backAction && <Button label='Back' onClick={backAction} />}
      </div>
    </div>
    : <div className='aw-loading-panel aw-panel' style={layerVars('primary')}>
      <div className='aw-loading-top'>
        <span>MCRAFT // LINK</span>
        <span>{elapsed}</span>
      </div>
      <DecipherTitle text={title} />
      <div className='aw-loading-bar-row'>
        {progress ? <SegmentBar value={progress.value} /> : <div className='aw-loading-strip' />}
      </div>
      <div className='aw-loading-info'>
        <span>{progress?.step ?? ''}</span>
        <span>{progress?.detail ?? ''}</span>
      </div>
      {stalledSeconds !== undefined && <div className='aw-loading-stall'>
        <span>No progress for {stalledSeconds} s</span>
        <Button label='Reload' style={{ width: 70 }} onClick={() => location.reload()} />
      </div>}
      {log.length > 1 && <div className='aw-loading-log'>
        {log.map((entry, i) => {
          const current = i === log.length - 1
          return <div key={`${i}-${entry}`} className={current ? 'current' : ''}>{current ? '▸' : '✓'} {entry}</div>
        })}
      </div>}
    </div>

  return <>
    <div style={{ display: 'none' }}>{children}</div>
    {ReactDOM.createPortal(
      <div className='aw-loading' style={{ background: isError ? rgba(background.alert, 0.6) : undefined }}>
        <ScreenBackdrop />
        {isError
          ? panel
          : <div className='aw-loading-stack'>
            <CircuitRings value={progress?.value} connected={hadConnected} />
            {panel}
          </div>}
      </div>,
      document.body
    )}
  </>
}

window.mcraft.ui.registerReactWrapper('appStatus', 'arwes', LoadingScreen)
