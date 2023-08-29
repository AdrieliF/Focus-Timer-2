import * as el from './elements.js'
import * as events from './events.js'

export const soundForest = new Audio ('./assets/sounds/Floresta.wav')
export const soundRain = new Audio ('./assets/sounds/Chuva.wav')
export const soundCoffee = new Audio ('./assets/sounds/Cafeteria.wav')
export const soundFire = new Audio ('./assets/sounds/Lareira.wav')

soundForest.loop = true
soundCoffee.loop = true
soundRain.loop = true
soundFire.loop = true