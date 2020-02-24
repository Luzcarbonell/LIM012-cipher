import cipher from './cipher.js';

console.log("hola");

let mostrar = document.getElementById("textdes");
document.getElementById("codifica").addEventListener("click",codi);
document.getElementById("decodifica").addEventListener("click",deco);
document.getElementById("saludo ocultar").classList.add("ocultar");
document.getElementById("mensaje1").classList.add("ocultar");
document.getElementById("botones1").classList.add("ocultar");
document.getElementById("button").addEventListener("click",mos);

function codi(){
    mostrar.innerHTML = cipher.encode(document.getElementById("textint").value,document.getElementById("textcod").value);
}
function deco(){
    mostrar.innerHTML = cipher.decode(document.getElementById("textint").value,document.getElementById("textcod").value);
}

function recibirNombre() {
	console.log('recibirNombre');
	const saludo = document.getElementById("saludo");
	saludo.innerHTML = "Hola " + document.getElementById('name').value;
}
function mos() {
	console.log('mos')
	recibirNombre();
	document.getElementById("mensaje1").classList.remove("ocultar");
	document.getElementById("botones1").classList.remove("ocultar");
	document.getElementById("codifica").classList.remove("ocultar");
    document.getElementById("decodifica").classList.remove("ocultar");
	document.getElementById("portada").classList.add("ocultar");
	document.getElementById("saludo ocultar").classList.remove("ocultar");
}