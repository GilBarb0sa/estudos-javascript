function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano') // Pega o ano digitado pelo usuario;
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value >ano ) { // se o ano estiver vazio o for maior que o ano atual;
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value) // Pega o ano atual - o ano de nascimento do usuario;
    var genero = ''    // Condição para saber se é home ou mulher;
    var img = document.createElement('img') //Ao inves de criar a imagem no html, esta sendo criado no JS...;
    img.setAttribute('id', 'foto') //.. Com um id 'foto' !!!
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 13) {
        //Criança
        img.setAttribute('src', 'bebem.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src','jovemm.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'adultom.png')
      } else {
        //Idoso
        img.setAttribute('src', 'idosom.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 13) {
        //Criança
        img.setAttribute('src', 'bebef.png')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'jovemf.png')
      } else if (idade < 50 ) {
        //Adulto
        img.setAttribute('src', 'adultof.png')
      } else {
        //Idoso
        img.setAttribute('src', 'idosof.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos que é ${genero} com ${idade} anos.`
    res.appendChild(img)  //Inseri a imagem conforme a condição.
  }
}