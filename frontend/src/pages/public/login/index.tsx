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
} from '@chakra-ui/react';
import { useState } from 'react';
import { img, svg } from '../../../assets';
import { Input } from '../../../components/molecules/Input/styles';
import { theme } from '../../../utils/themes';
import { BiShow, BiHide } from 'react-icons/bi';
import { IconButton } from '../../../components/molecules/iconButton/styles';
import { URL_CREATE_ACCOUNT, URL_HOME } from '../../../utils/const';

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const taggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
                <Input placeholder='example@meufrete.com' />
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
                  />
                  <InputRightElement width='4.5rem'>
                    <IconButton
                      aria-label='Ver senha'
                      onClick={taggleShowPassword}
                      bg='none'
                      bgHover='none'
                      bgActive='none'
                      icon={showPassword ? <BiHide /> : <BiShow />}
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
                Cadastrar-se
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
              onClick={() => (window.location.href = URL_HOME)}
            >
              Entrar
            </Button>
          </Box>
        </Center>
      </Center>
    </Flex>
  );
};
