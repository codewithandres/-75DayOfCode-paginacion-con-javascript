// Exportamos la función mostrasPeliculas
export const mostrasPeliculas = (data) => {
	let peliculas = [];

	data.map(({ title, poster_path }) => {
		// Creamos un HTML para cada película con su título e imagen
		peliculas += `
			<div class="pelicula">
				<img class="poster" src="https://image.tmdb.org/t/p/w500/${poster_path}">
				<h3 class="titulo">${title}</h3>
			</div>
		`;
	});

	// Insertamos el HTML generado en el contenedor
	document.getElementById('contenedor').innerHTML = peliculas;
};
