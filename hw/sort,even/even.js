let a = [];

for(let i=0;i<100; ++i) {
a[i] = Math.floor(Math.random()*100+1);
}
for(let i = 0 ; i < a.length ; ++i) {
    if(a[i]%2 == 0) {
        a.splice(i,1);
        i--;
    }
        
}
for(let i = 0 ; i < a.length ; ++i) {
    console.log(a[i]);
}