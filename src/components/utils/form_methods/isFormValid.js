export const isFormValid = (formData) => {
  let formIsValid = true;

  for(let key in formData){
      formIsValid = formData[key].valid && formIsValid
  }
  return formIsValid;
}