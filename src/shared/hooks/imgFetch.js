import { useState, useEffect } from 'react';
import ImageService from '../../services/ImageService';

// useFetch('Users', 'GET');
export default function useFetch(api, method, body = null) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let service;
  if (api === 'Image') {
    service = ImageService;
  }

  const fetchURL = async () => {
    let response;
    if (method === 'GET') {
      response = await service.getImagess();
    }

    if (response.error) {
      setError(response.error);
    }

    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchURL();
  });
  return [data, loading, error];
}
