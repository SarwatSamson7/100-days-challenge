//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

//Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.

// Create two modules , one that exports a class and another that imports the class and create an instance.


import { Person } from "./person";

const sarwat = new Person("Sarwat");

sarwat.greet();
