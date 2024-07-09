import { mostrasPeliculas } from './mostrarPeliculas.js';

export const cargarPeliculas = async (paguina = 1) => {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/popular?language=en-MX&page=${paguina}&api_key=8566ac87fd44ddb80115ffdf24e1fdcf`,
		);

		if (response.status !== 200)
			return console.log('Error En El Sevidor 😥');

		if (response.status === 401)
			return console.log('Usuario No Autorizado 🙅‍♂️');

		if (response.status === 404)
			return console.log('Pelicula No Encontrada 🕵️');

		const { results } = await response.json();

		mostrasPeliculas(results);
	} catch (error) {
		console.log(error);
	}
};
