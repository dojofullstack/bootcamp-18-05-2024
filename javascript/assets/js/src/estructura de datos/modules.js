const ctx = document.querySelector("#myChartDojo");

// const configBar = {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       },
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   }

const data = {
  labels: ["Rojo", "Azul", "Verde", "Amarillo"],
  datasets: [
    {
      data: [20, 30, 15, 10],
      backgroundColor: ["red", "blue", "green", "yellow"],
    },
  ],
};

const configPie = {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Pie Chart",
      },
    },
  },
};

const myChartDojo = new Chart(ctx, configPie);

// ejemplo con Date()

const fechaActual = new Date();

const fechaAPI = new Date("2023-12-31T23:59:59");

console.log(fechaActual.getTime());
console.log(fechaAPI.getTime());

const diferencia = Math.abs(fechaActual.getTime() - fechaAPI.getTime());

console.log("diferencia ms", diferencia);

const diasDiferencia = diferencia / (1000 * 60 * 60 * 24);
console.log(Math.ceil(diasDiferencia));
console.log(diasDiferencia);

// ejemplo con moment().format();
moment.locale("es");

console.log(moment().format());

console.log(moment().format("MMM Do YY"));

console.log(moment().subtract(6, "days").calendar());

console.log(moment().endOf("day").fromNow());

// test socketIO

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Conectado al servidor Socket.io");
});


socket.on("mensajeDojo", (data) => {
  console.log("Mensaje recibido del servidor: " + data);
});


function enviarMensaje() {
  const mensaje = document.getElementById("mensajeInput").value;

  socket.emit("mensaje", "hola");
}
