

function sumOf() {
    let sum1 = Number(document.getElementById("sum1").value);
    let sum2 = Number(document.getElementById("sum2").value);


    let values = sum1 + sum2

    if (sum1 == sum2) {
        let sumResult = values * 3
        document.getElementById("sumResult").innerHTML = sumResult
    } else {
        sumResult = sum1 + sum2

        document.getElementById("sumResult").innerHTML = values


    }



}







