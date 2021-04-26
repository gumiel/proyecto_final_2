import API from "../api/api";


const URL_BOOKS = '/libros';
const URL_BOOK = '/libros/';

const getBooks = async () => {
  const response = await API.get(`${URL_BOOKS}`);
  if (response.error) {
    throw new Error('Ha ocurrido un error');
  }
  return response;
};

const getBook = async (id) => {
  
  const response = await API.get(`${URL_BOOK}${id}`);
  if (response.error) {
    throw new Error('No se ha podido crear el usuario');
  }
  return response;
};

const addBook = async (book) => {
  const response = await API.post('/libros', book);
  if (response.error) {
    throw new Error('not authorized');
  }
  return response;
};

const dataExport = {
  getBooks,
  getBook,
  addBook
}
export default dataExport;
