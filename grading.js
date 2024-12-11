
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade() {
    rl.question("Enter the student's marks (0 to 100): ", (input) => {
        const marks = parseFloat(input);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
            calculateGrade(); // Retry on invalid input
        } else {
            let grade;

            if (marks > 79) {
                grade = 'A';
            } else if (marks >= 60 && marks <= 79) {
                grade = 'B';
            } else if (marks >= 50 && marks <= 59) {
                grade = 'C';
            } else if (marks >= 40 && marks <= 49) {
                grade = 'D';
            } else {
                grade = 'E';
            }

            console.log(`The grade for marks ${marks} is: ${grade}`);
            rl.close();
        }
    });
}

calculateGrade();
