let a = [];

for(let i=0;i<100; ++i) {
a[i] = Math.floor(Math.random()*100+1);
}
for(let i = 0 ; i < a.length ;) {
    if(a[i]%2 == 0) 
        a.splice(i,1);
    else
        i++;
        
}
a.sort(compareNumber);
console.log(a);

function compareNumber(i,j) {
    return i-j;
}