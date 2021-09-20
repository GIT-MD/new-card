export const ADD_API = "ADD_API";

export const apiActionCreator = (post) => {
  return {
    type: "ADD_API",
    payload: post,
  };
};
