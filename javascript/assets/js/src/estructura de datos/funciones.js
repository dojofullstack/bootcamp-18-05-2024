


// funciones en JS
console.log("modulo practicas funciones");


function maquinaNaranjas(cant_naranjas, con_azuzar){

    let salidaJugo;

    if (cant_naranjas === 0){
        salidaJugo = "no hay naranjas"
        console.log("no hay naranjas, no se puede prepara jugo")
        return salidaJugo
    } else if (cant_naranjas <= 5){
        salidaJugo = "preparando jugo";
        console.log("Ok hay naranjas, se puede prepara jugo con ", cant_naranjas)
    } else if  (cant_naranjas >= 20){
        salidaJugo = "No hay sugicionetes naranjas";
        console.log("no hay suficentes naranjas para prepara este jugo");
        return salidaJugo
    } else {
        salidaJugo = "preparando jugo";
        console.log("preparando jugo de naranhjas", cant_naranjas);
    }



    if (con_azuzar){
        return salidaJugo.concat(", lista con azuzar!!!")
    }

    return salidaJugo.concat(", lista sin azucar.")

    // return {
    //     mensaje: salidaJugo.concat(", lista sin azuzar"),
    //     con_azuzar: con_azuzar,
    //     cant_naranjas: cant_naranjas
    // }

}



let usuarioEleccionNaranajas = 3;

let con_azuzar = false;

const salidaJugo =  maquinaNaranjas(usuarioEleccionNaranajas, con_azuzar);


console.log("salidaJugo:", salidaJugo);