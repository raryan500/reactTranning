// ES5
function Person(name, surname, age) { // constructor
    this.name = name;
    this.surname = surname;
    this.age = age;
}

// Prototype 
Person.prototype.getfullname = function () {
    return this.name + " " + this.surname;
}

Person.older = function (person1, person2) {
    return person1.age >= person2.age ? person1 : person2; // Ternary operator
}

const devender = new Person("Devender", "Merugu", 25); // creating an object
const dinesh = new Person("Dinesh", "Subramanian", 28);

console.log(devender.getfullname());
console.log(dinesh.getfullname());

console.log(Person.older(devender, dinesh));



