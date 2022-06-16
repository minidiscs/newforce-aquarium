// https://www.fishwatch.gov/developers - fish api for potential later use
import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}