import API from "../api/api";

const getImagess = () => {
  const response = API.get('https://api.unsplash.com/search/photos?query=book&client_id=jWBqF5Lfzn2dFutGIoUNZYaRMCkhwm0Y5E5D4LWURis');
  if (response.error) {
    throw new Error('Ha ocurrido un error');
  }
  return response;
};

const dataExport = {
  getImagess
};
export default dataExport;
