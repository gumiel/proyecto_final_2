import API from "../api/api";

const URL_BOOK = '/carts/';

const addCart = async (body) => {
  const response = await API.post(`${URL_BOOK}`, body);
  if (response.error) {
    throw new Error('Ha ocurrido un error');
  }
  return response;
};

const dataExport = {
  addCart
};

export default dataExport;
