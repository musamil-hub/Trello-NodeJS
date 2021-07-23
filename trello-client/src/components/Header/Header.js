import React from "react";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <ul className={classes.container}>
        <li className={classes.itemcenter}>
          <h3>Trello</h3>
        </li>
        <li className={classes.itemright}>
          <a href="">Add Task</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
