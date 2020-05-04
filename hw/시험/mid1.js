let a = [];
let sum =0;
for(let i=0;i<100; ++i) {
    a[i] = Math.floor(Math.random()*100+1);
    sum = sum + a[i];
}
sum = sum/a.length;
console.log(sum);