//1.
//Forma 1
function saludos (){
    console.log('¡Hola, mundo!');
}

saludos();

//2.
//Forma 1
function saludoFuncional(){
    let nombre = prompt('Ingrese su nombre');
    console.log(`¡Hola, ${nombre}!`);
}

saludoFuncional();

//Forma 2
function saludoFuncional2(nombre){
    console.log(`¡Hola, ${nombre}!`);
}

saludoFuncional2('Juan');

//3.
//Forma 1
function numeroDuplicado(){
    let numero = prompt('Ingrese un número');
    console.log(`El doble de ${numero} es ${numero*2}`);
}

//Forma 2
function calcularDoble(numero){
    return numero*2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

//4.
//Forma 1
function promedio(){
    let numero1 = parseInt(prompt('Ingrese un número'));
    let numero2 = parseInt(prompt('Ingrese otro número'));
    let numero3 = parseInt(prompt('Ingrese un tercer número'));
    console.log(`El promedio de ${numero1}, ${numero2} y ${numero3} es ${(numero1+numero2+numero3)/3}`);
}

//Forma 2
function calcularPromedio(a, b, c){
    return (a+b+c)/3;
}

let promedio = calcularPromedio(5, 10, 15);
console.log(promedio);

//5.
//Forma 1
function numeroMayor(){
    let num1 = parseInt(prompt('Ingrese un número'));
    let num2 = parseInt(prompt('Ingrese otro número'));
    let resultado = num1 > num2 ? num1 : num2;
    console.log(`El número mayor es ${resultado}`);
}

//Forma 2
function encontrarMayor(a, b){
    return a > b ? a : b;
}

let numeroMayor2 = encontrarMayor(5, 10);
console.log(numeroMayor2);

//6.
//Forma 1
function multiplicacionNumIgual(){
    let num1 = parseInt(prompt('Ingrese un número'));
    let resultadoMultiplicacion = num1 * num1;
    console.log(`El cuadrado de ${num1} es ${resultadoMultiplicacion}`);
}

//Forma 2
function cuadrado(numero){
    return numero*numero;
}

let resultado2 = cuadrado(5);
console.log(resultado2);