function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10){
                // Bebe
                img.setAttribute('src', './imagens/bebe_H.png')
            } else if (idade >= 10 && idade < 21){
                // Criança
                img.setAttribute('src', './imagens/crianca_H.png')
            } else if (idade < 50){
                // Jovem
                img.setAttribute('src', './imagens/jovem_H.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/velho_H.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                // Bebe
                img.setAttribute('src', './imagens/bebe_M.png')
            } else if (idade >= 10 && idade < 21){
                // Criança
                img.setAttribute('src', './imagens/crianca_M.png')
            } else if (idade < 50){
                // Jovem
                img.setAttribute('src', './imagens/jovem_M.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/velho_M.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade}`
        res.appendChild(img)
    }
}