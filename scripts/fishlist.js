// Import the function that returns a copy of the fish array
import { orderedFish } from './fishfilter.js'


export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = orderedFish()

    // Start building a string filled with HTML syntax
    let fishHTML = `<section class="fishes">`

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Backticks used for string interpolation into the HTML
        fishHTML += 
        `<article class="fishes__fish">
            <div><img class="fish__image" src="${fish.image}"></div>
            <div class="fish__header">
                <h2 class="fish__name">${fish.species}</h2>
                <div class="fish__nickname"><em>${fish.nickname}</em></div>
            </div>
            <div class="fish__details">
                <div class="fish__length">${fish.size} cm</div>
                <div class="fish__location">From ${fish.from}</div>
                <div class="fish__food">Eats ${fish.food}</div>
            </div>
            <aside class="fish__tip">${fish.tip}</aside>
        </article>
`
    }
    fishHTML += `</section>`

    return fishHTML
}
