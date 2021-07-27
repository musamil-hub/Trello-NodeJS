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
let todoarr = [];
let doingarr = [];
let donearr = [];
export const postCard = (state = Dummy, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      console.log("Fetch_ All");
      // todoarr = [];
      // doingarr = [];
      // donearr = [];
      for (let i in action.payload) {
        const id = action.payload[i]._id;
        const title = action.payload[i].title;
        const description = action.payload[i].description;
        const assign_to = action.payload[i].assign_to;
        const date = action.payload[i].date;
        const color = action.payload[i].color;
        const newdata = {
          id,
          title,
          description,
          assign_to,
          date,
          color,
        };
        if (assign_to === "todo") {
          todoarr.push(newdata);
        } else if (assign_to === "doing") {
          doingarr.push(newdata);
        } else {
          donearr.push(newdata);
        }
      }
      return {
        todo: {
          title: "Todo",
          ...state.todo,
          items: todoarr,
        },
        doing: {
          title: "Doing",
          ...state.doing,
          items: doingarr,
        },
        done: {
          title: "Done",
          ...state.done,
          items: donearr,
        },
      };
    case ACTION_TYPES.CREATE:
      console.log("switch Create");
      const id = action.payload._id;
      const title = action.payload.title;
      const description = action.payload.description;
      const assign_to = action.payload.assign_to;
      const date = action.payload.date;
      const color = action.payload.color;
      const newdata = {
        id,
        title,
        description,
        assign_to,
        date,
        color,
      };

      console.log("before todo", todoarr);
      console.log("before doing", doingarr);
      console.log("before done", donearr);

      if (assign_to === "todo") {
        todoarr.push(newdata);
      } else if (assign_to === "doing") {
        doingarr.push(newdata);
      } else {
        donearr.push(newdata);
      }
      console.log("after todo", todoarr);
      console.log("after doing", doingarr);
      console.log("after done", donearr);

      return {
        todo: {
          title: "Todo",
          ...state.todo,
          items: [...todoarr],
        },
        doing: {
          title: "Doing",
          ...state.doing,
          items: [...doingarr],
        },
        done: {
          title: "Done",
          ...state.done,
          items: [...donearr],
        },
      };
    case ACTION_TYPES.UPDATE:
      return {
        todo: {
          title: "Todo",
          ...state.todo,
          items: todoarr.map((x) =>
            x._id === action.payload._id ? action.payload : x
          ),
        },
        doing: {
          title: "Doing",
          ...state.doing,
          items: doingarr.map((x) =>
            x._id === action.payload._id ? action.payload : x
          ),
        },
        done: {
          title: "Done",
          ...state.done,
          items: donearr.map((x) =>
            x._id === action.payload._id ? action.payload : x
          ),
        },
      };
    case ACTION_TYPES.DELETE:
      return {
        todo: {
          title: "Todo",
          ...state.todo,
          items: todoarr.filter((x) => x._id !== action.payload),
        },
        doing: {
          title: "Doing",
          ...state.doing,
          items: doingarr.filter((x) => x._id !== action.payload),
        },
        done: {
          title: "Done",
          ...state.done,
          items: donearr.filter((x) => x._id !== action.payload),
        },
      };

    default:
      return state;
  }
};
