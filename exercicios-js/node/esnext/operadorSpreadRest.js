// operador ...  rest (juntar)/spread (espalhar)

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.56}
const clone = {ativo: true, ...funcionario }
console.log(clone)

// usau spread com array

const grupoA= ['João', 'Pedro', 'Gilson', 'Severino']
const grupoFinal = ['Maria',  ...grupoA, 'Cida']
console.log(grupoFinal)

// operador rest (agrupa)

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))