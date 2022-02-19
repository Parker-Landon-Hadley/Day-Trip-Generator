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
    }

    randomTripGenerator();