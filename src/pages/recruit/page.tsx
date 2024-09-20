import { useState } from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { ContentsCategoryType, TContentsType } from '@/api/@asConst';
import { MockRecruitContents } from '@/api/__mock__/contents';
import Title from '@/components/Title';
import WriteButton from '@/components/WriteButton';
import ChangeCategory from '@/components/changeUnderline';
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
      <ContentsList contents={filteredContents} />
    </>
  );
};

export default RecruitPage;
