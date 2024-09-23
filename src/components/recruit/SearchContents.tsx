import { FC } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Button, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

interface Props {
  boolean?: true;
}

const SearchContents: FC<Props> = ({ boolean }) => {
  return (
    <>
      <Flex flexGrow={boolean ? 0 : 1}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <CiSearch color="green.500" />
          </InputLeftElement>
          <Input
            placeholder="제목, 내용, 작성자명 검색"
            _hover={{ borderColor: 'brand.300' }} // hover 시 테두리 색 변경
          />
        </InputGroup>
      </Flex>
      <Button colorScheme="brand">검색</Button>
    </>
  );
};

export default SearchContents;
