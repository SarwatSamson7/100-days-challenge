//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
//Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Car"] = 0] = "Car";
    vehicleType[vehicleType["Truck"] = 1] = "Truck";
    vehicleType[vehicleType["Motorcycle"] = 2] = "Motorcycle";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.Truck);
