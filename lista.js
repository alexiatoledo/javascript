// Tipo array 
let listavazia = [];

// Tipo array valores definidos 
let listavalor = [1,2,3 ];

//buscar valor dentro do array 
let item = listavalor.find(f => f ='alexia' )
console.log (item);

let itemfilter = listavalor.filter(i => i == 'alexia');
console.log(itemfilter)

console.log(listavalor[3]);

// me informa o tamanho
console.log(listavalor.length);

//adicionar itens na fila 
listavalor.push('ana');
console.log(listavalor);

//excluir itens da lista <- exclui o ultimo
listavalor.pop();
console.log(listavalor)

//exclui detrminada posição 
let index = listavalor.indexOf('2') 
console.log(listavalor.splice(0,index));