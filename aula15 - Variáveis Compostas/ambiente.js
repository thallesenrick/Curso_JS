let num = [5.6, 8.2, 2.3, 9.7, 3.5]
num.push(1.8)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[2]}`)

for(c in num){
    console.log(num[c])
    c++
}