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
function calculateOvertimePay(rate, hours)
{    if (hours => 40)
        return rate * hours * 1.5;
}
// Step 5 




