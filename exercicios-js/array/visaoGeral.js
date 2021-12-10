let aprovados = new Array('bia', 'carlos', 'pedeo')
console.log(aprovados)

aprovados = ['Gilson', 'Cida', 'Milena']
console.log(aprovados[0])

aprovados[3] = 'Iracilda' // vai colocar na posição 3
aprovados.push('Tabata') // vai incluir na ultima posição
console.log(aprovados)
console.log(aprovados.length)
aprovados.sort() // altera o array original colocando em ordem
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

reprovados = ['Bia', 'Antonio', 'Pedro']
reprovados.splice(1, 2, 'TESTE1', 'TESTE2') // vai deletar apos o primeiro indiece indicado e vai incluir os nomes digitados
console.log(reprovados)

reprovados.splice(1, 0, 'TESTE1', 'TESTE2') // não delete só inclui na posição 1
console.log(reprovados)