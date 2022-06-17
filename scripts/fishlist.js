// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    const fishHTML = <section class="fishes">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Backticks used for string interpolation into the HTML
        fishHTML += `<article class="fishes__fish">
            <div><img class="fish__image" src="${fish.image}"></div>
            <div class="fish__header">
                <h2 class="fish__name">${fish.species}</h2>
                <div class="fish__nickname">${fish.nickname}</div>
            </div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__food">${fish.food}</div>
            <aside class="fish__tip">${fish.tip}</aside>
        </article>
`
    }
    fishHTML += `</section>`

    return fishHTML
}