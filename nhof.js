const arr = [1,2,3,4]

console.log('arr', arr)

// const result = []
// for (let i = 0; i < arr.length; i++) {
//    let square = arr[i]*arr[i];
//    result.push(square)
    
// }

// arr.forEach((a)=>{
//     let square = a*a
//     result.push(square)
// })

const result = arr.map((a)=>a*a)
console.log('result', result)


const result1 = arr.filter((a)=>a>2)
console.log('result1=>', result1)

