import request from 'axios';
import { useCallback, useState } from 'react';
import { IUser } from '../modules/entities/user';
import api from '../services/api';

export const useUser = () => {
  const [profile, setProfile] = useState<IUser>();
  const [statusCode, setStatusCode] = useState<number>();

  const authenticateUser = useCallback(
    async (email: string, password: string) => {
      try {
        const { status, data } = await api.post('/session', {
          email,
          password,
        });

        if (status !== 200) throw new Error();
        setProfile(data.user);
        setStatusCode(status);
      } catch (err) {
        if (request.isAxiosError(err)) setStatusCode(err.response?.status);
      }
    },
    []
  );

  const createUser = useCallback(async (dataForm: IUser) => {
    const { name, email, password, driverLicense, company } = dataForm;

    const { status, data } = await api.post('/users', {
      name,
      email,
      password,
      driverLicense,
      company,
    });

    setStatusCode(status);

    if (status !== 201) throw new Error();
    setProfile(data);
  }, []);

  return { profile, statusCode, authenticateUser, createUser };
};
