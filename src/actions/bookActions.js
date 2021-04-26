import { request, received, error } from "../shared/redux/baseActions";
import { FETCH_BOOKS_ERROR, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "./actionsTypes";

import BookService from "../services/BookService";




export const fetchBooks = () => async (dispatch) => {
  dispatch(request(FETCH_BOOKS_REQUEST));

  try {
    const response = await BookService.getBooks();
    // console.log(response);
    dispatch(received(FETCH_BOOKS_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_BOOKS_ERROR));
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const fetchBook = (id) => async (dispatch) => {
  dispatch(request(FETCH_BOOKS_REQUEST));

  try {
    const response = await BookService.getBook(id);
    // console.log(response);
    dispatch(received(FETCH_BOOKS_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_BOOKS_ERROR));
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const addBook = (book) => async (dispatch) => {
  dispatch(request(FETCH_BOOKS_REQUEST));
  try {
    const response = await BookService.addBook(book);
    dispatch(received(FETCH_BOOKS_SUCCESS, response.data));
  } catch (e) {
    dispatch(error(FETCH_BOOKS_ERROR));
    // eslint-disable-next-line no-console
    console.log('AXIOS_ERROR', e);
  }
};