const fator1 = [5,3,1,8,2];
const fator2 = ["M","a","r","i","a"];
    const juntar = function (var1:Array<any>, var2:Array<any>):Array<string> {
        let res:Array<string> = [];
        for( let i = 0; i < var1.length; i++){
            res[i] = var1[i] + var2[i];
        }
        return res;
    }
    juntar (fator1,fator2)
    console.log ("Resultado:", juntar(fator1,fator2))