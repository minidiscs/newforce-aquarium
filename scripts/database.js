/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            species: "Sardine"
            nickname: "Pilchardo",
            from: "Delaware River"
            food: "super flakes",
            size: 18
        }
        {
            species: "Salt Trout"
            nickname: "Roberto",
            from: "Salton Sea"
            food: "odd mix",
            size: 38
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}