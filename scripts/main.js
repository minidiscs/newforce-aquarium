// https://www.fishwatch.gov/developers - fish api for potential later use
import { fishList } from './fishlist.js'
import { locationsList } from './locationslist.js'
import { mostHolyFish , soldierFish , nonHolyFish } from './fishfilter.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentFishHTMLElement = document.querySelector(".fishies")
const parentLocationsHTMLElement = document.querySelector(".locationies")


parentFishHTMLElement.innerHTML = fishList()
parentLocationsHTMLElement.innerHTML = locationsList()
