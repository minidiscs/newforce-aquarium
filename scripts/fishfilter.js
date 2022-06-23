import { getFish } from './database.js'

export const mostHolyFish = () => {
    // fish with length divisible by 3
    const fishes = getFish()
    const holyFish = []

    for (const fish of fishes) {
        if ((fish.size % 3) === 0) {
            holyFish.push(fish)

        }
    }
    return holyFish
}

export const soldierFish = () => {
    // fish with length divisible by 5 and not 3
    const fishes = getFish()
    const soldierFish = []

    for (const fish of fishes) {
        if ((fish.size % 5) === 0 && (fish.size % 3) !== 0) {
            soldierFish.push(fish)
        }
    }
    return soldierFish
}

export const nonHolyFish = () => {
    // fish not divisible by either 3 or 5
    const fishes = getFish()
    const regularFish = []

    for (const fish of fishes) {
        if ((fish.size % 5) !== 0 && fish.size % 3 !==0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}

export const orderedFish = () => {
    // Fish array put together with holy fish first, then soldier fish, then non holy fish

    const firstFish = mostHolyFish()
    const secondFish = soldierFish()
    const thirdFish = nonHolyFish()

    let orderedFish = firstFish

    for (const fish of secondFish) {
        orderedFish.push(fish)
    }
    for (const fish of thirdFish) {
        orderedFish.push(fish)
    }
    return orderedFish
}
