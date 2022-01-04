// forIn opera em cima de indices
// forOf opera em cima de valores

for (let letra of "Cod3r") {
    console.log(letra)
}

for (let letra in "Cod3r") {
    console.log(letra)
}

const assuntosEcma = [ 'Map', 'Set', 'Promise']
for (let i in assuntosEcma) {
    console.log(i)
}