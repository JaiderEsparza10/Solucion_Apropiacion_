import { evaluar } from "./modules/evaluacion.js";

// Módulo para manejar entradas de teclado en un entorno Node.js
import promptSync from 'prompt-sync';
const prompt = promptSync();

// --- CASO 1: ÉXITO (Todos los valores numéricos) ---
console.log("--- Caso 1: Datos Válidos ---");
const resultado1 = evaluar(10, 20, 30, 40, 50);

if (resultado1 !== null) {
    console.log(`Promedio Calculado: **${resultado1}**`); // Esperado: 30
}

console.log("\n==================================");

// --- CASO 2: ERROR (Contiene un valor no numérico) ---
console.log("--- Caso 2: Datos Inválidos ---");
const resultado2 = evaluar(10, 20, "treinta", 40, 50);

if (resultado2 === null) {
    console.log("El promedio no pudo ser calculado debido al error.");
}

console.log("\n==================================");

// --- CASO 3: ERROR (Contiene un valor undefined) ---
console.log("--- Caso 3: Datos Inválidos (undefined) ---");
const resultado3 = evaluar(5, 15, undefined, 25);

if (resultado3 === null) {
    console.log("El promedio no pudo ser calculado debido al error.");
}