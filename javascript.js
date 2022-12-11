var btntranslate=document.querySelector("#tex-trans")
var textinput=document.querySelector("#txt-area")
var output=document.querySelector("#result-area")


function clickHandler(){
    
    console.log(output.innerText="shahahahh"+textinput.value);
}
btntranslate.addEventListener("click", clickHandler);