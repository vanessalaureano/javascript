function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade == 0) {
                // bebe
                img.setAttribute('src', 'imagens/bebe.jpg')
            } else if (idade >= 1 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade >= 10 && idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/jovemhomem.jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/adultohomem.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = "mulher"
            if (idade == 0) {
                // bebe
                img.setAttribute('src', 'imagens/bebe.jpg')
            } else if (idade >= 1 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade >= 10 && idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/jovemmulher.jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/adultomulher.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}