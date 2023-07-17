const marks = 78


function fn() {
    if (marks < 33) {
        return "fail"
    } else if (marks >= 90) {
        return "Pass with First Division";
    } else if (marks >= 70) {
        return "Pass with Second Division";

    } else {

        return "Pass";
    }
}


// const result = fn();

// condition  ? if true : if false;
// condition  ? if true : if false;
// const result = marks>=33 ? "pass": "fail";
const result = marks < 33 ? "fail"
                : marks >= 90 ? "Pass with First Division"
                : marks >= 70 ? "Pass with Second Division"
                : "Pass";

console.log('result', result)


const b = 10

const fnn = (b)=>{
    if(b){
        return b
    }else{
        return "sas"
    }
}

const r = fnn(b);

// console.log('r', r)




const f = b || "sas"

console.log('f', f)




