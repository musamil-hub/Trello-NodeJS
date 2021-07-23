import { ACTION_TYPES } from "../actions/postCard";

const initialState = {
  Dummy: {
    todo: {
      title: "Todo",
      list: [],
    },
    doing: {
      title: "Doing",
      list: [],
    },
    done: {
      title: "Done",
      list: [],
    },
  },
};
export const postCard = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      let todoarr = [];
      let doingarr = [];
      let donearr = [];
      for (let i in action.payload) {
        const title = action.payload[i].title;
        const description = action.payload[i].description;
        const types = action.payload[i].types;
        const date = action.payload[i].date;
        const newdata = {
          title,
          description,
          types,
          date,
        };
        if (types === "todo") {
          todoarr.push(newdata);
        } else if (types === "doing") {
          console.log("doing");
          doingarr.push(newdata);
        } else {
          console.log("done");
          donearr.push(newdata);
        }
      }
      return {
        Dummy: {
          todo: {
            title: "Todo",
            list: todoarr,
          },
          doing: {
            title: "Doing",
            list: doingarr,
          },
          done: {
            title: "Done",
            list: donearr,
          },
        },
      };
    default:
      return state;
  }
};
