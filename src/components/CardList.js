import {
  SimpleGrid,
  useColorMode,
  Stack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';

export const CardList = props => {
  const { cards = {} } = props;
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py="4">
      {cards.map(card => (
        <Stack
          key={card.title}
          spacing={2}
          _hover={
            colorMode === 'light'
              ? { shadow: 'lg' }
              : { boxShadow: '0px 5px 5px #2d3748' }
          }
          p={2}
        >
          <Heading as="h3" fontSize={25}>
            {card.title}
          </Heading>
          <Text fontSize={17} m={2}>
            {card.body}
          </Text>
          <Button as="a" variant="outline">
            Read more...
          </Button>
        </Stack>
      ))}
    </SimpleGrid>
  );
};
