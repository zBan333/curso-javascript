// If .. Else

//*se a hora estiver entre 06:00 ate 12:00 : Bom Dia!
//*Se estiver entre 12:00 ate as 18:00 : Boa Tarde!
//*caso contrario : Boa Noite!

/*
if(condição){
    ?? Codigo a ser executado
}
else if(outracondição) {
    ?? codigo a ser executado
}
else {
    ?? codigo a ser executado
}
*/

let hora = 10;
if(hora > 6 && hora < 12 ){
    console.log("Bom Dia!");
} else if (hora > 12 && hora < 18){
    console.log('Boa Tarde!');
} else {
    console.log('Boa Noite!');
}

//! Exercicio
let posição = 1;
if(posição == 1){
    console.log('Voce ganhou');
} else if(posição == 2){
    console.log('voce ficou em segundo lugar');
} else if(posição == 3){
    console.log('voce ficou em terceiro lugar');
} else {
    console.log('voce perdeu');
}
