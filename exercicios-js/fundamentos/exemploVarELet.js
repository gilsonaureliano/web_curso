const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
        
    })
}

funcs[2]() //10
funcs[8]() //10


console.log('---------------------------------------')

const funcs1 = []

for (let i = 0; i < 10; i++){
    funcs1.push(function(){
        console.log(i)
        
    })
}

funcs1[2]() //2
funcs1[8]() //8


isAtivo = ''

console.log(!isAtivo)