const carlos = {
    without: (list, ...values) => {
        const set = new Set(values)
        return list.filter(e => !set.has(e)) 
    }
}
const data = [2,3,4,5,6,7,8];

console.log(carlos.without(data,3))