const url_people = "https://swapi.dev/api/people/?page=";
const url_especies = "https://swapi.dev/api/species/?page=";
const url_vehiculos = "https://swapi.dev/api/vehicles/?page=";
const url_starchips = "https://swapi.dev/api/starships/?page=";
const url_planets = "https://swapi.dev/api/planets/?page=";
const url_img_per = "https://starwars-visualguide.com/assets/img/films/5.jpg";

let cargando = false;
let abortController; // Controlador de abortos para cada solicitud



var nn = document.querySelector("#jaja");
nn.addEventListener("click", buscar_uno_personaje22);


var especi = false;
var espe = document.querySelector("#esp");
espe.addEventListener("click", todos_especies);










async function buscar_uno_personaje22() {
    if (cargando) return;

    if (abortController) {
        abortController.abort();
    }
    abortController = new AbortController();
    const signal = abortController.signal;
    cargando = true;
    try {
        const lista3 = document.querySelector(".solucion")
        lista3.innerHTML = ""
        const lista2 = document.querySelector(".contenedor");
        lista2.innerHTML = '';
        for (let numeral = 1; numeral < 10; numeral++) {
            let res = await fetch(`${url_people}${numeral}`, { signal });
            let respuesta = await res.json();

            const completado = respuesta.results;
            completado.forEach(muerte => {


                const contenedorNombre = document.createElement("ul");
                contenedorNombre.id = "uno_por_uno";
                const nombreElemento = document.createElement("li");

                contenedorNombre.innerHTML = `${muerte.name}<br>masa: ${muerte.mass}`;
                contenedorNombre.appendChild(nombreElemento);
                lista2.appendChild(contenedorNombre);
            });
        }
    } catch (error) {
        console.error(error, "Algo salió mal");
    } finally {
        cargando = false;
    }
}



var vhl = false;
var car = document.querySelector("#veh");
car.addEventListener("click", todos_vehiculos);


async function todos_vehiculos() {
    if (vhl) return;

    if (abortController) {
        abortController.abort();
    }
    abortController = new AbortController();
    const signal = abortController.signal;
    vhl = true;
    try {
        const lista2 = document.querySelector(".contenedor");
        lista2.innerHTML = '';
        for (let numeral = 1; numeral < 5; numeral++) {
            let res = await fetch(`${url_vehiculos}${numeral}`, { signal });
            let respuesta = await res.json();

            const completado = respuesta.results;
            completado.forEach(muerte => {


                const contenedorNombre = document.createElement("ul");
                contenedorNombre.id = "uno_por_uno";
                const nombreElemento = document.createElement("li");

                contenedorNombre.innerHTML = `${muerte.name}<br>modelo: ${muerte.model}`;
                contenedorNombre.appendChild(nombreElemento);
                lista2.appendChild(contenedorNombre);
            });
        }
    } catch (error) {
        console.error(error, "Algo salió mal");
    } finally {
        vhl = false;
    }
}





async function todos_especies() {
    if (especi) return;

    if (abortController) {
        abortController.abort();
    }
    abortController = new AbortController();
    const signal = abortController.signal;
    especi = true;
    try {
        const lista2 = document.querySelector(".contenedor");
        lista2.innerHTML = '';
        for (let numeral = 1; numeral < 5; numeral++) {
            let res = await fetch(`${url_especies}${numeral}`, { signal });
            let respuesta = await res.json();

            const completado = respuesta.results;
            completado.forEach(muerte => {


                const contenedorNombre = document.createElement("ul");
                contenedorNombre.id = "uno_por_uno";
                const nombreElemento = document.createElement("li");

                contenedorNombre.innerHTML = `${muerte.name}<br>clasificacion: ${muerte.classification}`;
                contenedorNombre.appendChild(nombreElemento);
                lista2.appendChild(contenedorNombre);
            });
        }
    } catch (error) {
        console.error(error, "Algo salió mal");
    } finally {
        especi = false;
    }
}




var plan = false;
var planet = document.querySelector("#planets");
planet.addEventListener("click", todos_planets);


async function todos_planets() {
    if (plan) return;

    if (abortController) {
        abortController.abort();
    }
    abortController = new AbortController();
    const signal = abortController.signal;
    plan = true;
    try {
        const lista2 = document.querySelector(".contenedor");
        lista2.innerHTML = '';
        for (let numeral = 1; numeral < 5; numeral++) {
            let res = await fetch(`${url_planets}${numeral}`, { signal });
            let respuesta = await res.json();

            const completado = respuesta.results;
            completado.forEach(muerte => {


                const contenedorNombre = document.createElement("ul");
                contenedorNombre.id = "uno_por_uno";
                const nombreElemento = document.createElement("li");

                contenedorNombre.innerHTML = `${muerte.name}<br>clima: ${muerte.climate}`;
                contenedorNombre.appendChild(nombreElemento);
                lista2.appendChild(contenedorNombre);
            });
        }
    } catch (error) {
        console.error(error, "Algo salió mal");
    } finally {
        plan = false;
    }
}


//hacer que aparazcan los planetas




var star = false;
var ships = document.querySelector("#ship");
ships.addEventListener("click", todos_starchips);
async function todos_starchips() {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = '';
    const lista3 = document.querySelector(".solucion")
    lista3.innerHTML = ""
    lista3.innerHTML = `
    <div class="submenus">
        <nav class="menus">
            <a id="pasajero"  href="#">Pasajeros </a>
            <a href="#">opc 4 </a>
            <a href="#">opc 2 </a>
            <a href="#">opc 4 </a>
            <a href="#">opc 5 </a>
        </nav>
    </div>`;
    if (star) return;

    if (abortController) {
        abortController.abort();
    }
    abortController = new AbortController();
    const signal = abortController.signal;
    star = true;
    try {
        for (let numeral = 1; numeral < 4; numeral++) {
            let res = await fetch(`${url_starchips}${numeral}`, { signal });
            let respuesta = await res.json();

            const completado = respuesta.results;
            completado.forEach(muerte => {


                const contenedorNombre = document.createElement("ul");
                contenedorNombre.id = "uno_por_uno";
                const nombreElemento = document.createElement("li");

                contenedorNombre.innerHTML = `${muerte.name}<br>Modelo: ${muerte.model}`;
                contenedorNombre.appendChild(nombreElemento);
                lista2.appendChild(contenedorNombre);
            });
        }
    } catch (error) {
        console.error(error, "Algo salió mal");
    } finally {
        star = false;
    }
}
/*
var pasa = false;
var psaje = document.querySelector("#pasajero");
psaje.addEventListener("click", pasajeros);
async function pasajeros() {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = '';
    if (pasa) return;

    if (abortController) {
        abortController.abort();
    }
    abortController = new AbortController();
    const signal = abortController.signal;
    pasa = true;
    try {
        for (let numeral = 1; numeral < 4; numeral++) {
            
            let res = await fetch(`${url_starchips}${numeral}`, { signal });
            let respuesta = await res.json();

            const completado = respuesta.results;
            completado.forEach(muerte => {


                const contenedorNombre = document.createElement("ul");
                contenedorNombre.id = "uno_por_uno";
                const nombreElemento = document.createElement("li");

                contenedorNombre.innerHTML = `${muerte.name}<br>Pasajeros: ${muerte.passengers}`;
                contenedorNombre.appendChild(nombreElemento);
                lista2.appendChild(contenedorNombre);
            });
        }
    } catch (error) {
        console.error(error, "Algo salió mal");
    } finally {
        pasa = false;
    }
}
*/

var peli = false;
var peliculas = document.querySelector("#peliculas");
peliculas.addEventListener("click", todos_pelicula);


async function todos_pelicula() {
    if (peli) return;

    if (abortController) {
        abortController.abort();
    }
    abortController = new AbortController();
    const signal = abortController.signal;
    peli = true;

    try {
        const lista2 = document.querySelector(".contenedor");
        lista2.innerHTML = ''; // Limpiar el contenido previo

        for (let numeral = 1; numeral < 83; numeral++) {
            if (numeral === 17) {
                numeral +=1
            }
            const urlImagen = `https://starwars-visualguide.com/assets/img/characters/${numeral}.jpg`;

            // Crear un elemento de imagen y agregarlo al contenedor
            const img = document.createElement('img');
            img.src = urlImagen;
            img.alt = `Personaje ${numeral}`;
            img.style.width = '100px'; // Ajustar el tamaño según sea necesario


            lista2.appendChild(img);
        }
    } catch (error) {
        console.error(error, "Algo salió mal");
    } finally {
        peli = false;
    }
}






