import styled from 'styled-components';
import { Tab as TabChakra } from '@chakra-ui/react';
import { theme } from '../../../utils/themes';

export const Tab = styled(TabChakra)`
  && {
    border-bottom: solid 2px ${theme.colors.brand.textSecondary};

    &[aria-selected='true'] {
      color: white;
      border-bottom: solid 2px ${theme.colors.brand.primary};
    }
  }
`;
