


// const perfil = {
//     username: "mario",
//     edad: 23,
//     email: "mario@gmail.com",
//     isRegisted: true,
//     roles: ["editor", "admin"],
//     preferencia: {
//         "color": "light"
//     }
// }


// console.log( JSON.stringify(perfil)  );



const dataJSON = `{"username":"mario","edad":23,"email":"mario@gmail.com","isRegisted":true,"roles":["editor","admin"],"preferencia":{"color":"light"}}`;

console.log(dataJSON);

const perfil =  JSON.parse(dataJSON);
console.log(perfil);

console.log(perfil.email);



