const notas = [2.5, 5.4, 7.6, 7.4, 5.7, 8.5, 9.0]

const notasBaixas1 = []

for(let i in notas){
    if(notas<7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

const notasBaixas2 = notas.filter(function(nota){
    return nota<7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)