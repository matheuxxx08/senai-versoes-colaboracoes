var listadepecas = ["peça 1", "peça 2", "peça 3", "peça 4", "peça 5", "peça 6", "peça 7", "peça 8", "peça 9", "peça 10", "peça 11"];
console.log("quantidade de peças");
// A linha de cima é apenas uma informação.

if (listadepecas.length > 10 ){
    console.log("Capacidade maxima ultrapassada");
}
 else{
    console.log("As peças podem ser cadastradas");
}

console.log("quantidade de caracteres");

for (var contador = 0; contador < listadepecas.length; contador++){
    var pecaAtual = listadepecas [contador]
    if(pecaAtual.length < 3 ){
        console.log(pecaAtual + ": a peça possui nome inferios a 3 caracteres e não pode ser cadastrada");
    }
    else {
        console.log(pecaAtual + ": a peça pode ser cadastrada");
    }
}

console.log("pesodapeça")

 var pesodapecaemgramas = 300;

if (pesodapecaemgramas < 100){
    console.log ("peso insuficiente")
}
else{
    console.log("peso suficiente")
}