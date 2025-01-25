//1.
//Forma 1
function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

console.log(calcularIMC(60, 1.75));

//Forma 2
function calcularIMC2(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}

console.log(calcularIMC2(90, 1.80));

//2.
//Forma 1
function calcularFactorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

let numero = 10;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

//Forma 2
function calcularFactorial2(numero){
    let factorial = 1;
    for (let i = 1; i <= numero; i++){
        factorial *= i;
    }
    return factorial;
}

let numero2 = 5;
let resultado2 = calcularFactorial2(numero2);
console.log(`El factorial de ${numero2} es ${resultado2}`);

//3.
//Forma 1
function convertidorMoneda(dolares){
    let tasa = 4226.00;
    let pesosColombianos = dolares * tasa;
    return pesosColombianos;
}

let valorDolar = 50;
let valorPesosColombianos = convertidorMoneda(valorDolar);
console.log(`$${valorDolar} USD son $${valorPesosColombianos} COP`);

//4.
//Forma 1
function calcularAyPdelRectangulo (altura, anchura){
    let area = altura * anchura;
    let perimetro = 2*(altura + anchura)
    console.log("Area: "+ area);
    console.log("Perimetro: "+ perimetro);
}

let altura = 7; //En metros
let anchura = 10; //En metros
calcularAyPdelRectangulo(altura, anchura);

//Forma 2
function areaYPerimetroRectangulo (altura, anchura){
    let area = altura * anchura;
    let perimetro = 2*(altura + anchura)
    return [area, perimetro];
}

let altura2 = 5; //En metros
let anchura2 = 10; //En metros
let resultado3 = console.log(areaYPerimetroRectangulo(altura2, anchura2));

//5.
//Forma 1
function calcularAyPdelCirculo (radio){
    let numeroPi = 3.14;
    let area = numeroPi * radio * radio;
    let perimetro = 2 * numeroPi * radio;
    console.log("Area: "+ area);
    console.log("Perimetro: "+ perimetro);
}

let radio = 5; //En metros
calcularAyPdelCirculo(radio);

//Forma 2
function areaYPerimetroCirculo (radio){
    let numeroPi = 3.14;
    let area = numeroPi * radio * radio;
    let perimetro = 2 * numeroPi * radio;
    return [area, perimetro];
}

let radio2 = 10; //En metros
let resultado4 = console.log(areaYPerimetroCirculo(radio2));

//6.
//Forma 1
function tablaMultiplicar (numero){
    for (let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

let numeroTabla = 7;
tablaMultiplicar(numeroTabla);