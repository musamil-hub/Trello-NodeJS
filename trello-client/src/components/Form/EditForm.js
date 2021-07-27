import React, { useState } from 'react';
import classes from './Form.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const EditForm = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [color, setColor] = useState(props.color);
  const [type, setType] = useState(props.type);
  const [id, setId] = useState(props.id);
  console.log(props);

  ////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////
  const submitHandler = (event) => {
    event.preventDefault();
    // date
    let today = new Date();
    let time = today.toLocaleString([], { hour12: true });

    let itemsfetch = {
      id: id,
      title: title,
      description: description,
      assign_to: type,
      date: time,
    };
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={'form-control'}>
          <TextField
            id='outlined-multiline-flexible'
            label='Title'
            multiline
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            variant='outlined'
          />
        </div>
        {/* Description */}
        <div className={'form-control'}>
          <TextField
            id='outlined-multiline-static'
            label='Description'
            multiline
            rows={4}
            maxlength='40'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            variant='outlined'
          />
        </div>
        {/* Color */}
        <div className={'form-control'}>
          <label htmlFor='color'>Color</label>
          <input
            type='color'
            id='color'
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
        {/* selection type */}
        <div className={'form-control'}>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-label' className={classes.title}>
              Action-Type
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <MenuItem value={'todo'}>To-Do</MenuItem>
              <MenuItem value={'doing'}>Doing</MenuItem>
              <MenuItem value={'done'}>Done</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {/* <div className="form-actions"> */}
      <button className={classes.button} value='submit'>
        Submit
      </button>
      {/* </div> */}
    </form>
  );
};

export default EditForm;
