

# Star Wars

Este proyecto es una página web temática dedicada al universo de Star Wars, que incluye un diseño interactivo con varios elementos multimedia y una navegación dinámica entre secciones.

## Contenidos

- **HTML**: Estructura básica de la página.
- **CSS**: Estilos y diseño visual.
- **JavaScript**: Manejo de interacciones y consultas.

## Instalación

1. **Clona el repositorio:**

    ```bash
    git clone <https://github.com/Kevinromero04/Star_wars_Santiago_Kevin.git>
    ```

2. **Navega a la carpeta del proyecto:**

    ```bash
    cd <Star_wars_Santiago_Kevin>
    ```

3. **Asegúrate de tener los archivos multimedia:**

    Coloca los archivos multimedia (`wallpaperHD.mp4`, `videoMB.mp4`, `dere.png`, `dere2.png`) en el directorio `./multimedia/`.

4. **Abre `index.html` en tu navegador** para ver el proyecto.

## Uso

### Estructura de la Página

- **Videos de Fondo**: La página incluye dos videos que se reproducen en bucle como fondos (`wallpaperHD.mp4` y `videoMB.mp4`).
- **Navegación**: Una barra de navegación con enlaces a diferentes secciones:
  - **PLANETS**
  - **PERSONAJES**
  - **STARSHIPS**
  - **VEHICULOS**
  - **Especie**
  - **FILMS**
- **Área Principal**: Un área de contenido que puede ser dinámica.

### Interacciones JavaScript

El archivo `index.js` maneja la lógica de interacciones y consultas para cada sección. Aquí hay una descripción general de cómo funciona:

1. **Consultas y Navegación**:
   - **PLANETS**: Muestra información relacionada con los planetas.
   - **PERSONAJES**: Muestra información sobre los personajes.
   - **STARSHIPS**: Muestra información sobre las naves estelares.
   - **VEHICULOS**: Muestra información sobre los vehículos.
   - **Especie**: Muestra información sobre las especies.
   - **FILMS**: Muestra información sobre las películas.

   Cada uno de estos enlaces está asociado a una función en `index.js` que gestiona la visualización de contenido relacionado.

2. **Contenidos Dinámicos**:
   - La página principal se actualiza dinámicamente según la sección seleccionada en la barra de navegación.
   - Se utilizan consultas para obtener y mostrar la información adecuada cuando se selecciona un enlace.

3. **Mensajes Temporales**:
   - El elemento con el ID `fuera` muestra un mensaje "No disponible" cuando no hay información disponible.

## Personalización

- **CSS**: Ajusta el archivo `Star_wars.css` para modificar los estilos y el diseño visual de la página.
- **JavaScript**: Modifica `index.js` para cambiar la lógica de las interacciones y cómo se gestionan las consultas de cada sección.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar en el proyecto, por favor, sigue el flujo de trabajo estándar para contribuir a proyectos en GitHub.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---
