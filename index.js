
let lista = ["Sal", "Leche", "Arroz"];

function logItems(arreglo) {
    arreglo.forEach((producto, indice) => {
        console.log(`${indice}: ${producto}`);
    });
}

let comando = "";

while (comando !== "salir") {
    comando = prompt(
        "Lista de Súper\n\nEscribí un comando: nuevo, listar, borrar o salir"
    );

    if (comando === null) {
        break;
    }

    comando = comando.toLowerCase().trim();

    if (comando === "nuevo") {
        let producto = prompt("¿Qué producto querés agregar?");

        if (producto !== null && producto.trim() !== "") {
            lista.push(producto.trim());
            console.log("Producto agregado: " + producto);
        }

    } else if (comando === "listar") {
        logItems(lista);

    } else if (comando === "borrar") {
        logItems(lista);

        let indice = Number(prompt("Ingresá el índice del producto que querés borrar:"));

        if (
            Number.isInteger(indice) &&
            indice >= 0 &&
            indice < lista.length
        ) {
            let eliminado = lista.splice(indice, 1);
            console.log("Producto eliminado: " + eliminado[0]);
        } else {
            console.log("Índice inválido.");
        }

    } else if (comando !== "salir") {
        console.log("Comando no válido.");
    }
}

console.log("Programa finalizado.");
