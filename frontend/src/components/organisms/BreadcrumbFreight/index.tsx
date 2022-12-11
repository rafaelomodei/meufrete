import { BreadcrumbItem, Icon } from '@chakra-ui/react';
import {
  IItemBreadcrumb,
  ItemBreadcrumb,
} from '../../molecules/itemBreadcrumb';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Breadcrumb } from './styles';
import { useState } from 'react';

export const BreadcrumbFreight = () => {
  const [itemSelected, setItemSelected] = useState<number>(1);

  const handleItemSelected = (id: number): boolean => {
    return itemSelected === id;
  };

  const itens: Array<IItemBreadcrumb> = [
    {
      item: 1,
      active: handleItemSelected(1),
      ariaLabel: 'carga',
      label: 'Carga',
      onClick: () => setItemSelected(1),
    },
    {
      item: 2,
      active: handleItemSelected(2),
      ariaLabel: 'empresa',
      label: 'Empresa',
      onClick: () => setItemSelected(2),
    },
    {
      item: 3,
      active: handleItemSelected(3),
      ariaLabel: 'Cidade',
      label: 'Cidade',
      onClick: () => setItemSelected(3),
    },
    {
      item: 4,
      active: handleItemSelected(4),
      ariaLabel: 'finalizar',
      label: 'Finalizar',
      onClick: () => setItemSelected(4),
    },
  ];

  return (
    <Breadcrumb
      arrowActive={true}
      position={itemSelected}
      separator={<Icon as={MdOutlineKeyboardArrowRight} boxSize={8} />}
    >
      {itens.map((item) => (
        <BreadcrumbItem>
          <ItemBreadcrumb
            key={item.item}
            ariaLabel={item.ariaLabel}
            label={item.label}
            item={item.item}
            active={item.active}
            onClick={item.onClick}
          />
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
