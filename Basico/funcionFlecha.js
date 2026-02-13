// function dividir(a,b){
//     return a/b;
// }
// let resultado = dividir(17,0);
// console.log( resultado)

const { resolve } = require("node:dns");

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const dividir = async(a,b) => {

    console.log("Calculando... Por favor espere 5 segundos")

    await esperar(5000); //Pausa de 5000ms (5 segundos)

    if(b===0){
        throw new Error("Division por cero");
    }

    return a/b;
}

(async () => {
    const resultado = await dividir(20,5);
    console.log("El resultado es:", resultado)
})();

// console.log(dividir(20,5))



