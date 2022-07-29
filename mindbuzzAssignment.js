// Iterate from 1 to 100(using for loop and if else statement) 

function mindBuzz() {
    var output = [];

    for (let i = 1; i <= 100; i++){
        
        if (i % 15 === 0) {
            output.push("MindBuzz");
        } else if (i % 5 === 0) {
            output.push("Buzz");
        } else if (i % 3 === 0) {
            output.push("Relevel");
        } else {
            output.push(i);
        }
    }

    console.log(output);
}

mindBuzz();
