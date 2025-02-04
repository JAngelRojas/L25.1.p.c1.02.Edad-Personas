/*3. EDAD PERSONAS 
3. Conociendo la edad de varias personas, indicar la edad promedio. 
Ej. Edades de las personas es: 15, 14, 19, 20, 16 y 18 
La salida requerida presenta el siguiente formato: 
La edad promedio es 17*/ 
import Cl_edad from "./Cl_edad.js";
import Cl_edades from "./Cl_edades.js";

let Edad1 = new Cl_edades(15); 
let Edad2 = new Cl_edades(14); 
let Edad3 = new Cl_edades(19); 
let Edad4 = new Cl_edades(20); 
let Edad5 = new Cl_edades(16); 
let Edad6 = new Cl_edades(18); 

let Edades = new Cl_edad(); 
Edades.procesarEdades(Edad1); 
Edades.procesarEdades(Edad2); 
Edades.procesarEdades(Edad3); 
Edades.procesarEdades(Edad4); 
Edades.procesarEdades(Edad5); 
Edades.procesarEdades(Edad6); 
let salida = document.getElementById("salida");
salida.innerHTML = `<br> La edad promedio es ${Edades.calcularPromedio()}`