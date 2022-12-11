import { Center, Spinner } from '@chakra-ui/react';

interface ILoading {
  w?: string;
  h?: string;
}

export const Loading = ({ w, h }: ILoading) => {
  return (
    <Center w={w ? w : '100%'} h={h ? h : '100vh'}>
      <Spinner />
    </Center>
  );
};
