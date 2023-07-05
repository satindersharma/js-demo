// function ways

// function_keyword function_name (arguments){
//     function body
// }
// function func1();
// const a;
// func1()
// var a;
// console.log(a);


// way 1st
// function func1(){

//     console.log('func1')
// }
// func1()
// var a = 10;
// console.log(a);


//1. function without parameter and without return
// function func1(){

//     console.log('func1')
// }

// func1()

//2. // function with parameter and without return
// function func1(name){

//     console.log('hello', name)
// }

// func1('Sat')


// //3. function without parameter and with return
// function func1(){

//     return 20;
// }

// let a = func1()
// console.log(a);


// //4. function with parameter and with return
// function func1(a, b){

//     return a + b;
// }

// let result = func1(10, 30)
// console.log(result);


// //4. function with default parameter and with return
// function func1(a, b=10){

//     return a + b;
// }

// let result = func1(10)
// console.log(result);

// // 5. function expression
// const func1 = function(a,b){
//     return a + b;
// }

// let result = func1(10,15)
// console.log(result);

//6. arrow function
// const func1 = ()=>{
//     console.log('arrow func')
// }
// func1()


//7. arrow function // if ther is only one line, then you can ommit {}
// const func1 = () => console.log('arrow func')

// func1()


//7. arrow function // if functin is returning in one line the we can ommit {}  
//  as well as return keyword
// const func1 = (a, b) => a + b;

// const result = func1(1,2);
// console.log(result);

// func1()

// 8. i there is only one parameter , then you can omit ()
// const func1 = a => a*a;

// const result = func1(10);
// console.log(result);
