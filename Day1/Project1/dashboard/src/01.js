let bihar = ["Patna", "Gaya", "Bhagalpur", "Motihari", "Bettiah"];
console.log(bihar)

const state = {
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Motihari", "Bettiah"],
    UP: ["Gorakhpur", "Noida", "Varanasi", "Ayodhya", "Kanpur"],
    Gujarat: ["Surat", "Gandhinagar", "Ahmedabad", "Vadodara", "Rajkot"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar"],
};
console.log(state)


let multiply = (x, y) => x * y;
console.log(multiply(3 , 4))


class Car {
    constructor(color) {
        this.color = color;
    }
 
    move(speed) {
        return this.color + " car is moving at" + speed + "Km/ph";
    }
 
}
 
const redCar = new Car("Red"); // creating an object
const whiteCar = new Car("White");
 
console.log(redCar.move(200));
console.log(whiteCar.move(230));