const carlos = {
  findIndex: (data, property, value) => {
    let result = -1;
    data.some(function (item, i) {
        if (item[property] === value) {
            result = i;
            return true;
        }
    });
    return result;
}
}
var data = [{name:"Jose",age: 26},
            {name:"Pepe",age: 27},
            {name:"Carlos",age: 34}]



console.log(carlos.findIndex(data, 'name', 'Pepe'))

