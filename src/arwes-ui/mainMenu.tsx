import React, { type ReactElement, type ReactNode, useEffect, useRef, useState } from 'react'
import {
  Animated,
  Animator,
  createThemeColor,
  createThemeMultiplier,
  createThemeUnit,
  FrameBase,
  FrameNefrex,
  type FrameSettings,
  styleFrameClipOctagon,
  styleSteps,
  useFrameAssembler,
} from '@arwes/react'
// import TitleImage from 'mc-assets/dist/other-textures/latest/gui/title/minecraft.png'
import TitleImage from './title.webp'
import EditionImage from './edition.svg'

const addStyles = (css: string, id?: string): void => {
  if (id && document.getElementById(id)) {
    // remove it
    document.getElementById(id)?.remove()
  }

  const styleElement = document.createElement('style')
  if (id) {
    styleElement.id = id
  }
  styleElement.innerHTML = css
  document.body.appendChild(styleElement)
}

// Title scale factor - adjust this to scale both title and edition images
const TITLE_SCALE = 0.95

const theme = {
  space: createThemeUnit(index => `${index * 0.25}rem`),
  spacen: createThemeMultiplier(index => index * 4),
  colors: {
    background: 'hsla(180, 100%, 3%)',
    // Primary accent color: hsl(180deg 100% 61.5%)
    primary: createThemeColor(() => [180, 100, 61.5]),
    secondary: createThemeColor(i => [60, 100, 100 - i * 10])
  },
}

addStyles(`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    background: ${theme.colors.background};
  }
`, 'arwes-page-styles')

const pageFrameSettings: FrameSettings = {
  elements: [
    {
      name: 'line',
      path: [
        ['M', 10, 10],
        ['h', '7%'],
        ['l', 10, 10],
        ['h', '7%']
      ]
    },
    {
      name: 'line',
      path: [
        ['M', '100%-10', 10],
        ['h', '-7%'],
        ['l', -10, 10],
        ['h', '-7%']
      ]
    },
    {
      name: 'line',
      path: [
        ['M', '100%-10', '100%-10'],
        ['h', '-7%'],
        ['l', -10, -10],
        ['h', '-7%']
      ]
    },
    {
      name: 'line',
      path: [
        ['M', '10', '100%-10'],
        ['h', '7%'],
        ['l', 10, -10],
        ['h', '7%']
      ]
    }
  ]
}

const PageFrame = (): ReactElement => {
  const frameRef = useRef<SVGSVGElement>(null!)
  useFrameAssembler(frameRef)
  return <FrameBase elementRef={frameRef} className="page-frame" settings={pageFrameSettings} />
}

addStyles(`
  .page-frame {
    position: fixed;
    inset: 0;
    pointer-events: none;
  }
  .page-frame [data-name=line] {
    stroke: ${theme.colors.primary(5)};
    stroke-width: 1;
    fill: none;
  }
`, 'arwes-menu-button-styles')

const MainFrame = (): ReactElement => (
  <div className="main-frame" style={{ clipPath: styleFrameClipOctagon() }}>
    <FrameNefrex leftBottom rightTop />
  </div>
)

addStyles(`
  .main-frame {
    position: fixed;
    inset: 0;
  }
    /* contianer background color */
  .main-frame [data-name=bg] {
    color: rgba(2, 20, 20, 0.7);
  }
  .main-frame [data-name=line] {
    color: ${theme.colors.primary(5)};
  }
`)

interface ArwesMainMenuBaseProps {
  active?: boolean
  header?: ReactNode
  header2?: ReactNode
  title?: ReactNode
  separator?: ReactNode
  description?: ReactNode
  buttons?: ReactNode
  footer?: ReactNode
}

export const ArwesMainMenuBase: React.FC<ArwesMainMenuBaseProps> = ({
  active = true,
  header,
  header2,
  title,
  separator,
  description,
  buttons,
  footer
}) => {
  return (
    <Animator active={active} duration={{ enter: 0.3, exit: 0.2 }}>
        <div className="arwes-page">
          <PageFrame />
          <Animator combine manager="stagger">
            <Animated as="main" className="arwes-page-main" animated={[['scale', 0.92, 1]]}>
              <MainFrame />
              {header && (
                <Animator>
                  <Animated className="arwes-page-header" animated={[['x', -10, 0, 0]]}>
                    {header}
                  </Animated>
                </Animator>
              )}
              {header2 && (
                <Animator>
                  <Animated className="arwes-page-header2" animated={[['x', -10, 0, 0]]}>
                    {header2}
                  </Animated>
                </Animator>
              )}
              {title && (
                <Animator duration={{ offset: 0.4 }}>
                  <Animated as="h1" animated={['fade', ['y', 15, 0, 0]]}>
                    {title}
                  </Animated>
                </Animator>
              )}
              {separator !== undefined && (
                <Animator>
                  <Animated
                    className="arwes-page-separator"
                    style={{
                      background: styleSteps({
                        length: 20,
                        color: 'currentcolor',
                        direction: '-45deg'
                      })
                    }}
                    animated={[['y', 20, 1, 0]]}
                  />
                </Animator>
              )}
              {description && (
                <Animator>
                  <Animated as="p" animated={[['y', 20, 0, 0]]}>
                    {description}
                  </Animated>
                </Animator>
              )}
              {buttons && (
                <div className="arwes-page-buttons">
                  {buttons}
                </div>
              )}
              {footer && (
                <Animator>
                  <Animated className="arwes-page-footer" animated={[['x', 10, 0, 0]]}>
                    {footer}
                  </Animated>
                </Animator>
              )}
            </Animated>
          </Animator>
        </div>
    </Animator>
  )
}

addStyles(`
  .arwes-page {
    position: fixed;
    inset: 0;
    display: flex;
    text-align: center;
  }
  .arwes-page-main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 32px;
    width: 340px;
    height: 240px;
  }
  .arwes-page-separator {
    position: relative;
    width: 50%;
    height: 0.35rem;
    color: ${theme.colors.primary(8)};
  }
  .arwes-page-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
  .arwes-page-header,
  .arwes-page-header2,
  .arwes-page-footer {
    position: absolute;
    font-size: 6px;
    letter-spacing: 0.08rem;
    color: ${theme.colors.primary(8)};
  }
  .arwes-page-header {
    right: 1.5rem;
    top: 0.5rem;
  }
  .arwes-page-header2 {
    right: 1.5rem;
    top: 1.5rem;
  }
  .arwes-page-footer {
    left: 1.5rem;
    bottom: 0.5rem;
  }
  .arwes-page h1 {
    line-height: 1;
    font-size: 1.5rem;
    font-weight: 300;
    font-family: inherit;
    color: ${theme.colors.primary(6)};
  }
  .arwes-page p {
    line-height: 1.6;
    text-wrap: pretty;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.primary(7)};
  }
  .arwes-title-block {
    position: relative;
    width: ${300 * TITLE_SCALE}px;
    height: ${70 * TITLE_SCALE}px;
    margin: 0 auto;
  }
  .arwes-title-image {
    width: ${300 * TITLE_SCALE}px;
    display: block;
  }
  .arwes-edition-image {
    position: absolute;
    top: ${52 * TITLE_SCALE}px;
    left: 50%;
    transform: translateX(-50%);
    width: ${200 * TITLE_SCALE}px;
    height: ${18 * TITLE_SCALE}px;
    display: block;
    opacity: 0.9;
  }
`)

interface ArwesMainMenuProps {
  connectToServerAction: () => void
  singleplayerAction: () => void
  optionsAction: () => void
  githubAction?: () => void
  openFileAction?: (e: React.MouseEvent) => void
  mapsProvider?: string
  onVersionStatusClick?: () => void
  onVersionTextClick?: () => void
  versionText?: string
  versionTitle?: string
  versionStatus?: string
  singleplayerAvailable?: boolean
}

addStyles(`
  .arwes-menu-extra {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 4px;
  }
  .arwes-page-footer {
    cursor: pointer;
  }
`, 'arwes-menu-extra-styles')

export const ArwesMainMenu = (props: ArwesMainMenuProps) => {
  const { connectToServerAction, singleplayerAction, optionsAction, githubAction, openFileAction, mapsProvider, onVersionTextClick, versionText, versionTitle, versionStatus, singleplayerAvailable } = props
  const [active, setActive] = useState(true)

  // the menu plays its exit animation, then the action opens the next screen
  const wrap = (action: () => void) => () => {
    setActive(false)
    setTimeout(() => {
      action()
      setActive(true)
    }, 300)
  }

  const Button = window.builtinComponents.Button
  const version = versionText ?? versionTitle
  const iconButton = (icon: string, title: string, onClick: (e: React.MouseEvent) => void) => (
    <Button icon={`pixelarticons:${icon}`} title={title} style={{ width: 20 }} onClick={onClick} />
  )
  return (
    <ArwesMainMenuBase
      active={active}
      header={<span>Credits: Romel Perez, Zardoy</span>}
      title={
        <div className="arwes-title-block" style={{ marginTop: 0 }}>
          <img src={TitleImage} alt="Minecraft" className="arwes-title-image" />
          <img src={EditionImage} alt="Arwes" className="arwes-edition-image" />
        </div>
      }
      buttons={
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', marginTop: 25, }}>
          <Animator>
            <Animated animated={[['y', 20, 0, 0]]}>
              <Button label="Multiplayer" onClick={wrap(connectToServerAction)} />
            </Animated>
          </Animator>
          <Animator>
            <Animated animated={[['y', 20, 0, 0]]}>
              <Button label="Singleplayer" disabled={singleplayerAvailable === false} onClick={wrap(singleplayerAction)} />
            </Animated>
          </Animator>
          <Animator>
            <Animated animated={[['y', 20, 0, 0]]}>
              <Button label="Options" onClick={wrap(optionsAction)} />
            </Animated>
          </Animator>
          <Animator>
            <Animated className="arwes-menu-extra" animated={[['y', 20, 0, 0]]}>
              {openFileAction && iconButton('folder', 'Open a world folder or file', openFileAction)}
              {mapsProvider && iconButton('map', 'Maps', () => window.open(mapsProvider, '_blank'))}
              {githubAction && iconButton('github', 'GitHub', githubAction)}
            </Animated>
          </Animator>
        </div>
      }
      footer={version ? <span onClick={onVersionTextClick} title={versionStatus}>| {version}</span> : undefined}
    />
  )
}

window.mcraft.ui.registerReactWrapper('mainMenu', 'arwes', ArwesMainMenu)
