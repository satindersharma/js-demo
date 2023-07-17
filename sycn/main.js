// js is a single treaded, means syncronous, means second line execute only if first line finsh
// console.log('first')
// console.log('secnod')
// setTimeout(() => {
//     console.log('third')
// }, 3000)
// console.log('forth')
// console.log('fifth')

// v8 engine features , javascript async(iternaly js is still sycnronus, ie. signle thread)


// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });



// async function abc (){
//     console.log('akdjfn')
//     // promise.then((v)=>{console.log('v', v)})
//     let v = await promise;
//     console.log('fourth')
//     console.log('v', v)
// }

// console.log('first')
// abc()
let userAPI = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('All User Fetched.')}, 4000); 
});


async function getAllUser(){
    console.log('Get All User')
    userAPI.then((r=>{console.log(r)}))

}


console.log('Web Application Started...')

getAllUser()
console.log('Web Application Started.')