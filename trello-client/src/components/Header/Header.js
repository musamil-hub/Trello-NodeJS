import React from 'react';
import Modal from '../Modal/Modal';
import classes from './Header.module.css';
import PostAddIcon from '@material-ui/icons/PostAdd';
const Header = () => {
  return (
    <div className={classes.container}>
      {/* <img
          className={classes.logo}
          // src='https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg'
          src="https://upload.wikimedia.org/wikipedia/en/archive/8/8c/20210216184933%21Trello_logo.svg"
          // src="http://www.brandgradients.com/img/logos/trello-hex-colors-gradient-logo.png"
        /> */}
      <article>
        <span className={classes.span}>Kanban Board</span>
      </article>
      <div className={classes.itemright}>
        <Modal button={<PostAddIcon />} text={'Add Task📇'} />
      </div>
    </div>
  );
};

export default Header;
