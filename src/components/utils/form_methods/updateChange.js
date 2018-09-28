/**
 * @desc   this function will return updated field
 * @param {object} formData - form state - this.state.formData
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
 * @param {Object} changedField - {event, id, blur}
 * Eg id ='email' id is fields in the form
 * 
      console.log('changedField', changedField); return
      changedField {event: SyntheticEvent, id: "email"}

      console.log('formData[changedField.id]', formData[changedField.id]); return
      {element: "input", value: "", valid: false, touched: false, validationMessage: "", …}
 * @return updated formData
 */

import {validate} from './validate';

export const updateChange = (changedField, formData) => {
  const newFormData = {
    ...formData
  };
  const newElement = {
    ...newFormData[changedField.id]
  };
  // console.log('newElement', changedField.blur); 

  // update value
  newElement.value = changedField.event.target.value;

  // validate input value when leave input field
  if (changedField.blur) {
    let validData = validate(newElement,formData);
      newElement.valid = validData[0];
      newElement.validationMessage = validData[1];
  }
  newFormData[changedField.id] = newElement;
  return newFormData;
};
