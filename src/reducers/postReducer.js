import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "../actions/actionsTypes";
import { getNewState } from "../shared/utils/frontend";

const initialState = {
  posts: [],
  total: 0,
  isLoading: false,
  errorMessage: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: {
      return getNewState(state, {
        isLoading: true
      })
    }
    case FETCH_POSTS_SUCCESS: {
      const { payload } = action; // const posts = action.payload.posts
      const posts = payload;
      console.log(posts);
      return getNewState(state, {
        posts,
        isLoading: false
      })
    }
    case FETCH_POSTS_ERROR: {
      return getNewState(state, {
        isLoading: false
      })
    }
    default: {
      return state;
    }
  }
}
