document.addEventListener("DOMContentLoaded", mostrarFavoritos);

function getFavoritas() {
    const data = localStorage.getItem("favoritas");
    return data ? JSON.parse(data) : [];
}

function saveFavoritas(favoritas) {
    localStorage.setItem("favoritas", JSON.stringify(favoritas));
}

function mostrarFavoritos() {
    const contenedor = document.getElementById("favoritos");
    if(!contenedor) return;

    const favoritas = getFavoritas();
    contenedor.innerHTML = "";

    if (favoritas.length === 0) {
        contenedor.innerHTML = "<p>No tienes películas favoritas aún.</p>";
        return;
    }

    favoritas.forEach(pelicula => {
        const col = document.createElement("div");
        col.className = "col-md-3 mb-4";

        col.innerHTML = `
            <div class="card h-100 border-warning">
                <img src="${pelicula.Poster !== "N/A" ? pelicula.Poster : "https://via.placeholder.com/300x450"}" class="card-img-top">
                <div class="card-body">
                    <h6>${pelicula.Title}</h6>
                    <p>${pelicula.Year}</p>
                    <button class="btn btn-sm btn-danger btn-remove">❌ Quitar</button>
                </div>
            </div>
        `;

        col.querySelector(".btn-remove").addEventListener("click", () => {
            eliminarFavorito(pelicula.imdbID);
        });

        contenedor.appendChild(col);
    });
}

function eliminarFavorito(id) {
    Swal.fire({
        title: "¿Eliminar favorito?",
        text: "Esta película se quitará de tu lista",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then(result => {
        if (result.isConfirmed) {
            let favoritas = getFavoritas();
            favoritas = favoritas.filter(p => p.imdbID !== id);
            saveFavoritas(favoritas);
            mostrarFavoritos();

            Swal.fire("Eliminado", "Película quitada de ⭐ Favoritos ⭐", "success");
        }
    });
}

document.addEventListener("DOMContentLoaded", mostrarFavoritos);