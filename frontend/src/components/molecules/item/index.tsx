import { Flex, Text } from '@chakra-ui/react';
import { Dispatch, useState } from 'react';
import { ILoad } from '../../../modules/entities/load';
import { theme } from '../../../utils/themes';

export interface IItem {
  load?: ILoad;
  getLoad?: Dispatch<React.SetStateAction<ILoad | undefined>>;
}

export const Item = ({ load, getLoad }: IItem) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
    load && getLoad && getLoad(load);
  };
  return (
    <Flex
      w='100%'
      h='72px'
      mb={6}
      p={4}
      bg={
        selected
          ? 'rgba(243, 186, 41, 0.2);'
          : `${theme.colors.brand.backgroundSecondary}`
      }
      border={selected ? `solid 2px ${theme.colors.brand.primary}` : ''}
      borderRadius={10}
      alignItems='center'
      role='presentation'
      onClick={handleClick}
    >
      <Text textTransform='capitalize' fontWeight={selected ? 'bold' : ''}>
        {load?.name.toLocaleLowerCase()}
      </Text>
    </Flex>
  );
};
