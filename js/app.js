// Importamos la función cargarPeliculas desde el archivo peticion.js
import { cargarPeliculas } from './peticion.js';

// Inicializamos la variable paguina (¿quizás quisiste decir "página"?) en 1
let paguina = 1;

// Obtenemos las referencias a los botones de anterior y siguiente
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguinte = document.getElementById('btnSiguiente');

// Agregamos un evento al botón siguiente
btnSiguinte.addEventListener('click', () => {
	// Verificamos que no excedamos la página 1000
	if (paguina >= 1000) return;

	// Incrementamos la página y llamamos a cargarPeliculas con la nueva página
	paguina += 1;
	cargarPeliculas(paguina);
});

// Agregamos un evento al botón anterior
btnAnterior.addEventListener('click', () => {
	// Verificamos que no estemos en la primera página
	if (paguina === 1) return;

	// Decrementamos la página y llamamos a cargarPeliculas con la nueva página
	paguina -= 1;
	cargarPeliculas(paguina);
});

// Cargamos las películas al inicio
cargarPeliculas();
