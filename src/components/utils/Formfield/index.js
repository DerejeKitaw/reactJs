import React from 'react';
/**
   * @desc this class will return FormField component
   * @param {string} id - Field name defined in state.formData
   * @example id='email';
   *  state = {
    formData: {
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
      }
    }
  };
  * @param {object} fieldData - all form elememts 
  * Eg. formData: {email: {...},firstName: {...}...}
  * @param {function} change - will send the event and id of changed field
  * @return jsx - form field
  */
export default ({ id, fieldData, change }) => {
  console.log(fieldData);
  return (
    <div>
      <input
        value={fieldData.value}
        onChange={event => change({ event, id })}
      />
    </div>
  );
};
