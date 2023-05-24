console.log("\nBienvenido, en el siguiente programa podrá transformar la temperatura a la unidad que necesite, usando escalas celsius, kelvin y fahrenheit\n");


var opcion = 0;
var temperaturaInicial = 0;

function temperatura() {
  console.log("Seleccione una opción:");
  console.log("1. Convertir de °C a °F");
  console.log("2. Convertir de °C a K");
  console.log("3. Convertir de °F a °C");
  console.log("4. Convertir de °F a K");
  console.log("5. Convertir de K a °C");
  console.log("6. Convertir de K a °F");
  var opcion;

  do {
    opcion = parseInt(prompt("Ingrese el número de opción deseado (1-6):"));

    if (opcion < 1 || opcion > 6) {
      console.log("Opción inválida. Por favor, ingrese una opción válida (1-6).");
    }
  } while (opcion < 1 || opcion > 6);

  var temperaturaInicial = parseInt(prompt("Ingrese la temperatura: "));

  if (opcion == 1) {
    var temperaturaFinal = (temperaturaInicial * (9/5) + 32 + "°F");
    return temperaturaFinal;
  } else if (opcion == 2) {
    var temperaturaFinal = (temperaturaInicial + 273.15 + "K");
    return temperaturaFinal;
  } else if (opcion == 3) {
    var temperaturaFinal = (((temperaturaInicial - 32) * (5/9)) + "°C");
    return temperaturaFinal;
  } else if (opcion == 4) {
    var temperaturaFinal = (((temperaturaInicial - 32) * (5/9) + 273.15) + "K");
    return temperaturaFinal;
  } else if (opcion == 5) {
    var temperaturaFinal = ((temperaturaInicial - 273.15) + "°C");
    return temperaturaFinal;
  } else if (opcion == 6) {
    var temperaturaFinal = (((temperaturaInicial - 273.15) * (9/5)) + 32 + "°C");
    return temperaturaFinal;
  }
}
console.log(temperatura(opcion, temperaturaInicial));

console.log("Para volver a calcular, presione 1");
console.log("Para salir de la consola, presione Enter")

opcionDos = parseInt(prompt("Ingrese el número de opción deseado:"));
                         
  if (opcionDos == 1){
    console.log(temperatura(opcion, temperaturaInicial))
  }else{ 
    console.log("Adios");
  }


