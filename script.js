function compute()
{   
    //get principal amount and send a validation error for the text box
    var principal = document.getElementById("principal").value;
    if(principal == "") {
    alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var fprincipal = parseFloat(principal);
    if(fprincipal <=0) {
    alert("Please enter a positive number");
    document.getElementById("principal").focus();
    return false;
    }
 

    //get the rest of the values and calculate interest
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    var year = parseFloat(years) + 2021;
    //removed: var today = newDate();
    //removed: var year = parseFloat(years) + parseFloat(today.getFullYear());
    var interest = parseFloat(principal * years * rate) /100;

    //create message with calculation
    var statement = '<p>If you deposit $<span class="values">' + principal + '</span></p>'
    + '<p> at an interest rate of <span class="values">' + rate + '%. </span></p>'
    + '<p> You will receive an amount of $<span class="values">' + interest + ', </span> </p>'
    + '<p> In the year <span class="values">' + year + '. </span></p>'
    //return message in span below button
    document.getElementById("result").innerHTML=statement; 

    //confirmed passing validation - extra 
    alert("Thanks for submitting! See your interest below the computation button.")
    return true;

}
//dynamically show the rate next to the slider
function showRate(){
    var rate = document.getElementById("rate");
    document.getElementById("showrate").innerHTML= rate.value + "%";
}
       