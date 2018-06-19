window.onload = go;

function go() {
  console.log(validate("ianrobinson@ian.net"), " <- true? Good, validate working");
  console.log(validate("ianrobinson@ian.ne!"), " <- false? Good, validate working");
}