// Constructor function
function DelayedGreeter(username) {
    this.username = username;
}

// Object.prototype.name = value
DelayedGreeter.prototype.greet = function () { // added method
    setTimeout(() => console.log('Programming with ' + this.username), 5000); // after 5 seconds
}

let greeter = new DelayedGreeter("Harsh"); // creating an object
greeter.greet(); // calling greet function