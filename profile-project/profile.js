let button = document.getElementById("submit");
button.addEventListener("click", outputValues);

function outputValues(){
  let originalvalue = document.getElementById("name").value;
  console.log(originalvalue);
}
