import { agregarInventario } from "./modules/inventario"; // Importa la función de inventario

// Módulo para manejar entradas de teclado en un entorno Node.js
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Arreglo inicial de inventario
const inventarioInicial = ["cámara", "trípode", "micrófono"];

// Pedir el nuevo ítem al usuario
console.log("Inventario Actual:", inventarioInicial);
const nuevoItem = prompt(`Ingrese el nuevo ítem para el inventario: `);


// LLAMADA A LA FUNCIÓN
const inventarioFinal = agregarInventario(inventarioInicial, nuevoItem);


// MOSTRAR RESULTADOS Y VERIFICAR INMUTABILIDAD
console.log("\n--- Resultados ---");
console.log(`Inventario Inicial: ${inventarioInicial} (Tamaño: ${inventarioInicial.length})`);
console.log(`Inventario Final: ${inventarioFinal} (Tamaño: ${inventarioFinal.length})`);

// Muestra que el arreglo original no fue modificado
if (inventarioInicial !== inventarioFinal && inventarioInicial.length === 3) {
    console.log(`El arreglo original NO fue modificado (Inmutabilidad lograda).`);
}