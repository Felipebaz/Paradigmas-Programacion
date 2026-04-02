// Funciones puras: son aquellas que no tienen efectos secundarios y siempre devuelven el mismo resultado para los mismos argumentos.

// pura
const sumar = (a: number, b:number): number => a + b;

// impura
let contador = 0;
const incrementar = (): number => ++contador;

// Inmutabilidad: los datos no pueden ser modificados después de su creación. En lugar de modificar un objeto, se crea uno nuevo con los cambios deseados.

// Mutable  
const nums = [1, 2, 3];
nums.push(4); // Modifica el array original

//Inmutable 
const nums2 = [...nums, 4]; // Crea un nuevo array con el nuevo elemento
const actualizado = nums2.map(num => num * 2); // Crea un nuevo array con los valores multiplicados por 2

// Funciones de orden superior: Reciben / devuelven otras funciones. Esto permite la composición de funciones y la creación de funciones más flexibles y reutilizables.

const aplicar = (arr: number[], fn: (n: number) => number) => arr.map(fn);
const duplicar = (n: number) => n * 2;
const resultado = aplicar ([1, 2, 3], duplicar); // resultado: [2, 4, 6]

//currying: es una técnica que consiste en transformar una función que toma múltiples argumentos en una secuencia de funciones que toman un solo argumento.
const multiplicar = (a: number) => (b: number) => a * b;
const por3 = multiplicar(3);
console.log(por3(5)); // resultado: 15

//Composición : combinar funciones simples para crear funciones más complejas. Esto se puede lograr utilizando funciones de orden superior.
const agregarIVA = (precio: number): number => precio * 1.21;
const descuento = (precio: number): number => precio * 0.9;
const redondear = (precio: number): number => Math.round(precio * 100) / 100;

// Composición de funciones
const pipe = <T>(...fns: Array<(arg: T) => T>) => 
(value: T) => fns.reduce((acc, fn) => fn(acc), value);

const calcularPrecioFinal = pipe(agregarIVA, descuento, redondear);
console.log(calcularPrecioFinal(100)); // resultado: 108.9  