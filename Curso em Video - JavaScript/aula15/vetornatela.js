let valores = [8,1,10,22,13,5]
valores.sort((a,b)=>a-b) //"a expressão  "(a , b ) => a - b" compara dois valores 'a' e 'b',  e subtrai o "a" pelo "b"

/*for (let pos=0;pos<valores.length;pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let pos in valores) { // pos=indice ; valores=objetos ; Para cada posição em valores vou mostrar o valores pos.. embaixo
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}