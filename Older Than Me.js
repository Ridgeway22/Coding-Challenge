
class Person{

constructor (name, age) {
    this.name = name;
    this.age = age;
}


compareAge (p1){
    if (p1.age === pA.age) {
        
 if (p1.age < pB.age  ){   
    return `${p1.name} is younger than me.`;
    } else if(p1.age === pA.age) {
    return `${p1.name} is the same age as me.`; }
 } else if (p1.age > pA.age){
    return `${p1.name} is older than me.`;
 }else if (p1.age < pB.age ){
    
    return `${p1.name} is younger than me.`;}
}
}
pA =  new Person("Samuel", 24);
pB = new Person("Joel", 36);
pC = new Person("Lily", 24);

console.log(pC.compareAge(pA));