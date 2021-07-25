import { Button } from "@chakra-ui/react";
import React from "react";
import PostCardForm from "../Form/PostCardForm";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <ul className={classes.container}>
        <li className={classes.itemcenter}>
          <h3>Trello</h3>
        </li>
        <li className={classes.itemright}>
          <Button>
            {/* <PostCardForm /> */}
            Add Form
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
