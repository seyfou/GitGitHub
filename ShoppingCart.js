function incrementValue()
{   var val1 = parseInt(document.getElementById('number').value, 10);
    var x;
    val1 = isNaN(val1) ? 0 : val1;
    val1++;
    document.getElementById('number').value = val1;
    x=val1*30000;
    document.getElementById('number1').value=x;
    
}
function decrementValue()
{
    var val2 = parseInt(document.getElementById('number').value, 10);
    var y;
    val2 = isNaN(val2) ? 0 : val2;
    val2--;
    document.getElementById('number').value = val2;
    y=val2*30000;
    document.getElementById('number1').value=y;
    
}

function removeFunction()
{
    var myobj = document.getElementById("sec1");
     myobj.remove();
}


function incrementValue1()
{   var val1 = parseInt(document.getElementById('number2').value, 10);
    var x1;
    val1 = isNaN(val1) ? 0 : val1;
    val1++;
    document.getElementById('number2').value = val1;
    x1=val1*20000;
    document.getElementById('number3').value=x1;
    
}
function decrementValue1()
{
    var val2 = parseInt(document.getElementById('number2').value, 10);
    var y1;
    val2 = isNaN(val2) ? 0 : val2;
    val2--;
    document.getElementById('number2').value = val2;
    y1=val2*20000;
    document.getElementById('number3').value=y1;
    
}

function removeFunction1()
{
    var myobj = document.getElementById("sec2");
     myobj.remove();
}



function incrementValue2()
{   var val1 = parseInt(document.getElementById('number4').value, 10);
    var x1;
    val1 = isNaN(val1) ? 0 : val1;
    val1++;
    document.getElementById('number4').value = val1;
    x1=val1*25000;
    document.getElementById('number5').value=x1;
    
}
function decrementValue2()
{
    var val2 = parseInt(document.getElementById('number4').value, 10);
    var y1;
    val2 = isNaN(val2) ? 0 : val2;
    val2--;
    document.getElementById('number4').value = val2;
    y1=val2*20000;
    document.getElementById('number5').value=y1;
    
}

function removeFunction2()
{
    var myobj = document.getElementById("sec3");
     myobj.remove();
}
