import api from "./api.js";
export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  api
    .postCard()
    .fetchAll()
    .then((res) => {
      let types = [];
      types = [];
      res.data.map((data) => {
        // console.log(data.types);
        types.push(data.types);
      });
      console.log(types);
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data,
        types,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// dispatch(fetch_All)
