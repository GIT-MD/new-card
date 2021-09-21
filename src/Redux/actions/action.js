export const ADD_API = "ADD_API";
export const DELETE_CARD = "DELETE_CARD";
export const DELETE_CARDS_ALL = "DELETE_CARDS_ALL";

export const apiActionCreator = (post) => {
  return {
    type: "ADD_API",
    payload: post,
  };
};
export const deleteCardAction = (id) => {
  return {
    type: "DELETE_CARD",
    payload: id,
  };
};
export const deleteCardsAll = (id) => {
  return {
    type: "DELETE_CARDS_ALL",
  };
};
