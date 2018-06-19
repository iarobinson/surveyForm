var lovedOneInput, emailInput, favNumInput, selectedEleInput, userMessageInput;
var nameOfLovedOne, email, favNum, selectedEle, focusArea, gratitudeCheckedBoxes, userMessage;
window.onload = go;

function go() {
  lovedOneInput = document.getElementById("name");
  emailInput = document.getElementById("email");
  favNumInput = document.getElementById("number");
  selectedEleInput = document.getElementById("dropdown");
  userMessageInput = document.getElementById("self-generated-nice-thing");
  // console.log(lovedOneInput, emailInput, favNumInput, selectedEleInput, userMessageInput);
}

function submissionClick() {
  nameOfLovedOne = lovedOneInput.value;
  email = emailInput.value;
  favNum = favNumInput.value;
  alert(`Remember that ${nameOfLovedOne} loves you and your number ${favNum} symbolizes luck`);
}

function gratitudeMessageGenerator() {
  
}
