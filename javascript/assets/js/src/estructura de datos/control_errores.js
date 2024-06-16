


// axios.get("http://servicio.com/api");


try {
    axios.get("https://www.chartjs.org/docs/latest/samples/bar/border-radius.html");
} catch (error) {
    console.log("Fallo el paquette axios");
    console.log(error);
} finally {
    console.log("finalizo el task axios");
}




const productos = ["ophone", "xiomi", "samung"];

productos.forEach(item => {
    console.log(item);
})




