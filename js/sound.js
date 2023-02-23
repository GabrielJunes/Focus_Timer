export const Sounds = () => {

const soundFire = new Audio('./assets/Lareira.wav')
const soundForest = new Audio("./assets/Floresta.wav")
const soundRain = new Audio("./assets/Chuva.wav")
const soundCoffeShop = new Audio("./assets/Cafeteria.wav")



let soundsOff = (soundOne, soundTwo, soundThree) => {
    soundOne.pause()
    soundTwo.pause()
    soundThree.pause()
}


const soundFireStart = () => {
    soundsOff(soundForest, soundRain, soundCoffeShop)
    soundFire.play()
    soundFire.loop = true
}

const soundForestStart = () => {
    soundsOff(soundFire, soundRain, soundCoffeShop)
    soundForest.play()
    soundFire.loop = true
}

const soundRainStart = () => {
    soundsOff(soundFire, soundForest, soundCoffeShop)
    soundRain.play()
    soundRain.loop = true
}

const soundCoffeShopStart = () => {
    soundsOff(soundFire, soundForest, soundRain)
    soundCoffeShop.play()
    soundCoffeShop.loop = true
}

    return {soundCoffeShopStart, soundFireStart, soundForestStart, soundRainStart}

}