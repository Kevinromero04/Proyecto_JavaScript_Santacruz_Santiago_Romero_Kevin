function los_filtros() {
  const lista = document.querySelector("ul");
  const filtrados2 = ["alirio", "juan x2", "soata", "mariana", "camila"];

  var cosa = [];
  for (const resultado of filtrados2) {
    cosa.push("<li>" + resultado + " eliminado ❌ " + "</li>");
    console.log(resultado);
  }
  for (const element of cosa) {
    lista.innerHTML += element;
  }
}
var jiji = 1;
var nn = document.querySelector("#jaja");
nn.addEventListener("click", (e) => {
  num += 1;
});
//los_filtros();

const url_people = "https://www.swapi.tech/api/people/";
const url_especies = "https://www.swapi.tech/api/species/";
const url_vehiculos = "https://www.swapi.tech/api/vehicles/";
const url_starchips = "https://www.swapi.tech/api/starships/";
const url_planets = "https://www.swapi.tech/api/planets/";

async function todos_personaje() {

    const lista2 = document.querySelector(".contenedor");

    try {
      let vacio = [];
      for (let numeral = 1; numeral < 7; numeral++) {
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
        vacio.push("*******************************************************");
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

//todos_personaje();
async function todos_especies() {
  console.log("Esto puede tomara de 1 min a 3 min");
  let numero_especie = 37;

  for (let num = 1; num <= numero_especie; num++) {
    try {
      const res = await fetch(url_especies + num);
      const respuesta = await res.json();
      console.log(
        "El nombre de la especie",
        respuesta.result.properties.name,
        "\nTiene las siguentes caracteristicas: \n-Colores de pelo:",
        respuesta.result.properties.hair_colors,
        "\n-Colores de cuerpo:",
        respuesta.result.properties.skin_colors,
        "\n-Colores de ojos:",
        respuesta.result.properties.eye_colors,
        "\n-Lenguaje:",
        respuesta.result.properties.language,
        "\n-Altura promedio:",
        respuesta.result.properties.average_height,
        "\n-Esperanza de vida:",
        respuesta.result.properties.average_lifespan
      );
    } catch (error) {
      console.error(error, "Algo salió mal");
    }
  }
}
todos_especies();
