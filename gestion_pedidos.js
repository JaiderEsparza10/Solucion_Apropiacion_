import { procesarPedidos } from "./modules/pedido.js";

import promptSync from 'prompt-sync';
const prompt = promptSync();

const pedido = {
    cliente : "Jaider Esparza",
    producto : "Liquido Frenos",
    cantidad : 20
}

const extra_01 = prompt(`Ingrese extra 1: `);
const extra_02 = prompt(`Ingrese extra 2: `);
const extra_03 = prompt(`Ingrese extra 3: `);


// DESTRUCTURACION
const obj = procesarPedidos(pedido, extra_01, extra_02, extra_03)

console.log(obj);


