let paguina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguinte = document.getElementById('btnSiguiente');

btnSiguinte.addEventListener('click', () => {
	if (paguina >= 1000) return;
	paguina += 1;
	cargarPeliculas();
});

btnAnterior.addEventListener('click', () => {
	if (paguina === 1) return;
	paguina -= 1;
	cargarPeliculas();
});

const cargarPeliculas = async () => {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/popular?language=en-MX&page=${paguina}&api_key=8566ac87fd44ddb80115ffdf24e1fdcf`,
		);

		if (response.status !== 200) return console.log('error del sevidor');
		if (response.status === 401)
			return console.log('usuario no autorizado');
		if (response.status === 404)
			return console.log('pelicula no encontrada');
		const { results } = await response.json();
		mostrasPeliculas(results);
	} catch (error) {
		console.log(error);
	}
};

cargarPeliculas();

const mostrasPeliculas = (data) => {
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
