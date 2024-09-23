import { FC } from 'react';
import { VStack, Image, Heading, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  description?: string;
}

const Title: FC<Props> = ({ title, description }) => {
  return (
    <VStack>
      <Image src="/Logo.svg" />
      <Heading size="lg" color="gray">
        {title}
      </Heading>
      {description && (
        <Text color="gray" fontWeight={700}>
          {description}
        </Text>
      )}
    </VStack>
  );
};

export default Title;
