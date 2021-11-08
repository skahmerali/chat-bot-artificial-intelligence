var obtainMarks = document.getElementById("obtainMarks");
var totalMarks = document.getElementById("totalMarks");
var resultObtainMarks = document.getElementById("resultObtainMarks");
var resultTotalMarks = document.getElementById("resultTotalMarks");
var resultPercentage = document.getElementById("resultPercentage");
var resultGrade = document.getElementById("resultGrade");

function calculate() {
    var percentage = ((obtainMarks.value * 100) / totalMarks.value);
    console.log(percentage)
    resultObtainMarks.value = obtainMarks.value;
    resultTotalMarks.value = totalMarks.value;
    resultPercentage.value = percentage + " % ";
    if (percentage <= 100 && percentage >= 80) {
        resultGrade.value = "CONGRATS ! u got (A+) grade"

    } else if (percentage <= 79 && percentage >= 70) {
        resultGrade.value = "GOOD ! u got (A) grade"
    } else if (percentage <= 69 && percentage >= 60) {
        resultGrade.value = "Better ! u got (B) grade"
    }else if(percentage<=59 && percentage>=50){
        resultGrade.value = "NEED TO IMPROVE ! u got (C) grade"
    }else if(percentage<=49 && percentage>=33){
        resultGrade.value = "So HARSH ! u got (D) grade"
    }else{
        resultGrade.value = "POOR ! u got FAIL "
    }



}