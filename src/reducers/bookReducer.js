import { FETCH_BOOKS_ERROR, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "../actions/actionsTypes";
import { getNewState } from "../shared/utils/frontend";

const initialState = {
  books: [],
  total: 0,
  isLoading: false,
  errorMessage: null,
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST: {
      return getNewState(state, {
        isLoading: true
      })
    }
    case FETCH_BOOKS_SUCCESS: {
      const { payload } = action;
      const books = payload;
      // console.log(payload.libros);
      return getNewState(state, {
        books,
        isLoading: false
      })
    }
    case FETCH_BOOKS_ERROR: {
      return getNewState(state, {
        isLoading: false
      })
    }
    default: {
      return state;
    }
  }
}