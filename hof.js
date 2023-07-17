const arr = [2,3,4,5,67,78];


// arr.forEach((a)=>{
//     console.log('a', a)
// })


const irr = (a)=>{
    console.log('a=>', a)
}

// arr.forEach(irr)

// const a = arr.slice(0,-2)
// const a = arr.slice(-5,-1)

// console.log('a', a)

// let rrr = []


// arr.forEach((a)=>{
//     if(a>5){
//         rrr.push(a)
//     }
// })


// console.log('rrr', rrr)


// filter is used to get an array with some condition

const rrr = arr.filter((a)=> a>5 )

console.log('rrr', rrr)

// map , it just regenerate array or by using map you can get a modified arry

console.log('arr', arr)


const gg = (r)=>r*r*r
const arrSquare = arr.map((a)=>a*a)

console.log('arrSquare', arrSquare)


// forEach, filter, map