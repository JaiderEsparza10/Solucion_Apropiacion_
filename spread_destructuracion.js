import { configurarUsuario } from "./modules/configuracion.js";

// Módulo para manejar entradas de teclado en un entorno Node.js
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Opciones por defecto (base)
const defaults = { tema: "claro", idioma: "es", notificaciones: true };

// Opciones personalizadas (sobrescriben la base)
const personalizadas = { tema: "oscuro", idioma: "en", fuente: "Arial" };

// --- LLAMADA A LA FUNCIÓN Y RESULTADOS ---

// 1. Combinar y obtener el idioma
const idiomaFinal = configurarUsuario(defaults, personalizadas);

console.log("--- Configuraciones ---");
console.log("Por Defecto:", defaults);
console.log("Personalizadas:", personalizadas);
console.log("-----------------------");

console.log(`El idioma resultante (destructurado) es: **${idiomaFinal}**`);

// Para mostrar la configuración combinada completa (esto sucede internamente en la función):
// NOTA: La variable 'configuracionFinal' en la función sería:
// { tema: "oscuro", idioma: "en", notificaciones: true, fuente: "Arial" }

// Verificación rápida:
if (idiomaFinal === personalizadas.idioma) {
    console.log("La configuración personalizada sobrescribió a la por defecto.");
}