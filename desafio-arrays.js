//1.
let listaGenerica = [];
console.log(listaGenerica);

//2.
let lenguajesDeProgramación = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(lenguajesDeProgramación);

//3.
lenguajesDeProgramación.push("Java", "Ruby", "GoLang");
console.log(lenguajesDeProgramación);

//4.
function muestraLenguajesDeProgramacion(){
    for (let i = 0; i < lenguajesDeProgramación.length; i++){
        console.log(lenguajesDeProgramación[i]);
    }
}

muestraLenguajesDeProgramacion();

//5.
function muestraInversaLenguajesDeProgramacion(){
    for (let i = lenguajesDeProgramación.length - 1; i >= 0; i--){
        console.log(lenguajesDeProgramación[i]);
    }
}

muestraInversaLenguajesDeProgramacion();

//6.
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mediaDeNumeros(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma / lista.length;
}

let media = mediaDeNumeros(listaNumeros);
console.log("La media de la lista es: ", media);

//7.
function encontrarMayorMenor(lista){
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++){
        if (lista[i] > mayor){
            mayor = lista[i];
        }
        if (lista[i] < menor){
            menor = lista[i];
        }
    }
    console.log("El mayor número de la lista es: ", mayor);
    console.log("El menor número de la lista es: ", menor);
}

let numerosEnLista = [25, 3, 15, 9, 50, 22, 70, 1, 30];
encontrarMayorMenor(numerosEnLista);

//8.
function sumarElementosLista(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma;
}

let numeros2 = [12, 8, 3, 15, 7, 11];
let suma = sumarElementosLista(numeros2);
console.log("La suma de los elementos de la lista es: ", suma);

//9.
function encontrarIndiceElemento(lista, elemento){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] === elemento){
            return i;
        }
    }
    return -1;
}

let numeros3 = [12, 8, 3, 15, 7, 11];
let indice = encontrarIndiceElemento(numeros3, 20);
console.log("El índice del elemento es: ", indice);

//10.
//Forma 1
function sumarListas(lista1, lista2){
    let listaSuma = [];
    for (let i = 0; i < lista1.length; i++){
        listaSuma.push(lista1[i] + lista2[i]);
    }
    return listaSuma;
}

let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];
let listaSuma = sumarListas(lista1, lista2);
console.log(listaSuma);

//Forma 2
function sumarListas2(lista1, lista2){
    return lista1.map((num, index) => num + lista2[index]);
}

const lista3 = [1, 2, 3, 4, 5];
const lista4 = [6, 7, 8, 9, 10];
const resultado = sumarListas2(lista3, lista4);
console.log(resultado);

//11.
//Forma 1
function cuadradoLista(lista){
    return lista.map(num => num ** 2);
}

const lista5 = [1, 2, 3, 4, 5];
const resultado2 = cuadradoLista(lista5);
console.log(resultado2);

//Forma 2
function cuadradoLista2(lista){
    let listaCuadrado = [];
    for (let i = 0; i < lista.length; i++){
        listaCuadrado.push(lista[i] ** 2);
    }
    return listaCuadrado;
}

const lista6 = [6, 7, 8, 9, 10];
const resultado3 = cuadradoLista2(lista6);
console.log(resultado3);
