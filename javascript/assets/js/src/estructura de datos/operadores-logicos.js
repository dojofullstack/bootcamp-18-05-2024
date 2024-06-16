


// operadores logicos
// OR
// siempe que al menos una condicion evalue true, la logica OR evalua "true"
// ( true or true  )  =  true
// ( true or false  )  =  true
// ( false or true  )  =  true
// ( false or false  )  =  false

// se utiliza los simbolos  || hace referneica al operador logico OR

const isUserVip = true;
const saldoWallet = 10;
const isUserFree = false;
const username = "mario perez"

//  console.log(isUserVip || saldoWallet > 5)
//  console.log(isUserFree || saldoWallet > 20)
//  console.log(isUserFree || username.includes("perez"))

// AND
// siempre ambos deben evaluar true, entonces la logica AND evalua "true"
// ( true or true  )  =  true
// ( true or false  )  =  false
// ( false or true  )  =  false
// ( false or false  )  =  false

// se utiliza los simbolos  && hace referneica al operador logico AND


//  console.log(isUserVip && saldoWallet > 5 && username === "mario")
//  console.log(isUserFree && saldoWallet > 20)
//  console.log(isUserFree && username.includes("perez"))





// NOT
// siempre niega el bool
// se utliza el simbolo ! como prefijo del objeto

console.log( !username.includes("perez") )


// if (!username.includes("perez")){
//     console.log("perez no incluye")
// } else {
//     console.log("perez incluye")
// }
