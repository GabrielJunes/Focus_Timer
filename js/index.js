import { Sounds } from "./sound.js"
import { Timer } from "./timer.js"

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnIncreaseTimer = document.querySelector('.increaseTimer')
const btnDecreaseTimer = document.querySelector('.decreaseTimer')
const soundForest = document.querySelector('.forest')
const soundRain = document.querySelector('.rain')
const soundFire = document.querySelector('.fire')
const soundCoffeShop = document.querySelector('.coffeShop')

let timerTimeout    
let minutes = Number(displayMinutes.textContent)

const Sound = Sounds()
const timer = Timer({
    displayMinutes,
    displaySeconds,
    timerTimeout,
    minutes
    
})

btnPlay.addEventListener('click', () =>{
    timer.countDown()
})

btnStop.addEventListener('click', function (){
    timer.stopTimer()
})

btnIncreaseTimer.addEventListener('click' , function(){
   timer.incrementTimer()
})

btnDecreaseTimer.addEventListener('click', function (){
    timer.decrementTimer()
})

soundForest.addEventListener('click', () => {
    Sound.soundForestStart()
    soundForest.classList.toggle('hide')
    soundRain.classList.remove('hide')
    soundFire.classList.remove('hide')
    soundCoffeShop.classList.remove('hide')
  })

  
soundRain.addEventListener('click', () => {
    Sound.soundRainStart()
    soundForest.classList.remove('hide')
    soundRain.classList.toggle('hide')
    soundFire.classList.remove('hide')
    soundCoffeShop.classList.remove('hide')
  })


soundFire.addEventListener('click', () => {
    Sound.soundFireStart()
    soundForest.classList.remove('hide')
    soundRain.classList.remove('hide')
    soundFire.classList.toggle('hide')
    soundCoffeShop.classList.remove('hide')
  })


soundCoffeShop.addEventListener('click', () => {
    Sound.soundCoffeShopStart()
    soundForest.classList.remove('hide')
    soundRain.classList.remove('hide')
    soundFire.classList.remove('hide')
    soundCoffeShop.classList.toggle('hide')
  })

