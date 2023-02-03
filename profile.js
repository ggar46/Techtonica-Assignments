// form.addEventListener("submit", (e) => {
//     e.preventDefault();
    
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email");
//     let emailText = email.value.trim(); //variable for the inner text  (I need the const to set the attribute)
//     const address = document.getElementById("address");
//     let addressText  =  password.value.trim();   //made another variable for password text
      
//     name.setAttribute("required", "required"); 
//     email.setAttribute("required", "required");  //made email required with attribute

  
//   })


let button = document.getElementById("submit");
button.addEventListener("click", outputValues);

function outputValues(){
  let originalvalue = document.getElementById("username").value;
  console.log(originalvalue);
  console.log("Dave");
}
