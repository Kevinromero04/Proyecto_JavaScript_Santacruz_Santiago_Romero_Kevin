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
    
    los_filtros()
    
    
    
    const url_people = "https://www.swapi.tech/api/people/";
    const url_especies = "https://www.swapi.tech/api/species/";
    const url_vehiculos = "https://www.swapi.tech/api/vehicles/";
    const url_starchips = "https://www.swapi.tech/api/starships/";
    const url_planets = "https://www.swapi.tech/api/planets/";
    
    
    async function buscar_uno_personaje22(num) {
        const lista2 = document.querySelector(".contenedor");
        const devol = document.createElement("ul")
        devol.id = "uno_por_uno"
          if (num > 80) {
            console.log("Solo hay 80 personajes intenta de nuevo");
          } else if (num === 0) {
            console.log("saliendo");
            return ;
          } else if (num === 17) {
            console.log("Este personaje ya no existe");
          } else {
            try {
              let res = await fetch(url_people + num);
              let respuesta = await res.json();
              let vacio = []
                vacio.push("El personaje: " + respuesta.result.properties.name);
                vacio.push("Tiene las siguientes características:");
                vacio.push("Color de pelo: " + respuesta.result.properties.hair_color);
                vacio.push("Color de piel: " + respuesta.result.properties.skin_color);
                vacio.push("Color de ojos: " + respuesta.result.properties.eye_color);
                vacio.push("Género: " + respuesta.result.properties.gender);
                vacio.push("Estatura: " + respuesta.result.properties.height);
                vacio.push("Masa: " + respuesta.result.properties.mass);
                
              for (const element of vacio) {
                let anuel = "<li>" + element + "</li>"
                //var hola = devol.replaceChild += element
                // lista2.innerHTML += hola;
                console.log(anuel)
               
              }
              
              return
            } catch (error) {
              console.error(error, "Algo salió mal");
            }
          }

      }
      buscar_uno_personaje22(num)
    
    
    
