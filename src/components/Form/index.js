import React, { Component } from 'react';
import FormField from '../utils/Formfield';
import {updateChange} from '../utils/form_methods';

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
    const newFormData = updateChange(changedField, this.state.formData);

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
