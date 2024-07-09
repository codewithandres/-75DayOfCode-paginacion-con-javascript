export const animarPleiculas = () => {
	const peliculas = document.querySelectorAll('.contenedor .pelicula');

	peliculas.forEach((pelicula, index) => {
		setTimeout(() => {
			pelicula.classList.toggle('active');
		}, index * 200);
	});
};
