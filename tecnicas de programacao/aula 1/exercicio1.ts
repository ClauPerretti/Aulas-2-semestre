function somar(a:number, b:number):number|string{
    if (a < b){
        return a + b;
    }
    else {
        return "" + a + b
    }
}
console.log( "resultado:", somar(1,2))
console.log( "resultado:", somar(5,3)) 