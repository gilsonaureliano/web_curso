const pessoa ={
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falarDePessoa =pessoa.falar.bind(pessoa)
falarDePessoa() // o bind faz com que o this fique, mesmo fora do contexto original, mantendo seu link com o objeto pessoa.