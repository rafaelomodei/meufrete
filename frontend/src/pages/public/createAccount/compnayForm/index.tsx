import {
  FormControl,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';

interface IHandleChangeInput {
  event: any;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const CompanyForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [driverLicense, setDriverLicense] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleMessage = (isError: boolean, message: string): JSX.Element => {
    if (isError) return <FormErrorMessage>{message}</FormErrorMessage>;
    return <FormHelperText>{message}</FormHelperText>;
  };

  const handleChangeInput = ({ event, setValue }: IHandleChangeInput) =>
    setValue(event.target.value);

  const handleMessageInputName = () => {
    if (hasErrorName()) return 'Nome é obrigatório';
    return '';
  };

  const handleMessageInputEmail = () => {
    if (hasErrorName()) return 'Nome é obrigatório';
    return '';
  };

  const hasErrorName = () => false;
  const hasErrorEmail = () => false;


  return (
    <FormControl isInvalid={false}>
      <FormLabel>Nome</FormLabel>
      <Input
        isRequired={true}
        type='text'
        placeholder='Informe seu nome'
        value={name}
        onChange={(event: any) =>
          handleChangeInput({ event, setValue: setName })
        }
      />
      {handleMessage(hasErrorName(), handleMessageInputName())}

      <FormLabel>E-mail</FormLabel>
      <Input
        isRequired={true}
        type='email'
        placeholder='Informe seu email'
        value={email}
        onChange={(event: any) =>
          handleChangeInput({ event, setValue: setEmail })
        }
      />
      {handleMessage(hasErrorEmail(), handleMessageInputName())}
    </FormControl>
  );
};
