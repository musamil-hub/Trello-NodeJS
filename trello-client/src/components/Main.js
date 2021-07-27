import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/postCard';
import _ from 'lodash';
import Dnd from './UI/Lists/Dnd';
const PostCards = (props) => {
  let datas = props.postCardList;
  console.log(datas);

  useEffect(() => {
    props.fetchAllPostCard();
  }, []);
  return (
    <div>
      <Dnd data={datas} />
      {/* <Lists data={datas} /> */}
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
