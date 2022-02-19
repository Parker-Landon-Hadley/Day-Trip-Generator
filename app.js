// Creator:         Parker Landon Hadley
// Date:            02/18/2022
// Organization:    devCodeCamp
// Project:         Random Trip Generator

"use strict"

//Writing generator function//
    function randomTripGenerator (){
    console.log("Are you ready to take a trip?");

// Randomly and repeatedly select a destination from the array.//
let destinations = ["Destination: College", "Destination: Ridgeway", "Destination: Gateway", "Destination: Ester", "Destination: Sitka", "Destination: Soldotna", "Destination: Juneau", "Destination: Kenai", "Destination: Anchorage", "Destination: Palmer", "Destination: Wasilla"];

let randomDestinations = destinations[Math.floor(Math.random() * destinations.length)];{
    console.log(randomDestinations, destinations[randomDestinations]);
}

// Randomly and repeatedly select a cuisine from the array.//
let restaurants = ["Cuisine: Indian", "Cuisine: Italian", "Cuisine: South American", "Cuisine: Central American", "Cuisine: North American", "Cuisine: Japanese", "Cuisine: Korean", "Cuisine: German", "Cuisine: Jewish Deli"];

let randomRestaurants = restaurants[Math.floor(Math.random() * restaurants.length)];{
    console.log(randomRestaurants, restaurants[randomRestaurants]);
}

// Randomly and repeatedly select a mode of transportation from the array.
let modeOfTransportation = ["Transportation: Bicycle", "Transportation: Walk", "Transportation: Run", "Transportation: Plane", "Transportation: Roller Skates", "Transportation: Teleportation", "Transportation: Drive", "Transportation: Piggy Back", "Transportation: Hitch-Hike"];

let randomModeOfTransportation = modeOfTransportation[Math.floor(Math.random() * modeOfTransportation.length)];{
console.log(randomModeOfTransportation, modeOfTransportation[randomModeOfTransportation]);
}

// Randomly and repeatedly select a form of entertainment from the array.
let entertainment = ["Stay In","Karaoke", "Comedy Club", "Dance", "Theater", "Magic Show", "Festival", "Extreme Sports", "Concert", "Carnival", "Fishing", "Camping"];

let randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];{
console.log(randomEntertainment, entertainment[randomEntertainment]);
}
    }

    randomTripGenerator();