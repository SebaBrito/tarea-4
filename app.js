function MostrarNumeros() {
    let x;
        x = 0;
        while (x <= 99) {
            x = x + 1;
            console.log(x);
        }
}

MostrarNumeros() ; 

let cuentaAtras = numero => {
    
    if (numero === 498) {
        return;
    }
    console.log(numero);
    return cuentaAtras(numero - 2);
};
console.log(cuentaAtras(1000)) 

function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [6, 8, 9, 2, 5, 10];
var a = ArrayAvg(myArray);
console.log(a)

