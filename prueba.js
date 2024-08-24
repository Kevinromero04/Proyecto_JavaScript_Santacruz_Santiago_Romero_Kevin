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

async function buscar_uno_personaje22(jiji) {
  if (jiji > 0) {
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
}

buscar_uno_personaje22();
