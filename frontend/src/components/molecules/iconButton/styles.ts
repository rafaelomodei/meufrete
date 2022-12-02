import styled from 'styled-components';
import { IconButton as IconButtonChakra } from '@chakra-ui/react';
import { theme } from '../../../utils/themes';

interface IButton {
  bgHover: string;
  bgActive: string;
  colorActive: string;
  color: string;
}

export const IconButton = styled(IconButtonChakra)<IButton>`
  && {
    height: 48px;
    color: ${({ color }) =>
      color ? `${color}` : `${theme.colors.brand.gray}`};

    :hover {
      background: ${({ bgHover }) => `${bgHover}`};
    }

    :active {
      background-color: ${({ bgActive }) => `${bgActive}`};
      color: ${({ colorActive }) =>
        colorActive ? `${colorActive}` : `${theme.colors.brand.gray}`};
    }
  }
`;
