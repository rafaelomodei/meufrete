import request from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { ICompany } from '../modules/entities/company';
import api from '../services/api';

export const useCompany = () => {
  const [company, setCompany] = useState<ICompany>();
  const [statusCode, setStatusCode] = useState<number>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!loading) setStatusCode(undefined);
  }, [loading]);

  const createCompany = useCallback(async (dataForm: ICompany) => {
    const { name, certification, loads, user } = dataForm;
    setLoading(true);
    const token = sessionStorage.getItem('token');

    try {
      const { status, data } = await api.post(
        '/companies',
        {
          name,
          certification,
          loads,
          user,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (status !== 201) throw new Error();
      console.info('createCompany: ', data);
      setCompany(data);
      setStatusCode(status);
      setLoading(false);
    } catch (err) {
      if (request.isAxiosError(err)) setStatusCode(err.response?.status);
      setLoading(false);
    }
  }, []);

  return { company, statusCode, loading, createCompany };
};
