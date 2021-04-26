import { FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_ERROR } from "../actions/actionsTypes";

import { getNewState } from "../shared/utils/frontend";

const initialState = {
  images: [],
  total: 0,
  isLoading: false,
  errorMessage: null,
};

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST: {
      return getNewState(state, {
        isLoading: true
      })
    }
    case FETCH_IMAGES_SUCCESS: {
      const { payload } = action; // const posts = action.payload.posts
      const images = payload;
      return getNewState(state, {
        images,
        isLoading: false
      })
    }
    case FETCH_IMAGES_ERROR: {
      return getNewState(state, {
        isLoading: false
      })
    }
    default: {
      return state;
    }
  }
}
