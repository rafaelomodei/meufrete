import { Box, Flex, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import { Input } from '../../../../components/molecules/Input/styles';
import { Title } from '../../../../components/organisms/title';
import { IItem, Item } from '../../../../components/molecules/item';

import { theme } from '../../../../utils/themes';
import { WarningMessage } from '../../../../components/organisms/warningMessage';
import { useLoad } from '../../../../hooks/load';
import { useEffect, useState } from 'react';
import { CreateLoadModal } from '../../../../components/organisms/createLoadModal';
import { Loading } from '../../../../components/organisms/loading';
import { ILoad } from '../../../../modules/entities/load';

export const Load = () => {
  const [loadSelected, setLoadSelected] = useState<ILoad>();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, loads, getLoads } = useLoad();

  useEffect(() => {
    if (!isOpen) getLoads();
  }, [isOpen]);

  useEffect(() => {
    console.info('loadSelected: ', loadSelected);
  }, [loadSelected]);

  const handleLoad = (): JSX.Element => {
    return loads && loads?.length > 0 ? (
      <>
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

        {loads.map((load) => (
          <Item key={load.id} load={load} getLoad={setLoadSelected} />
        ))}
      </>
    ) : (
      <Flex mt={10} justifyContent='center'>
        <WarningMessage
          title='Não há nenhuma carga cadastrada!'
          description='Clique no botão acima  “Adicionar uma nova carga” '
        />
      </Flex>
    );
  };

  const managementRender = (): JSX.Element => {
    return loading ? <Loading h='250px' /> : handleLoad();
  };

  return (
    <Flex flexDirection='column'>
      <CreateLoadModal isOpen={isOpen} onClose={onClose} />

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
        onClick={onOpen}
      />
      {managementRender()}
    </Flex>
  );
};
