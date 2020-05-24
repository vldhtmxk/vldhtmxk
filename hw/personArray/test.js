function test1(f) {
    let result = f(3,4);
    console.log(result);
}

test1((a,b) => a+b);
test1((a,b) => a*b);

setTimeout((msg)=>console.log(msg,new Date()),1000,"1초 후");