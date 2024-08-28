const url_people = "https://swapi.dev/api/people/?page=";
const url_especies = "https://swapi.dev/api/species/?page=";
const url_vehiculos = "https://swapi.dev/api/vehicles/?page=";
const url_starchips = "https://www.swapi.tech/api/starships/";
const url_planets = "https://swapi.dev/api/planets/?page=";


let cargando = false;
let abortController; // Controlador de abortos para cada solicitud



var nn = document.querySelector("#jaja");
nn.addEventListener("click", buscar_uno_personaje22);


var especi = false;
var espe = document.querySelector("#esp");
espe.addEventListener("click", todos_especies);



var vhl = false;
var car = document.querySelector("#veh");
car.addEventListener("click", todos_vehiculos);



var plan = false;
var planet = document.querySelector("#planets");
car.addEventListener("click", todos_planets);


async function buscar_uno_personaje22() {
    if (cargando) return;

    if (abortController) {
        abortController.abort();
    }
    abortController = new AbortController();
    const signal = abortController.signal;
    cargando = true;
    try {
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

                contenedorNombre.innerHTML = `${muerte.name}<br>clasificacion: ${muerte.classification}`;
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