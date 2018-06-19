var lovedOneInput, emailInput, favNumInput, selectedEleInput, focusInput, goodThingsInput, userMessageInput;
var nameOfLovedOne, email, favNum, selectedEle, focusArea, gratitudeCheckedBoxes, userMessage;
window.onload = go;

function go() {
  lovedOneInput = document.getElementById("name");
  emailInput = document.getElementById("email");
  favNumInput = document.getElementById("number");
  selectedEleInput = document.getElementById("dropdown");
  focusInput = document.getElementsByName("contact");
  goodThingsInput = document.getElementsByName("good-things");
  console.log(focusInput[1], goodThingsInput[1])
  userMessageInput = document.getElementById("self-generated-nice-thing");
  // console.log(lovedOneInput, emailInput, favNumInput, selectedEleInput, userMessageInput);
}

function submissionClick() {
  nameOfLovedOne = lovedOneInput.value;
  email = emailInput.value;
  favNum = favNumInput.value;
  selectedEle = selectedEleInput.value;
  focus = focusInput.value;
  goodThings = goodThingsInput.value;
  console.log(focusInput[1], goodThingsInput[1])
  userMessage = userMessageInput.value;
  alert(`
    Remember that ${nameOfLovedOne} loves you and 
    your number ${favNum} symbolizes luck. The power
    element of ${selectedEle} will support you this
    in the short term.
    It's good that you're focused on ${focus}.
    Don't forget the things you have to be grateful for:
    ${goodThings}.
    Your words are powerful. Here they are: 
    ${userMessage}
    `);
}

function gratitudeMessageGenerator() {
  
}
