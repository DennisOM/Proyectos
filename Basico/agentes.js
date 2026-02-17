const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function elegir (){
    console.log("Whats up, Nigga");
    console.log('Opciones que puedes realizar: "Elegir agente", o "irte alv" para terminar dentro');
    
    rl.question("Que funcion haras, sorra?: ", (elegir) =>{

        if(elegir.toLowerCase() === 'salir'){
            console.log("Te la lavas perro");
            return rl.close();
        }

        function elegir(){
            const pj = "";
            switch(pj){
                case "Astra":
                    console.log("Who?");
                    break;
                case "Breach":
                    console.log("Tremendo ganador");
                    break;
                case "Brimstone":
                    console.log("Viejo Qlon");
                    break;
                case "Chamber":
                    console.log("U got gud taste my friend");
                    break;
                case "Clove":
                    console.log("Pero para poner humos y no peekear");
                    break;
                case "Cypher":
                    console.log("Nerfeo histórico :<");
                    break;
                case "Deadlock":
                    console.log("Mi vieja w");
                    break;
                case "Fade":
                    console.log("Su debilidad... Paracetamol");
                    break;
                case "Gekko":
                    console.log("Quisiste decir karnalito");
                    break;
                case "Harbor":
                    console.log("Rework Asf");
                    break;
                case "Iso":
                    console.log("DOMAIN EXPANSION!!!");
                    break;
                case "Jett":
                    console.log("Best agent, Besto di questto");
                    break;
                case "Kay/o":
                    console.log("Robot chipeado");
                    break;
                case "Killjoy":
                    console.log("My type");
                    break;
                case "Neon":
                    console.log("GO GO GO?");
                    break;
                case "Omen":
                    console.log("Menudo GOAT de los humos");
                    break;
                case "Phoenix":
                    console.log("Another nigger");
                    break;
                case "Raze":
                    console.log("Ulti mal hecha jijijija");
                    break;
                case "Reyna":
                    console.log("Te la chupa toda literal");
                    break;
                case "Sage":
                    console.log("La de las pick me... aveces");
                    break;
                case "Skye":
                    console.log("Otro de los nerfeos insanos");     
                    break;
                case "Sova":
                    console.log ("Line ups de manual");
                    break;
                case "Tejo":
                    console.log("Voz de narco");
                    break;
                case "Veto":
                    console.log("Rompe set-ups .-.");
                    break;
                case "Viper":
                    console.log("Bieja qlona");
                    break;
                case "Vyse":
                    console.log("idk what to say");
                    break;
                case "Waylay":
                    console.log("Duelista baiter");
                    break;
                case "Yoru":
                    console.log("Dejame adivinar, viste un poco de Buraclone?");
                    break;    
                default:
                    console.log('${pj}. No es un agente porque Riot anda flojeando');
            }
        }
        
        elegir();
    });



}

elegir();