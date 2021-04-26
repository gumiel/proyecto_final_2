import { useState, useEffect } from 'react';
import BookService from '../../services/BookService';

// useFetch('Users', 'GET');
export default function useFetch(api, method, body = null) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let service;
  if (api === 'Libro') {
    service = BookService;
  }

  const fetchURL = async () => {
    let response;
    if (method === 'GET') {
      response = await service.getBook(body.id);
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
