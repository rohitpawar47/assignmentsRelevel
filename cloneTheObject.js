/* Program to clone the object and change the property and then iterate the array of objects 
using inbuilt functions and to console the object property and frame a meaning full sentence.*/

// Creating an Object..
const studentData = [{
    rollNumber: `123`,
    firstName: `Ankit`,
    lastName: `Agarwal`,
    enrollmentNumber: `ST001`,
    subject: `Computer Science`,
    address: {
        city: `Pune`,
        state: `MH`,
    }
}];

// Cloning an object..
const cloneStudentData = Object.assign({}, studentData);

// Changing properties of an object..
cloneStudentData[0].firstName = `Rohan`;
cloneStudentData[0].lastName = `Pawar`;
cloneStudentData[0].enrollmentNumber = `ST123`;
cloneStudentData[0].address.city = `Mumbai`;

// const key = Object.keys(cloneStudentData);
// const value = Object.values(cloneStudentData);

// Iterating the arrays of object..
for ([key, value] of Object.entries(cloneStudentData)) {
    console.log(`My name is ${value.firstName} ${value.lastName}, iam a student of ${value.subject} and i live in ${value.address.city}.`);
}



// console.log(cloneStudentData);

