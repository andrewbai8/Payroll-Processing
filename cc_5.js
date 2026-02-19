// Step 2 Created Employee Payroll

const employees = [
    { name: "Andrew Bai", hourlyRate: 100, hoursWorked: 35 },
    { name: "Billy Bob", hourlyRate: 25, hoursWorked: 55 },
    { name: "Lily", hourlyRate: 35, hoursWorked: 45 }
]
// Step 3 Now needing the functions for the loop
function calculateBasePay(rate, hours){
    return rate * Math.min(hours,40)
}
// Step 4 
function calculateOvertimePay(rate, hours){
    if (hours > 40)
        return (hours - 40) * rate * 1.5 
return 0;
}

// Step 5 
function calculateTaxes(grossPay) {
return grossPay * 0.15
}

function processPayroll(employee) {
const name = employee.name;
const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
const overtimePay = calculateOvertimePay (employees.hourlyRate, employees.hoursWorked)
const grossPay = basePay + overtimePay
const netpay = grossPay - calculateTaxes(grossPay)

return {
name: employee.name,
basePay: basePay, 
overtimePay: overtimePay,
netpay: netpay,
grossPay: grossPay
}
}
employees.forEach(function(employee) {
console.log(processPayroll(employee));

})