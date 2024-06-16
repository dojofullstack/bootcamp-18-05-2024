



console.log("objetos en JS");


// arrays o arreglos en JS


const pokemones = [
    "Bulbasaur",
    "Ivysaur",
    "Charmander",
    "pikachu"
]


// console.log(pokemones);

// console.log(pokemones.length);


pokemones.push("Charizard")

// console.log(pokemones);

// const nuevoArray =  pokemones.concat( ["pokemonLegendario", "otroPoemon"] );

// console.log(nuevoArray);



// obtener el primer elemento
// console.log(pokemones[0]);

// obtener el ultimo elemento
// console.log(pokemones[  pokemones.length - 1  ]);


// console.log( pokemones.includes("Ivysaur"));


pokemones[0] = "BulbasaurEvolucion";


// console.log(pokemones.reverse());

// console.log( pokemones.slice(1, 3) );

// 
// pop elimina el ultimo elemento del array
// pokemones.pop()


// shift elimina el primer elemento del array
// pokemones.shift()

// console.log(pokemones);
pokemones.unshift("pokemonOrigen");

// console.log(pokemones);

// console.log(pokemones.indexOf("pikachu"));

function acelerar(){
    console.log("acelerand auto nuevo");
}


// CRUD
// C CREATE
// R READ
// U UPDATE
// D DELETE

const auto = {
    acelerarAuto: acelerar,
    color: "verde",
    modelo: "tesla2024",
    precio: 1233,
    isNew: true,
    modelos2024: [
        "teslax",
        "teslaRoster",
        "teslaSuv"
    ],
    autoDueno: {
        nombre: "Mario",
        email: "mario@gmail.com"
    }
}


console.log(auto);

console.log(auto.color);
// console.log(auto["color"]);


console.log(auto.modelo);
console.log(auto.isNew);

console.log(auto.autoDueno.nombre);
console.log(auto.autoDueno.email);


auto.velocidadMax = "400km/h";
// auto.motor = "100h";
auto["kilometraje"] = "3000km";

auto.isNew = false;

auto.acelerarAuto();

delete auto.color;

console.log(auto);
