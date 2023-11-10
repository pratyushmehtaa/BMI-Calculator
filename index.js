var cal = document.querySelector("button");
var out = document.querySelector("#answer");
var answerCSS = document.querySelector("#answer");
//function for rounding off the values of BMI to one decimal place by keeping the prcision argument to 1
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
//function for innerhtml change conditioning
function ChangingInnerHTML(CalBMI){

    if(CalBMI <18.5 ){
        out.innerHTML = `Your BMI is ${CalBMI} and you are underweight`;
        answerCSS.style.backgroundColor= "#8B0000";

    }
    else if(18.5 <=CalBMI && CalBMI <= 24.9){
        out.innerHTML = `Your BMI is ${CalBMI} and you are normal`;
        answerCSS.style.backgroundColor = "lawngreen";
    }
     else if(25 <= CalBMI && CalBMI<= 29.9){
        out.innerHTML = `Your BMI is ${CalBMI} and you are overweight`;
        answerCSS.style.backgroundColor = "orange";
    }
    else if(30 <= CalBMI && CalBMI <= 34.9 ){
        out.innerHTML = `Your BMI is ${CalBMI} and you are obese`;
        answerCSS.style.backgroundColor = "orangered";
    }
    else if(35 <= CalBMI && CalBMI <= 39.9){
        out.innerHTML = `Your BMI is ${CalBMI} and you are severely obese`;
        answerCSS.style.backgroundColor = "crimson";}
    else{
        out.innerHTML = `Your BMI is ${CalBMI} and you are morbidly obese`;
        answerCSS.style.backgroundColor = "#8B0000";
    }
    }
//eventlistener of the calculate button
cal.addEventListener("click",function(){
    

let height1 = parseInt(document.querySelector("#height").value);
let weight1 = parseInt(document.querySelector("#weight").value);

//selecting the options and hence applying the formula accordingly

var x = document.getElementById("dimensions");
var i = x.selectedIndex;
var SelectedOption  =  x.options[i].text;
if(SelectedOption == "Kg and Meters"){
    var BMI1 = weight1/(height1 * height1);//Kg and Meters op1
    var roundedBMI1 = round(BMI1 ,1);
    ChangingInnerHTML(roundedBMI1);
    
}
else if(SelectedOption == "Kg and Cm"){
    var BMI2 = (weight1/height1/height1)*10000;//Kg and cm op2
    var roundedBMI2 = round(BMI2 ,1);
   ChangingInnerHTML(roundedBMI2);
}
else{
    alert(" Please select an input format! ");
}

})


