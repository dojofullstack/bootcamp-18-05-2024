

// Tipos de funciones
// tipo expresion
// array function
// callback


const procesarPago = function (metodo_pago) {

    console.log("procesar pago.", metodo_pago);

    if (metodo_pago === "visa"){
        return "pago_procesado_ok con visa"
    } else if (metodo_pago === "masterCard"){
        return "pago_procesado_ok con ms"
    }

}



// console.log( procesarPago("masterCard") );




// funciones flecha

const login = (metodo) => {
    if (metodo.includes("google")){
        return `iniciando sesion con ${metodo}`
    } else if (metodo.includes("facebook")){
        return `iniciando sesion con ${metodo} y verificacion 2 pasos`
    } else {
        return `iniciando sesion con Correo`
    }
}


// const salidaLogin =  login("email");

// console.log(salidaLogin);





// callback
// son funciones que pasamos como parametros de otra funcion o metodo

function registarAlumno(nombre, verificarIdentidad){

    console.log(`registrando miembro ${nombre} `);

    if (nombre !== ""){
        verificarIdentidad(nombre);
    }

}


// registarAlumno("Carlos", (name) => {
//         console.log(`verificando datos del miembro... ${name}`);
//     } );


// registarAlumno("Maria",  function (name) {
//     console.log(`verificando datos del miembro... ${name}`);
// } )


// function verificarIdentidad(name){
//     console.log(`verificando datos del miembro... ${name}`);
// }




// registarAlumno("Jose", verificarIdentidad )