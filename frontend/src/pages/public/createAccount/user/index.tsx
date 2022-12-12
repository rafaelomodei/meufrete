import {
  Divider,
  Heading,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { Dispatch, useEffect, useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import { IconButton } from '../../../../components/molecules/iconButton/styles';
import { Input } from '../../../../components/molecules/Input/styles';
import { IUser } from '../../../../modules/entities/user';
import { theme } from '../../../../utils/themes';

interface IUserAccount {
  typeUser: 'DRIVER' | 'COMPANY';
  getUser: Dispatch<React.SetStateAction<IUser | undefined>>;
}

export const User = ({ typeUser, getUser }: IUserAccount) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [driverLicense, setDriverLicense] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (name && email && password && confirmPassword)
      getUser({ name, email, password, driverLicense });
  }, [name, email, password, confirmPassword, driverLicense]);

  const handleChangeName = (event: any) => setName(event.target.value);
  const handleChangeEmail = (event: any) => setEmail(event.target.value);
  const handleChangePassword = (event: any) => setPassword(event.target.value);
  const handleChangeConfirmPassword = (event: any) =>
    setConfirmPassword(event.target.value);
  const handleChangeDriverLicense = (event: any) =>
    setDriverLicense(event.target.value);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isDriver: boolean = typeUser === 'DRIVER';

  return (
    <Stack p={0} spacing={3} bg={`${theme.colors.brand.backgroundSecondary}`}>
      <div>
        <Heading ml={4} size='sx'>
          Nome
        </Heading>
        <Input
          placeholder='Informe seu nome'
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
          placeholder='Informe seu email'
          onChange={handleChangeEmail}
          value={email}
        />
      </div>
      <Divider />
      {isDriver && (
        <>
          <div>
            <Heading ml={4} size='sx'>
              Número da CNH
            </Heading>
            <Input
              placeholder='Informe sua CNH'
              onChange={handleChangeDriverLicense}
              value={driverLicense}
            />
          </div>

          <Divider />
        </>
      )}
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
  );
};
