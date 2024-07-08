export const mostrasPeliculas = (data) => {
	let peliculas = '';
	data.map(({ title, poster_path }) => {
		peliculas += `
			<div class="pelicula">
				<img class="poster" src="https://image.tmdb.org/t/p/w500/${poster_path}">
				<h3 class="titulo">${title}</h3>
			</div>
		`;
	});
	document.getElementById('contenedor').innerHTML = peliculas;
};
