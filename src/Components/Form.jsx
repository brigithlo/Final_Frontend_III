import React from "react";
import useForm from "./utils/useForm";
const expresiones = {
	
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ 
};
const onValid =(type,e)=>{
  let value = "";
  switch (type) {
    case "name":

   if (e.target.value.length > 5) {
    
   }else{value="Let us know who you are"}

      break;
      
    case "phone":
    if (expresiones.phone.test(e.target.value)) {
      
    }else{ value = "You must add a valid phone number (7 - 14 numbers )"}
      break;
    case "email":
    if (expresiones.email.test(e.target.value)) {
    
    }else{ value = "Make sure you have entered a valid Email"}

      break;
    case "question":
    if (e.target.value.length < 10) {
      value = "We want to know your doubts"
    } else if (e.target.value.length > 300) {
      value = "please, try to summarize your questions"
    } else {
      
    }

      break;
    default:
      break;
  }

 return e.target.setCustomValidity(value)
}

console.log(expresiones.phone.test(123));
const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const name = useForm("text","Enter your name");
  const email= useForm("email","Ex: example@gov.com" );
  const phone= useForm("phone", "Enter your phone number");
  const question= useForm("text", "Let us know your doubts");

  let formInfo= {
    name: name.value,
    email: email.value,
    phone: phone.value,
    question: question.value}


const submit = (e)=>{
    e.preventDefault();  
    
  }

  return (
    <div className="form" onSubmit={submit}>

      <form>

      <label className="label" htmlFor="name">Name
        <input {...name} id="name" onInputCapture={e=>onValid(e.currentTarget.id,e)}/>
      </label>
      <label className="label" htmlFor="phone">Phone Number 
        <input {...phone} id="phone" onInputCapture={e=>onValid(e.currentTarget.id,e)}/>
      </label>
      <label className="label"  htmlFor="lastName">Email 
        <input {...email} id="email" onInputCapture={e=>onValid(e.currentTarget.id,e)}/>
      </label>
      <label className="label" htmlFor="question">Question <br />
        <input {...question} id="question" onInputCapture={e=>onValid(e.currentTarget.id,e)}/>
      </label>

        <button type="submit"  >submit</button>

      </form>
    
    </div>
  );
};

export default Form;
