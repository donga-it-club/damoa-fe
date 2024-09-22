import { useState } from 'react';
import { ContentsCategoryType, TContentsType } from '@/api/@asConst';
import { MockRecruitContents } from '@/api/__mock__/contents';
import { Button, Flex, HStack, Spacer } from '@chakra-ui/react';
import ChangeCategory from '@/components/ChangeUnderline';
import Title from '@/components/Title';
import WriteButton from '@/components/WriteButton';
import ContentsList from '@/components/recruit/ContentsList';
import SearchContents from '@/components/recruit/SearchContents';
import { CONTENTS_CATEGORY_LABEL } from '@/constants/label';

const RecruitPage = () => {
  const [filterCategory, setFilterCategory] = useState<TContentsType[keyof TContentsType]>(ContentsCategoryType.ALL);
  const mappedCategories = Object.values(ContentsCategoryType);

  const filteredContents = MockRecruitContents.filter(content => {
    if (filterCategory === ContentsCategoryType.ALL) return true;
    return content.category === filterCategory;
  });
  const [value, setValue] = useState<number>(1);
  const [filterRecruit, setFilterRecruit] = useState<string>('ALL');

  const FilterRecruit = MockRecruitContents.filter(content => {
    if (filterRecruit === 'RecruitIng') {
      return content.isActived === true;
    } else if (filterRecruit === 'RecruitDone') {
      return content.isActived === false;
    }
    return true;
  });

  return (
    <>
      <Title title="활동 모집" />
      <HStack justifyContent="center" gap={20} mt={10}>
        {mappedCategories.map(value => (
          <Button
            colorScheme="brand"
            variant={filterCategory === value ? 'solid' : 'ghost'}
            onClick={() => setFilterCategory(value)}
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
            _active={{ transform: 'scale(0.95)' }}
          >
            {CONTENTS_CATEGORY_LABEL[value]}
          </Button>
        ))}
      </HStack>
      <SearchContents />
      <Flex mt={5} borderBottom="1px" borderColor="gray.200">
        {/* <ChangeCategory currentTab={filterRecruit} setCurrentTab={setFilterRecruit} /> */}
        <Spacer />
        <WriteButton />
      </Flex>
      <ContentsList contents={FilterRecruit} />
    </>
  );
};

export default RecruitPage;
