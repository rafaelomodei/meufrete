import { Flex, Heading, Text } from '@chakra-ui/react';

interface IWarningMessage {
  title: string;
  description?: string;
}

export const WarningMessage = ({ title, description }: IWarningMessage) => {
  return (
    <Flex flexDirection='column' alignItems='center'>
      <Heading size='lg'>{title}</Heading>
      <Text>{description}</Text>
    </Flex>
  );
};
