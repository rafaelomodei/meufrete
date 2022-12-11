import styled from 'styled-components';
import { Breadcrumb as BreadcrumbChakra } from '@chakra-ui/react';

interface IBreadcrumbChakra {
  arrowActive: boolean;
  position: number;
}

export const Breadcrumb = styled(BreadcrumbChakra)<IBreadcrumbChakra>`
  && {
    margin: 32px;

    span {
      display: flex;
      align-items: center;
    }

    li {
      color: rgba(242, 242, 242, 0.5);
    }

    li:nth-child(${({ position }) => position}) {
      color: ${({ arrowActive }) =>
        arrowActive ? 'rgba(242, 242, 242, 1)' : 'rgba(242, 242, 242, 0.5)'};
    }
  }
`;
