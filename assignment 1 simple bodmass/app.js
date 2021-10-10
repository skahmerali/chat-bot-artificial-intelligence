
// var addResult = document.getElementById("add-result").value;

function add() {
    //    addResult.innertxt = Number (num1) + Number (num2)
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
   
    var result = Number(num1) + Number(num2)
    console.log(result)
     document.getElementById("add-result").value=result ;



}
function minus() {
    var num1 = document.getElementById("num3").value;
    var num2 = document.getElementById("num4").value;
    var result = Number(num1) - Number(num2)
    console.log(result)
    document.getElementById("minus-result").value=result ;
}
function mul() {
    var num1 = document.getElementById("num5").value;
    var num2 = document.getElementById("num6").value;
    var result = Number(num1) * Number(num2)
    console.log(result)
    document.getElementById("mul-result").value=result ;

}
function devide() {
    var num1 = document.getElementById("num7").value;
    var num2 = document.getElementById("num8").value;
    var result = Number(num1) / Number(num2)
    console.log(result)
    document.getElementById("devide-result").value=result ;

}