import { CgProfile } from 'react-icons/cg';
import { Image, Text, HStack, Flex } from '@chakra-ui/react';
import * as S from '@/styles/layouts/Header.style';

const PageHeaders = () => {
  return (
    <S.Container>
      <Flex mx={100}>
        <Image src="/Logo.svg" />
        <HStack flexGrow={1} justifyContent="center" minW="max-content" gap={50}>
          <Text cursor="pointer">동아모아</Text>
          <Text cursor="pointer">활동 모집</Text>
          <Text cursor="pointer">커뮤니티</Text>
          <Text cursor="pointer">공지사항</Text>
        </HStack>
        <CgProfile style={{ margin: 'auto 0' }} size={30} />
      </Flex>
    </S.Container>
  );
};

export default PageHeaders;
