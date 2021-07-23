import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postCard";
import classes from "./PostCards.module.css";
import _ from "lodash";
import { data } from "browserslist";
const PostCards = (props) => {
  console.log(props.postCardList.Dummy.todo.list);
  const todo = props.postCardList.Dummy.todo;
  const doing = props.postCardList.Dummy.doing;
  const done = props.postCardList.Dummy.done;
  useEffect(() => {
    props.fetchAllPostCard();
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.lists}>
        <div className={classes.list} id="todo">
          {todo.title}

          {todo.list.map((data, index) => {
            return (
              <div key={index} className={classes.card}>
                <div>{data.title}</div>
                <div>{data.description}</div>
                <div>{data.types}</div>
              </div>
            );
          })}
        </div>
        <div className={classes.list} id="doing">
          {doing.title}

          {doing.list.map((data, index) => {
            return (
              <div key={index} className={classes.card}>
                <div>{data.title}</div>
                <div>{data.description}</div>
                <div>{data.types}</div>
              </div>
            );
          })}
        </div>
        <div className={classes.list} id="done">
          {done.title}

          {done.list.map((data, index) => {
            return (
              <div key={index} className={classes.card}>
                <div>{data.title}</div>
                <div>{data.description}</div>
                <div>{data.types}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  postCardList: state.postCard,
});

const mapActionToProps = {
  fetchAllPostCard: actions.fetchAll,
};
// props.fetchAllPostCard

export default connect(mapStateToProps, mapActionToProps)(PostCards);
