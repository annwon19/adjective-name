//create an array of adjectives
var adjective=[
"cold",
"warm",
"hot"
];

//ask the user for his/hers name
var name= prompt("what is your name?");

//create a random number
var choose=[Math.floor(Math.random()*adjective.length)];

//tell the user that he/she "is" followed by the adjective
window.alert(name + " is " +adjective[choose]);