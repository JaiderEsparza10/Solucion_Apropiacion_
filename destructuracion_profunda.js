import { actualizarPerfil } from "./modules/perfil.js";

// Módulo para manejar entradas de teclado en un entorno Node.js
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Perfil base
const perfilOriginal = {
    nombre: "Jaider Esparza",
    edad: 19,
    ciudad: "Santander",
    ocupacion: "Desarrollador"
};

// Datos parciales a actualizar (pasados como argumentos separados)
const dato1 = { edad: 29 }; // Actualiza la edad
const dato2 = { ciudad: "Medellín", telefono: "300-1234567" }; // Actualiza ciudad y añade teléfono
const dato3 = { ocupacion: "Líder de Diseño" }; // Sobrescribe ocupación

// --- LLAMADA A LA FUNCIÓN ---
// Aquí, dato1, dato2 y dato3 se recolectan por el operador REST en la función.
const perfilActualizado = actualizarPerfil(perfilOriginal, dato1, dato2, dato3);

console.log("--- Actualización de Perfil ---");
console.log("Perfil Original:", perfilOriginal);
console.log("---------------------------------");
console.log("Datos Aplicados:", [dato1, dato2, dato3]);
console.log("---------------------------------");
console.log("🎉 Nuevo Perfil Completo:");
console.log(perfilActualizado);
console.log("---------------------------------");


// Verificación de Inmutabilidad:
if (perfilOriginal.edad === 28) {
    console.log("El perfil original no fue modificado (Inmutabilidad lograda).");
}