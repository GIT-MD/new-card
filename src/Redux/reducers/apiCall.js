import { ADD_API } from "../actions/action";

const initialState = {
  posts: [],
};
export const apiReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_API: {
      return { ...state, posts: state.posts.concat(payload) };
    }
    default:
      return state;
  }
};
