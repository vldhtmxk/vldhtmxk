function amount(arr) {
    let sum = 0;
    for(let i = 0 ;i<arr.length;++i)
        sum += arr[i];
        return sum;
}
function test_sum() {
    let arr = [];
    for(let i= 0 ;i<5;++i){
        arr[i] = Math.floor(Math.random()*100+10);
    }
    console.log(arr);
    console.log(amount(arr));
}
for(let i = 0 ; i<5;++i)
    test_sum();