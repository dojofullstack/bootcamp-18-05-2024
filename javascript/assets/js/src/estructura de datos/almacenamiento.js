


console.log("LocalStorage vs Cookies");



// console.log( localStorage );


// Crear datos o actualizar
// localStorage.setItem("itemsFavoritos", "samsung2024");

localStorage.setItem("itemsFavoritos", "samsung2025");

// console.log( localStorage.getItem("itemsFavoritos") );

// borrar key de LocalStorageW
// localStorage.removeItem("itemsFavoritos");



const preferenciasProductos = {
    "userID": 2,
    "productos": ["iphone", "samsung"],
    "tema": "light"
}


// localStorage.setItem("preferencias", JSON.stringify(preferenciasProductos) );






// const preferenciasDojo = JSON.parse(localStorage.getItem("preferencias"));


// if (preferenciasDojo !== null){

//     preferenciasDojo.productos.forEach(element => {
//         console.log(element);
//     });

// }





// cookies

console.log("Cookies:",document.cookie);


const fechaActual = new Date();
// const fechaActual2 = new Date();
// const fechaActual3 = new Date();
// const fechaActual4 = new Date();

const fechaExpirar = fechaActual.getTime() + (1000*60*60*5);

const fechaExpirarMinutos = fechaActual.getTime() + (1000*60*2);

console.log(fechaActual.getTime());
console.log(fechaExpirar);

const fechaNews = new Date();
// fechaNews.setTime(fechaExpirar);
fechaNews.setTime(fechaExpirarMinutos);

console.log(fechaNews);
console.log(fechaNews.toUTCString());

// const fechaFormateadaString = fechaNews.toUTCString();

const fechaFormateadaStringMinutos = fechaNews.toUTCString();

console.log(fechaFormateadaStringMinutos);

// document.cookie = `marketingID=010201920; patch=/; expires=${fechaFormateadaStringMinutos}`;




// const buscarCookie = "userID";



function buscarCookie(buscarCookie){

    document.cookie.split(";").forEach((item) => {
        const grupoCookie = item.trim();

        const nombreCookie = grupoCookie.split("=")[0];
        // console.log(nombreCookie);

         if (nombreCookie === buscarCookie){
            // console.log(grupoCookie);
            const valor = grupoCookie.split("=")[1]
            console.log(valor);
        }

        // if (grupoCookie.includes(buscarCookie)){
        //     // console.log(grupoCookie);
        //     const valor = grupoCookie.split("=")[1]
        //     console.log(valor);
        // }
        
    })

}



buscarCookie("dojoCookie")
