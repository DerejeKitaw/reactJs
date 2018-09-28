export const generateData = (formData) => {
  console.log(formData);
  let dataToSubmit = {};

  for(let key in formData){
      if(key !== 'confirmPassword'){
          dataToSubmit[key] = formData[key].value;
      }
  }

  return dataToSubmit;
}