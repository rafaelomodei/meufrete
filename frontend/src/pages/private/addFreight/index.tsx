import { Center, Flex } from '@chakra-ui/react';
import { BreadcrumbFreight } from '../../../components/organisms/BreadcrumbFreight';
import { NavBar } from '../../../components/organisms/navBar';

export const AddFreight = () => {
  return (
    <>
      <NavBar />
      <Flex w='100%' justifyContent='center'>
        <BreadcrumbFreight />
      </Flex>
    </>
  );
};
