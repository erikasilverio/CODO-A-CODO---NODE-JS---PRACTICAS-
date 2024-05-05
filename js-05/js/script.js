// const letras = new Array("a", "b", "c");

// const letras = ["a", "b", "c", "d"];
// console.log(letras);

// console.log(letras[1]);
// console.log(letras[5]);

// console.log(letras[letras.length -1]);


// const letras = ["a", "b", "c", "d"];

// for(let i = 0 ; i < letras.length; i++){
//     console.log(letras[i])

// }

// METODOS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

// const dias = ["Martes", "Miercoles", "Friday", "Sábado"];

// dias[4] = "Domingo";

// dias[dias.length] = "Domingo";

// dias.push("Domingo");


// let dia;
// dia = dias.pop();

// dias.unshift("Lunes");
// dia = dias.shift();


// console.log(dias, dia);

//---------------------------

// const letras = ["a", "b", "c", "d"];
// const otrasLetras = ["e", "f", "g", "h"];
// const masLetras = ["i", "j", "l", "m"];

// const abcedario = letras.concat(otrasLetras, masLetras);

// console.log(abcedario);

// console.log(abcedario.indexOf("f"));


// --------


// const numeros = [1, 5, 7, 3, 5, 8, 2];
// console.log(numeros, numeros.indexOf(5, 2), numeros.lastIndexOf(8, -2));

// ..............>>>>>>>>>>>>>>>>>>>>>>>>>>>>...................

// const dias = ["Martes", "Miercoles", "Friday", "Sábado"];

// dias.splice(4, 0, "Domingo"); // push
// dias.splice(0, 0, "Lunes"); // unshift

// delete dias[3];

// dias.splice(3,1); // delete

// dias.splice(3,1, "Jueves", "Viernes"); // delete y push

// const algunosDias = dias.slice(2, 4)

// console.log(algunosDias);


// console.log(dias.reverse());

// console.log(dias.sort());

// const numeros = [1, 5, 50, 3, 3, 10, 100, 2, 7, 20];


// function compareFn(a, b) {
//     if (a < b) {
//       return -1;
//     } else if (a > b) {
//       return 1;
//     }
     // a must be equal to b
//     return 0;

//   }

//   console.log(numeros.sort(compareFn));

//   console.log(numeros.sort((a,b) => a - b));


// ------------ CICLOS >>>>>>>>>>>>>



// const numeros = [1, 5, 50, 3, 3, 10, 2, 7, 20];

// function mostrar(numeros){
//     console.log(numeros)
// };

// const mostrar = function (numeros){
//     console.log(numeros)
// };

// const mostrar =  numeros => console.log(numeros);

// numeros.forEach(numeros => console.log(numeros * 2));


// function multiplicar(numero){
     // return numero * 2;
//     if (numero % 2 == 0) {
//         return "Par"
//     } else {
//         return "Impar"
//     }
// }


// function multiplicar(numero){
    // return numero * 2;
//     if (numero % 2 == 0) {
//         return "Par";
//     } 
//         return "Impar";    
// }


// const multiplicar = function (numero){
  // return numero * 2;
//     if (numero % 2 == 0) {
//         return "Par";
//     } 
//         return "Impar";    
// }


// const multiplicar =  (numero) => {
   // return numero * 2;
//     if (numero % 2 == 0) {
//         return "Par";
//     } 
//         return "Impar";    
// }


// const multiplicar =  (numero) => {
//     return numero % 2 == 0 ? "Par" : "Impar" ;
// };

// const tabla = numeros.map(multiplicar);

// const multiplicar = numero => numero % 2 == 0 ? "Par" : "Impar" ;


// const tabla = numeros.map(numero => numero % 2 == 0 ? "Par" : "Impar");

// console.log(numeros, tabla);


// -------------------------------



// const numeros = [1, 5, 50, 3, 3, 10, 2, 7, 20];

// function filtrar(numero){
//     if( numero > 10){
//         return true;
//     } else {
//         return false;
//     }
// }


// const filtrar = function (numero){
//     if( numero > 10){
//         return true;
//     } else {
//         return false;
//     }
// }

// const filtrar =  (numero) => {

//     return numero > 6;
   
// }

// const filtrar =  numero =>  numero > 6;
   


// const numerosFiltrados = numeros.filter( numero =>  numero > 6);

// console.log(numeros, numerosFiltrados);


// -------------------------------->>>>>>>>>>>>>>


// const numeros = [1, 5, 50, 3, 3, 10, 2, 7, 20];

// let index = numeros.findIndex((numero) => numero == 3);
// console.log(numeros, index);

// let numero = numeros.find((numero) => numero == 30);
// console.log(numero);


// -------------------- FOR IN -------->>>>>>>>>>

// const numeros = [1, 5, 50, 3, 3, 10, 2, 7, 20];

// for(let index in numeros){

//     if(numeros[index] > 5 ){

//     console.log(index, numeros[index]);

//     }
    
// }

// const user = {
//     id: 5,
//     dni: 98765423,
// }


// for (let key in user){
//     console.log(key, user[key]);
// }


// ------------ FOR OF >>>>>>>>>>>



// const numeros = [1, 5, 50, 3, 3, 10, 2, 7, 20];


// for(let numero of numeros){
//     console.log(numero);
// }


