function carregar(){ 
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var res = window.document.getElementById('res')
  var data =new Date() // Puxei a data em tempo real
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 &&  hora < 12) {
    //Bom dia
    img.src = 'ftmanha.png'
    document.body.style.background = '#e2cd9f'
    res.innerHTML = `Bom Dia!`
  } else if (hora >=12 && hora <= 18) {
    //Boa tarde
    img.src = 'fttarde.png'
    document.body.style.background = '#b9846f'
    res.innerHTML = `Boa Tarde!`
  } else {
    //Boa noite
    img.src = 'ftnoite.png'
    document.body.style.background = '#515154'
    res.innerHTML = `Boa Noite!`
  }
}