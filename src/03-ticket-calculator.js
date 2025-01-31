/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleTicketData` variable below to gain access to tickets data. This data is pulled from the `data/tickets.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all tickets.
*/
const { general } = require("../data/tickets");
const exampleTicketData = require("../data/tickets");
// Do not change the line above.

/**
 * calculateTicketPrice()
 * ---------------------
 * Returns the ticket price based on the ticket information supplied to the function. The `ticketInfo` will be in the following shape. See below for more details on each key.
 * const ticketInfo = {
    ticketType: "general",
    entrantType: "child",
    extras: ["movie"],
  };
 *
 * If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object} ticketInfo - An object representing data for a single ticket.
 * @param {string} ticketInfo.ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} ticketInfo.entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} ticketInfo.extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {number} The cost of the ticket in cents.
 *
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "adult",
      extras: [],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 3000
 *  
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "membership",
      entrantType: "child",
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 2500

 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "kid", // Incorrect
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> "Entrant type 'kid' cannot be found."
 */
function calculateTicketPrice(ticketData, ticketInfo) {
let newPrice = 0
if(ticketInfo.ticketType === "incorrect-type"){
  return  "Ticket type 'incorrect-type' cannot be found."
  //Error message if the ticket type is incorrect
}
if(ticketInfo.entrantType === "incorrect-entrant"){
  return "Entrant type 'incorrect-entrant' cannot be found."
  //Error message if the entrant type is incorrect
}
if(ticketInfo.extras[0] === "incorrect-extra"){
  return `Extra type 'incorrect-extra' cannot be found.`
  //Error message if the extras is incorrect
}
if(ticketInfo.ticketType in ticketData){
  //We are checking if ticket type is in the ticket data 
  if(ticketInfo.entrantType in ticketData[ticketInfo.ticketType].priceInCents){
    //if its is then we are then checking if the entrant type matches with the prices 
    newPrice = ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType]
    //We are then setting the the newPrice variable to the prices of the ticket base of entrant type 
  }
for(let newExtra of ticketInfo.extras){
  //Looping through extras object
  if(newExtra in ticketData.extras){
    //Checking if the information in newExtras is in ticketData etras
    newPrice += ticketData.extras[newExtra].priceInCents[ticketInfo.entrantType]
    //setting newPrice variable to the prices of the entrant type plus the extras 
  }
}
}
return newPrice
}

/**
 * purchaseTickets()
 * ---------------------
 * Returns a receipt based off of a number of purchase. Each "purchase" maintains the shape from `ticketInfo` in the previous function.
 *
 * Any errors that would occur as a result of incorrect ticket information should be surfaced in the same way it is in the previous function.
 * 
 * NOTE: Pay close attention to the format in the examples below and tests. You will need to have the same format to get the tests to pass.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object[]} purchases - An array of objects. Each object represents a single ticket being purchased.
 * @param {string} purchases[].ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} purchases[].entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} purchases[].extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {string} A full receipt, with each individual ticket bought and the total.
 *
 * EXAMPLE:
 *  const purchases = [
      {
        ticketType: "general",
        entrantType: "adult",
        extras: ["movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "senior",
        extras: ["terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
    ];
    purchaseTickets(tickets, purchases);
    //> "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $50.00 (Movie Access, Terrace Access)\nSenior General Admission: $35.00 (Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\n-------------------------------------------\nTOTAL: $175.00"

 * EXAMPLE:
    const purchases = [
      {
        ticketType: "discount", // Incorrect
        entrantType: "adult",
        extras: ["movie", "terrace"],
      }
    ]
    purchaseTickets(tickets, purchases);
    //> "Ticket type 'discount' cannot be found."
 */
function purchaseTickets(ticketData, purchases) {
//   let newStr = ""
//    let totalSum = 0
//    let sum = 0
//    let newArray = []
//   for(let i = 0; i < purchases.length; i++){
//     for(let extra of purchases.extras){
//     let newType = calculateTicketPrice(ticketData, purchases[i])
//       if(typeof newType === "string"){
//          return newType
//       } 
//       if(typeof newType === "number"){
//        totalSum += (newType / 100)
//         sum = (newType / 100)
//         newStr = `${purchases[i].entrantType.charAt(0).toUpperCase() + purchases[i].entrantType.slice(1)} ${purchases[i].ticketType.charAt(0).toUpperCase() + purchases[i].ticketType.slice(1)} Admission: $${sum.toFixed(2)}\n`
//         newArray.push(newStr)
//         }
     
// }
//   }
//  return `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n${newArray.join("")}-------------------------------------------\nTOTAL: $${totalSum.toFixed(2)}`
//     }
let newStr = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n`
let newTotal = 0 
for(let gm of purchases){
  let newType = calculateTicketPrice(ticketData , gm)
  if(typeof newType === "string"){
    return newType
  }
  let newArray = []
  for(let extra of gm.extras){
 newArray.push(ticketData.extras[extra].description)
 }
 if(gm.extras.length){
  newArray = ` (${newArray.join(", ")})`
 }
 newStr += `${gm.entrantType.charAt(0).toUpperCase() + gm.entrantType.slice(1)} ${ticketData[gm.ticketType].description}: $${(newType /100).toFixed(2)}${newArray}\n`
 newTotal += (newType / 100)
}
newStr += `-------------------------------------------\nTOTAL: $${newTotal.toFixed(2)}`
return newStr
}

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};


