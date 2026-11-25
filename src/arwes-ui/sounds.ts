// UI sounds: the free sample sounds from the arwes repository (static/assets/sounds), bundled into the mod.
// The sounds of the arwes.dev website are licensed for that website only, so they are not hotlinked anymore.
// Played through the client's own sound system: they follow the game volume and mute.
import clickMp3 from './sounds/click.mp3'
import typeMp3 from './sounds/type.mp3'
import infoMp3 from './sounds/info.mp3'
import errorMp3 from './sounds/error.mp3'

const sources = {
  click: clickMp3,
  type: typeMp3,
  info: infoMp3,
  error: errorMp3,
}

export type UiSound = keyof typeof sources

const key = (name: UiSound) => `arwes-${name}.mp3`

export const loadUiSounds = () => {
  for (const [name, src] of Object.entries(sources)) {
    void (window.loadSound as (path: string, contents?: string) => Promise<unknown>)(key(name as UiSound), src)
  }
}

const lastPlayed: Partial<Record<UiSound, number>> = {}

/** @param volume relative to the game volume */
export const playUiSound = (name: UiSound, volume = 1) => {
  // the same sound twice within 80 ms is one sound (status updates come in bursts)
  const now = performance.now()
  if (now - (lastPlayed[name] ?? 0) < 80) return
  lastPlayed[name] = now
  ;(window.playSound as (url: string, volume?: number) => void)(key(name), volume)
}

/** the game's button click sound becomes the arwes click */
export const replaceButtonClickSound = () => {
  const originalPlaySound = window.playSound
  window.playSound = (...args: any[]) => {
    if (args[0] === 'button_click.mp3') args[0] = key('click')
    originalPlaySound(...args as Parameters<typeof originalPlaySound>)
  }
}
