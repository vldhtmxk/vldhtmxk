let a = [];
for(let i=0;i<100; ++i) {
    a[i] = Math.floor(Math.random()*100+1);
}
a.sort(compareNumber);

function compareNumber(i,j) {
    return j-i;
}
console.log(a);

 