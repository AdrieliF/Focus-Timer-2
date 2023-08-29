import * as el from './elements.js'
import state from './state.js' 
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
}

export function registerControls() {
    el.buttonPlay.addEventListener('click', (event) => {
        state.isRunning = document.documentElement.
        classList.toggle('running')

    timer.countdown()
    })

    el.buttonStop.addEventListener('click', (event) => {
        state.isRunning = document.documentElement.
        classList.remove('running')

    reset()
    })

    el.buttonAddMinutes.addEventListener('click', (event) => {
        timer.addFiveMinutes()
    })

    el.buttonRemoveMinutes.addEventListener('click', (event) => {
        timer.removeFiveMinutes()
    })

    el.buttonForest.addEventListener('click', (event) => {
        state.isMute = document.documentElement.
        classList.toggle('music-on')

        if(state.isMute) {
            sounds.soundForest.play()
        } else {
            sounds.soundForest.pause()
        }

        if (el.buttonForest.getAttribute('src') === './assets/forest-on.svg') {
            el.buttonForest.setAttribute('src', './assets/forest.svg')
        } else {
            el.buttonForest.setAttribute('src', './assets/forest-on.svg')
        }
    })

    el.buttonRain.addEventListener('click', (event) => {
        state.isMute = document.documentElement.
        classList.toggle('music-on')
        
        if(state.isMute) {
            sounds.soundRain.play()
        } else {
            sounds.soundRain.pause()
        }

        if (el.buttonRain.getAttribute('src') === './assets/rain-on.svg') {
            el.buttonRain.setAttribute('src', './assets/rain.svg')
        } else {
            el.buttonRain.setAttribute('src', './assets/rain-on.svg')
        }
    })

    el.buttonCoffee.addEventListener('click', (event) => {
        state.isMute = document.documentElement.
        classList.toggle('music-on')
        
        if(state.isMute) {
            sounds.soundCoffee.play()
        } else {
            sounds.soundCoffee.pause()
        }

        if (el.buttonCoffee.getAttribute('src') === './assets/coffee-on.svg') {
            el.buttonCoffee.setAttribute('src', './assets/coffee.svg')
        } else {
            el.buttonCoffee.setAttribute('src', './assets/coffee-on.svg')
        }
    })

    el.buttonFire.addEventListener('click', (event) => {
        state.isMute = document.documentElement.
        classList.toggle('music-on')
        
        if(state.isMute) {
            sounds.soundFire.play()
        } else {
           sounds.soundFire.pause()
        }

        if (el.buttonFire.getAttribute('src') === './assets/fire-on.svg') {
            el.buttonFire.setAttribute('src', './assets/fire.svg')
        } else {
            el.buttonFire.setAttribute('src', './assets/fire-on.svg')
        }
    })
}