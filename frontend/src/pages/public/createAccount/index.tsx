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
import { useEffect, useState } from 'react';
import { img, svg } from '../../../assets';
import { Input } from '../../../components/molecules/Input/styles';
import { theme } from '../../../utils/themes';
import { BiShow, BiHide } from 'react-icons/bi';
import { IconButton } from '../../../components/molecules/iconButton/styles';
import { URL_CREATE_ACCOUNT, URL_HOME, URL_LOGIN } from '../../../utils/const';
import { useUser } from '../../../hooks/user';

const CreateAccount = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [driverLicense, setDriverLicense] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { profile, createUser } = useUser();

  useEffect(() => {
    if (profile) window.location.href = URL_HOME;
  }, [profile]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleCreateUser = async () => {
    await createUser({ name, email, password, driverLicense });
  };

  const handleChangeName = (event: any) => setName(event.target.value);
  const handleChangeEmail = (event: any) => setEmail(event.target.value);
  const handleChangePassword = (event: any) => setPassword(event.target.value);
  const handleChangeConfirmPassword = (event: any) =>
    setConfirmPassword(event.target.value);
  const handleChangeDriverLicense = (event: any) =>
    setDriverLicense(event.target.value);

  return (
    <Flex h='100vh' width='100%'>
      <Box w='70%'>
        <Image w='100%' h='100%' objectFit='cover' src={`${img.login}`} />
      </Box>
      <Center w='100%' sx={{ overflowX: 'hidden' }}>
        <Center mt={60} mb={20} h='100%' maxWidth='400px' minWidth='360px'>
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
                  Nome
                </Heading>
                <Input
                  placeholder='Omodei'
                  onChange={handleChangeName}
                  value={name}
                />
              </div>
              <Divider />

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
                  Número da CNH
                </Heading>
                <Input
                  placeholder='123.123'
                  onChange={handleChangeDriverLicense}
                  value={driverLicense}
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
                    value={password}
                  />
                  <InputRightElement width='4.5rem'>
                    <IconButton
                      aria-label='Ver senha'
                      onClick={toggleShowPassword}
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
              <Divider />

              <div>
                <Heading ml={4} size='sx'>
                  Confirmar senha
                </Heading>
                <InputGroup size='md'>
                  <Input
                    placeholder='Senha'
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChangeConfirmPassword}
                    value={confirmPassword}
                  />
                  <InputRightElement width='4.5rem'>
                    <IconButton
                      aria-label='Ver senha'
                      onClick={toggleShowPassword}
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
              onClick={handleCreateUser}
            >
              Criar conta
            </Button>
          </Box>
        </Center>
      </Center>
    </Flex>
  );
};

export default CreateAccount;
