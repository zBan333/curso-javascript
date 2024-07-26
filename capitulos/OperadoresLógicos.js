//! Operador Logico E (&&)
//todo retorna true se os dois operandos forem true
// console.log(true && true);
// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
// console.log(podeAplicar);

//! Operador Lógico OU ( || )
//todo retorna true se um dos operandos forem true
// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// console.log(podeAplicar);

//! Operador Lógico NOT ( ! )
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('pode aplicar: ', podeAplicar);
let candidatoRecusado = !podeAplicar;
console.log('candidato recusado: ' ,candidatoRecusado);
