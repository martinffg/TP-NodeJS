// Alumno: MARTÍN FEDERICO FERNÁNDEZ GAMEN
// PRE-ENTREGA CURSO BACKEND/NODEJS - COMISIÓN: 25024

// Defino la URI de la Fak Api
const URI = `https://fakestoreapi.com/products`;

// Defino la función asíncrona
const fetchDatos = async (uri,config) => {
  try {
    // cambia el fetch según el parámetro config
    if (config == "") {
      const response = await fetch(uri);
      processResponse(response);
    } else {
      const response = await fetch(uri,config);
      processResponse(response);
    }
  } catch (error) {
    console.error(error);
  }

  // función extraida para modularizar la validación de la respuesta http y su procesamiento  
  async function processResponse(response) {
    // analizo la respuesta http, si es 200 (ok) procedo con la impresión de datos.
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
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
        const configVacia = ""
        if (comandos[0] == "products") {
          console.log("\n\n\nPresentando Todo el Catálogo de Productos\n"); 
          fetchDatos(URI,configVacia)
        } else if (comandos[0].includes("products/")){
          console.log("\n\n\nBuscando el producto Id: "+ comandos[0].slice(9) + " en el Catálogo de Productos\n");
          fetchDatos(URI + comandos[0].slice(8),configVacia)
        } else {
          console.log("Parámetros incorrectos, no se pueden listar el set de productos requerido.  Consulte documentación de la API en Readme.md")
        }
        break
    case "POST":
        console.log("Creando Nuevo Producto:" , comandos[1] );
        const configPost = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: comandos[1],
            price: comandos[2],
            category: comandos[3],
            
          }),
        };
        fetchDatos(URI + comandos[0].slice(8),configPost);
        break
    case "DELETE":
        console.log("Producto eliminado.  Su id era" , comandos[0].slice(9));
        if (comandos[0].includes("products/")){
          const configDelete = { 
            method: 'DELETE',
            headers: { "Content-Type": "application/json"}
          }
          console.log("\n\n\nBorrando el producto Id: "+ comandos[0].slice(9) + " del Catálogo de Productos\n");
          fetchDatos(URI + comandos[0].slice(8),configDelete)
        } else {
          console.log("Parámetros incorrectos, no se puede borrar el producto. Consulte documentación de la API en Readme.md")
        }
        /*
        fetch(URI + comandos[0].slice(8), {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => console.log(data));
        */
        break
    default:
        break;
}