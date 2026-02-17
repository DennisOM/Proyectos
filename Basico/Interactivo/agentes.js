const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function elegir (){


    console.log("Whats up, Nigga");
    console.log('Opciones que puedes realizar: "Elegir agente", o "irte alv" para terminar dentro');
    


    rl.question("Que funcion haras, sorra?: ", (opcion) =>{

        if(opcion.toLowerCase() === 'irte alv'){
            console.log("Te la lavas perro");
            return rl.close();
        }

        if(opcion.toLowerCase() === 'elegir agente'){

            const pjValidos = ['Astra', 'Breach', 'Brimstone', 'Chamber',
                'Clove','Cypher', 'Deadlock', 'Fade', 
                'Gekko', 'Harbor', 'Iso', 'Jett', 
                'KAY/O', 'Kiljoy', 'Neon', 'Omen', 
                'Phoenix', 'Raze', 'Reyna', 'Sage', 
                'Skye', 'Sova', 'Tejo', 'Veto', 
                'Viper', 'Vyse','Waylay', 'Yoru'];

            for(let i=0; i<pjValidos.length; i++){
                console.log(`${i+1}. ${pjValidos[i]}`);
            } 

        rl.question("Seleciona el numero del agente. \n>", (pj) => {

            pj = parseInt(pj);

            let pjValidosLower = [];



            for(let i = 0; i<pjValidos.length; i++){
                //pjValidos[i]=pjValidos[i].toLowerCase();  #ESTO SOLO SIRVE SI EDITAS EL MISMO ARREGLO pjValidos = pjValidos
                pjValidosLower.push(pjValidos[i].toLowerCase());
            }  

            switch(pj){
                case 1:
                    console.log("Who?");
                    rl.close();
                    break;
                case 2:
                    console.log("Tremendo ganador");
                    rl.close();
                    break;
                case 3:
                    console.log("Viejo Qlon");
                    rl.close();
                    break;
                case 4:
                    console.log("U got gud taste my friend");
                    rl.close();
                    break;
                case 5:
                    console.log("Pero para poner humos y no peekear");
                    rl.close();
                    break;
                case 6:
                    console.log("Nerfeo histórico :<");
                    rl.close();
                    break;
                case 7:
                    console.log("Mi vieja w");
                    rl.close();
                    break;
                case 8:
                    console.log("Su debilidad... Paracetamol");
                    rl.close();
                    break;
                case 9:
                    console.log("Quisiste decir karnalito");
                    rl.close();
                    break;
                case 10:
                    console.log("Rework Asf");
                    rl.close();
                    break;
                case 11:
                    console.log("DOMAIN EXPANSION!!!");
                    rl.close();
                    break;
                case 12:
                    console.log("Best agent, Besto di questto");
                    rl.close();
                    break;
                case 13:
                    console.log("Robot chipeado");
                    rl.close();
                    break;
                case 14:
                    console.log("My type");
                    rl.close();
                    break;
                case 15:
                    console.log("GO GO GO?");
                    rl.close();
                    break;
                case 16:
                    console.log("Menudo GOAT de los humos");
                    rl.close();
                    break;
                case 17:
                    console.log("Another nigger");
                    rl.close();
                    break;
                case 18:
                    console.log("Ulti mal hecha jijijija");
                    rl.close();
                    break;
                case 19:
                    console.log("Te la chupa toda literal");
                    rl.close();
                    break;
                case 20:
                    console.log("La de las pick me... aveces");
                    rl.close();
                    break;
                case 21:
                    console.log("Otro de los nerfeos insanos");   
                    rl.close();  
                    break;
                case 22:
                    console.log ("Line ups de manual");
                    rl.close();
                    break;
                case 23:
                    console.log("Voz de narco");
                    rl.close();
                    break;
                case 24:
                    console.log("Rompe set-ups .-.");
                    rl.close();
                    break;
                case 25:
                    console.log("Bieja qlona");
                    rl.close();
                    break;
                case 26:
                    console.log("idk what to say");
                    rl.close();
                    break;
                case 27:
                    console.log("Duelista baiter");
                    rl.close();
                    break;
                case 28:
                    console.log("Dejame adivinar, viste un poco de Buraclone?");
                    rl.close();
                    break;    
                default:
                    console.log(pj,'.No es un agente porque Riot anda flojeando');
                    elegir()
                    break;
            }
        });
    }else{
        console.log("No es una opcion valida. Educate gorda");
        elegir();
    }
    });
}

elegir();