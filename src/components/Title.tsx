import { FC } from 'react';
import { VStack, Image, Heading } from '@chakra-ui/react';

//type interface
interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return (
    <VStack>
      <Image src="/Logo.svg" />
      <Heading size="lg" color="gray">
        {title}
      </Heading>
    </VStack>
  );
};

export default Title;
