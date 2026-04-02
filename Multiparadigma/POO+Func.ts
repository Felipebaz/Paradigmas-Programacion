// Dominio con OO
class Producto {
    constructor(
        private id: string,
        private nombre: string,
        private precio: number  
    ){}
// Métodos que devuelven nuevas instancias (inmutable)
    conDescuento(porcentaje: number): Producto{
        return new Producto(
            this.id,
            this.nombre,
            this.precio * (1 - porcentaje / 100)
        );
    }
    obtenerPrecio(): number {return this.precio;}
    obtenerNombre(): string {return this.nombre;}
}

// Lógica de negocio con FP 
const aplicarDescuento = (productos: Producto[]) =>
    productos
        .filter(p => p.obtenerPrecio() > 100)
        .map(p => p.conDescuento(10));

const calcularTotal = (productos: Producto[]) =>
    productos.reduce((sum, p) => sum + p.obtenerPrecio(), 0);

// Uso combinado
const productos2: Producto[] = [
    new Producto("1", "Laptop", 1000),
    new Producto("2", "Mesa", 200),
    new Producto("3", "Mouse", 50)
];

const ConDescuento = aplicarDescuento(productos2);
const precioTotal = calcularTotal(ConDescuento);


