const form = document.getElementById("searchForm");
const input = document.getElementById("movieInput");
const results = document.getElementById("results");

const API_KEY = "4965fb4e";

let movieModal;

document.addEventListener("DOMContentLoaded", () => {
    const modalElement = document.getElementById("movieModal");
    movieModal = new bootstrap.Modal(modalElement);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const movieName = input.value.trim();

    if (movieName === "") {
        alert("Escribe el nombre de una película.");
        return;
    }

    buscarPeliculas(movieName);
})

function buscarPeliculas(nombre) {
    results.innerHTML = "<p>Cargando...</p>";

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${nombre}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "False") {
                results.innerHTML = `<p class="text-danger">${data.Error}</p>`;
                return;
            }
            mostrarPeliculas(data.Search);
        });
}

function mostrarPeliculas(peliculas) {
    results.innerHTML = "";

    peliculas.forEach(pelicula => {
        const col = document.createElement("div");
        col.className = "col-md-3 mb-4";

        col.innerHTML = `
            <div class="card h-100">
                <img src="${pelicula.Poster !== " N/A" ? pelicula.Poster : "https://via.placeholder.com/300x450?text=Sin+Imagen"}" class="card-img-top" style="cursor:pointer" alt="${pelicula.Title}" >
                <div class="card-body">
                    <h6 class="card-title">${pelicula.Title}</h6>
                    <p class="card-text">${pelicula.Year}</p>
                    <button class="btn btn-sm btn-primary btn-detalle">Ver detalles</button>
                    <button class="btn btn-sm btn-outline-warning btn-fav">Favorito</button>
                </div>
            </div>
        `;

        col.querySelector("button").onclick = () => verDetalle(pelicula.imdbID);
        results.appendChild(col);
        const btnDetalle = col.querySelector(".btn-detalle");
        btnDetalle.addEventListener("click", function () {
            verDetalle(pelicula.imdbID);
        });

        const btnFav = col.querySelector(".btn-fav");
        btnFav.addEventListener("click", function () {
            agregarAFavoritos(pelicula);
        });
    });
}

function verDetalle(id) {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(peli => {
            document.getElementById("modalTitle").textContent = peli.Title;
            document.getElementById("modalBody").innerHTML = `
                <img src="${peli.Poster}" class="img-fluid mb-3">
                <p><strong>Año:</strong> ${peli.Year}</p>
                <p><strong>Género:</strong> ${peli.Genre}</p>
                <p><strong>Director:</strong> ${peli.Director}</p>
                <p><strong>Sinopsis:</strong> ${peli.Plot}</p>
            `;

            movieModal.show();
        });
}

function agregarAFavoritos(pelicula) {
    let favoritas = getFavoritas();

    const existe = favoritas.some(fav => fav.imdbID === pelicula.imdbID);
    if (existe) {
        Swal.fire("Atención", "Esta película ya está en favoritos", "info");
        return;
    }
    favoritas.push(pelicula);
    saveFavoritas(favoritas);
    mostrarFavoritos();

    Swal.fire("Guardado", "Película añadida a ⭐ Favoritos ⭐", "success");
}

document.addEventListener("DOMContentLoaded", mostrarFavoritos);