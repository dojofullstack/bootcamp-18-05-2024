


// iteradores
// forEach y map




const productos = [
    "xiomi",
    "samsung",
    "iphone",
    "PC Gamer"
]

// function revisarStock(producto){
//     console.log("revisando stock del producto", producto);
// }


productos.forEach( (producto, index) => {
    console.log("Index:",index);
    console.log(`revisando stock del producto, ${producto}`);
} );




const procesoProductos =  productos.map( (producto, index) => {
    // console.log(`${index}. revisando STOCK del producto: ${producto}`);
    return producto.toUpperCase().concat(" Nuevo! ")
}  )

