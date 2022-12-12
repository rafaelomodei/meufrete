import { Divider, Heading, Stack } from '@chakra-ui/react';
import { Dispatch, useEffect, useState } from 'react';
import { Input } from '../../../../components/molecules/Input/styles';
import { ICompany } from '../../../../modules/entities/company';
import { IUser } from '../../../../modules/entities/user';
import { theme } from '../../../../utils/themes';

interface ICompanyAccount {
  user: IUser | undefined;
  getCompany: Dispatch<React.SetStateAction<ICompany | undefined>>;
}

export const Company = ({ user, getCompany }: ICompanyAccount) => {
  const [name, setName] = useState<string>('');
  const [CNPJ, setCNPJ] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [UF, setUF] = useState<string>('');

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    console.info('userId: ', typeof userId);
    if (name && CNPJ && city && userId && user)
      getCompany({ name, certification: true, user: { id: userId } });
  }, [name, CNPJ, city]);

  const handleChangeName = (event: any) => setName(event.target.value);
  const handleChangeCNPJ = (event: any) => setCNPJ(event.target.value);
  const handleChangeCity = (event: any) => setCity(event.target.value);
  const handleChangeUF = (event: any) => setUF(event.target.value);

  return (
    <Stack p={0} spacing={3} bg={`${theme.colors.brand.backgroundSecondary}`}>
      <div>
        <Heading ml={4} size='sx'>
          Nome
        </Heading>
        <Input
          placeholder='Informe o nome da empresa'
          onChange={handleChangeName}
          value={name}
        />
      </div>
      <Divider />

      <div>
        <Heading ml={4} size='sx'>
          Número do CNPJ
        </Heading>
        <Input
          placeholder='Informe o número do CNPJ'
          onChange={handleChangeCNPJ}
          value={CNPJ}
        />
      </div>
      <Divider />

      <div>
        <Heading ml={4} size='sx'>
          Cidade
        </Heading>
        <Input
          placeholder='Informe a cidade da empresa'
          onChange={handleChangeCity}
          value={city}
        />
      </div>

      <Divider />

      <div>
        <Heading ml={4} size='sx'>
          UF
        </Heading>
        <Input
          placeholder='Informe a UF da empresa'
          onChange={handleChangeUF}
          value={UF}
        />
      </div>
    </Stack>
  );
};
