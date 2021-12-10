const quaseArray = {0: 'Rafel', 1: 'Gilson', 2: 'Ana'} //object
Object.defineProperty(quaseArray, 'toString', {
    value: function(){ return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0]) // pseudo Arrey