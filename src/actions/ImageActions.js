import { request, received, error } from "../shared/redux/baseActions";
import { FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_ERROR } from "./actionsTypes";

import ImageService from "../services/ImageService";




export const fetchImages = () => async (dispatch) => {
  dispatch(request(FETCH_IMAGES_REQUEST));

  try {
    const response = await ImageService.getImagess();
    // console.log(response);
    dispatch(received(FETCH_IMAGES_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_IMAGES_ERROR));
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

