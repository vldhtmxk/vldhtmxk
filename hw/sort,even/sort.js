let a = [];
for(let i=0;i<100; ++i) {
a[i] = Math.floor(Math.random()*100+1);

}
for(let i=0;i<a.length;++i){
    let temp = 0;
    for(let j = 1; j<a.length ; ++j){
        if(a[i]<a[j]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }

}
for(let i = 0 ; i < a.length ; ++i) {
    console.log(a[i]);
}
