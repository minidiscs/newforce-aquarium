// Import the function that returns a copy of the location array
import { getLocations } from './database.js'

export const locationsList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let locationsHTML = `<section class="travels">`

    // Create HTML representations of each location here
    for (const location of locations) {

        // Backticks used for string interpolation into the HTML
        locationsHTML += 
        `<article class="travels__location">
            <div><img class="location__image" src="${location.image}"></div>
            <div class="location__header">
                <h2 class="location__name">${location.location}</h2>
                <div class="location__locale"><em>${location.locale}</em></div>
            </div>
            <div class="location__details">
                <aside class="location__quote">${location.tip}</aside>
            </div>
        </article>
`
    }
    locationsHTML += `</section>`

    return locationsHTML
}
