// //console.log('Hola mundo');
// //window.alert('Hola mundo');
//var x = 1000;
//var y = 1;
// var r = '1';
// var edad = 19;
// suma = y - r;
// y = y + x;

// if(y == 1001){
//     console.log('Si es el numero');
// }else{
//     console.log('No es el numero');
// }

// a = 3 ** 2;
// console.log(a);

// if(x && y == 1001){
//     console.log(true);
// }else{
//     console.log(false);
// }

// if(x || y == 2){
//     console.log(true);    
// }else{
//     console.log(false);
// }

// if(x = true){
//     console.log(!x);    
// }

// /*for(i++; i<0; i == 10){
//     console.log(i);
// }*/

// if(x == 1000 || y == 1001){
//     console.log(true + '\n' + 'Erik');
// }else{    
//     console.log(false + '\n' + 'Erik');
// }


// console.log(x);
// console.log(suma);
// console.log('Hola mi edad es: ' + edad);
// document.write('Hola mundo');
// document.write('\n' + 'Hola mi edad es: ' + edad);

// var stop
// (x = 1000)?1:2;

// console.log(x);


// var firstCheck = false, secondCheck = false,
// access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

// console.log( access ); // muestra "Acceso Permitido"


// var entrada = true;
// ternaria = entrada?"Woao":"Rayos";
// console.log(ternaria);


var entrada = 0, salida = 1;
var entrada2 = true, salida2 = true;


function ternario(){    
    ternaria = (entrada > 0 && salida > 0)?"Entrada correcta": "Entrada mala"; 
    document.write(`<h1 style="color: blue;">${ternaria}</h1>`);
    document.write('<button onclick="regresar()">Regresar</button>');
}

function ternarioDoble(){    
    ternaria2 = entrada2?"Coincide": salida2?"No coincide":"Puede coincidir"; 
    document.write(`<h1 style="color: blue;">${ternaria2}</h1>`);
    document.write('<button onclick="regresar()">Regresar</button>');
}

function regresar(){
    location.reload();
}