function outcome(){
    var x = Number(document.getElementById("num-one").value);
    var y = Number(document.getElementById("num-two").value);
    z = 0;

    if (document.getElementById("box1").checked){
        z = x + y;
    }
    else if(document.getElementById("box2").checked){
        z = x - y;
    }
    else if(document.getElementById("box3").checked){
        z = x * y;
    }
    else {
        z = x / y;
    }
    document.getElementById("resultArea").innerHTML = "Result: " + String(z);
}