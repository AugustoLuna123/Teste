const valores = [7.7, 8.9,8.3,5.4,2.8]

console.log(valores[0], valores[3])

valores[4] = 10
valores[10] = 20
console.log(valores)

console.log(valores.length) //Mostra a quantidade de elementos

valores.push(false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //Retorna o ultimo valor do array e tira dele
delete valores[0]
console.log(valores)

console.log(typeof valores)