import { MouseEvent, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import * as S from '@/styles/layouts/ChangeUnderline.style';

const ChangeCategory = () => {
  const [currentTab, setCurrentTab] = useState<string>();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(event.currentTarget.value);
  };

  return (
    <Flex>
      <S.PageButtonAll title={currentTab} value="ALL" onClick={handleClick}>
        전체
      </S.PageButtonAll>
      <S.PageButtonIng title={currentTab} value="RecruitIng" onClick={handleClick}>
        모집중
      </S.PageButtonIng>
      <S.PageButtonDone title={currentTab} value="RecruitDone" onClick={handleClick}>
        모집 완료
      </S.PageButtonDone>
    </Flex>
  );
};

export default ChangeCategory;
