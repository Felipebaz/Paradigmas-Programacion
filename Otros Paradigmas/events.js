const EventEmitter = require('events');

class SistemasVentas extends EventEmitter {
    constructor() {
        super();
        this.configurarEventos();
    }

    configurarEventos() {
        this.on('usuario_registrado', this.enviarBienvenida);
        this.on('pedido_realizado', this.procesarPedido);
        this.on('pago_completado', this.confirmarPago);
    }

    registrarUsuario(usuario) {
        // Lógica para registrar usuario
        this.emit('usuario_registrado', usuario);
    }

    realizarPedido(pedido) {
        // Lógica para realizar pedido
        this.emit('pedido_realizado', pedido);
    }

    completarPago(pago) {
        // Lógica para completar pago
        this.emit('pago_completado', pago);
    }

    enviarBienvenida(usuario) {
        console.log(`Bienvenido, ${usuario.nombre}! Gracias por registrarte.`);
    }
    
    procesarPedido(pedido) {
        console.log(`Procesando pedido #${pedido.id} para ${pedido.usuario}.`);
    }

    confirmarPago(pago) {
        console.log(`Pago de $${pago.monto} recibido para el pedido #${pago.pedidoId}.`);
    }
}