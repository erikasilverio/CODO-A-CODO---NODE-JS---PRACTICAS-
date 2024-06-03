// const mensajeLog = function (texto) {
//     texto += "!!!";
//     console.log(texto);
// };

// const mensajeAlert = function (texto) {
//     texto += "!!!";
//     alert(texto);
// };

// mensajeLog("Un mensaje");
// mensajeAlert("Un mensaje");


// -------------------

// const fnLog = (texto) => {
//     document.write(texto);
// }


// const mensaje = (texto, callback) => {
//     texto += "!!!"
//     callback(texto);
// };

// mensaje("Un texto", console.log);
// mensaje("Otro texto", alert);
// mensaje("Mas otro texto", fnLog );


// ----------------

// const segundos = Math.floor(Math.random() * (3000 - 1 + 1) + 1);
// console.log(segundos);

// ------------------------

function multiplicar(a, b, callback) {
    setTimeout(() => {
        callback(a, b, a * b );
    }, Math.floor(Math.random() * (3000 - 1 + 1) + 1));
    
}


// multiplicar(1, 2, (num1, num2, result) => {
//     console.log(`${num1} X ${num2} = ${result}`);

//     multiplicar(2, 2, (num1, num2, result) => {
//         console.log(`${num1} X ${num2} = ${result}`);
//     });

//     multiplicar(3, 2, (num1, num2, result) => {
//         console.log(`${num1} X ${num2} = ${result}`);
//     });
    

// });



// let result = multiplicar(1, 2);
// console.log(`1 X 2 = ${result}`);

// result = multiplicar (2, 2);
// console.log(`1 X 2 = ${result}`);

// result = multiplicar (3, 2);
// console.log(`1 X 2 = ${result}`);


// ------------------


multiplicar(1, 2, (num1, num2, result) => {
    console.log(`${num1} x ${num2} = ${result}`);
    multiplicar(2, 2, (num1, num2, result) => {
      console.log(`${num1} x ${num2} = ${result}`);
      multiplicar(3, 2, (num1, num2, result) => {
        console.log(`${num1} x ${num2} = ${result}`);
      });
    });
  });

