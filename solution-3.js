const prompt=require('prompt-sync')({sigint:true})
//function to calculate payee (tax) based on monthlypay
function calculateTax(monthlypay) {
    if (monthlyPay <= 24000){
        return 0.10;
    }else if (monthlyPay >=24001 && monthlyPay <= 32333){
        return 0.25;
    }else if (monthlyPay >32334 && monthlyPay <=50000) {
        return 0.30;
    }else if (monthlypay >50001 && monthlyPay <=80000) {
        return 0.325;
    }else {
        return 0.35
    }
}

//function to calculate NHIF deductions based on gross salary
function calculateNHIFDeductions(grossSalary) {
    let nhifDeductions
    //calculate NHIF deductions based on the provided rates
    //you can updates these rates as needed
    if (grossSalary <5999) {
        nhifDeductions= 150;
    }else if (glossSalary <=7999) {
        nhifDeductions = 300
    }else if ( glossSalary <=11999) {
        nhifDeductions = 400;
    }else if (grossSalary<= 14999) {
        nhifDeductions = 500;
    }else if (glossSalary <19999) {
        nhifDeductions = 600
    } else if (glossSalary <= 24999) {
        nhifDeductions = 750;
    }else if (glossSalary <=29999) {
        nhifDeductions = 850;
    }else if (grossSalary <=34999) {
        nhifDeductions = 900;
    }else if (glossSalary <=39999) {
        nhifDeductions = 950;
    }else if (glossSalary<=44999) {
        nhifDeductions = 1000
    }else if (glossSalary <=49999) {
        nhifDeductions = 1100
    }else if (glossSalary<=59999) {
        nhifDeductions =1200;
    }else if (glossSalary <=69999){
        nhifDeductions = 1300;
    }else if (glossSalary <=79999){
        nhifDeductions = 1400;
    }else if (glossSalary <=89999){
        nhifDeductions = 1700;
    }
    return nhifDeductions
    }

function calculateNSSF(glossSalary) {
    let NSSFContributionEmployee
    letNSSFContributionEmployer
    //checkif the gross salary is within tier 1 (up to 7000)
    if (glossSalary <= 7000) {
        NSSFContributionEmployee = glossSalary *0.06;
        NSSFContributionEmployer = glossSalary *0.06;
    }
    //check if the gross salary is within tier 2 (7001 - 36000)
    else if (glossSalary <=36000) {
        NSSFContributionEmployee = 420;// 6% of 7000
        NSSFContributionEmployer = 420;// 6% of 7000
    
    //if the gross salary is above tier 2, continue with the standard 6% contribution rate
    
        NSSFContributionEmployee = glossSalary *0.06;
        NSSFContributionEmployer = glossSalary *0.
        }
        return NSSFContributionEmployee
    }
    function calculateNetSalary(basicSalary, benefits) {

        const totalTax= calculateTax(basicSalary)* basicSalary
        console.log(totalTax)
        const PAYE= totalTax-2400
        const glossSalary = basicSalary + benefits;
        //calculate NHIF deductions

        const nhifDeductions =calculateNHIFDeductions(glossSalary);
        //calculate calculateNSSF pay for NSSF contribution

        //calculate NSSF for tier 1 and tier 2
        const totalDeductions = nhifDeductions + nssfContributions + PAYE
        const netSalary = basicSalary - totalDeductions;

        return netSalary;
    }
    const benefits=parseInt(prompt("enter the benefits; "))
    const basicSalary=parseInt(("enter basic salary;" ))

    console.log(calculateNetSalary(basicSalary,benefits))
