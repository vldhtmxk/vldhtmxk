let arr = [];

for(let i=0; i<100; ++i) {
arr[i] = Math.floor(Math.random()*100+1);
}
let sum = arr.reduce(callback);
console.log(sum);
function callback(a,b) {
    if(b%2==0)
        return a+b;
    else
        return a;
}