var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let avancar:boolean = true;
function questionar(){
    if (avancar) {
        leitor.question("Digite um número (ou'sair' para terminar):"),
        function(answer){
            if (answer.toLowerCase() === 'sair') {
                continuar = false;
                leitor.close();
            } else{
                var multi:number[] = []
                var valor = parseInt(answer)
                    function primo(number){   
                        for (let i:number = 2; i < number; i++){
                            if(number % i != 0){
                                console.log("seu número é primo")
                            }
                            else{  
                                multi.push(i)
                                number = number/i
                                i = 2
                            }
                        }
                    }
                    for(let i:number = 0; i < MediaQueryList.length; i++){
                        console.log("fatorado:", multi[i])
                    }
                }
        }
    }
}