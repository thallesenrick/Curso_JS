let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

let valores2 = [80, 10, 70, 40, 20, 90]

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (pos in valores2){
    console.log(`A posição ${pos} tem o valor ${valores2[pos]}`)
}

let posição = valores.indexOf(10)

if (posição == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${posição}`)
}