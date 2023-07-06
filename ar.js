const a = [1,2,3,45,6];




// console.log(a[a.length-1])
// loop over array

// way 1
// initial ; condition ; increment/decriment
// for(i=0;i<a.length;i++){
//     console.log(a[i])
// }

// way 2
a.forEach(v=>console.log(v))




// add elemt to the end of array

console.log(a);
a.push(67)

console.log(a)

// splice start (index where you want to add), delete (index you want to delete exclsive), value
// a.splice(0,2,90)
// [ 1, 2, 3, 45, 6, 67 ]
// a.splice(0,2,90) go to index 0, inclusive delete next 2 (means 0, 1), insert 90 at index 0
// [ 90 3, 45, 6, 67 ]
// a.splice(3,2,90)

// [ 1, 2, 3, 45, 6, 67 ]
// a.splice(0,2,90) go to index 3, inclusive start delete next 2(45, 6), insert 90 at index 3
// [ 1, 2, 3, 90, 67 ]

// how to add at 0 index
// a.splice(0,0,90) // start at 0 , don't delte any item, put 90 at 0
console.log(a)

console.log('============================================');
// pass by refernce

// const b = [1,2];
// const c = b;
// // javascript is dynamically types signle threaded language
// console.log('b', b)
// console.log('c', c)

// c.push(3)

// console.log('b', b)
// console.log('c', c)

// pass by value
// let e = 10;
// let f = e;
// console.log('e', e)
// console.log('f', f)
// f = 20;

// console.log('e', e)
// console.log('f', f)




 // javascript is dynamically types, signle threaded language, sycnronous 


 function fun(){
    console.log('fun')
 }



//  console.log('a');
// //  sync fun() prmosie sync await 

// setTimeout(()=>{
//     console.log('setTimeout')
// }, 5000) // asyncronous function
//  console.log('b');
//  const r = 5;
//  console.log('r', r)

// let couter = 1

// setInterval(()=>{
//     console.log(couter)
//     couter++;
// },1000
// )