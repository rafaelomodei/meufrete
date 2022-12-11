import request from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { ILoad } from '../modules/entities/load';
import api from '../services/api';

export const useLoad = () => {
  const [loads, setLoads] = useState<Array<ILoad>>();
  const [statusCode, setStatusCode] = useState<number>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!loading) setStatusCode(undefined);
  }, [loading]);

  const getLoads = useCallback(async () => {
    setLoading(true);

    try {
      const token = sessionStorage.getItem('token');
      const { status, data } = await api.get('/loads', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (status !== 200) throw new Error();
      setLoads(data);
      setStatusCode(status);
      setLoading(false);
    } catch (err) {
      if (request.isAxiosError(err)) setStatusCode(err.response?.status);
      setLoading(false);
    }
  }, []);

  const createLoad = useCallback(async (name: string) => {
    setLoading(true);

    try {
      const token = sessionStorage.getItem('token');
      console.info('GET::token: ', token);

      const { status, data } = await api.post(
        '/loads',
        {
          name,
          weight: 10,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.info('status: ', status);
      console.info('data: ', data);

      if (status !== 201) throw new Error();
      setStatusCode(status);
      setLoading(false);
    } catch (err) {
      console.info('err: ', err);
      if (request.isAxiosError(err)) setStatusCode(err.response?.status);
      setLoading(false);
    }
  }, []);

  return { loads, statusCode, loading, getLoads, createLoad };
};
