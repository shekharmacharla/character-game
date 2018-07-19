var a;

function forward() {
    if (document.getElementById("box1").value != "") {
        document.getElementById("box2").value += document.getElementById("box1").value.charAt(0); //box1: abcd  || box2: a
        document.getElementById("box1").value = document.getElementById("box1").value.substring(1); //box1: bcd
    }

    else {
        clearInterval(a);
    }
}


function reverse() {
    if (document.getElementById("box2").value != "") {

        document.getElementById("box1").value = document.getElementById("box2").value.slice(-1) + 
                                                document.getElementById("box1").value;                  // box1:d  box2:abc(d)movedto box1
        document.getElementById("box2").value = document.getElementById("box2").value.slice(0, -1); // box2: last char is sliced
    }
    else {
        clearInterval(a);
    }
}


document.getElementById("forward").
    addEventListener('click', function () {
        clearInterval(a);
        a = setInterval(forward, 1000);
    });

document.getElementById("backward").
    addEventListener('click', function () {
        clearInterval(a);
        a = setInterval(reverse, 1000);
    });

 document.getElementById("pause").addEventListener('click',function(){
        clearInterval(a);
        
        })