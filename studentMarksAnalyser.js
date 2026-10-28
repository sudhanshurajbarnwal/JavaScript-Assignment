// ASSIGNMENT 1
// TASK 1
let sname ="Rahul kumar";
let roll= 101;
let department = "CSE";

//console.log("Name: "+ sname);
// TASK 2
let marks=[78,85,62,91,34];


// TASK 3
function calculateTotal(marks){
    let total=0;
    for(let i=0; i<marks.length; i++){
        total+=marks[i];
    }
    return total;
}

// TASK 4
function calculatePercantage(marks){
    let total=calculateTotal(marks);
    let percentage=(total/500)*100;
    return percentage;
}


// TASK 5
let highest=marks[0];
for(let i=0; i<marks.length; i++){
    if(marks[i]>highest){
        highest=marks[i];
    }
}


// TASK 6
let lowest=marks[0];
for(let i=0; i<marks.length; i++){
    if(marks[i]<lowest){
        lowest=marks[i];
    }
}

// TASK 7
let count=0;
for (let i=0; i<marks.length; i++){
    if(marks[i]>=40){
        count++;
        // console.log("Subject passed "+(i+1)+" with marks: "+marks[i]);
    }
}


// TASK 8
sname=sname.toUpperCase();
name_length=sname.length;


//TASK 9
console.log("=====FINAL REPORT=====");
console.log("Name: "+ sname);
console.log("Roll Number: "+ roll);
console.log("Department: "+ department);
console.log("All Marks: "+marks);
console.log("Total Marks: "+calculateTotal(marks));
console.log("Percentage: "+calculatePercantage(marks)+"%");
console.log("Highest Marks: "+highest);
console.log("Lowest Marks: "+lowest);   
console.log("Subjects Passed: "+count);
console.log(sname + " : Name Length: "+ name_length);
//BONUS TASK
function MarksRate(marks) {
    if (marks >= 90) {
        return "Execellent";
    } else if (marks >= 75) {
        return "Good";
    } else if (marks >= 60) {
        return "Average";
    } else {
        return "Need Improvement";
    }
}
console.log("Marks Rate: "+MarksRate(calculatePercantage(marks)));