const prompt=require('prompt-sync')({sigint:true})
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint =5;
    const maxDemeritPoint = 12;

    if(speed <= 70) {
        return 'OK';
    }else {
        //calculate demerit points based on the speed exceeding the limit
        const demeritPoints =(speed-70)/5;
        //check if demerit points excced the limit for lincense suspension
        if(demeritPoints >12) {
            return "lincense suspended"
        //return "lincense suspended" if demerit points exceed 12
        }else {
            return `points: ${demeritPoints}`
        }
    }
}
const speed=parseInt(prompt("enter the speed; "))
console.log(checkSpeed(speed))
