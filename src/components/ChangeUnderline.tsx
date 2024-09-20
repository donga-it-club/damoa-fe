import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { PageButtonAll, PageButtonIng, PageButtonDone } from '@/styles/layouts/ChangeUnderline.style';

const ChangeCategory = () => {
  const [currentTab, setCurrentTab] = useState('전체');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(event.currentTarget.value);
  };

  return (
    <Flex>
      <PageButtonAll title={currentTab} value="전체" onClick={handleClick}>
        전체
      </PageButtonAll>
      <PageButtonIng title={currentTab} value="모집중" onClick={handleClick}>
        모집중
      </PageButtonIng>
      <PageButtonDone title={currentTab} value="모집 완료" onClick={handleClick}>
        모집 완료
      </PageButtonDone>
    </Flex>
  );
};

export default ChangeCategory;
