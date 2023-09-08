// @ts-nocheck
import { writable } from 'svelte/store';


export const userIsValid = writable(false);
export const carrito = writable([]);


export class Carrito {
    deleteProduct(id) {
        carrito.update((value) => {
            const item = value.find((item) => item.id === id);
            if (item.cantidad >= 2) {
                item.cantidad--;
                return [...value];
            } else {
                return value.filter((item) => item.id !== id);
            }
        });
    }
    vaciarCarrito() {
        carrito.update(() => {
            return [];
        });
    }

    carritoTotal() {
        let total = 0;
        carrito.subscribe((value) => {
            value.forEach((item) => {
                total += item.precio * item.cantidad;
            });
        }
        );
        return total;

    }
    comprar(itemComprado) {
        carrito.update((/** @type {any} */ value) => {
            const item = value.find((item) => item.id === itemComprado.id);
            if (item) {
                item.cantidad++;
                return [...value];
            } else {
                console.log(value);
                return [...value, { ...itemComprado, cantidad: 1 }];
            }
        });
    }
}
