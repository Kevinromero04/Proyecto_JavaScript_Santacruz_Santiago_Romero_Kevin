const url_people = "https://swapi.dev/api/people/?page=";
const url_especies = "https://swapi.dev/api/species/?page=";
const url_vehiculos = "https://swapi.dev/api/vehicles/?page=";
const url_starchips = "https://swapi.dev/api/starships/?page=";
const url_planets = "https://swapi.dev/api/planets/?page=";
const url_img_per = "https://starwars-visualguide.com/assets/img/characters/"; // Base de URL para las imágenes
const url_img_especies = "https://starwars-visualguide.com/assets/img/species/"
const url_img_vehiculos = "https://starwars-visualguide.com/assets/img/vehicles/"
const url_img_starships = "https://starwars-visualguide.com/assets/img/starships/"
const url_img_planets = "https://starwars-visualguide.com/assets/img/planets/"


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
    const lista3 = document.querySelector(".solucion");
    lista3.innerHTML = "";
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 10; numeral++) {
      let res = await fetch(`${url_people}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((personaje) => {
        
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        
        const urlImagen = `${url_img_per}${personaje.url.split('/')[5]}.jpg`; 
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Personaje ${personaje.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `${personaje.name}<br>Masa: ${personaje.mass}`;

        
        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);


        lista2.appendChild(creador_ul);
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
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_vehiculos}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((personaje) => {
        
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        
        const urlImagen = `${url_img_vehiculos}${personaje.url.split('/')[5]}.jpg`; 
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Personaje ${personaje.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `${personaje.name}<br>Masa: ${personaje.mass}`;

        
        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);


        lista2.appendChild(creador_ul);
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
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_especies}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((personaje) => {
        
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        
        const urlImagen = `${url_img_especies}${personaje.url.split('/')[5]}.jpg`; 
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Personaje ${personaje.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `${personaje.name}<br>Masa: ${personaje.mass}`;

        
        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);


        lista2.appendChild(creador_ul);
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
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_planets}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((personaje) => {
        
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        
        const urlImagen = `${url_img_planets}${personaje.url.split('/')[5]}.jpg`; 
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Personaje ${personaje.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `${personaje.name}<br>Masa: ${personaje.mass}`;

        
        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);


        lista2.appendChild(creador_ul);
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
var ship = document.querySelector("#ship");
ship.addEventListener("click", todos_starchips);

async function todos_starchips() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  const lista3 = document.querySelector(".solucion");
  lista3.innerHTML = "";
  lista3.innerHTML = `
    <div class="submenus">
        <nav class="menus">
            <a id="pasajero"  href="#">Pasajeros </a>
            <a href="#">opc 4 </a>
            <a href="#">opc 5 </a>
        </nav>
    </div>`;
  var psaje = document.querySelector("#pasajero");
  if (psaje) {
    psaje.addEventListener("click", pasajeros);
  }
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
      completado.forEach((personaje) => {
        
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        
        const urlImagen = `${url_img_starships}${personaje.url.split('/')[5]}.jpg`; 
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Personaje ${personaje.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `${personaje.name}<br>Masa: ${personaje.mass}`;

        
        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);


        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    star = false;
  }
}

var pasa = false;

async function pasajeros() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
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
      completado.forEach((personaje) => {
        
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        
        const urlImagen = `${url_img_starships}${personaje.url.split('/')[5]}.jpg`; 
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Personaje ${personaje.name}`;

        const creador_li = document.createElement("li");
        creador_ul.innerHTML = `${personaje.name}<br>Pasajeros: ${personaje.passengers}`;

        
        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);


        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    pasa = false;
  }
}

var peli = false;
var peliculas = document.querySelector("#peliculas");
peliculas.addEventListener("click", todos_pelicula);

//cambiar nombre de las variables de personajes las que se usan para entrar al json y cambiar el menu de arriba, terminar la funcion de films y añardirle sub opciones como las otras mas que faltan pos data: ya no aguanto mas