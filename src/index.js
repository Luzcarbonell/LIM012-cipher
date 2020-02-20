import cipher from './cipher.js';
console.log("hola");
let mostrar = document.getElementById("textdes");
document.getElementById("codifica").addEventListener("click",codi);
document.getElementById("decodifica").addEventListener("click",deco);

function codi(){
    mostrar.innerHTML = cipher.encode(document.getElementById("textint").value,document.getElementById("textcod").value);
}
function deco(){
    mostrar.innerHTML = cipher.decode(document.getElementById("textint").value,document.getElementById("textcod").value);

