import React, { Component } from 'react';
import FormField from '../utils/Formfield';
import {updateChange, generateData, isFormValid} from '../utils/form_methods';
// import {generateData} from '../utils/form_methods';
// import {isFormValid} from '../utils/form_methods';

export default class extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formData: {
      email: {
        element: 'input',
        value: '',
        valid: false,
        touched: false,
        validationMessage: '',
        showLabel:true,
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email',
          label:'Email'
        },
        validation: {
          required: true,
          email: true
        }
      },
      firstName: {
        element: 'input',
        value: '',
        valid: false,
        touched: false,
        validationMessage: 'First Name is required',
        showLabel:true,
        config: {
          name: 'first_name',
          type: 'text',
          placeholder: 'Enter your First Name',
          label:'First Name'
        },
        validation: {
          required: true,
          email: false
        }
      }
    }
  };
  /**
   * changedField - is an object with {event, id}
   *              - updated form Data
   */
  updateForm = changedField => {
    const newFormData = updateChange(changedField, this.state.formData);
    console.log('newFormData.validationMessage', newFormData[changedField.id].validationMessage);

    this.setState({
      formError: false,
      formData: newFormData
    });
  };
  
  submitForm(event) {
    event.preventDefault();
    console.log('submitted');
    
    let dataToSubmit = generateData(this.state.formData);
    let formIsValid = isFormValid(this.state.formData)

  //   if(formIsValid){
  // // TODO: Disptch form value
  //     console.log(dataToSubmit);
  //   } else {
  //       this.setState({
  //           formError: true
  //       })
  //   }
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  render() {
    return (
      <div>
        <form>
          <FormField
            id={'email'}
            fieldData={this.state.formData.email}
            change={changedField => this.updateForm(changedField)}
          />
          <FormField
            id={'firstName'}
            fieldData={this.state.formData.firstName}
            change={changedField => this.updateForm(changedField)}
          />

          <button onClick={event => this.submitForm(event)}>Log in</button>
        </form>
      </div>
    );
  }
}
