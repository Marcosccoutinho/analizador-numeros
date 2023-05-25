let num =document.querySelector('input#fnum')
let lista =document.querySelector('select#flista')
let res=document.querySelector('div#resultado')
let valores = []

function isNumero(n) {
if (Number(n) >= 1 && Number (n) <=100) {
     return true
} else {
    return false
}
}
function inlist(n ,l) {
if (l.indexOf(Number(n)) != -1) { //
    return true
} else{
    return false
}
}

function adicionar () {
    if (isNumero(num.value)&& !inlist(num.value,valores)) { //se o numero for um numero e nao estiver na lista
      valores.push(Number(num.value)) //adiciona o valor que esta dentro de num.value
      let item = document.createElement ('option') //criando um item adicionando no meu select
      item.text = `valor ${num.value} adicionado.` // o valor de num.value foi adicionado
      lista.appendChild(item)
      res.innerHTML = ''
    } else{
        alert('valor invalido ou ja contem na lista.')
    }
    num.value = '' // apaga oque foi digitado no input
    num.focus() // o cursor do mouse volta a piscar apos apagado
}
function finalizar() {
    if (valores.length == 0) { //se o valor estiver vazio
       alert ('adicione um valor antes de finalizar')
    } else {
        let  tot = valores.length //total de elementos
        let maior = valores [0]
        let menor = valores [0]
        let soma  = [0]
        let media = [0]
        for (let pos in valores) { //variavel pos recebe valores
            soma += valores[pos]
            if (valores [pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
    
        media = soma /tot
        res.innerHTML = ''
        res.innerHTML +=  `<p> Ao todo, temos ${tot} numeros cadastrados </p>` 
        res.innerHTML +=  `<p> O maior numero informado Foi ${maior}</p>`
        res.innerHTML +=  `<p> O menor numero informado Foi ${menor}  </p>`
        res.innerHTML +=  `<p> Somando todos os valores , temos ${soma}  </p>`
        res.innerHTML +=  `<p> A media dos valores digitados é ${media} </p>`
    }

}
