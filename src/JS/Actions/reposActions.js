import axios from "axios";
import { ADD_REPOS, CLEAR_REPOS } from "../Constant/reposActionType";

export const getRepos = (username) => async (dispatch) => {
  try {
    const url = `https://api.github.com/users/${username}/repos?sort=updated`;
    const { data } = await axios(url);
    dispatch(addRepos(data));

    console.log(data);
  } catch (error) {
    dispatch(clearRepos());
  }
};
export const addRepos = (data) => {
  return {
    type: ADD_REPOS,
    payload: data,
  };
};
export const clearRepos = () => {
  return {
    type: CLEAR_REPOS,
  };
};
