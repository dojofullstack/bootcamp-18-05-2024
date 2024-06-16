


// ciclos for y while


// ciclo for

const usuarios = [
    "jose",
    "jaime",
    "pedro",
    "henry",
    "erick"
]


const productos = [
    {
        productTile: "samsung",
        price: 123,
        isStock: true,
        productImg: "https://i.blogs.es/b03839/010_galaxy_a23_5g_light_blue_front/650_1200.jpg"
    },
    {
        productTile: "samsung 2",
        price: 32,
        isStock: false,
        productImg: "https://i.blogs.es/b03839/010_galaxy_a23_5g_light_blue_front/650_1200.jpg"
    },
    {
        productTile: "samsung 3",
        price: 45,
        isStock: true,
        productImg: "https://i.blogs.es/b03839/010_galaxy_a23_5g_light_blue_front/650_1200.jpg"
    },
    {
        productTile: "samsung 4",
        price: 67,
        isStock: true,
        productImg: "https://i.blogs.es/b03839/010_galaxy_a23_5g_light_blue_front/650_1200.jpg"
    }
]


// for (let index = 0; index < usuarios.length; index++) {
//     const nombre = usuarios[index];
//     console.log(nombre);
// }


const selectorProduct = document.querySelector("#producto");

let catalogoProduct = "";


for (let index = 0; index < productos.length; index++) {
    const element = productos[index];
    console.log(element);

    if (!element.isStock){
        console.log("no hay stock");
        continue
    }

    catalogoProduct = catalogoProduct.concat(`<div class="card m-2" style="width: 18rem;">
    <img class="card-img-top" src="${element.productImg}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">  ${element.productTile} </h5>
      <p class="card-text">Stock: ${element.isStock} </p>
      <a href="#" class="btn btn-primary">Precio: ${element.price} MXN</a>
    </div>
  </div> `)

}
selectorProduct.innerHTML = catalogoProduct;





// ciclo while

let generarReporte5m  = true;


// while (generarReporte5m){
//     console.log("generando reporte cada 5m");

//     const respuesta = window.prompt("si quiere continuar generando reporte??");

//     if (respuesta === "no"){
//         console.log("finlizando el ciclo while");
//         // generarReporte5m = false;
//         break
//     }
// }


console.log("el flujo del modulo continua");


// breakpoint
// 2 tipos:
// - break y continue
