var btntranslate=document.querySelector("#tex-trans")
var textinput=document.querySelector("#txt-area")
var output=document.querySelector("#result-area")


function clickHandler(){
    
    console.log(output.innerText="shahahahh"+textinput.value);
}
btntranslate.addEventListener("click", clickHandler);

var year=0;
var input=("Enter year");
if(input==4%0){
    conslo.log("leap Year");
}
else{
    console.log("Not Leap Year");
}