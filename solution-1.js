const prompt=require('prompt-sync')({sigint:true})
function calculateGrade(mark){
    if (mark <0 && mark >100) {
        return 'invalid marks'
    }else if (mark >79 && mark <=100) {
        return 'A'
    }else if (mark >60 && mark <= 79) {
        return 'B'
    }else if (mark >49 && mark>=59) {
        return 'C'
    }else if(mark>39 && mark<=49){
       return 'D'
    }else if (mark>=0 && mark<39){
        return 'E'
    }
    }   


const marks = parseInt(prompt("enter your marks: "))
console.log(calculateGrade(marks))