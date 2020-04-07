


let i = 0;
function printTime(msg) {
    console.log(msg,new Date());
    ++i;
    if(i == 10)
        clearInterval(id);
    
}
let id = setInterval((msg)=> printTime(msg),1000,"1초 간격");
