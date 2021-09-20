import { ADD_REPOS, CLEAR_REPOS } from "../Constant/reposActionType";

const initialState = {
  repos: [],
};

export const reposReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_REPOS:
      return { ...state, repos: [...state.repos, ...payload] };
    case CLEAR_REPOS:
      return [];
    default:
      return state;
  }
};
