import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  InputGroup,
  InputRightElement,
  Stack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { img, svg } from '../../../assets';
import { Input } from '../../../components/molecules/Input/styles';
import { theme } from '../../../utils/themes';
import { BiShow, BiHide } from 'react-icons/bi';
import { IconButton } from '../../../components/molecules/iconButton/styles';
import { URL_CREATE_ACCOUNT, URL_HOME, URL_LOGIN } from '../../../utils/const';
import { useUser } from '../../../hooks/user';
import { User } from './user';
import { Company } from './company';
import { Title } from '../../../components/organisms/title';
import { Tab } from './styles';

const CreateAccount = () => {
  const { profile, createUser } = useUser();

  useEffect(() => {
    if (profile) window.location.href = URL_HOME;
  }, [profile]);

  // const handleCreateUser = async () => {
  //   await createUser({ name, email, password, driverLicense });
  // };

  return (
    <Flex width='100%'>
      <Box w='40%' height='100vh' position='fixed' left={0}>
        <Image w='100%' h='100%' objectFit='cover' src={`${img.login}`} />
      </Box>
      <Flex w='100%' justifyContent='flex-end' sx={{ overflowX: 'hidden' }}>
        <Center w='60%'>
          <Center mt={8} mb={4} h='100%' maxWidth='400px' minWidth='360px'>
            <Box w='100%'>
              <Center mb={8} flexDirection='column'>
                <Image src={`${svg.logo}`} />
                <Heading mt={3} size='sm'>
                  meufrete.com
                </Heading>
              </Center>
              <Stack
                p={6}
                pb={2}
                bg={`${theme.colors.brand.backgroundSecondary}`}
                borderRadius={12}
              >
                <Tabs>
                  <TabList border='none'>
                    <Tab>Motorista</Tab>
                    <Tab>Empresa</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel p={0} mt={4}>
                      <User typeUser='DRIVER' />
                    </TabPanel>
                    <TabPanel p={0}>
                      <Box mt={8} mb={4}>
                        <Title text='Dados do administrador' size='md' />
                      </Box>
                      <User typeUser='COMPANY' />
                      <Box mt={8} mb={4}>
                        <Title text='Dados da empresa' size='md' />
                      </Box>
                      <Company />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Stack>
              <Flex p={4} justify='space-between'>
                <Button
                  color={`${theme.colors.brand.text}`}
                  variant='link'
                  onClick={() => (window.location.href = URL_LOGIN)}
                >
                  Já tenho uma conta
                </Button>
              </Flex>
              <Button
                color='white'
                bgGradient={`linear(to-r, ${theme.colors.brand.primary}, ${theme.colors.brand.tertiary})`}
                _hover={{
                  bgGradient: `linear(to-r, ${theme.colors.brand.secondary}, ${theme.colors.brand.quaternary})`,
                }}
                _active={{
                  color: `${theme.colors.brand.textSecondary}`,
                  bgGradient: `linear(to-r, ${theme.colors.brand.tertiary}, ${theme.colors.brand.quinternary})`,
                }}
                variant='solid'
                w='100%'
                h='48px'
                mt={8}
                // onClick={handleCreateUser}
              >
                Criar conta
              </Button>
            </Box>
          </Center>
        </Center>
      </Flex>
    </Flex>
  );
};

export default CreateAccount;
