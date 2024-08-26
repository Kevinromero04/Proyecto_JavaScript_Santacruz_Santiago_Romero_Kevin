const url_people = "https://www.swapi.tech/api/people/";
const url_especies = "https://www.swapi.tech/api/species/";
const url_vehiculos = "https://www.swapi.tech/api/vehicles/";
const url_starchips = "https://www.swapi.tech/api/starships/";
const url_planets = "https://www.swapi.tech/api/planets/";
var jiji = 0;

var nn = document.querySelector("#jaja");
nn.addEventListener("click", buscar_uno_personaje22)

async function buscar_uno_personaje22() {
    try {
      var lista2 = document.querySelector(".contenedor");
      lista2.innerHTML = ''; 
      let vacio = [];
      for (let numeral = 1; numeral < 83; numeral++) {
        if (numeral === 17) {
          numeral += 1;
        }
        let res = await fetch(url_people + numeral);
        let respuesta = await res.json();
        const devol = document.createElement("ul");
        devol.id = "uno_por_uno";
        console.log("El personaje: " + respuesta.result.properties.name);
        vacio.push("El personaje: " + respuesta.result.properties.name);
        vacio.push("Tiene las siguientes características:");
        vacio.push("Color de pelo: " + respuesta.result.properties.hair_color);
        vacio.push("Color de piel: " + respuesta.result.properties.skin_color);
        vacio.push("Color de ojos: " + respuesta.result.properties.eye_color);
        vacio.push("Género: " + respuesta.result.properties.gender);
        vacio.push("Estatura: " + respuesta.result.properties.height);
        vacio.push("Masa: " + respuesta.result.properties.mass);
        vacio.push("id " + numeral);
        for (const element of vacio) {
          console.log(element);
          let anuel = document.createElement("li");
          anuel.textContent = element;
          devol.appendChild(anuel);
        }
        vacio.length = 0;
        lista2.appendChild(devol);

      }
    } catch (error) {
      console.error(error, "Algo salió mal");
    }
  }

var contador = 0;
var espe = document.querySelector("#esp");
espe.addEventListener("click", async (e) => {
  contador += 1;
  console.log(contador);

  await todos_especies(contador);
});
async function todos_especies(contador) {
  if (contador >= 1) {
    
    let lista2 = document.querySelector(".contenedor");
    lista2.innerHTML = ''; 
    console.log("Esto puede tomara de 1 min a 3 min");
    let numero_especie = 37;

    for (let num = 1; num <= numero_especie; num++) {
      try {
        let vacio = [];
        const res = await fetch(url_especies + num);
        const respuesta = await res.json();
        const ul_Espe = document.createElement("ul");
        ul_Espe.id = "uno_por_uno";
        vacio.push(
          "El nombre de la especie " + respuesta.result.properties.name
        );
        vacio.push("Tiene las siguentes caracteristicas: ");
        vacio.push(
          "Colores de pelo: " + respuesta.result.properties.hair_colors
        );
        vacio.push(
          "Colores de cuerpo: " + respuesta.result.properties.skin_colors
        );
        vacio.push(
          "Colores de ojos: " +
          respuesta.result.properties.eye_colors,
        );
        vacio.push(
          "Lenguaje: " +
          respuesta.result.properties.language,
        );
        vacio.push(
          "Altura promedio: " +
          respuesta.result.properties.average_height,
        );
        vacio.push(
          "Esperanza de vida: " +
          respuesta.result.properties.average_lifespan
        );
        vacio.push(
          "id: " +
          num
        );
        for (let element of vacio) {
          console.log(element);
          let anuel = document.createElement("li");
          anuel.textContent = element;
          ul_Espe.appendChild(anuel);
        }
        vacio.length = 0;
        lista2.appendChild(ul_Espe);
      } catch (error) {
        console.error(error, "Algo salió mal");
      }
    }

  }
  }
todos_especies();

//hacer que se vuelvan mas asincronas las funciones para que se pueda imprimir en orden y solo una vez 