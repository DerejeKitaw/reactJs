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
 * @param {Object} changedField - {event, id}
 * Eg id ='email' id is fields in the form
 * @return updated formData
 */
export const updateChange = (changedField, formData) => {
  const newFormData = {
    ...formData
  };
  const newElement = {
    ...newFormData[changedField.id]
  };
  newElement.value = changedField.event.target.value;
  newFormData[changedField.id] = newElement;
  return newFormData;
};
