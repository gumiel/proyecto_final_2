import API from "../api/api";


const URL_POSTS = '/posts';

const getPosts = async () => {
  const response = await API.get(`${URL_POSTS}`);
  if(response.error){
    throw new Error('Ha ocurrido un error');
  }
  return response;
};

const dataExport = {
  getPosts,
}

export default dataExport;
