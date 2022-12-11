import { Box, Flex, Heading, Stack } from '@chakra-ui/react';
import { Input } from '../../../../components/molecules/Input/styles';
import { Title } from '../../../../components/organisms/title';
import { IItem, Item } from '../../../../components/molecules/item';

import { theme } from '../../../../utils/themes';
import { WarningMessage } from '../../../../components/organisms/warningMessage';

export const Load = () => {
  const loads: Array<IItem> = [
    {
      title: 'maça',
    },
    {
      title: 'Pera',
    },
    {
      title: 'Caju',
    },
    {
      title: 'Morango',
    },
    {
      title: 'Manga',
    },
    {
      title: 'Jaca',
    },
  ];

  const loadsEmpty: Array<IItem> = [];
  return (
    <Flex flexDirection='column'>
      <Box
        mt='38px'
        mb='38px'
        pb={1}
        pt={2}
        bg={`${theme.colors.brand.backgroundSecondary}`}
        borderRadius={6}
        width='50%'
      >
        <Heading ml={4} size='sx'>
          Peso da carga
        </Heading>
        <Input
          placeholder='Informe o peso da carga em KG'
          sx={{ height: '32px !important' }}
        />
      </Box>
      <Title
        text='Cargas'
        size='md'
        labelButton='Adicionar nova carga'
        onClick={() => alert('Abrir modal')}
      />
      {loadsEmpty.length > 0 && (
        <Box
          mt='38px'
          mb='38px'
          pb={1}
          pt={2}
          bg={`${theme.colors.brand.backgroundSecondary}`}
          borderRadius={6}
          width='50%'
        >
          <Heading ml={4} size='sx'>
            Pesquisar
          </Heading>
          <Input
            placeholder='Informe o nome da carga'
            sx={{ height: '32px !important' }}
          />
        </Box>
      )}

      {loadsEmpty.length ? (
        loadsEmpty.map((load) => <Item title={load.title} />)
      ) : (
        <Flex mt={10} justifyContent='center'>
          <WarningMessage
            title='Não há nenhuma carga cadastrada!'
            description='Clique no botão acima  “Adicionar uma nova carga” '
          />
        </Flex>
      )}
    </Flex>
  );
};
