function converter(vet:Array<number>){
    const res:Array<string> = [];
    for(let i = 0; i < vet.length; i++){
        res[i] = "" + vet[i];
    }
    return res;
}
const vetor = [5,3,1,8,2];
console.log("Resultado:", converter(vetor))