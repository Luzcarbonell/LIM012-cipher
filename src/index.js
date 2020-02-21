import cipher from './cipher.js';

console.log("hola");

let mostrar = document.getElementById("textdes");
document.getElementById("codifica").addEventListener("click",codi);
document.getElementById("decodifica").addEventListener("click",deco);
document.getElementById("mostrar").classList.add("ocultar");
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
	console.log('recibirNombre')
	const name = document.getElementById('name').value;
	document.getElementById("ocultar").style.display = "none";
	const saludo = document.getElementById("saludo");
	saludo.innerHTML = name;
	mos();
}
function mos() {
	console.log('mos')
	document.getElementById("mensaje1").classList.remove("ocultar");
	document.getElementById("botones1").classList.remove("ocultar");
	document.getElementById("codifica").classList.remove("ocultar");
    document.getElementById("decodifica").classList.remove("ocultar");
    document.getElementById("ocultar").classList.remove("ocultar");
 

    

}