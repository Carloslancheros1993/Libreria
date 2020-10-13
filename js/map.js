
const carlos = {
  map: (array,callback)=> {
    let returnValue = []
    for(var i = 0; i < array.length; i++) {
      let newElements = callback(array[i], i, array)
      returnValue.push(newElements)
    }
    return returnValue
  }
}

const information = [
  {name: "Carlos", age: 26},
  {name: "Jose", age: 27},
  {name: "Luis", age: 28}
]

const data = carlos.map(information, info => info = info.name);

console.log(data);