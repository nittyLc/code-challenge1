// tax (PAYE)
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

//NHIF deductions
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
    return 1000;
  
}

//NSSF deductions
function calculateNSSF(grossIncome) {
    const tier1 = Math.min(grossIncome, 6000) * 0.06;
    const tier2 = Math.max(0, Math.min(grossIncome - 6000, 12000)) * 0.06;
    return tier1 + tier2;
}

// net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossIncome = basicSalary + benefits;
    const payeeTax = calculateTax(grossIncome);
    const nhifDeduction = calculateNHIF(grossIncome);
    const nssfDeduction = calculateNSSF(grossIncome);

    const netSalary = grossIncome - payeeTax - nhifDeduction - nssfDeduction;

    return {
        grossIncome,
        payeeTax,
        nhifDeduction,
        nssfDeduction,
        netSalary,
    };
}

const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));

const results = calculateNetSalary(basicSalary, benefits);

alert(`Gross Income: KES ${results.grossIncome.toFixed(2)}\n` +
      `PAYE Tax: KES ${results.payeeTax.toFixed(2)}\n` +
      `NHIF Deduction: KES ${results.nhifDeduction.toFixed(2)}\n` +
      `NSSF Deduction: KES ${results.nssfDeduction.toFixed(2)}\n` +
      `Net Salary: KES ${results.netSalary.toFixed(2)}`);
