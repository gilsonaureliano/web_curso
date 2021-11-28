const pessoa = {nome: 'joao'}
console.log(pessoa)
pessoa.nome = 'pedro'
console.log(pessoa)

// as linhas acima mostra que mesmo uma CONST, quando o conteudo é um objeto é possível alterar o que há dentro do objeto. o que não é possível é trocar o objeto.

Object.freeze(pessoa)
// essa função congela o obejeto e não pode ser mais alterardo após o FREEZE