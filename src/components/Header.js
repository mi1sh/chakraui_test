import { Box, Flex, Container, Image, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Logo from '../logo.svg';

export const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="header" py={2} bg={colorMode === 'dark' ? 'gray.700' : 'gray.200'}>
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Image src={Logo} alt="logo" boxSize="50px" objectFit="cover" />
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};
