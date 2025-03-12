// Array para almacenar los nombres de los amigos
let amigos = [];

// Capturar elementos del DOM
const inputNombre = document.getElementById("inputNombre");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const botonAgregar = document.getElementById("botonAgregar");
const botonSortear = document.getElementById("botonSortear");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim(); // Eliminar espacios extras

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    actualizarLista();   // Actualizar la lista en pantalla
    inputNombre.value = ""; // Limpiar el campo de texto
}

// Función para actualizar la lista en el DOM
function actualizarLista() {
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un nombre de la lista
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li><strong>🎉 ${amigoSorteado} es el amigo secreto! 🎁</strong></li>`;
}

// Asignar eventos con `addEventListener`
botonAgregar.addEventListener("click", agregarAmigo);
botonSortear.addEventListener("click", sortearAmigo);


