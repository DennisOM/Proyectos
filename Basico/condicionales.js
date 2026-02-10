//If
const fair = 100;

function si(){
    let fair = 23;
    let fairCopia = "23";
    const nair = 15;
    const smash = 100;
    const special = 27;



    if(fair <= fairCopia && smash >= special){
        console.log("ostion");
    }else{
        console.log("Stock cancel");
    }
}
//si();

// FOR
function para(){

    for(let i = 0; fair > i ; i++){

        console.log("Fair:", fair, "i:", i+1); //Importantes las comas para dividir el texto de los numeros

    }

}

//para();

// WHILE
function mientras(){
    
    let dair = 0;

    while( dair < fair){
        dair++; // ++ lo mismo de +=1, pero en el ultimo es para devidir el valor aumentado
    }

    console.log(dair);
}

//mientras();

//DO-WHILE
function hacerMientras(){

    let dair = 0;
    let resultado = ""; //la fakin cadena que como se considera texto, no se suma, se pone como texto literal... imbecil

    do{
        dair += 1;
        resultado += dair; // resultado recibe el valor de dair y agrega el siguiente segun avance
    } while(dair < 5);

    console.log(resultado) // OUTPUT: 12345

}

//hacerMientras();

function elegir(){
    const pj = "Terry"; 
    switch(pj){
        case "Mario":
            console.log("Player de mario Kakita");
            break;
        case "Terry":
            console.log("Player sin bañarse");
            break;
        case "DK":
            console.log("Player SigmaBoy");
            break;
        case "KazuyaMISHIMA":
            console.log("Abusa del electric");
            break;
        default:
            console.log(`${pj}. No es un jugador considerado en la lista porque es suck`);
    }
}

elegir();