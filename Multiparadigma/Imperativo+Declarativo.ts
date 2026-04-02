//Imperativo para algoritmos especificos
function busquedaBinaria(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1; // No encontrado
}

// Declarativo para consultas de datos
const buscarProducto = (productos: Producto[], criterios: any) =>
    productos
        .filter(p => criterios.minPrecio ? p.obtenerPrecio() >= criterios.minPrecio : true)
        .filter(p => criterios.nombre ? p.obtenerNombre().includes(criterios.nombre) : true)
        .sort((a, b) => a.obtenerPrecio() - b.obtenerPrecio());

