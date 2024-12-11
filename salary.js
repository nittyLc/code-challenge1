const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateTax(grossIncome) {
    let tax = 0;
    if (grossIncome <= 24000) {
        tax = grossIncome * 0.1;
    } else if (grossIncome <= 32333) {
        tax = (24000 * 0.1) + ((grossIncome - 24000) * 0.25);
    } else {
        tax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((grossIncome - 32333) * 0.3);
    }
    return tax;
}

function calculateNHIF(grossIncome) {
    if (grossIncome <= 5999) return 150;
    if (grossIncome <= 7999) return 300;
    if (grossIncome <= 11999) return 400;
    if (grossIncome <= 14999) return 500;
    if (grossIncome <= 19999) return 600;
    if (grossIncome <= 24999) return 750;
    if (grossIncome <= 29999) return 850;
    if (grossIncome <= 34999) return 900;
    if (grossIncome <= 39999) return 950;
    if (grossIncome <= 44999) return 1000;
    if (grossIncome <= 49999) return 1100;
    if (grossIncome <= 59999) return 1200;
    if (grossIncome <= 69999) return 1300;
    if (grossIncome <= 79999) return 1400;
    if (grossIncome <= 89999) return 1500;
    if (grossIncome <= 99999) return 1600;
    return 1700;
}

function calculateNSSF(grossIncome) {
    const tier1 = Math.min(grossIncome, 6000) * 0.06;
    const tier2 = Math.max(0, Math.min(grossIncome - 6000, 12000)) * 0.06;
    return tier1 + tier2;
}

function calculateNetSalary() {
    rl.question("Enter the basic salary: ", (basicSalaryInput) => {
        rl.question("Enter the benefits: ", (benefitsInput) => {
            const basicSalary = parseFloat(basicSalaryInput);
            const benefits = parseFloat(benefitsInput);

            if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
                console.log("Invalid input. Please enter positive numbers for basic salary and benefits.");
                calculateNetSalary();
                return;
            }

            const grossIncome = basicSalary + benefits;
            const payeeTax = calculateTax(grossIncome);
            const nhifDeduction = calculateNHIF(grossIncome);
            const nssfDeduction = calculateNSSF(grossIncome);

            const netSalary = grossIncome - payeeTax - nhifDeduction - nssfDeduction;

            console.log(`\nGross Income: KES ${grossIncome.toFixed(2)}`);
            console.log(`PAYE Tax: KES ${payeeTax.toFixed(2)}`);
            console.log(`NHIF Deduction: KES ${nhifDeduction.toFixed(2)}`);
            console.log(`NSSF Deduction: KES ${nssfDeduction.toFixed(2)}`);
            console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);

            rl.close();
        });
    });
}

calculateNetSalary();