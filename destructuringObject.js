// Program to demonstrate Object destructuring in nested objects.


const employee_one = {
    firstName: `Sam`,
    lastName: 'Parker',
    age: `35`,
    gender: `M`,
    address: {
        city: `London`,
        country: `UK`
    }
};

const employee_two = {
    firstName: `Sally`,
    lastName: 'Kent',
    age: `31`,
    gender: `F`,
    education: `MBA`,
    address: {
        city: `New York`,
        country: `USA`
    }
};

console.log("\n******** Destructuring Examples: ********** \n");

// Destructuring of Objects...

const { firstName, lastName, age, address: { city }, education = 'Graduate' } = employee_one;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(city);
console.log(education);

// Using function ..

function employeeData({ firstName, lastName, age, address: { city }, education = 'Graduate' }) {
    console.log(`Employee ${firstName} ${lastName} is an ${education} and lives in ${city}. `);
}

employeeData(employee_one);
employeeData(employee_two);

// Using Spread Operator..

const { ...rest } = employee_two;
console.log(rest);

// Concatenating two objects..

const employee_three = { ...employee_one, ...employee_two };
console.log(employee_three);
