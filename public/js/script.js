const validations = [
  {
    field: "username",
    check: (input) => input.value.length <= 4,
    message: "Debe contener al menos cuatro caracteres",
  },
  {
    field: "email",
    check: (inputEmail) => !inputEmail.value.match(/\S+@\S+\.\S+/),
    message: "Debe ingresar un email válido",
  },
  {
    field: "password",
    check: (input) => input.value.length <= 4,
    message: "Debe contener al menos cuatro caracteres",
  },
  {
    field: "name",
    check: (input) => !input.value,
    message: "Debe completar el campo",
  },
  {
    field: "dni",
    check: (input) => input.value.length < 8 && input.value.length > 8,
    message: "Debe contener 8 digitos",
  },
  {
    field: "home",
    check: (input) => !input.value,
    message: "Debe completar el campo",
  },
  {
    field: "phone_number",
    check: (input) => !input.value,
    message: "Debe completar el campo",
  },
  {
    field: "image",
    check: (input) => !input.value,
    message: "Debe ingresar una imagen válida (JPG, JPEG, PNG, GIF)",
  },
]

validations.forEach((validation)=>{
  const inputId = validation.field;
  const input = document.getElementById(inputId);
  const inputMsg = document.getElementById(inputId + "Error");
  const inputImg = document.getElementById("image")
  const imageMsg = document.getElementById("imageError")

  function validate(){
    inputValidate(validation, input, inputMsg);
  }
  function customValidate(){
    imageValidate(validation, inputImg, imageMsg);
  }

  input.addEventListener("input", validate)
  input.addEventListener("blur", validate)
  inputImg.addEventListener("input", customValidate)
  inputImg.addEventListener("blur", customValidate)
})  

const formulario = document.getElementById("form-register")

formulario.addEventListener("submit", (e)=>{
  e.preventDefault();
  const errors = [];
  validations.forEach((validation)=>{
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputMsg = document.getElementById(inputId + "Error");
    const result = inputValidate(validation, input, inputMsg)
    errors.push(result) 

    if(validations.includes("image")){
      const inputImg = document.getElementById("image")
      const imageMsg = document.getElementById("imageError")
      const resImg = imageValidate(validation, inputImg, imageMsg)
      errors.push(resImg)
    }
  })
  
  if (errors.every((val)=>val==true)){
    formulario.submit();
  }
})

  function inputValidate(validation, input, inputMsg){
    if(!input.value){
      inputMsg.innerText = "Debe completar el campo"
      inputMsg.classList.add("displayOk");
      return false
    }   
    if (validation.check(input)){
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
  
   // IMAGE VALIDATION
  function imageValidate(validation, inputImg, imageMsg){
    const typesImg = /.(gif|jpeg|jpg|png)$/
    if(validation.check(inputImg)){
      imageMsg.innerText = validation.message
      imageMsg.classList.add("displayOk");
      return false
    } else if (!inputImg.value.match(typesImg)){
      imageMsg.innerText = "Debe ser una imagen válida (JPG, JPEG, PNG, GIF)"
      imageMsg.classList.add("displayOk");
      return false
    } else {
      imageMsg.innerText = "";
      imageMsg.classList.remove("displayOk");
      return true
    }
  }

