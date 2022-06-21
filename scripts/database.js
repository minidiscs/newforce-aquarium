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
            size: 20,
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
            from: "Lago La Niña",
            food: "slippery bark",
            size: 21,
            tip: "tip: clean tank every 3 weeks, keep salinity at 32% & temp at 72°F"
        },
        {
            species: "Silver Hake",
            image: "assets/silver-hake.png",
            nickname: "Katarina",
            from: "Frenchman Bay",
            food: "lobster chunk",
            size: 45,
            tip: "tip: clean tank every 6 weeks, keep salinity at 64% & temp at 59°F"
        },
        {
            species: "Chinook Salmon",
            image: "assets/chinook_salmon.png",
            nickname: "Josephine",
            from: "Coos Bay",
            food: "odd mix",
            size: 49,
            tip: "tip: clean tank every 5 weeks, keep salinity at 42% & temp at 67°F"
        },
        {
            species: "Atlantic Mackerel",
            image: "assets/atlantic-mackerel.png",
            nickname: "Mercurio",
            from: "Frenchman Bay",
            food: "lobster chunk",
            size: 42,
            tip: "tip: clean tank every 6 weeks, keep salinity at 64% & temp at 59°F"
        },
        {
            species: "Spanish Mackerel",
            image: "assets/spanish-mackerel.png",
            nickname: "Alexis",
            from: "Mobile Bay",
            food: "crawdad dumplings",
            size: 35,
            tip: "tip: clean tank every 5 weeks, keep salinity at 42% & temp at 67°F"
        },
        {
            species: "Mahi Mahi",
            image: "assets/mahi-mahi.png",
            nickname: "Torpedo",
            from: "Mobile Bay",
            food: "crawdad dumplings",
            size: 60,
            tip: "tip: clean tank every 3 weeks, keep salinity at 64% & temp at 67°F"
        },
        {
            species: "Monkfish",
            image: "assets/monkfish.png",
            nickname: "Diablo",
            from: "Frenchman Bay",
            food: "odd mix",
            size: 41,
            tip: "tip: clean tank every 6 weeks, keep salinity at 64% & temp at 59°F"
        }
    ],
    locations: [
        {
            location: "Delaware River",
            image: "assets/delaware-river.webp",
            locale: "Trenton, New Jersey",
            tip: "Make sure you pack plenty of sunscreen and bug spray. The locals are abundantly friendly, but the mosquitos most certainly are not!"    
        },
        {
            location: "Salton Sea",
            image: "assets/salton-sea.webp",
            locale: "Mortmar, California",
            tip: "There's still life in this old man-made lake. However, it's like a ghost town though if you are looking for human contact. Bring a dog companion to raise morale."
        },
        {
            location: "Frenchman Bay",
            image: "assets/frenchman-bay.webp",
            locale: "Bar Harbor, Maine",
            tip: "You will get Lyme's Disease if you don't cover up and spray repellant. Or you can just stay in the water, the ticks can't get you there!"
        },
        {
            location: "Lago de La Niña",
            image: "assets/lago-de-la-nina.png",
            locale: "Piura, Peru",
            tip: "Located in the capital of Peru's northwestern region, Lago de La Niña is the definition of 'que tranquilla'. Be sure to visit Isla Lobos de Tierra for some rare terrestrial species"
        },
        {
            location: "Coos Bay",
            image: "assets/coos-bay.png",
            locale: "North Bend, Oregon",
            tip: "Historically known as Marshfield, Coos Bay celebrates a history in shipbuilding and lumber products. Also there's fish!"
        },
        {
            location: "Mobile Bay",
            image: "assets/mobile-bay.jpg",
            locale: "Mobile, Alabama",
            tip: "On summer nights, enjoy the fruits of a mysterious phenomenon called 'Jubilee', when fish and crabs swarm toward shore and can be easily harvested from the shallows."
        }
    ],
    tips: [
        {
        salinity: "Keep tank salinity at 64% for all ocean fish, and 21% for brackish fish, and 5% for freshwater fish.",
        cleaning: "Clean all tanks every 4 weeks with brush and fish safe cleaning solution.",
        temperature: "Keep tank temperature at 67° for all fish from northern waters, for tropical fish, keep tank at 81°."
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}
