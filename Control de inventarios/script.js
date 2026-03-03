class Producto {
    constructor(codigo, nombre, marca, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.cantidad = Number(cantidad);
        this.costo = Number(costo);
    }
}

class Inventario {
    constructor() {
        this.productos = new Map();
    }

    agregar(producto) {
        if (this.productos.has(producto.codigo)) {
            throw new Error(`Error: El código '${producto.codigo}' ya está registrado.`);
        }

        this.productos.set(producto.codigo, producto);
        console.log("Inventario actualizado:", this.productos);
    }
}

const miInventario = new Inventario();

const form = document.getElementById('product-form');
const toastContainer = document.getElementById('toast-container');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const codigo = document.getElementById('codigo').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const marca = document.getElementById('marca').value.trim();
    const cantidad = document.getElementById('cantidad').value;
    const costo = document.getElementById('costo').value;

    if (Number(cantidad) <= 0) {
        mostrarMensaje("La cantidad debe ser mayor a 0", "error");
        return;
    }
    if (Number(costo) <= 0) {
        mostrarMensaje("El costo debe ser mayor a 0", "error");
        return;
    }

    const nuevoProducto = new Producto(codigo, nombre, marca, cantidad, costo);

    try {
        miInventario.agregar(nuevoProducto);
        mostrarMensaje("Producto agregado exitosamente.", "success");
        form.reset();
    } catch (error) {
        mostrarMensaje(error.message, "error");
    }
});

function mostrarMensaje(mensaje, tipo) {
    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    toast.textContent = mensaje;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}