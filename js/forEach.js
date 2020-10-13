const carlos = {}

carlos.forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
         callback(array[i],i);
  }
}


const nums = [2,3,4,5,6,7,7];
      carlos.forEach(nums, function (num,index) {
      console.log(`${index+1}:${num}`);
      })