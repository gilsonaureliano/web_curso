//JSON converte dados para string, textual, usado entre sistemas

const obj ={a: 1, b:2, c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj)) // não vai imprimir a função soma

// Gerar um obejeto a partir de um texto com JSON
console.log(JSON.parse('{"a" : 1, "b" : 2, "c" : 30}')) // atenção nas aspas