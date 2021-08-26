var submitBtnRef = document.querySelector("#submit-btn");
var txtInput = document.querySelector("#txt-input"); 
var outputBox = document.querySelector("#output-box");

var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationUrl(text) {
  return serverUrl + "?text=" + text;
}

function errorHandler(error) {
  alert("Something wrong with server, try again after sometime" + error);
}

function clickHandler() {
  var text = txtInput.value;
  fetch(getTranslationUrl(text))
  .then(response => response.json())
  .then(json => outputBox.innerText = json.contents.translated)
  .catch(errorHandler)
}

submitBtnRef.addEventListener("click", clickHandler);