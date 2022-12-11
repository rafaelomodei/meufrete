import { Button, Heading, Icon, IconButton, Text } from '@chakra-ui/react';
import { theme } from '../../../utils/themes';

export interface IItemBreadcrumb {
  ariaLabel: string;
  label: string;
  item: number;
  active?: boolean;
  onClick?: () => void;
}

export const ItemBreadcrumb = ({
  ariaLabel,
  label,
  item,
  active,
  onClick,
}: IItemBreadcrumb) => {
  return (
    <Button
      bg='transparent'
      _hover={{ background: 'transparent' }}
      _active={{ background: 'transparent' }}
      onClick={onClick}
    >
      <IconButton
        aria-label={ariaLabel}
        icon={<Text>{item}</Text>}
        color={active ? 'rgba(242, 242, 242, 1)' : 'rgba(242, 242, 242, 0.5)'}
        bg={active ? 'rgba(72, 59, 32, 1)' : 'rgba(92, 92, 92, 0.2)'}
        border={active ? `solid 2px ${theme.colors.brand.primary}` : undefined}
        _hover={{
          background: 'rgba(92, 92, 92, 0.2)',
        }}
        _active={{
          background: 'rgba(92, 92, 92, 0.2)',
        }}
      />
      <Heading
        size='sm'
        ml={4}
        color={active ? 'rgba(242, 242, 242, 1)' : 'rgba(242, 242, 242, 0.5)'}
      >
        {label}
      </Heading>
    </Button>
  );
};
