alert("Hola, soy Dizleny...!!!")
document.write("Bienvenidos...!!!");
document.write("A la...!!!");
document.write("Pagina de Marina...!!!");
document.write("======================<br>");
let nombre;
let edad;
let nota1;
let nota2;
let promedio;
nombre=prompt("escribe tu nombre: ");
edad=prompt("escribe tu edad: ");
nota1=parseInt(prompt("Escribe la nota 1: "));
nota2=parseInt(prompt("Escribe la nota 2: "));
promedio=(nota1+nota2)/2;
document.write("======================<br>");
document.write("nota 1: "+nota1+"<br>");
document.write("nota 2: "+nota2+"<br>");
document.write("promedio: "+promedio+"<br>");
document.write("hola "+nombre+" ya tienes "+edad+" años ");
if (edad>17) {
    document.write("eres mayor de edad");
} else {
    document.write("eres menor de edad");
}
