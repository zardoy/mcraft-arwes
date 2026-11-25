import { loadUiSounds, replaceButtonClickSound } from './arwes-ui/sounds'
import './arwes-ui'

console.log('Arwes UI mod loaded')

loadUiSounds()
replaceButtonClickSound()

window.serverMetadataConnect ??= {}
window.serverMetadataConnect.isArwes = true
