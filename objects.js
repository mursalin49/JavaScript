const car = {
    name: " Fiat",
    model : 500,
    weight : "850kg",
    color : "white",
    start: function() {
        console.log("car has started.");
    },
    drive: function() {
        console.log("car has driving.");
    },
    brake: function() {
        console.log("car has brake.");
    },
    stop: function() {
        console.log("car has stop.");
    },
};
console.log(car.weight);
console.log(car["model"]);
car.start();
car.drive()
car.brake()
car.stop()


