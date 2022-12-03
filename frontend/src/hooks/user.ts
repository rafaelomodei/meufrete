import { useCallback, useState } from 'react';
import { IUser } from '../modules/entities/user';
import api from '../services/api';

export const useUser = () => {
  const [profile, setProfile] = useState<IUser>();

  const authenticateUser = useCallback(
    async (email: string, password: string) => {
      const { status, data } = await api.post('/session', {
        email,
        password,
      });

      console.info('data: ', data.user);
      if (status !== 200) throw new Error();
      setProfile(data.user);
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

    console.info('data: ', data);
    if (status !== 201) throw new Error();
    setProfile(data);
  }, []);

  return { profile, authenticateUser, createUser };
};
