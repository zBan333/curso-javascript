// divisivel por 3 => fizz
//divisivel por 5 => buzz
//divisivel por 3 e 5 => fizzbuzz
//nao divisivel por 3 e 5 => entrada
//nao é um numero => 'nao é um numero' 

const resultado = fizzbuzz(11);
console.log(resultado);

function fizzbuzz(entrada) {
    if( typeof entrada !== 'number'){
        return 'nao é um numero';
    }
    if (entrada % 3 === 0 && entrada % 5 === 0){
        return 'FizzBuzz';
    }
    if( entrada % 3 === 0){
        return 'fizz'
    }
    if (entrada % 5 ===0){
        return 'Buzz';
    }
     else {
        return entrada
    }
}

