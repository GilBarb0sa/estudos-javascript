let num = [15,18,9,10,12]
num[5] = 8 // adiciona um indice novo e um novo valor
num.push(7) // adiciona um conteudo no ultimo indice
num.length // informa quantos elementos tem esta array
num.sort((a,b) => a-b) // coloca os numeros ordenados na array "a expressão  "(a , b ) => a - b" compara dois valores 'a' e 'b',  e subtrai o "a" pelo "b", exemplo: "
console.log(`Nosso vetor tem ${num.length} posições que são os números: ${num}`)
let pos = num.indexOf(12) //Procura na array este número e apresenta o índice que ele se localiza
if (pos==-1) {
  console.log('O valor não foi encontrado.')
} else {
  console.log(`O valor 9 está na posição ${pos}`)
}
 