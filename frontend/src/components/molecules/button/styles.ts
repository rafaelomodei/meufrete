import styled from 'styled-components';
import { Button as ButtonChakra } from '@chakra-ui/react';
import { theme } from '../../../utils/themes';

interface IButton {
  bgHover: string;
  bgActive: string;
  colorActive: string;
  color: string;
}

export const Button = styled(ButtonChakra)<IButton>`
  && {
    height: 48px;
    color: ${({ color }) =>
      color ? `${color}` : `${theme.colors.brand.gray}`};

    :hover {
      background-color: ${({ bgHover }) => `${bgHover}`};
    }

    :active {
      background-color: ${({ bgActive }) => `${bgActive}`};
      color: ${({ colorActive }) =>
        colorActive ? `${colorActive}` : `${theme.colors.brand.textSecondary}`};
    }
  }
`;
