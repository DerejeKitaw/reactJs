const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.project = !isEmpty(data.project) ? data.project : '';
  data.elapsed = !isEmpty(data.elapsed) ? data.elapsed : '';
  data.runningSince = !isEmpty(data.runningSince) ? data.runningSince : '';
  data.editFormOpen = !isEmpty(data.editFormOpen) ? data.editFormOpen : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.project)) {
    errors.project = 'Project field is required';
  }

  if (Validator.isEmpty(data.elapsed)) {
    errors.elapsed = 'elapsed field is required';
  }

 

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
