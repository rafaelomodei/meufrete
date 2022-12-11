import { Center, Flex } from '@chakra-ui/react';
import { BreadcrumbFreight } from '../../../components/organisms/BreadcrumbFreight';
import { NavBar } from '../../../components/organisms/navBar';
import { Title } from '../../../components/organisms/title';
import { Load } from './load';

export const AddFreight = () => {
  return (
    <>
      <NavBar />
      <Flex w='100%' flexDirection='column' alignItems='center'>
        <Flex w='100%' justifyContent='center'>
          <BreadcrumbFreight />
        </Flex>
        <Flex w='70%' flexDirection='column'>
          <Title text='Adicionar novo frete' size='lg' />
          {Load()}
        </Flex>
      </Flex>
    </>
  );
};
