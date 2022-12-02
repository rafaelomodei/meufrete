import styled from 'styled-components';
import { Input as InputChakra } from '@chakra-ui/react';
import { theme } from '../../../utils/themes';

export const Input = styled(InputChakra)`
  && {
    color: white;
    background-color: ${theme.colors.brand.backgroundSecondary};
    border: none;
    border-radius: 8px;
    height: 48px;

    ::placeholder {
      color: white;
      opacity: 0.6;
    }

    :focus {
      outline: none !important;
      border: none;
      box-shadow: none;
    }
  }
`;
