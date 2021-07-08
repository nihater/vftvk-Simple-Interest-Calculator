function compute()
{
    //gets principal
    var principal = document.getElementById("principal").value;

    if(principal<=0){
        alert('enter a positive number');
        document.getElementById('principal').focus();
        return;
    }

    //gets rate value , gets years value,
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // calculate interes value 
    var interest = principal * years * rate /100;
    // get current year and add selected year
    var year = new Date().getFullYear() + parseInt(years);

// gets result element
    var result=document.getElementById('result');

    

// create a string for result text
    var resultText='If you deposit <mark>'+ principal +'</mark>, <br\> ' +
        'at an interest rate of <mark>'+ rate +'% </mark> <br\>'+ 
        'You will receive an amount of <mark>'+ interest +'</mark><br\>'+
        'in the year <mark>'+ year +'</mark><br\>';
// write result text to result element's HTML
        result.innerHTML=resultText;


}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= rateval + ' %';
}