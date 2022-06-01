
class Person{

constructor (name, age) {
    this.name = name;
    this.age = age;
}


compareAge = function (p2, p1){
    if (p1.age === p2.age) {
        
 if (p1.age < p2.age  ){   
    return `${p1.name} is younger than me.`;
    } else if(p1.age === p2.age) {
    return `${p1.name} is the same age as me.`; }
 } else if (p1.age > p2.age){
    return `${p1.name} is older than me.`;
 }else if (p1.age < p2.age ){
    
    return `${p1.name} is younger than me.`;}
}
}
pA =  new Person("Samuel", 24);
pB = new Person("Joel", 36);
pC = new Person("Lily", 24);

console.log(pB.compareAge(pC,pB));
