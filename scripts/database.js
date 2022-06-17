/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            species: "Sardine",
            image: "assets/sardine.png",
            nickname: "Pilchardo",
            from: "Delaware River",
            food: "super flakes",
            size: 18,
            tip: "tip: clean tank every 5 weeks, keep salinity at 42% & temp at 67°F"
        },
        {
            species: "Salt Trout",
            image: "assets/salt-trout.png",
            nickname: "Roberto",
            from: "Salton Sea",
            food: "odd mix",
            size: 38,
            tip: "tip: clean tank every 3 weeks, keep salinity at 32% & temp at 72°F"
        },
        {
            species: "Peruvian Anchoveta",
            image: "assets/peruvian-anchoveta.png",
            nickname: "Enrique",
            from: "Lago La Nina",
            food: "slippery bark",
            size: 21,
            tip: "tip: clean tank every 3 weeks, keep salinity at 32% & temp at 72°F"
        },
        {
            species: "Silver Hake",
            image: "assets/silver-hake.png",
            nickname: "Katarina",
            from: "Bar Harbor",
            food: "lobster chunk",
            size: 42,
            tip: "tip: clean tank every 6 weeks, keep salinity at 64% & temp at 59°F"
        },
        {
            species: "Chinook Salmon",
            image: "assets/chinook_salmon.png",
            nickname: "Josephine",
            from: "Coos Bay",
            food: "odd mix",
            size: 48,
            tip: "tip: clean tank every 5 weeks, keep salinity at 42% & temp at 67°F"
        },
        {
            species: "Atlantic Mackerel",
            image: "assets/atlantic-mackerel.png",
            nickname: "Mercurio",
            from: "Bar Harbor",
            food: "lobster chunk",
            size: 42,
            tip: "tip: clean tank every 6 weeks, keep salinity at 64% & temp at 59°F"

        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
