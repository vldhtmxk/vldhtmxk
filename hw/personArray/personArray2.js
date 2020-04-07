function createPerson(s,i) {
    return {name: s,age: i};
}
let persons1 = {};
let i = 0;
for(let j = 0 ; j<10 ; ++j) {
   
        let person = createPerson("홍길동",16+i);
        persons1[i] = person;
        i++;
    
}
let persons2 = Object.assign({},persons1);
console.log(persons2);