import { registrarActividad } from "./modules/manejo_errores.js"; // Importa la función de registro

// --- CASO 1: ÉXITO (Todas las propiedades presentes) ---
console.log("--- Caso 1: Actividad Válida ---");
const actividadValida = {
    nombre: "Reunión de planificación",
    fecha: "2025-12-05",
    // Propiedad extra que no afecta la validación
    duracion: "2 horas"
};

registrarActividad(actividadValida);

// --- CASO 2: ERROR (Falta la propiedad 'fecha') ---
console.log("\n==================================");
console.log("--- Caso 2: Actividad Inválida (Falta fecha) ---");
const actividadInvalidaFecha = {
    nombre: "Entrega de proyecto",
    prioridad: "Alta"
};

registrarActividad(actividadInvalidaFecha);


// --- CASO 3: ERROR (Falta la propiedad 'nombre') ---
console.log("\n==================================");
console.log("--- Caso 3: Actividad Inválida (Falta nombre) ---");
const actividadInvalidaNombre = {
    fecha: "2025-12-01",
    descripcion: "Revisar código"
};

registrarActividad(actividadInvalidaNombre);