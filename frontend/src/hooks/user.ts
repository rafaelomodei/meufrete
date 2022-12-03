import { useCallback, useState } from 'react';
import { IUser } from '../modules/entities/user';
import api from '../services/api';

export const useUser = () => {
  const [profile, setProfile] = useState<IUser>();

  const authenticaterUser = useCallback(
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

  return { profile, authenticaterUser };
};
