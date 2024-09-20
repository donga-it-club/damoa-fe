import { useState } from 'react';
import { Button, Flex, HStack, Spacer } from '@chakra-ui/react';
import Title from '@/components/Title';
import WriteButton from '@/components/WriteButton';
import ChangeCategory from '@/components/changeUnderline';
import ContentsList from '@/components/recruit/ContentsList';
import SearchContents from '@/components/recruit/SearchContents';

const RecruitPage = () => {
  const [value, setValue] = useState<number>(1);

  return (
    <>
      <Title title="활동 모집" />
      <HStack justifyContent="center" gap={20} mt={10}>
        <Button colorScheme="brand" variant={value === 1 ? 'solid' : 'ghost'} value={1} onClick={() => setValue(1)}>
          전체
        </Button>
        <Button colorScheme="brand" value={2} variant={value === 2 ? 'solid' : 'ghost'} onClick={() => setValue(2)}>
          프로젝트
        </Button>
        <Button colorScheme="brand" variant={value === 3 ? 'solid' : 'ghost'} value={3} onClick={() => setValue(3)}>
          스터디
        </Button>
      </HStack>
      <SearchContents />
      <Flex mt={5} borderBottom="1px" borderColor="gray.200">
        <ChangeCategory />
        <Spacer />
        <WriteButton />
      </Flex>
      <ContentsList />
    </>
  );
};

export default RecruitPage;
