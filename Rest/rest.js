const array=[1,2,3,4];

function sum(...args){
    let sum=0;
    for(const arg of args){
        sum += arg;
    }
    console.log(sum);
}
sum(...array);