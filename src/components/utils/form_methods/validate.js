/**
 * @desc   this function will validate: email, password match and required field
 * @param {object} element - formData.email
 * Eg. 
 * state={
 *    formData: {
        email: {
          element: 'input',
          value: '',
          valid: false,
          touched: false,
          validationMessage: '',
          config: {
            name: 'email_input',
            type: 'email',
            placeholder: 'Enter your email'
          },
          validation: {
            required: true,
            email: true
          }
        }
      }
 * }
 * @return error array [true,'Validation message here']
 */
export const validate = (element, formData= []) => {
  let error = [true,''];

  console.log('element.validation.email', element.validation.email); 
  if(element.validation.email){
      const valid = /\S+@\S+\.\S+/.test(element.value)
      const message = `${!valid ? 'Must be a valid email':''}`;
      error = !valid ? [valid,message] : error;
  }

  if(element.validation.confirm){
      const valid = element.value.trim() === formData[element.validation.confirm].value;
      const message = `${!valid ? 'Passwords do not match':''}`;
      error = !valid ? [valid,message] : error;
  }

  if(element.validation.required){
      const valid = element.value.trim() !== ''; // return false if vaule is empty
      const message = `${!valid ? 'This field is required':''}`;
      error = !valid ? [valid,message] : error;
  }

  return error
}
