function showTime() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    msg.innerHTML = `Agora são <strong>${hora}</strong> horas, <strong>${minuto}</strong> minutos e <strong>${segundo}</strong> segundos.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e8c59c'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#10222c'
    }
}

function initTime() {
    setInterval(showTime, 1000)
}
