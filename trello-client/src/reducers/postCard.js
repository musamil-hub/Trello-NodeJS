import { ACTION_TYPES } from "../actions/postCard";

const Dummy = {
  todo: {
    title: "Todo",
    items: [],
  },
  doing: {
    title: "Doing",
    items: [],
  },
  done: {
    title: "Done",
    items: [],
  },
};
export const postCard = (state = Dummy, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      let todoarr = [];
      let doingarr = [];
      let donearr = [];
      for (let i in action.payload) {
        const id = action.payload[i]._id;
        const title = action.payload[i].title;
        const description = action.payload[i].description;
        const types = action.payload[i].types;
        const date = action.payload[i].date;
        const newdata = {
          id,
          title,
          description,
          types,
          date,
        };
        if (types === "todo") {
          todoarr.push(newdata);
        } else if (types === "doing") {
          doingarr.push(newdata);
        } else {
          donearr.push(newdata);
        }
        // if (types === "todo") {
        //   console.log(action.payload[i]);
        //   todoarr.push(action.payload[i]);
        // } else if (types === "doing") {
        //   doingarr.push(action.payload[i]);
        // } else {
        //   donearr.push(action.payload[i]);
        // }
      }
      return {
        todo: {
          title: "Todo",
          items: todoarr,
        },
        doing: {
          title: "Doing",
          items: doingarr,
        },
        done: {
          title: "Done",
          items: donearr,
        },
      };
    default:
      return state;
  }
};
