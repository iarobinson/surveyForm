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
  userMessageInput = document.getElementById("self-generated-nice-thing");
}

function submissionClick() {
  nameOfLovedOne = lovedOneInput.value;
  email = emailInput.value;
  favNum = favNumInput.value;
  selectedEle = selectedEleInput.value;

  for (var j = 0; j < focusInput.length; j += 1) {
    if (focusInput[j].checked == true) {
      focus = focusInput[j].value;
    }
  }

  goodThings = [];
  for (var i = 0; i < goodThingsInput.length; i += 1) {
    if (goodThingsInput[i].type == "checkbox") {
      if (goodThingsInput[i].checked == true) {
        goodThings.push(goodThingsInput[i].value);
      }
    }
  }

  userMessage = userMessageInput.value;
  alert(`
    Remember that ${nameOfLovedOne} loves you and 
    your number ${favNum} symbolizes luck. The power
    element of ${selectedEle} will support you this
    in the short term.
    It is unique and beautiful that you are a ${focus} lover.
    Don't forget the things you have to be grateful for:
    ${goodThings.join(", ")}.
    Your words are powerful. Here they are: 
    ${userMessage}
    `);
}

function gratitudeMessageGenerator() {
  
}
