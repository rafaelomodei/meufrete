import { Flex, Image } from '@chakra-ui/react';
import { svg } from '../../../assets';
import { URL_HOME, URL_LOGIN } from '../../../utils/const';
import { theme } from '../../../utils/themes';
import { IconButton } from './styles';

export const NavBar = () => {
  return (
    <Flex
      w='86px'
      h='100vh'
      bg={`${theme.colors.brand.backgroundSecondary}`}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      alignItems='center'
      position='fixed'
      left={0}
    >
      <Flex flexDirection='column'>
        <IconButton
          aria-label='Search database'
          icon={<Image w='42px' h='42px' src={svg.logo} />}
          sx={{ marginBottom: '32px !important', marginTop: '8px' }}
          onClick={() => (window.location.href = URL_HOME)}
          _hover={{ background: 'transparent !important' }}
        />
        <Flex flexDirection='column'>
          <IconButton
            aria-label='Search database'
            icon={
              <Image w='24px' h='24px' src={svg.home} className='icon-active' />
            }
          />
          <IconButton
            aria-label='Search database'
            icon={
              <Image
                w='24px'
                h='24px'
                src={svg.addNewFreight}
                className='icon-active'
              />
            }
          />
          <IconButton
            aria-label='Search database'
            icon={
              <Image
                w='24px'
                h='24px'
                src={svg.historyFreight}
                className='icon-active'
              />
            }
          />
          <IconButton
            aria-label='Search database'
            icon={
              <Image
                w='24px'
                h='24px'
                src={svg.currentFreight}
                className='icon-active'
              />
            }
          />
          <IconButton
            aria-label='Search database'
            icon={
              <Image
                w='24px'
                h='24px'
                src={svg.config}
                className='icon-active'
              />
            }
          />
        </Flex>
      </Flex>
      <IconButton
        aria-label='Search database'
        icon={
          <Image w='24px' h='24px' src={svg.exit} className='icon-active' />
        }
        onClick={() => window.location.replace(URL_LOGIN)}
      />
    </Flex>
  );
};
