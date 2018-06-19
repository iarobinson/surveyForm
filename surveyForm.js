window.onload = go;

function go() {
  console.log(validate("ianrobinson@ian.net"), " <- true? Good, validate working");
  console.log(validate("ianrobinson@ian.ne!"), " <- false? Good, validate working");
  
  // document.addEventListener("DOMContentLoaded", function() {
  //   var elements = document.getElementById("INPUT");
  //   for (var i = 0; i < elements.length; i++) {
  //     elements[i].oninvalid = function(e) {
  //         e.target.setCustomValidity("");
  //         if (!e.target.validity.valid) {
  //             e.target.setCustomValidity("This field cannot be left blank");
  //         }
  //     };
  //     elements[i].oninput = function(e) {
  //         e.target.setCustomValidity("");
  //     };
  //   }
  });

}