    
const carlos = {

  contains: (array, obj) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}
}

const result = carlos.contains([1,2,3],5);

console.log(result)
