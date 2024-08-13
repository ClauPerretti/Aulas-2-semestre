var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let prosseguir:boolean = true;
function contar(){
    if (prosseguir) {
        leitor.question("Digite 10 números (ou'sair' para terminar):"),
        function(answer){
            if (answer.toLowerCase() === 'sair') {
                continuar = false;
                leitor.close();
            } else{
                
            }

        }
    }
}