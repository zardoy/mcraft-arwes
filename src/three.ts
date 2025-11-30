import { SciFiWorldReveal } from './sciFiWorldReveal'

export const panoramaReady = (panorama) => {
    const [panoramaBox, ...rest] = panorama.panoramaGroup.children
    for (let m of rest) m.visible = false
}

export const worldReady = (world) => {
    new SciFiWorldReveal(world)
}
