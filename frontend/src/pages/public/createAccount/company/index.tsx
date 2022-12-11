import { Divider, Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { Input } from '../../../../components/molecules/Input/styles';
import { theme } from '../../../../utils/themes';

export const Company = () => {
  const [name, setName] = useState<string>('');
  const [CNPJ, setCNPJ] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [UF, setUF] = useState<string>('');

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
