let person1 = [];
for(let i = 0 ; i< 3;++i) {
   person1[i] = {
    name : '홍길동',
    age : i+16
   }
}
let person2=person1;

person2[0].age = 20;
console.log(person1);
console.log(person2);