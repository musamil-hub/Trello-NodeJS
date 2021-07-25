import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postCard";
import classes from "./PostCards.module.css";
import _ from "lodash";
import Lists from "./UI/Lists/Lists";
import Dnd from "./UI/Lists/DND";
const PostCards = (props) => {
  let datas = props.postCardList;
  console.log(datas);

  useEffect(() => {
    props.fetchAllPostCard();
  }, []);
  return (
    <div>
      <Dnd data={datas} />
      <Lists data={datas} />
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
