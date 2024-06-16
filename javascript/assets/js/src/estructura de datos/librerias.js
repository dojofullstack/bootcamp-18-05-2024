// fecht
// para generar solicitudes HTTP (get, post, update, delete)


// fetch("https://dummyjson.com/products")
//   .then((respuesta) => {
//     return respuesta.json();
//   })
//   .then((product) => {
//     console.log(product.products);

//     const productosCardBoostrap = product.products.map((product) => {
//       // console.log(product);
//       const cardProduct = `
//                         <div class="card" style="width: 300px">
//                             <img class="card-img-top" src="${product.images[0]}" alt="Title" />
//                             <div class="card-body">
//                                 <h4 class="card-title">${product.title}</h4>
//                                 <p class="card-text">${product.description}</p>
//                                 <div> Precio: ${product.price}   </div>
//                             </div>
//                             <button
//                             type="button"
//                             class="btn btn-primary">
//                             Ver Detalles
//                         </button>
//                         </div>
//                 `;
//       return cardProduct;
//     });


//     const productosHTML = productosCardBoostrap.join(" ");
//     // console.log(productosHTML);
//     const catalogo = document.querySelector("#catalogo");
//     catalogo.innerHTML = productosHTML;

//   });



// const payload = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       username: 'emilys',
//       password: 'emilyspass',
//     })
// }


// fetch('https://dummyjson.com/auth/login', payload)
//   .then(res => res.json())
//   .then(data => console.log(data));






// trabajando con axios


axios.get("https://dummyjson.com/products").then((data) => {
    console.log(data.data);

    // console.log(product.products);

        const productosCardBoostrap = data.data.products.map((product) => {
          // console.log(product);
          const cardProduct = `
                            <div class="card" style="width: 300px">
                                <img class="card-img-top" src="${product.images[0]}" alt="Title" />
                                <div class="card-body">
                                    <h4 class="card-title">${product.title}</h4>
                                    <p class="card-text">${product.description}</p>
                                    <div> Precio: ${product.price}   </div>
                                </div>
                                <button
                                type="button"
                                class="btn btn-primary">
                                Ver Detalles
                            </button>
                            </div>
                    `;
          return cardProduct;
        });
    
    
        const productosHTML = productosCardBoostrap.join(" ");
        // console.log(productosHTML);
        const catalogo = document.querySelector("#catalogo");
        catalogo.innerHTML = productosHTML;
    



})






const payload = {
    "username": 'dojo',
    "password": '10201210'
}


axios.post('https://dummyjson.com/auth/login', payload).then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log("error detectado!!", error);
})