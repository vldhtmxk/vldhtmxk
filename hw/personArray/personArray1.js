function createPerson(s,i) {
    return {name: s,age: i};
}
let persons = {};
let i = 0;
for(let j = 0 ; j<10 ; ++j) {
   
        let person = createPerson("홍길동",16+i);
        persons[i] = person;
        i++;
    
}
console.log(persons);