import { Flex, Text } from '@chakra-ui/react';
import { theme } from '../../../utils/themes';

export interface IItem {
  title: string;
  description?: string;
}

export const Item = ({ title, description }: IItem) => {
  return (
    <Flex
      w='100%'
      h='72px'
      mb={6}
      p={4}
      bg={`${theme.colors.brand.backgroundSecondary}`}
      borderRadius={10}
      alignItems='center'
    >
      <Text>{title}</Text>
    </Flex>
  );
};
