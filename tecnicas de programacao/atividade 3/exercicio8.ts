var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let continuar:boolean = true;
function perguntar(){
    if (continuar) {
        leitor.question("Digite uma palavra (ou'sair' para terminar):"),
        function(answer){
            if (answer.toLowerCase() === 'sair') {
                continuar = false;
                leitor.close();
            } else{
                var vogais:number = 0
                var consoante:number = 0
                for(var numb:number = 0; numb < answer.length; numb++){
                    if(answer[numb].toLowerCase === "a" || "e" || "i" || "o" ||"u"){
                        vogais++
                    }
                    else{
                        consoante++
                    }
                }
                console.log("vogais:", vogais, "consoantes:", consoante)
            }
        }
    }
    
}
