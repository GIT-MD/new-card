import { ADD_API, DELETE_CARD, DELETE_CARDS_ALL } from "../actions/action";

const initialState = {
  posts: [],
};
export const apiReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_API: {
      return { ...state, posts: state.posts.concat(payload) };
    }
    case DELETE_CARD: {
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== +payload),
      };
    }
    case DELETE_CARDS_ALL: {
      return {
        ...state,
        posts: [],
      };
    }
    default:
      return state;
  }
};
