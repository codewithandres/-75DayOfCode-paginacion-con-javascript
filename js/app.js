import { cargarPeliculas } from './peticion.js';

let paguina = 1;

const btnAnterior = document.getElementById('btnAnterior');
const btnSiguinte = document.getElementById('btnSiguiente');

btnSiguinte.addEventListener('click', () => {
	if (paguina >= 1000) return;
	paguina += 1;
	cargarPeliculas(paguina);
});

btnAnterior.addEventListener('click', () => {
	if (paguina === 1) return;
	paguina -= 1;
	cargarPeliculas(paguina);
});

cargarPeliculas();
