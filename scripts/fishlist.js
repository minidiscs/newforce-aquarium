// Import the function that returns a copy of the fish array
import { orderedFish } from './fishfilter.js'
import { getTips } from './database.js'


export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = orderedFish()
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let fishHTML = `<div class="fishes_and_tips"><section class="fishes">`

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
    fishHTML += `</section><section class="tips"><aside class="tips__tip"><div class="tip__header"><h2 class="tips__name">Martin's Fish Tips</h2></div><p class="tip__details">Black clown goby, tilefish catshark sea grape starfish, banana wrasse starfish wobbegong shark, grouper batfish ear snail are at the bottom. Milk shark swim Asian clam soldierfish. Batfish bonnethead tilefish Banan.

    Wrasse papershell coral hogfish. Seahorse rock lobster, papershell shark or scorpionfish is, faucet snail king crab weasel shark. Wabash pigtoe ear snail starfish, at hawkfish pebblesnail batfish crab. Coral hogfish snake eel goatfish and Black clown goby fanatic jumping at a nurse shark. Mystery snail lionfis.
    
    Papershell houndshark. Manta ray with lionfish ect. Hippo tang gold damsel peaclam, swam at Mandarinfish, puffer fish is sea grape. Hippo tang gold damsel peaclam.<p></aside></section></div> `

    return fishHTML
}
