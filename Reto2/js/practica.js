//////////////////////////////////////////////////////////////////////////////////
var mario = 0;
var peso1 = 0;
var est1 = 0;
var imc1 = 0;
//////////////////////////////////////////////////////////////////////////////////
var luigi = 0;
var peso2 = 0;
var est2 = 0;
var imc2 = 0;
var nombre = "Erik Román Romero Flores";
var edad = 19;

//////////////////////////////////////////////////////////////////////////////////
var array = [7,5,3,4,7,6,5,4,4];
var suma1 = 0;
var suma2 = 0;
var res = Math.sqrt(array.length);
console.log(res);
var decimal = Number.isInteger(res);
matriz = [];
for (let i = 0; i < array.length; i += res) {
	let pedazo = array.slice(i, i + res);
	matriz.push(pedazo);
}

console.log(matriz);

if(Number.isInteger(res)){
    for( let i=0; i<res; i++ ){
        for( let j=0; j<res; j++ ){
           if( i==j )
           suma1 += matriz[i][j];
       }
    }
    
    for( let i=0; i<res; i++ ){
       for( let j=0; j<res; j++ ){
          if( i+j == res-1)
          suma2 += matriz[i][j];
      }
    }
    var resultado = suma1 - suma2;
    var condicion = resultado<0? resultado * -1: resultado;
    window.alert("El resultado es: " + condicion);    
}else{
    console.log("Tienes decimales");
}

//////////////////////////////////////////////////////////////////////////////////

























// for(let i = 0; i < columnas; i++){
//     //array[i] = new Array(array.length);
//     console.log(array[i] = new Array(filas));
// }
/*matriz.forEach( function(valor, indice, array) {        
    console.log("En el índice " + indice + " hay este valor: " + valor);
    //console.log("Mi array es: " + array);
});

window.alert(`Mi nombre es: ${nombre}, y mi edad es: ${edad}`);*/
/*for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
}*/

//var vDist = [774, 647, 192, 754, 515, 578, 861, 947, 253];
//var n = Math.sqrt(vDist.length);
//console.log(n); 
/*var taula = new taula[n][n];
var cont = 0;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    taula[y][x] = vDist[cont];
    cont++;
  }
}
  
console.log(taula, n);*/


//var nuevo = array;
//console.log(nuevo);
//console.log(array);
//array.push(11);
//console.log(array);

/*if(array === nuevo){
    console.log(true); 
}else{
    console.log(false);
}

console.log(array); 
console.log(array.reverse()); 


for(i = 0; i < 10; i++){    
    console.log(i); 
    if(i == 5){
        //break;
        continue;
    }    
}

for(index in array){    
    console.log(index);
}

array.forEach( function(valor, indice, array) {        
    console.log("En el índice " + indice + " hay este valor: " + valor);
    console.log("Mi array es: " + array);
});

window.alert(`Mi nombre es: ${nombre}, y mi edad es: ${edad}`);

*/
//--------------------------------------------------------------------------------------------------------------------------------------------
function almacenarMario() {
    peso1 = document.getElementById("peso1").value;
    est1 = document.getElementById("est1").value;

    if(peso1 == 0 || est1 == 0){
        window.alert('Llena los inputs');
    }else{
        imc1 = peso1 / Math.pow(est1, 2);
        document.getElementById("res1").innerHTML = imc1.toFixed(2);        
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------
function almacenarLuigi() {
    peso2 = document.getElementById("peso2").value;
    est2 = document.getElementById("est2").value;

    if(peso2 == 0 || est2 == 0){
        window.alert('Llena los inputs');
    }else{
        imc2 = peso2 / Math.pow(est2, 2);
        document.getElementById("res2").innerHTML = imc2.toFixed(2);        
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------
function comparar(){
    if(imc1 == 0 || imc2 == 0){
        window.alert('Calcule los IMC de ambos personajes.');
    }else{        
        let marioMayorIMC;
        if(imc1 > imc2){
            marioMayorIMC = true;            
        }else{
            marioMayorIMC = false;            
        }
        if(imc1 == imc2){
            document.getElementById("resultado").innerHTML = 'Son iguales';    
        }else{
            resultado = marioMayorIMC?"Mario es mayor en el calculo de IMC": "Luigi es mayor en el calculo de IMC";    
            document.getElementById("resultado").innerHTML = resultado;
        }
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------
function borrar(){
    document.getElementById("res1").innerHTML = document.getElementById("res2").innerHTML = 0;     
    document.getElementById("peso1").value = document.getElementById("est1").value = document.getElementById("peso2").value = 0;     
    document.getElementById("est2").value = imc1 = imc2 = 0;     
    document.getElementById("resultado").innerHTML = "";
}
//--------------------------------------------------------------------------------------------------------------------------------------------