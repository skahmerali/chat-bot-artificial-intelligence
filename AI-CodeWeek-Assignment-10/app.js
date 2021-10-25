
function degree() {

    let degree = document.getElementById("degree").value
    let select = document.getElementById("selectDegree").value

    let c = degree * (9 / 5) + 32;

    let f = (degree - 32) * 5 / 9;


    if (select == "c") {

        document.getElementById("degreeResult").innerHTML = c

    } else {
        document.getElementById("degreeResult").innerHTML = f

    }


}
