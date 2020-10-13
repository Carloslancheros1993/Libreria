const carlos = {

    find: (array, callback) => {
      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
              newArray.push(array[i]);
      }
       
    }
      return newArray[0];
    }
    }
    
    const nums = [2,3,4,5,6,5,5];
    const numbers= carlos. find(nums, num => num === 5); 
      console.log(numbers);
    