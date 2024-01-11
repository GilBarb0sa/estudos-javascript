function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Falta dados!')
    res.innerHTML = 'Impossivel contar!'
  } else {
      res.innerHTML = 'Contando: <br>'
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(passo.value)
      if (p <= 0) {  // Caso digite o Passo 0 será contabilizado como 1
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
      }

      if (i < f) {
        // Contagem crescente
        for (let c = i; c <= f; c += p) {
          res.innerHTML += `${c} \u{1F913} `
        }
      } else {
        //Contagem descrescente
        for (let c = i; c >= f; c -= p) {
          res.innerHTML += `${c} \u{1F913}`
        }
      }
      res.innerHTML += `\u{1F3C1}`
  }
}