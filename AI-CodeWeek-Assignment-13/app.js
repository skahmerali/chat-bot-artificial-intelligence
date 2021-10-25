function largestOf() {
    var L1 = document.getElementById("L1").value;
    var L2 = document.getElementById("L2").value;
    var L3 = document.getElementById("L3").value;

    if (L1 > L2 || L1 > L3) {
        document.write(L1)
    } else if (L2 > L1 || L2 > L3) {
        document.write(L2)
    
    } else if (L3 > L1 || L3 > L2) {
        document.write(L3)
    } else {
        console.log("nikal")
    }

}
