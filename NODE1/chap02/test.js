let a = [1,2,3,4,5,11];
a.sort(compareNumber);
console.log(a);

function compareNumber(i,j) {
    return j-i
}