const nome= 'Maria'
const sobrenome ='Fagundes'
const idade = 28

console.log(nome,sobrenome,idade)

const usuario = {
nome:nome,
sobrenome:sobrenome,
idade:idade,
};
console.log(usuario);

const usuario2={nome,sobrenome,idade};
console.log(usuario2);

console.log(
  usuario.nome
)

console.log(
  usuario.sobrenome
)

console.log(
  usuario.idade
)


function welcome(usuario){
  console.log('Bem vindo Oliver Queen');
}

welcome(usuario)
