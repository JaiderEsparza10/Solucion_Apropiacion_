import { fusionarColecciones } from "./modules/fusion.js";

import promptSync from 'prompt-sync';
const prompt = promptSync();

// --- CASO 1: ÉXITO (Ambas son arreglos) ---
console.log("--- Caso 1: Arreglos Válidos ---");
const productos = ["PC", "Monitor"];
const accesorios = ["Teclado", "Mouse", "Webcam"];

const coleccionA = fusionarColecciones(productos, accesorios);

if (coleccionA) {
    console.log("Colección Final:", coleccionA);
    console.log(`Tamaño de la Colección Final: ${coleccionA.length}`);
}

console.log("\n==================================");

// --- CASO 2: ERROR (Una entrada es un objeto, no un arreglo) ---
console.log("--- Caso 2: Entrada Inválida (Objeto) ---");
const datosPerfil = { nombre: "Juan", edad: 30 }; // ¡Esto no es un arreglo!

const coleccionB = fusionarColecciones(productos, datosPerfil);

if (!coleccionB) {
    console.log("El proceso de fusión no pudo completarse.");
}

console.log("\n==================================");

// --- CASO 3: ÉXITO (Verificación de Inmutabilidad) ---
console.log("--- Verificación de Inmutabilidad ---");
console.log(`Lista 1 Original (Productos): ${productos}`);
// Si el arreglo 'productos' no fue mutado (su contenido es el mismo):
if (productos.length === 2) {
    console.log("Las listas originales (productos) NO fueron mutadas.");
}