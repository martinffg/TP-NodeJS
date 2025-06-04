// Alumno: MARTÍN FEDERICO FERNÁNDEZ GAMEN
// PRE-ENTREGA CURSO BACKEND/NODEJS - COMISIÓN: 25024

const argumentos = process.argv.slice(2); // Elimino los dos primeros elemendos de argv,  que son las rutas al binario de node y al script index.js
//console.log(argumentos);

// Hago destructuring y uso spread de comandos para la asignación
const [comandoHttp, ...comandos] = argumentos;

//console.log(comandoHttp);
//console.log(comandos[0]);

switch(comandoHttp){
    case "GET":
        console.log("Todos los productos");
        break
    case "POST":
        console.log("Producto creado:" , comandos[0] );
        break
    case "PUT":
        console.log("Producto modificado su id es" , comandos[0].slice(9));
        break
    case "DELETE":
        console.log("Producto eliminado.  Su id era" , comandos[0].slice(9));
        break
}

/*
// nombre del alumna/o-preentrega
const URL = `https://fakestoreapi.com/products`;
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
// Titulo: data.titulo
// fetch(URL)
//   .then((response) => response.json())
//   then((data) => {
//     console.log(data);
//   });

fetchData(URL)


const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];
const axios = require("axios");
// fetch(url,config)
// console.log(fetch("https://jsonplaceholder.typicode.com/posts"));
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// axios
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then(response=>{
//     console.log(response.data);

// });

// GET - Hace un pedido =>http://www.empezolafiesta.com  =index.html
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.slice(0,5));

//   });
// POST - Crea un recurso =>http://www.empezolafiesta.com => body
const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Nuevo Post",
    body: "SOY UN NUEVO POST",
    userId: 1,
  }),
};

// fetch("https://jsonplaceholder.typicode.com/posts", config)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// PUT - Actualizar un recurso => actualizar el perfil de usuario => body id
const configput = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "ACTUALIZACION",
    body: "Soy la actualizacion de un post",
    userId: 1,
  }),
};
fetch("https://jsonplaceholder.typicode.com/posts/1", configput)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
// PATCH - Actualizar un algo de un recurso = reset de password => body id
const configpatch = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Modificando el title",
    
  }),
};
fetch("https://jsonplaceholder.typicode.com/posts/1", configpatch)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// DELETE - elimina un recurso => id

*/