import { Flex } from '@chakra-ui/react';
import Title from '@/components/Title';
import CommunityList from '@/components/community/CommunityList';
import SearchContents from '@/components/recruit/SearchContents';

const CommunityPage = () => {
  return (
    <div>
      <Title
        title="커뮤니티"
        description="활동 후기, 추천 채용 공고, 취업 수기, 공부 내용 공유 등 자유롭게 정보를 공유하세요!"
      />
      <Flex mt={5}>
        <SearchContents />
      </Flex>
      <CommunityList />
    </div>
  );
};

export default CommunityPage;
