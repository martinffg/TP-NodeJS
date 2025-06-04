// Alumno: MARTÍN FEDERICO FERNÁNDEZ GAMEN
// PRE-ENTREGA CURSO BACKEND/NODEJS - COMISIÓN: 25024

// Defino la URI de la Fak Api
const URI = `https://fakestoreapi.com/products`;

// Defino la función asíncrona
const fetchDatos = async (uri) => {
  try {
    const response = await fetch(uri);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};


// fetchDatos(URI)  // con esto probé que la funcion asyncrona trahía los datos.

// Manipulo los argumentos de la invocación del módulo
const argumentos = process.argv.slice(2); // Elimino los dos primeros elemendos de argv,  que son las rutas al binario de node y al script index.js
//console.log(argumentos);

// Hago destructuring y uso spread de comandos para la asignación
const [comandoHttp, ...comandos] = argumentos;

//console.log(comandoHttp);
//console.log(comandos[0]);

switch(comandoHttp){
    case "GET":
        if (comandos[0] == "products") {
          console.log("\n\n\nPresentando Todo el Catálogo de Productos\n"); 
          fetchDatos(URI)
        } else if (comandos[0].includes("products/")){
          console.log("\n\n\nBuscando el producto Id: "+ comandos[0].slice(9) + " en el Catálogo de Productos\n");
          fetchDatos(URI + comandos[0].slice(8))
        } 
        break
    case "POST":
        console.log("Producto creado:" , comandos[0] );
        break
    case "DELETE":
        console.log("Producto eliminado.  Su id era" , comandos[0].slice(9));
        break
    default:
        break;
}


/*

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


// DELETE - elimina un recurso => id

*/