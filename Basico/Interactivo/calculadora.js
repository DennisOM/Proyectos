const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function calculadora(){
    console.log("Hola puto");
    console.log('Operaciones disponibles: +, -, *, /, o "salir" para terminar');

    rl.question("Que operacion quieres realizar inepto?: ", (operacion) =>{
        //Verificador para terminar UwU
        if(operacion.toLowerCase() === 'salir'){ //.toLowerCase() convierte texto en minusculas
            console.log("Adios! No vuelvas a usar la calcu");
            return rl.close();
        }
    
    //operacion
    const opsValidas = ['+','-','*','/'];
    if(!opsValidas.includes(operacion)){
        console.log("Operacion no valida. Intenta de nuevo masher");
        return calculadora(); //Callback para reiniciar la funcion
    }
    if(operacion == '+'){
        ops = "Suma";
    }else{
        if(operacion == '-'){
            ops = "Resta";
        }else{
            if(operacion == '*'){
                ops = "Multiplicacion"
            }else{
                ops = "Division"
            }
        }
    }

    console.log("Elegiste ", ops)

    rl.question('Introduce el primer número, sonso: ',(num1) => {
        rl.question('Introduce el segundo número, tonoto: ',(num2) => {

            const n1 = parseInt(num1);
            const n2 = parseInt(num2);

            //Switch Para Las opciones:

            switch(operacion){
                case '+':
                    resultado = n1 + n2;
                    break;
                case '-':
                    resultado = n1 - n2;
                    break;
                case '*':
                    resultado = n1 * n2;
                    break;
                case '/':
                    resultado = n1 / n2;
                    break;
                default:
                    resultado = 'Operacion Desconocida';
            }
        
            console.log('\n> Resultado:', resultado);

            //Volvemos a hacer el callback
            calculadora();
        });
    });
    });
}

calculadora();