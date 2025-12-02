import { calcularTotalPrimerProducto } from "./modules/ventas.js";

// Arreglo de datos de ventas anidados
const ventas = [
  { producto: "teclado", detalles: { precio: 50, unidades: 3 } }, // <-- USADO
  { producto: "mouse", detalles: { precio: 20, unidades: 5 } },
];

console.log("--- Análisis de Ventas ---");
console.log("Datos:", ventas);
console.log("--------------------------");

// Llamada a la función
const totalPrimerProducto = calcularTotalPrimerProducto(ventas);

// El resultado esperado es 50 (precio) * 3 (unidades) = 150
console.log(`✅ Total vendido del primer producto ("${ventas[0].producto}"): **$${totalPrimerProducto}**`);

// Verificación rápida del cálculo:
if (totalPrimerProducto === 150) {
    console.log("🎉 Cálculo correcto (Destructuración Anidada exitosa).");
}