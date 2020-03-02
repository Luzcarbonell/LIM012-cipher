import cipher from './cipher.js';

//console.log("hola");

let mostrar = document.getElementById("textdes");
const saludo = document.getElementById("saludo");
saludo.classList.add("ocultar");
const mensaje1 = document.getElementById("mensaje1");
mensaje1.classList.add("ocultar");
// console.log(mensaje1.class);
const botones1 = document.getElementById("botones1");
botones1.classList.add("ocultar");
const codifica = document.getElementById("codifica");
const decodifica = document.getElementById("decodifica");
//const intro = document.getElementById("intro");
const login = document.getElementById("login");
saludo.classList.remove("ocultar");
const form= document.getElementById("form");

form.addEventListener("submit",(event) =>{
	event.preventDefault();
	saludo.innerHTML = "Hola " + document.getElementById('name').value;
	mensaje1.classList.remove("ocultar");
	botones1.classList.remove("ocultar");
	codifica.classList.remove("ocultar");
	decodifica.classList.remove("ocultar");
	login.classList.add("ocultar");
});


const codi = () => {

	mostrar.value  = cipher.encode(
		document.getElementById("textint").value,
		document.getElementById("textcod").value);
}
const deco = () => {

	mostrar.value = cipher.decode( 
		document.getElementById("textint").value,
		document.getElementById("textcod").value);
}

codifica.addEventListener("click", codi);
decodifica.addEventListener("click", deco);
