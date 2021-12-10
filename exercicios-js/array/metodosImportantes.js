const pilotos = ['Gilson', 'Milena', 'Iracilda', 'Maria']
pilotos.pop() // retira o ultimo elemento do array "MARIA"
console.log(pilotos)

pilotos.push('Leonardo') // vai icluir no array na ultima posição
console.log(pilotos)

pilotos.shift() // REMOVE no primeiro elemento do array "Gilson"
console.log(pilotos)

pilotos.unshift('Pedro') // INCLUI no primeiro elemento do array "Pedro"
console.log(pilotos)

pilotos.splice(2,0, 'Ferreira', 'Gildo') // Entra na posição 2 os dois nomes
console.log(pilotos)

pilotos.splice(2, 2, 'Antônio', 'Galego') // Entra na posição 2 e remove os nomes e substitui os dois nomes
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // vai gerar um novo array iniciando do indice 2 do array antigo piloto
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // vai gerar um novo array iniciando do indice 1 até 3 do array antigo piloto
console.log(algunsPilotos2)