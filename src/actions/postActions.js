import { request, received, error } from "../shared/redux/baseActions";
import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./actionsTypes";

import PostService from "../services/PostService";




export const fetchPosts = () => async (dispatch) => {
  dispatch(request(FETCH_POSTS_REQUEST));
  try {
    const response = await PostService.getPosts();
    console.log(response);
    dispatch(received(FETCH_POSTS_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_POSTS_ERROR));
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
