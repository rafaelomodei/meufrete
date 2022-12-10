import request from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { IUser } from '../modules/entities/user';
import api from '../services/api';

export const useUser = () => {
  const [profile, setProfile] = useState<IUser>();
  const [statusCode, setStatusCode] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!loading) setStatusCode(undefined);
  }, [loading]);

  const authenticateUser = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      
      try {
        const { status, data } = await api.post('/session', {
          email,
          password,
        });

        if (status !== 200) throw new Error();
        setProfile(data.user);
        setStatusCode(status);
        setLoading(false);
      } catch (err) {
        if (request.isAxiosError(err)) setStatusCode(err.response?.status);
        setLoading(false);
      }
    },
    []
  );

  const createUser = useCallback(async (dataForm: IUser) => {
    const { name, email, password, driverLicense, company } = dataForm;
    setLoading(true);

    try {
      const { status, data } = await api.post('/users', {
        name,
        email,
        password,
        driverLicense,
        company,
      });

      if (status !== 201) throw new Error();
      setProfile(data);
      setStatusCode(status);
      setLoading(false);
    } catch (err) {
      if (request.isAxiosError(err)) setStatusCode(err.response?.status);
      setLoading(false);
    }
  }, []);

  return { profile, statusCode, loading, authenticateUser, createUser };
};
