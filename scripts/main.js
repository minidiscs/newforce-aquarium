// https://www.fishwatch.gov/developers - fish api for potential later use
import { fishList } from './fishlist.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishies")


parentHTMLElement.innerHTML = fishList()