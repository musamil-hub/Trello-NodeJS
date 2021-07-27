import React from 'react';
import useInput from './use-input';
import classes from './Form.module.css';
import { v4 } from 'uuid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as actions from '../../actions/postCard';

const isNotEmpty = (value) => value.trim() !== '';

const Form = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: typeValue,
    isValid: typeIsValid,
    hasError: typeHasError,
    valueChangeHandler: typeChangeHandler,
    inputBlurHandler: typeBlurHandler,
    reset: resettype,
  } = useInput(isNotEmpty);
  const {
    value: colorValue,
    isValid: colorIsValid,
    hasError: colorHasError,
    valueChangeHandler: colorChangeHandler,
    inputBlurHandler: colorBlurHandler,
    reset: resetcolor,
  } = useInput(isNotEmpty);
  const {
    value: descriptionValue,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescription,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && typeIsValid && descriptionIsValid) {
    formIsValid = true;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////
  const submitHandler = (event) => {
    event.preventDefault();
    // date
    let today = new Date();
    let time = today.toLocaleString([], { hour12: true });

    if (!formIsValid) {
      return;
    }

    let itemsfetch = {
      _id: v4(),
      title: nameValue,
      description: descriptionValue,
      assign_to: typeValue,
      color: colorValue,
      date: time,
    };
    const onSuccess = () => {
      window.alert('Card Create Successfully');
      props.onClose();
    };
    console.log(itemsfetch);
    props.createPostCard(itemsfetch, onSuccess);
    props.onClose();
    resetName();
    resettype();
    resetDescription();
  };

  const nameClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const typeClasses = typeHasError ? 'form-control invalid' : 'form-control';
  const colorClasses = colorHasError ? 'form-control invalid' : 'form-control';
  const descriptionClasses = descriptionHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameClasses}>
          <TextField
            id='outlined-multiline-flexible'
            label='Title'
            multiline
            value={nameValue}
            fullWidth
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            // variant="outlined"
          />
          {nameHasError && <p className='error-text'>Please enter a Title.</p>}
        </div>
        {/* Description */}
        <div className={descriptionClasses}>
          {/* <label htmlFor="description">Description</label> */}
          <TextField
            id='outlined-multiline-static'
            label='Description'
            multiline
            fullWidth
            rows={2}
            // variant="outlined"
            maxlength='5'
            value={descriptionValue}
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
          />
          {descriptionHasError && (
            <p className='error-text'>Please enter a description.</p>
          )}
        </div>
        <br />
        {/* color */}
        <p className={colorClasses}>
          <label htmlFor='color' style={{ color: 'grey', marginRight: '10px' }}>
            Color
          </label>
          <input
            className={classes.color}
            type='color'
            id='color'
            value={colorValue}
            onChange={colorChangeHandler}
            onBlur={colorBlurHandler}
          />
          {colorHasError && <p className='error-text'>Please enter a Color.</p>}
        </p>
        {/* selection type */}
        <div className={typeClasses}>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-label' className={classes.title}>
              Assign-To
            </InputLabel>
            <Select
              fullWidth
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={typeValue}
              onChange={typeChangeHandler}
              onBlur={typeBlurHandler}
            >
              <MenuItem value={'todo'}>To-Do</MenuItem>
              <MenuItem value={'doing'}>Doing</MenuItem>
              <MenuItem value={'done'}>Done</MenuItem>
            </Select>
          </FormControl>
          {typeHasError && <p className='error-text'>Please enter a Type.</p>}
        </div>
      </div>
      <div className={classes.buttonactions}>
        <button
          disabled={!formIsValid}
          className={classes.button}
          value='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  postCardList: state.postCard,
});

const mapActionToProps = {
  createPostCard: actions.create,
};

export default connect(mapStateToProps, mapActionToProps)(Form);
