


console.log("modulo app.js Tienda Virtual");



class TiendaVirtual {
    
    constructor(nombreTienda, logotipoTienda, banerTienda){
        this.nombreTienda = nombreTienda;
        this.logotipoTienda = logotipoTienda;
        this.banerTienda = banerTienda;
        this.catalogoProduct = [];
        this.usuario = {}
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


    mostrarProductosAPI(){

        const productsCard = this.catalogoProduct.map((product) => {
            // console.log(product);

            const cardHtml =   `<div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${product.images[0]}" alt="Title" />
                <div class="card-body">
                <h4 class="card-title">${product.title}</h4>
                <p class="card-text">$ ${product.price} </p>
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


    loginAuth(){

        const emailUser = document.querySelector("#email-user").value;
        const passwordUser = document.querySelector("#password-user").value;

        const url = 'https://dummyjson.com/auth/login';

        const body = {
            username: emailUser,
            password: passwordUser
        }

        axios.post(url, body).then((data) => {
            // console.log(data.data);
            this.usuario = data.data;

            // almacenando cookies en /
            document.cookie = `token=${this.usuario.token}; path=/`;

            // par forzar una redireccion al home de la tienda
            document.location.href = "index.html";

        })

    }



    perfilAuth(){

        const token =  this.buscarCookie("token");

        if (token){

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}` ;

            const url = 'https://dummyjson.com/auth/me';
            axios.get(url).then((data) => {
                // console.log(data.data);
                this.usuario = data.data;


                
                document.querySelector("#perfil-active").style.display = "block";
                document.querySelector("#user-img").src = this.usuario.image;
                document.querySelector("#user-name").innerHTML = this.usuario.firstName;
                
                document.querySelector("#btn-login").style.display = "none";
            })
        }



    }


    buscarCookie(buscarCookie){

        let token = "";

        document.cookie.split(";").forEach((item) => {
            const grupoCookie = item.trim();
    
            const nombreCookie = grupoCookie.split("=")[0];
            // console.log(nombreCookie);

             if (nombreCookie === buscarCookie){
                // console.log(grupoCookie);
                token = grupoCookie.split("=")[1]
            }
            
        })


        return token;
    
    }


    closeLogin(){
        this.usuario = {};
        document.cookie = "token=; path=/";
        document.location.href = "login.html"; 
    }

    searchProduct(){
        const nameProduct = document.querySelector("#input-search").value;
        console.log("buscando..", nameProduct);

        const url = `https://dummyjson.com/products/search?q=${nameProduct}`;
        axios.get(url).then((data) => {
            // console.log(data.data);
            const products = data.data.products;

            this.catalogoProduct = products;
            
            this.mostrarProductosAPI();

        })
    }

}




const nameTienda = document.querySelector("#name-tienda")?.value;
const logotipoTienda = document.querySelector("#logotipo-tienda")?.value;
const bannerTienda = document.querySelector("#banner-tienda")?.value;



const tiendaDojoPc = new TiendaVirtual(nameTienda, logotipoTienda, bannerTienda);

console.log(tiendaDojoPc);


// tiendaDojoPc.cargarDatos();

function home(){
    tiendaDojoPc.cargarDatos();

    tiendaDojoPc.perfilAuth();
}