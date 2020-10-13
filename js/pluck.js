 const carlos = {

 pluck: (array,key) => {
    var newArray = [];
    for (let i = 0, x = array.length; i < x; i++){
      if (array[i].hasOwnProperty(key)){
        newArray.push(array[i][key]);
      }
    }
    return newArray;
  }
}

var stooges = [{name: 'Carlos', age: 26}, {name: 'Pepe', age: 32}, {name: 'Luis', age: 34}];

console.log(carlos.pluck(stooges, 'name'));