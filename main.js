
//////========================//////
///////  RNG TEXT CREATION /////////
//////========================//////

//======= FUNCTION THAT RUNS THE RNG TEXT CREATION ======//
// function goTo() {

//====== RNG TEXT ARRAY SOURCE ======//
var content =
{
places: ["house", "office"],
verbs: ["hit", "kick", "hey", "ddd", "3333"],
adjectives: ["2"],
names: ["3"],
starShips: ["3"]
}

//====== RNG FUNCTION ======//

function ranNumber(type) {
  var x = type.length
  return type[Math.floor(Math.random() * x)]
}

//====== VARIABLES ======//
var place = content.places
var verb = content.verbs
var adjective = content.adjectives
var name = content.names
var starShip = content.starShips

//====== ARRAY OF STORIES/ POEMS ======//
//---- Use:  ${ranNumber(variable)}  to replace key words in body.

var body =
[`I am going to ${ranNumber(verb)} ${ranNumber(verb)} you so hard you big dumb`]

//====== PRINT TEXT TO HTML ======//
document.querySelector('.main').innerHTML = body[0]


// }
