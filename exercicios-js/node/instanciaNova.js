// usando uma factory para retornar um novo obejeto e fugir do cache que o node faz ao fazer um require - ver exemplos instanciaUnica, instaciaNova e instaciaCliente
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}