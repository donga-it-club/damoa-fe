import { useState } from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { ContentsCategoryType } from '@/api/@asConst';
import { MockRecruitContents } from '@/api/__mock__/contents';
import Title from '@/components/Title';
import ContentsList from '@/components/recruit/ContentsList';
import SearchContents from '@/components/recruit/SearchContents';

const RecruitPage = () => {
  // 'ALL'을 초기 상태로 설정
  const [filterCategory, setFilterCategory] = useState<'ALL' | keyof typeof ContentsCategoryType>('ALL');

  // 필터링된 콘텐츠 리스트
  const filteredContents = MockRecruitContents.filter(content => {
    // 'ALL'이면 모든 항목을 보여줌
    if (filterCategory === 'ALL') return true;
    // 선택된 카테고리와 content의 category가 일치하는 항목만 보여줌
    return content.category === filterCategory;
  });

  return (
    <>
      <Title title="활동 모집" />
      <HStack justifyContent="center" gap={20} mt={10}>
        <Button
          colorScheme="brand"
          variant={filterCategory === 'ALL' ? 'solid' : 'ghost'}
          onClick={() => setFilterCategory('ALL')}
          _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }} // hover 시 확대 효과와 그림자 추가
          _active={{ transform: 'scale(0.95)' }} // active 시 클릭 효과
        >
          전체
        </Button>
        <Button
          colorScheme="brand"
          variant={filterCategory === ContentsCategoryType.PROJECT ? 'solid' : 'ghost'}
          onClick={() => setFilterCategory(ContentsCategoryType.PROJECT)}
          _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          _active={{ transform: 'scale(0.95)' }}
        >
          프로젝트
        </Button>
        <Button
          colorScheme="brand"
          variant={filterCategory === ContentsCategoryType.STUDY ? 'solid' : 'ghost'}
          onClick={() => setFilterCategory(ContentsCategoryType.STUDY)}
          _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          _active={{ transform: 'scale(0.95)' }}
        >
          스터디
        </Button>
      </HStack>
      <SearchContents />
      <ContentsList contents={filteredContents} />
    </>
  );
};

export default RecruitPage;
