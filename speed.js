const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkSpeed() {
    rl.question("Enter the speed of the car: ", (input) => {
        const speed = parseFloat(input);

        if (isNaN(speed) || speed < 0) {
            console.log("Invalid input. Please enter a positive number.");
            checkSpeed(); // Retry on invalid input
        } else {
            const speedLimit = 70;
            const kmPerDemeritPoint = 5;

            if (speed <= speedLimit) {
                console.log("Ok");
            } else {
                const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
                console.log(`Points: ${demeritPoints}`);

                if (demeritPoints >= 12) {
                    console.log("License suspended");
                }
            }
            rl.close();
        }
    });
}

checkSpeed();
