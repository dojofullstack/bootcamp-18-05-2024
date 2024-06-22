


console.log("modulo app.js Tienda Virtual");



class TiendaVirtual {
    
    constructor(nombreTienda, logotipoTienda, banerTienda){
        this.nombreTienda = nombreTienda;
        this.logotipoTienda = logotipoTienda;
        this.banerTienda = banerTienda;
        this.catalogoProduct = [];
    }

    mostrarTienda(){
        document.querySelector("#logo-img").src = this.logotipoTienda;
        document.querySelector("#banner-img").src = this.banerTienda;
        document.querySelector("#nombre-tienda").innerHTML = this.nombreTienda;
    }


    crearTienda() {
        console.log("creando tienda virtual....");
        
        this.nombreTienda = nameTienda.value;
        this.logotipoTienda = logotipoTienda.value;
        this.banerTienda = bannerTienda.value;

        this.mostrarTienda();

        this.almacenarDatos();
    }


    crearProducto(){

        const productTitle = document.querySelector("#product-title").value;
        const productFoto = document.querySelector("#product-foto").value;
        const productPrice = document.querySelector("#product-price").value;
        const productInfo = document.querySelector("#product-info").value;

        const product = {
            productTitle: productTitle,
            productFoto: productFoto,
            productPrice: productPrice,
            productInfo: productInfo
        }

        // console.log(product);

        this.catalogoProduct.push(product);

        this.mostrarProductos();
        this.almacenarDatos();

    }


    mostrarProductos(){

        const productsCard = this.catalogoProduct.map((product) => {
            // console.log(product);

            const cardHtml =   `<div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${product.productFoto}" alt="Title" />
                <div class="card-body">
                <h4 class="card-title">${product.productTitle}</h4>
                <p class="card-text">$ ${product.productPrice} </p>
                    </div>
                </div> `
            

            // console.log(cardHtml);
            return cardHtml
        })


        const productos = productsCard.join("");

        document.querySelector("#catalogo-product").innerHTML = productos;



    }



    almacenarDatos(){
        console.log("Guardandado en LS");
        // almacenar datos de form persistente en LocalStorage
        const tienda = {
            nombreTienda: this.nombreTienda,
            logotipoTienda: this.logotipoTienda,
            banerTienda: this.banerTienda,
        }
        localStorage.setItem("tienda", JSON.stringify(tienda));
        localStorage.setItem("catalogoProduct", JSON.stringify(this.catalogoProduct));
    }

    
    cargarDatos(){

        const tienda = localStorage.getItem("tienda");
        const catalogoProduct = localStorage.getItem("catalogoProduct");


        if (tienda){
            console.log("configurar tienda", JSON.parse(tienda));
            this.nombreTienda =  JSON.parse(tienda).nombreTienda;
            this.logotipoTienda =  JSON.parse(tienda).logotipoTienda;
            this.banerTienda =  JSON.parse(tienda).banerTienda;
            this.mostrarTienda();
        }


        if (catalogoProduct){
            console.log("configurar productos", JSON.parse(catalogoProduct));
            this.catalogoProduct = JSON.parse(catalogoProduct);
            this.mostrarProductos();
        }

    }

}




const nameTienda = document.querySelector("#name-tienda");
const logotipoTienda = document.querySelector("#logotipo-tienda");
const bannerTienda = document.querySelector("#banner-tienda");


const tiendaDojoPc = new TiendaVirtual(nameTienda.value, logotipoTienda.value, bannerTienda.value);

console.log(tiendaDojoPc);



tiendaDojoPc.cargarDatos();