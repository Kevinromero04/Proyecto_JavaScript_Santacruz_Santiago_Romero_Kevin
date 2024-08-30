const url_people = "https://swapi.dev/api/people/?page=";
const url_especies = "https://swapi.dev/api/species/?page=";
const url_vehiculos = "https://swapi.dev/api/vehicles/?page=";
const url_starchips = "https://swapi.dev/api/starships/?page=";
const url_planets = "https://swapi.dev/api/planets/?page=";
const url_films = "https://swapi.dev/api/films/?page=";

const url_img_per = "https://starwars-visualguide.com/assets/img/characters/"; // Base de URL para las imágenes
const url_img_especies = "https://starwars-visualguide.com/assets/img/species/";
const url_img_vehiculos =
  "https://starwars-visualguide.com/assets/img/vehicles/";
const url_img_starships =
  "https://starwars-visualguide.com/assets/img/starships/";
const url_img_planets = "https://starwars-visualguide.com/assets/img/planets/";
const url_img_films = "https://starwars-visualguide.com/assets/img/films/";
let cargando = false;
let abortController; // Controlador de abortos para cada solicitud

var nn = document.querySelector("#jaja");
nn.addEventListener("click", todos_personajes);

var especi = false;
var espe = document.querySelector("#esp");
espe.addEventListener("click", todos_especies);

async function todos_personajes() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  const lista3 = document.querySelector(".solucion");
  lista3.innerHTML = "";
  lista3.innerHTML = `
    <div class="submenus">
        <nav class="menus">
            <a id="color_ojos"  href="#">Color de pelo y ojos </a>
            <a id="peso_e" href="#">Peso y Estatura </a>
            <a id="C_piel_g" href="#">Color de piel y genero </a>
        </nav>
    </div>`;
  let ojos = document.querySelector("#color_ojos");
  if (ojos) {
    ojos.addEventListener("click", color_pelo_ojos);
  }
  let peso = document.querySelector("#peso_e");
  if (peso) {
    peso.addEventListener("click", peso_estatura);
  }
  let piel = document.querySelector("#C_piel_g");
  if (piel) {
    piel.addEventListener("click", color_piel_genero);
  }
  if (cargando) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  cargando = true;
  try {
    for (let numeral = 1; numeral < 10; numeral++) {
      let res = await fetch(`${url_people}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((personaje) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_per}${personaje.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Personaje ${personaje.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Personaje: ${personaje.name}<br>Año de nacimiento: ${personaje.birth_year}`;

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
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  const lista3 = document.querySelector(".solucion");
  lista3.innerHTML = "";
  lista3.innerHTML = `
    <div class="submenus">
        <nav class="menus">
            <a id="modelo_manu"  href="#">Modelo y manufactura</a>
            <a id="long_costo" href="#">Longitud y costo </a>
            <a id="personal_pasajeros" href="#">personal para pilotear y pasajeros </a>
            <a id="Velocidad_peso" href="#">Velocidad atmosferica y peso maximo</a>
            <a id="Cap_consume" href="#">Capacidad de cosumibles </a>
        </nav>
    </div>`;
  let modelo = document.querySelector("#modelo_manu");
  if (modelo) {
    modelo.addEventListener("click", modelo_manufactura);
  }
  let costo = document.querySelector("#long_costo");
  if (costo) {
    costo.addEventListener("click", longitud_costo);
  }
  let personal = document.querySelector("#personal_pasajeros");
  if (personal) {
    personal.addEventListener("click", personal_pasajeros);
  }
  let velocidad = document.querySelector("#Velocidad_peso");
  if (velocidad) {
    velocidad.addEventListener("click", velocidad_peso);
  }
  let consumibles = document.querySelector("#Cap_consume");
  if (consumibles) {
    consumibles.addEventListener("click", capacidad_consumible);
  }

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
      completado.forEach((vehiculo) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_vehiculos}${
          vehiculo.url.split("/")[5]
        }.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `vehiculo ${vehiculo.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Vehiculo: ${vehiculo.name}<br>Clase: ${vehiculo.vehicle_class}`;

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
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  const lista3 = document.querySelector(".solucion");
  lista3.innerHTML = "";
  lista3.innerHTML = `
    <div class="submenus">
        <nav class="menus">
            <a id="Desig_altura"  href="#">Designacion y altura en centimetros</a>
            <a id="Vida_ojos" href="#">Esperanza de vida y color de ojos </a>
            <a id="Pelo_cuerpo_idioma" href="#">Color de pelo, cuerpo y lenguaje</a>
        </nav>
    </div>`;
  let designacion = document.querySelector("#Desig_altura");
  if (designacion) {
    designacion.addEventListener("click", designacion_altura);
  }
  let ojos = document.querySelector("#Vida_ojos");
  if (ojos) {
    ojos.addEventListener("click", esp_vida_ojos);
  }
  let idioma = document.querySelector("#Pelo_cuerpo_idioma");
  if (idioma) {
    idioma.addEventListener("click", color_cuerpo_pelo_idioma);
  }
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
      completado.forEach((especie) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_especies}${especie.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `La especie: ${especie.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Especie : ${especie.name}<br>Clasificacion: ${especie.classification}`;

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
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  const lista3 = document.querySelector(".solucion");
  lista3.innerHTML = "";
  lista3.innerHTML = `
    <div class="submenus">
        <nav class="menus">
            <a id="d_rotacion"  href="#">Diametro y Periodo de rotacion </a>
            <a id="orbita_g" href="#">Orbita y Gravedad </a>
            <a id="terreno_super" href="#">Terreno y superficie </a>
            <a id="poblacion" href="#">Poblacion </a>
        </nav>
    </div>`;
  let rotacion = document.querySelector("#d_rotacion");
  if (rotacion) {
    rotacion.addEventListener("click", diametro_rotacion);
  }
  let orbita = document.querySelector("#orbita_g");
  if (orbita) {
    orbita.addEventListener("click", orbita_gravedad);
  }
  let terreno = document.querySelector("#terreno_super");
  if (terreno) {
    terreno.addEventListener("click", terreno_superficie);
  }
  let poblacion = document.querySelector("#poblacion");
  if (poblacion) {
    poblacion.addEventListener("click", poblado);
  }

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
      completado.forEach((planetas) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_planets}${planetas.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `planeta: ${planetas.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Planeta: ${planetas.name}<br>Clima: ${planetas.climate}`;

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
            <a id="creador" href="#">Especificaiones tecnicas </a>
            <a id="max_carga" href="#">Maxima carga y longitud </a>
        </nav>
    </div>`;
  let pasaje = document.querySelector("#pasajero");
  if (pasaje) {
    pasaje.addEventListener("click", pasajeros);
  }
  let creado = document.querySelector("#creador");
  if (creado) {
    creado.addEventListener("click", fabricantes);
  }
  let carga = document.querySelector("#max_carga");
  if (carga) {
    carga.addEventListener("click", maxima_carga);
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
      completado.forEach((starships) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_starships}${
          starships.url.split("/")[5]
        }.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `starships ${starships.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Nombre : ${starships.name}<br>Modelo: ${starships.model}`;

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
      completado.forEach((pasasjeros) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_starships}${
          pasasjeros.url.split("/")[5]
        }.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Satrchip ${pasasjeros.name}`;

        const creador_li = document.createElement("li");
        creador_ul.innerHTML = `Starchip: ${pasasjeros.name}<br>Pasajeros: ${pasasjeros.passengers}`;

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
/*
var peli = false;
var peliculas = document.querySelector("#peliculas");
peliculas.addEventListener("click", todos_pelicula);*/

//cambiar nombre de las variables de personajes las que se usan para entrar al json y cambiar el menu de arriba, terminar la funcion de films y añardirle sub opciones como las otras mas que faltan pos data: ya no aguanto mas
let comprobar = false;
async function fabricantes() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobar) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobar = true;
  try {
    for (let numeral = 1; numeral < 4; numeral++) {
      let res = await fetch(`${url_starchips}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((fabricado) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_starships}${
          fabricado.url.split("/")[5]
        }.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Satrchip ${fabricado.name}`;

        const creador_li = document.createElement("li");
        creador_ul.innerHTML = `Starchip: ${fabricado.name}<br>Fabricantes: ${fabricado.manufacturer}<br>Propulsor: ${fabricado.hyperdrive_rating}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobar = false;
  }
}
let comprobar2 = false;
async function maxima_carga() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobar2) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobar2 = true;
  try {
    for (let numeral = 1; numeral < 4; numeral++) {
      let res = await fetch(`${url_starchips}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((maxima) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_starships}${maxima.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Satrchip ${maxima.name}`;

        const creador_li = document.createElement("li");
        creador_ul.innerHTML = `Starchip: ${maxima.name}<br>Maxima Carga: ${maxima.cargo_capacity}<br>Longitud: ${maxima.length}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobar2 = false;
  }
}

var comprobador3 = false;
var peli = document.querySelector("#peliculas");
peli.addEventListener("click", todos_pelicculas);

async function todos_pelicculas() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  const lista3 = document.querySelector(".solucion");
  lista3.innerHTML = "";
  /*
  lista3.innerHTML = `
    <div class="submenus">
        <nav class="menus">
            <a id=""  href="#">peliculas </a>
            <a id="" href="#">Pendienteeeeeeee </a>
            <a id="" href="#">Maxima carga y longitud </a>
        </nav>
    </div>`;
  let pasaje = document.querySelector("#pasajero");
  if (pasaje) {
    pasaje.addEventListener("click", pasajeros);
  }
  let creado = document.querySelector("#creador");
  if (creado) {
    creado.addEventListener("click", fabricantes);
  }
  let carga = document.querySelector("#max_carga");
  if (carga) {
    carga.addEventListener("click", maxima_carga);
  }*/
  if (comprobador3) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador3 = true;
  try {
    for (let numeral = 1; numeral < 2; numeral++) {
      let res = await fetch(`${url_films}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((pelicula) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_films}${pelicula.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `starships ${pelicula.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Nombre : ${pelicula.title}<br>Episodio: ${pelicula.episode_id}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador3 = false;
  }
}

let comprobador4 = false;

async function diametro_rotacion() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobador4) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador4 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_planets}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((diametro) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_planets}${diametro.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `planeta: ${diametro.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Planeta: ${diametro.name}<br>Diametro: ${diametro.diameter}<br>Periodo de Rotacion: ${diametro.rotation_period}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador4 = false;
  }
}

let comprobador5 = false;

async function orbita_gravedad() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobador5) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador5 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_planets}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((diametro) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_planets}${diametro.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `planeta: ${diametro.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Planeta: ${diametro.name}<br>Periodo de orbita: ${diametro.orbital_period}<br>Gravedad: ${diametro.gravity}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador5 = false;
  }
}

let comprobador6 = false;

async function terreno_superficie() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobador6) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador6 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_planets}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((diametro) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_planets}${diametro.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `planeta: ${diametro.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Planeta: ${diametro.name}<br>Terreno: ${diametro.terrain}<br>Superficie: ${diametro.surface_water}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador6 = false;
  }
}

let comprobador7 = false;

async function poblado() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobador7) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador7 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_planets}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((diametro) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_planets}${diametro.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `planeta: ${diametro.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Planeta: ${diametro.name}<br>Poblacion: ${diametro.population}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador7 = false;
  }
}

let comprobador8 = false;

async function color_pelo_ojos() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobador8) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador8 = true;
  try {
    for (let numeral = 1; numeral < 10; numeral++) {
      let res = await fetch(`${url_people}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((personaje) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_per}${personaje.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Personaje ${personaje.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Personaje: ${personaje.name}<br>Color de pelo: ${personaje.hair_color}<br>Color de ojos: ${personaje.eye_color}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador8 = false;
  }
}

let comprobador9 = false;

async function peso_estatura() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobador9) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador9 = true;
  try {
    for (let numeral = 1; numeral < 10; numeral++) {
      let res = await fetch(`${url_people}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((personaje) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_per}${personaje.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Personaje ${personaje.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Personaje: ${personaje.name}<br>Peso: ${personaje.mass}<br>Estatura: ${personaje.height}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador9 = false;
  }
}

let comprobador10 = false;

async function color_piel_genero() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobador10) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador10 = true;
  try {
    for (let numeral = 1; numeral < 10; numeral++) {
      let res = await fetch(`${url_people}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((personaje) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_per}${personaje.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `Personaje ${personaje.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Personaje: ${personaje.name}<br>Piel: ${personaje.skin_color}<br>Genero: ${personaje.gender}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador10 = false;
  }
}

let comprobador11 = false;
async function modelo_manufactura() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";

  if (comprobador11) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador11 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_vehiculos}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((vehiculo) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_vehiculos}${
          vehiculo.url.split("/")[5]
        }.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `vehiculo ${vehiculo.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Vehiculo: ${vehiculo.name}<br>Modelo: ${vehiculo.model}<br>Manufactura: ${vehiculo.manufacturer}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador11 = false;
  }
}
let comprobador12 = false;
async function longitud_costo() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";

  if (comprobador12) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador12 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_vehiculos}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((vehiculo) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_vehiculos}${
          vehiculo.url.split("/")[5]
        }.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `vehiculo ${vehiculo.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Vehiculo: ${vehiculo.name}<br>Longitud: ${vehiculo.length}<br>Costo: ${vehiculo.cost_in_credits}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador12 = false;
  }
}
let comprobador13 = false;
async function personal_pasajeros() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";

  if (comprobador13) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador13 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_vehiculos}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((vehiculo) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_vehiculos}${
          vehiculo.url.split("/")[5]
        }.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `vehiculo ${vehiculo.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Vehiculo: ${vehiculo.name}<br>Personal para manejar: ${vehiculo.crew}<br>Cap. max. pasajeros: ${vehiculo.passengers}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador13 = false;
  }
}
let comprobador14 = false;
async function velocidad_peso() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";

  if (comprobador14) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador14 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_vehiculos}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((vehiculo) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_vehiculos}${
          vehiculo.url.split("/")[5]
        }.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `vehiculo ${vehiculo.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Vehiculo: ${vehiculo.name}<br>Velocidad maxima: ${vehiculo.max_atmosphering_speed}<br>Peso maximo: ${vehiculo.cargo_capacity}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador14 = false;
  }
}
let comprobador15 = false;
async function capacidad_consumible() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";

  if (comprobador15) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador15 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_vehiculos}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((vehiculo) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_vehiculos}${
          vehiculo.url.split("/")[5]
        }.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `vehiculo ${vehiculo.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Vehiculo: ${vehiculo.name}<br>Maximo de consumibles: ${vehiculo.consumables}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador15 = false;
  }
}
let comprobador16 = false;
async function designacion_altura() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobador16) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador16 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_especies}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((especie) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_especies}${especie.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `La especie: ${especie.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Especie : ${especie.name}<br>Designacion: ${especie.designation}<br>Altura: ${especie.average_height}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador16 = false;
  }
}
let comprobador17 = false;
async function esp_vida_ojos() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobador17) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador17 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_especies}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((especie) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_especies}${especie.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `La especie: ${especie.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Especie : ${especie.name}<br>Esperanza de vida: ${especie.average_lifespan}<br>Color de ojos: ${especie.eye_colors}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador17 = false;
  }
}
let comprobador18 = false;
async function color_cuerpo_pelo_idioma() {
  const lista2 = document.querySelector(".contenedor");
  lista2.innerHTML = "";
  if (comprobador18) return;

  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  comprobador18 = true;
  try {
    const lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = "";
    for (let numeral = 1; numeral < 5; numeral++) {
      let res = await fetch(`${url_especies}${numeral}`, { signal });
      let respuesta = await res.json();

      const completado = respuesta.results;
      completado.forEach((especie) => {
        const creador_ul = document.createElement("ul");
        creador_ul.id = "uno_por_uno";

        const urlImagen = `${url_img_especies}${especie.url.split("/")[5]}.jpg`;
        const img = document.createElement("img");
        img.src = urlImagen;
        img.alt = `La especie: ${especie.name}`;

        const creador_li = document.createElement("li");
        creador_li.innerHTML = `Especie : ${especie.name}<br>Color de pelo: ${especie.hair_colors}<br>Color de cuerpo: ${especie.skin_colors}<br>Lenguage: ${especie.language}`;

        creador_ul.appendChild(img);
        creador_ul.appendChild(creador_li);

        lista2.appendChild(creador_ul);
      });
    }
  } catch (error) {
    console.error(error, "Algo salió mal");
  } finally {
    comprobador18 = false;
  }
}
