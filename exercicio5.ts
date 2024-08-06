const calculo = (var1:Array<any>, var2:Array<any>) => {
    let res:Array<string> = [];
    for( let i = 0; i < var1.length; i++){
        res[i] = var1[i] + var2[i];
    }
    return res;
}
const vetor1 = [5,3,1,8,2];
const vetor2 = ["M","a","r","i","a"]
console.log("Resultado:", calculo(vetor1,vetor2));