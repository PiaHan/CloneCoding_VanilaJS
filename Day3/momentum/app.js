//alert("Hello")
console.log(123124);

//cannot change
const a = 5;
console.log(a*2);

//can change
let b = 10;
console.log(b);
b = 10;
console.log(b);

//old variable = var

//False != null
//null is a type
const amI = true;
console.log(amI);


const player = {
    name = "nico",
    points: 10,
    fat : true,
}
console.log(player);
console.log(player.name);


function plus(a, b){
    console.log(a + b);
}
plus(5, 10);

const calculator = {
    add : function(a, b) {
        console.log(a, b);
    }, 
}

calculator.add(5, 1);


//Return with console.log

const age = prompt("How old are you?"); //<-------old function, pausing the script 
console.log(age); 
console.log(typeof age); //Default = String
parseInt(age);