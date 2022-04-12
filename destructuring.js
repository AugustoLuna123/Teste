const pessoa = {
     nome: 'Ana',
     idade: 17,
     endereco:{
         logradouro: 'Rua sei la',
         numeroo:226
     }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n , i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(bemHumorada, sobrenome)