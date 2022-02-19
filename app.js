// Creator:         Parker Landon Hadley
// Date:            02/18/2022
// Organization:    devCodeCamp
// Project:         Random Trip Generator

"use strict"

//Writing generator function//
    function randomTripGenerator (){
    console.log("Are you ready to take a trip?");

// Randomly and repeatedly select a destination from the array.//
let destinations = ["College", "Ridgeway", "Gateway", "Ester", "Sitka", "Soldotna", "Juneau", "Kenai", "Anchorage", "Palmer", "Wasilla"];

let randomDestinations = destinations[Math.floor(Math.random() * destinations.length)];{
    console.log(randomDestinations, destinations[randomDestinations]);
}

// Randomly and repeatedly select a cuisine from the array.//
let restaurants = ["Indian", "Italian", "South American", "Central American", "North American", "Japanese", "Korean", "German", "Jewish Deli"];

let randomRestaurants = restaurants[Math.floor(Math.random() * restaurants.length)];{
    console.log(randomRestaurants, restaurants[randomRestaurants]);
}

// Randomly and repeatedly select a mode of transportation from the array.
let modeOfTransportation = ["Bicycle", "Walk", "Run", "Plane", "Roller Skates", "Teleportation", "Drive", "Piggy Back", "Hitch-Hike"];

let randomModeOfTransportation = modeOfTransportation[Math.floor(Math.random() * modeOfTransportation.length)];{
console.log(randomModeOfTransportation, modeOfTransportation[randomModeOfTransportation]);
}
    }

    randomTripGenerator();