// при помощи медода reduce вернуть объект в котором ключами являются индексы, значениями элементы массива
let arr = [1, 2, 3, 4];

// решение
let newObj = arr.reduce((accum, val, index) => {
  accum[index] = val
  return accum
}, {})
console.log(newObj)