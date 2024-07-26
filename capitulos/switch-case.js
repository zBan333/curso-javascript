let permissao; // comum, gerente, diretor
permissao ='cliente';
switch(permissao) {
    case 'comum':
        console.log('usuario comum');
    break;
    
    case 'gerente':
        console.log('usuario gerente');
    break;

    case 'diretor':
        console.log('usuario diretor');
    break;

    default: 
        console.log('usuario nao reconhecido!');
}