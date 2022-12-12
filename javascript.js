
var btntranslate=document.querySelector("#tex-trans")
var textinput=document.querySelector("#txt-area")
var output=document.querySelector("#result-area")

        var serverURL="https://api.funtranslations.com/translate/minion.json"


    function getTranslationsURL(text){
        return serverURL+"?"+"text="+text;
    }
    function errorHandler(error){
        console.log("error occured",error);
        alert("something went wrong with server plz try later");
    }

function clickHandler(){
    
    //taking input
    var inputText=textinput.value
    fetch(getTranslationsURL(inputText))
    .then(response=>response.json())
    .then(json=> console.log(json.contents.translated))
    .catch(errorHandler)
    // output.innerText=translatedText;
            // var translatedText=
};
btntranslate.addEventListener("click", clickHandler);

// var year=0;
// var input=("Enter year");
// if(input==4%0){
//     conslo.log("leap Year");
// }
// else{
//     console.log("Not Leap Year");
// }