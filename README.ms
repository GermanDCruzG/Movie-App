Movie App
Aplicación web que permite buscar películas, ver sus detalles y guardar favoritas, utilizando la API pública de OMDb.
El proyecto está desarrollado con HTML, CSS, JavaScript Vanilla y Bootstrap, y hace uso de LocalStorage para persistencia de datos.

Demo
Ver aplicación en vivo:
https://germandcruzg.github.io/Movie-App/

Funcionalidades
Búsqueda de películas por título
Listado dinámico de resultados
Modal con detalles de la película (año, género, director, sinopsis)
Sistema de favoritos
Guardar películas
Evitar duplicados
Eliminar favoritos
Persistencia con LocalStorage
Alertas interactivas con SweetAlert2
Diseño responsive con Bootstrap

Tecnologías Utilizadas
HTML5
CSS3
JavaScript (ES6)
Bootstrap 5
SweetAlert2
API OMDb
LocalStorage

API Utilizada
OMDb API
https://www.omdbapi.com/

Ejemplo de búsqueda:
https://www.omdbapi.com/?apikey=TU_API_KEY&s=batman

Ejemplo de detalle:
https://www.omdbapi.com/?apikey=TU_API_KEY&i=tt0372784

Estructura del Proyecto
Movie App
 ┣ 📜 index.html
 ┣ 📜 favoritos.html
 ┣ 📜 app.js
 ┣ 📜 favoritos.js
 ┣ 📜 styles.css
 ┗ 📜 README.md

Cómo Ejecutar el Proyecto
Clona el repositorio:
git clone https://github.com/GermanDCruzG/Movie-App.git

Abre index.html en tu navegador
Escribe el nombre de una película y comienza a explorar

Lógica de Favoritos
Las películas se guardan en localStorage
Se evita duplicar favoritos por imdbID
Los favoritos se cargan automáticamente al abrir la página
Se pueden eliminar con confirmación

Posibles Mejoras Futuras
Paginación de resultados
Búsqueda en español con traducción
Indicador visual de películas favoritas
Sistema de usuarios
Mejoras visuales y animaciones

Autor
Germán D. Cruz G.
Frontend Developer

Contacto: germandcruzg@gmail.com
GitHub: https://github.com/germandcruzg

Licencia
Este proyecto es de uso libre con fines educativos y de aprendizaje.
