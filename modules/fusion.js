export function fusionarColecciones(lista1, lista2) {
    try {
        // 1. Validación de tipo usando Array.isArray()
        // Verificamos que ambas entradas sean realmente arreglos.
        if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
        // Si alguna no es un arreglo, lanzamos un error personalizado.
        throw new Error("Error de Validación: Ambas entradas deben ser arreglos (colecciones) para poder fusionarse.");
    }

    // 2. Fusión Inmutable usando el operador Spread
    // Creamos un nuevo arreglo que contiene todos los elementos de lista1 y luego todos los de lista2.
    const coleccionFinal = [...lista1, ...lista2];

    console.log(`\Fusión Exitosa: Las ${lista1.length + lista2.length} colecciones se combinaron correctamente.`);

    // 3. Retornamos la colección final (nueva e inmutable)
    return coleccionFinal;

    } catch (error) {
        // 4. Manejo del Error
        console.error(`Fallo en la Fusión:`);
        console.error(error.message);
        // Retornamos null para indicar que la operación falló.
        return null;
    }
}