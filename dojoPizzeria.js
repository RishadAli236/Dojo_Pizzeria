function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish","traditional", ["mozarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("melt crust", "creamy alfredo", ["mozarella"], ["chicken"]);
console.log(pizza3);

var pizza4 = pizzaOven("stuffed crust", "creamy garlic parmesan", ["mozarella"], ["beef", "mushrooms"]);
console.log(pizza4);

//Arrays of the different pizza ingredients
var pizzaCrustTypes = ["deep dish", "stuffed crust", "thin crust","hand tossed", "melt crust", "thick crust", "cracker crust", "Flatbread crust", "cheese crust", "coated crust"];
var pizzaSauceTypes = ["traditional","marinara", "creamy alfredo", "creamy garlic parmesan", "pesto","BBQ", "white sauce", "pepper sauce", "pesto sauce", "ranch sauce", "buffalo sauce"];
var pizzaCheeses = ["mozarella", "parmesan", "provolone", "ricotta", "feta", "cheddar", "gorgonzola", "parmigiano", "goat cheese", "pepper jack"];
var pizzaToppings = ["pepperoni", "mushroom", "extra cheese", "sausage", "onion", "olives", "fresh basil", "chicken", "beef", "green peppers"];


function randomPizza(){
    //Function that returns a random number between 0 and 9
    function randomIndex(){
        return Math.floor(Math.random()*10);
    }
    var randomPizza = pizzaOven(pizzaCrustTypes[randomIndex()], pizzaSauceTypes[randomIndex()], [pizzaCheeses[randomIndex()],pizzaCheeses[randomIndex()]], [pizzaToppings[randomIndex()], pizzaToppings[randomIndex()]]);
    console.log(randomPizza);
}

randomPizza();



