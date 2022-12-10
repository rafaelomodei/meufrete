import styled from 'styled-components';
import {
  IconButton as IconButtonChakra,
  Image as ImageChakra,
} from '@chakra-ui/react';

export const IconButton = styled(IconButtonChakra)`
  && {
    background-color: transparent;
    color: transparent;
    margin-bottom: 16px;
    
    :hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    :active {
      background-color: rgba(0, 0, 0, 0.5);

      .icon-active {
        filter: brightness(0) saturate(100%) invert(95%) sepia(10%)
          saturate(6292%) hue-rotate(332deg) brightness(96%) contrast(99%);
      }
    }
  }
`;
