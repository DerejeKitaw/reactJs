import React from 'react';
// import './style.css';
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
  const showError=()=> {
    let errorMessage = null;
    if (fieldData.validation && !fieldData.valid) {
      console.log('fieldData',fieldData);
      console.log('fieldData.validation',fieldData.validation);
      console.log('fieldData.validationMessage',fieldData.validationMessage);
      errorMessage = (
        <div>
          {fieldData.validationMessage}
        </div>
      )
    }
    return errorMessage;
  }
  const renderTemplate = () => {
    let formTemplate = null;
    switch (fieldData.element) {
      case ('input'):
        formTemplate = (
          <div className="col-md-6 mb-3">
          { fieldData.showLabel ? 
            <label htmlFor={id} className="label_inputs">{fieldData.config.label}</label>
        :null}
            <input
            value={fieldData.value}
            onBlur={(event)=> change({event,id,blur:true})}
            onChange={event => change({ event, id })}
              type="text"
              className="form-control"
              placeholder=""
            />
            <div className="error">
            {showError()}
            </div>

          </div>
      )
        
        break;
    
        default:
        formTemplate = null;
    }

    return formTemplate;
}
  return (
    <div>
    {renderTemplate()}
    
    </div>
  );
};
