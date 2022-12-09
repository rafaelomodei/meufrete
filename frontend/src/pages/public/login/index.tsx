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
  useToast,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { img, svg } from '../../../assets';
import { Input } from '../../../components/molecules/Input/styles';
import { theme } from '../../../utils/themes';
import { BiShow, BiHide } from 'react-icons/bi';
import { IconButton } from '../../../components/molecules/iconButton/styles';
import { URL_CREATE_ACCOUNT, URL_HOME } from '../../../utils/const';
import { useUser } from '../../../hooks/user';
import api from '../../../services/api';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { profile, statusCode, authenticateUser } = useUser();
  const toast = useToast();

  useEffect(() => {
    if (profile) window.location.href = URL_HOME;
  }, [profile]);

  useEffect(() => {
    console.info('mudou');
    if (statusCode && statusCode !== 200)
      toast({
        title: 'Não foi possivel fazer login',
        description: 'Verifique seu e-mail e seua senha',
        status: 'error',
        variant: 'solid',
        position: 'top-right',
        containerStyle: {
          padding: '16px',
        },
      });
  }, [statusCode]);

  const taggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleAuthenticationUser = async () => {
    const test = await authenticateUser(email, password);
    console.log('page::statusCode::', test);
  };
  const handleChangeEmail = (event: any) => setEmail(event.target.value);
  const handleChangePassword = (event: any) => setPassword(event.target.value);

  return (
    <Flex h='100vh' width='100%'>
      <Box w='70%'>
        <Image w='100%' h='100%' objectFit='cover' src={`${img.login}`} />
      </Box>
      <Center w='100%'>
        <Center h='100%' maxWidth='400px' minWidth='360px'>
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
              spacing={3}
              bg={`${theme.colors.brand.backgroundSecondary}`}
              borderRadius={12}
            >
              <div>
                <Heading ml={4} size='sx'>
                  E-mail
                </Heading>
                <Input
                  placeholder='example@meufrete.com'
                  onChange={handleChangeEmail}
                  value={email}
                />
              </div>
              <Divider />
              <div>
                <Heading ml={4} size='sx'>
                  Senha
                </Heading>
                <InputGroup size='md'>
                  <Input
                    placeholder='Senha'
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChangePassword}
                  />
                  <InputRightElement width='4.5rem'>
                    <IconButton
                      aria-label='Ver senha'
                      onClick={taggleShowPassword}
                      bg='none'
                      bgHover='none'
                      bgActive='none'
                      icon={showPassword ? <BiShow /> : <BiHide />}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </IconButton>
                  </InputRightElement>
                </InputGroup>
              </div>
            </Stack>
            <Flex p={4} justify='space-between'>
              <Button
                color={`${theme.colors.brand.text}`}
                variant='link'
                onClick={() => (window.location.href = URL_CREATE_ACCOUNT)}
              >
                Criar conta
              </Button>
              <Button color={`${theme.colors.brand.text}`} variant='link'>
                Esqueci a senha
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
              onClick={handleAuthenticationUser}
            >
              Entrar
            </Button>
          </Box>
        </Center>
      </Center>
    </Flex>
  );
};

export default Login;
