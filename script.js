// Resubmission Task

// Calculator Logic

let number1 = 8;
let number2 = 3;
let operator = "-";

if (operator == "+") {
    console.log(number1 + number2);
}
else if (operator == "-") {
    console.log(number1 - number2);
}
else if (operator == "*") {
    if (number1 != 0) {
        console.log(number1 * number2);
    }
    else {
        console.log("Given number is zero");
    }
}
else {
    console.log("Invalid input");
}


// Grade Calculation

let marks = 100;
let bonus = 5;

marks += bonus;

let Grade;

if (marks >= 90) {
    Grade = "A";
}
else if (marks >= 70) {
    Grade = "B";
}
else if (marks >= 50) {
    Grade = "C";
}
else {
    Grade = "F";
}


// Ternary Operator

let result = (marks >= 50 ? "Pass" : "Fail");


// Switch Case

let remark;

switch (Grade) {
    case "A":
        remark = "Excellent";
        break;

    case "B":
        remark = "Good";
        break;

    case "C":
        remark = "Average";
        break;

    default:
        remark = "Poor";
}

console.log("Mark:", marks);
console.log("Grade:", Grade);
console.log("Result:", result);
console.log("Remark:", remark);


// Bonus Check

if (marks >= 90 && bonus > 0) {
    console.log("High mark with bonus");
}