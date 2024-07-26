// velocidade max = 70
// a cade 5km acima do limite voce ganha 1 ponto
// math.floor()
// caso pontos maior que 12 'carteira suspensa'

verificarVelocidade(180)
function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    
    if(velocidade <= velocidadeMaxima ){
        console.log('passou de boa');
    }
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
        if( pontos >= 12){
            console.log('carteira suspensa');
        } else {
            console.log('pontos:', pontos);
        }
        
    }
}

//! exercicio

// tempoPitStop(180);

// function tempoPitStop(tempo){
//     const melhorPitStop = 180;
//     const mediaPitStop = 250;
//     if(tempo < melhorPitStop){
//         console.log('Seu pitStop quebrou o record mundial');
//     }
//     else {
//         if(tempo == melhorPitStop){
//             console.log('voce empatou com o tempo mundial');
//         }
//         else if (tempo <= mediaPitStop ){
//             console.log('otimo pitstop');
//         }
//         else {
//             console.log('pitstop horrivel');
//         }   
//     }
// }