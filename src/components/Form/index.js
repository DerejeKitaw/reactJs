import React, { Component } from 'react';
import FormField from '../utils/Formfield';

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
  };
  /**
   * changedField - is an object with {event, id}
   *              - updated form Data
   */
  updateForm = changedField => {
    // clone formData
    const newFormData = {
      ...this.state.formData
    };
    // get new element updated. changedField = {event, id}
    const newElement = {
      ...newFormData[changedField.id]
    };
    // changedField = {event, id}
    newElement.value = changedField.event.target.value;
    newFormData[changedField.id] = newElement;

    console.log('newFormData', newFormData);
    console.log('newElement', newElement);
    this.setState({
      formError: false,
      formData: newFormData
    });
  };
  submitForm(event) {
    event.preventDefault();
    console.log('submitted');
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
          <button onClick={event => this.submitForm(event)}>Log in</button>
        </form>
      </div>
    );
  }
}
