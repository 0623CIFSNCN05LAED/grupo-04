const validations = [
    {
      field: "email",
      check: (input) => !input.value.match(/\S+@\S+\.\S+/),
      message: "Debe ingresar un email válido",
    },
    {
      field: "password",
      check: (input) => !input.value,
      message: "Debe completar el campo",
    }
]

validations.forEach((validation)=>{
  const inputId = validation.field;
  const input = document.getElementById(inputId);
  const inputMsg = document.getElementById(inputId + "Error");

  function validator (){
    inputValidate(validation, input, inputMsg)
  }

  input.addEventListener("input", validator)
  input.addEventListener("blur", validator)
})

const form = document.getElementById("form-login")

form.addEventListener("submit", (e)=>{
  e.preventDefault();

  const errors = [];

  validations.forEach((validation)=>{
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputMsg = document.getElementById(inputId + "Error");
    const result = inputValidate(validation, input, inputMsg)
    errors.push(result) 
  })
  if (errors.every((val)=>val==true)){
    form.submit();
  }
})

function inputValidate(validation, input, inputMsg){
  if(!input.value){
    inputMsg.innerText = "Debe completar el campo"
    inputMsg.classList.add("displayOk");
    return false
  } 
  if (validation.check(input)){
    console.log(validation.message)
    inputMsg.innerText = validation.message
    inputMsg.classList.add("displayOk");
    return false
  } 
  {
    inputMsg.innerText = "";
    inputMsg.classList.remove("displayOk");
    return true
  }
}