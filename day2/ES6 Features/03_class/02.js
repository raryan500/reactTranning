/*
Class 
    properties 
    method 
        constructor
Object
*/

class Person {
    constructor(name, surname, age) { // constructor
        this.name = name; // property
        this.surname = surname;
        this.age = age;
    }

    getfullname() { // normal method
        return this.name + " " + this.surname;
    }

    static older(person1, person2) { // static method
        return person1.age >= person2.age ? person1 : person2; // Ternary operator
    }
}

const devender = new Person("Devender", "Merugu", 25); // creating an object
const dinesh = new Person("Dinesh", "Subramanian", 28);

console.log(devender.getfullname());
console.log(dinesh.getfullname());

console.log(Person.older(devender, dinesh));