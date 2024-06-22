

class Genero {
    constructor() {
        this.generoPersona = "Masculino" 
    }

    welcome(){
        console.log("Metodo de clase Genero.",this.generoPersona);
    }    
}


// clases en JS

class Persona extends Genero {

    constructor(colorOjos, estatura, tipoCabello){
        super();
        this.colorOjos = colorOjos;
        this.estatura = estatura;
        this.tipoCabello = tipoCabello;
        this.edad = 33;
    }
    
    caminar(){
        this.saludar();
        console.log(this.tipoCabello);
        console.log("metodo caminar..");
    }


    cantar(){
        this.saludar();
        console.log(this.colorOjos);
        console.log("me encanta cantar");
    }

    saludar(){
        console.log("Buenos dias!!!");
        console.log(this.generoPersona);
        this.welcome();
    }
    
}



// const maria = new Persona("azul", "2m", "risado");
// maria.caminar();
// maria.cantar();
// console.log(maria.colorOjos);
// console.log(maria.estatura);
// console.log(maria.tipoCabello);


// console.log("######################")


// const pedro = new Persona("negros", "1.5m", "ondulado");
// pedro.caminar();
// pedro.cantar();
// console.log(pedro.colorOjos);
// console.log(pedro.estatura);
// console.log(pedro.tipoCabello);


console.log("######################")
const mario = new Persona("verdes", "1.6m", "risado");

mario.saludar();