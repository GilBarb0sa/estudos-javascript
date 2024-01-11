function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab') 
  if (num.value.length == 0) {
    window.alert('Por favor, digite um número!')
  } else {
    let n = Number(num.value) 
    tab.innerHTML = ''  //Para limpar o inicio do uso da tabuada!
    for (c = 1; c <= 10; c++) { 
      let item = document.createElement('option') // Cria um elemento option como se tivesse criado no HTML
      item.text = `${n} x ${c} = ${n*c}` // Dentro do option
      item.value = `tab${c}` // Este item é interessante ao se usar php, pois ele vai entender que tal item foi selecionado!
      tab.appendChild(item) // Adiciona um elemento filho "item no tab"
    }
  }
}