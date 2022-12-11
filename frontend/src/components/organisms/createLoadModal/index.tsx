import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useLoad } from '../../../hooks/load';
import { theme } from '../../../utils/themes';
import { Input } from '../../molecules/Input/styles';

interface ICreateLoadModal {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateLoadModal = ({ isOpen, onClose }: ICreateLoadModal) => {
  const [nameLoadInput, setNameLoadInput] = useState<string>('');
  const { statusCode, createLoad } = useLoad();
  const nameLoad = useRef(null);
  const toast = useToast();

  useEffect(() => {
    console.log('statusCode: ', statusCode);
    if (statusCode && statusCode !== 201)
      toast({
        title: 'Não foi possível cadastarar a carga',
        description: 'Tente novamente mais tarde',
        status: 'error',
        variant: 'solid',
        position: 'top-right',
        containerStyle: {
          padding: '16px',
        },
      });
    if (statusCode && statusCode === 201) {
      onClose();

      toast({
        title: 'Carga cadastarar com sucesso',
        status: 'success',
        variant: 'solid',
        position: 'top-right',
        containerStyle: {
          padding: '16px',
        },
      });
    }
  }, [statusCode]);

  const handleChangeNameLoad = (event: any) =>
    setNameLoadInput(event.target.value);

  return (
    <Modal initialFocusRef={nameLoad} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={`${theme.colors.brand.backgroundSecondary}`}>
        <ModalHeader>Adicionar uma nova carga</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nome da carga</FormLabel>
            <Input
              ref={nameLoad}
              placeholder='Informe o nome da carga'
              onChange={handleChangeNameLoad}
              sx={{ height: '32px !important', padding: 0 }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            mr={4}
            color='white'
            bg={`${theme.colors.brand.error}`}
            _hover={{
              background: `${theme.colors.brand.errorSecondary}`,
            }}
            _active={{
              color: `${theme.colors.brand.textSecondary}`,
              background: `${theme.colors.brand.errorTertiary}`,
            }}
            onClick={onClose}
          >
            Cancelar
          </Button>

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
            onClick={() => createLoad(nameLoadInput)}
          >
            Adicionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
