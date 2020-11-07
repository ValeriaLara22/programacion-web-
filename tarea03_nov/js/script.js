const atomizador = document.getElementById("atomizador");
const corona = document.getElementById("corona");
const cubrebocas = document.getElementById("cubrebocas");
const distanciamiento = document.getElementById("distanciamiento");
const kleenex = document.getElementById("kleenex");
const lavado = document.getElementById("lavado");
const monitoreo = document.getElementById("monitoreo");

function incrementaAncho(){
	atomizador.style.width = "500px";
}

atomizador.addEventListener('mouseover', incrementaAncho);