import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  ResponsiveValue,
  Spinner,
} from '@chakra-ui/react';
import { sizeType } from '../../../utils/const';
import { theme } from '../../../utils/themes';

interface ITitle {
  text: string;
  size?:
    | ResponsiveValue<
        (string & {}) | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs' | '3xl' | '4xl'
      >
    | undefined;
  labelButton?: string;
  onClick?: () => void;
}

export const Title = ({ text, size, labelButton, onClick }: ITitle) => {
  return (
    <Flex w='100%' flexDirection='column'>
      <Flex justifyContent='space-between' alignItems='end' mb='8px'>
        <Heading size={size}> {text}</Heading>
        {onClick && (
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
            onClick={onClick}
          >
            {labelButton}
          </Button>
        )}
      </Flex>
      <Divider />
    </Flex>
  );
};
