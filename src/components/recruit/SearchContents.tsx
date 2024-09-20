import { CiSearch } from 'react-icons/ci';
import { Button, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const SearchContents = () => {
  return (
    <Flex justifyContent="flex-end" gap={3} mt={5}>
      <Flex>
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
    </Flex>
  );
};

export default SearchContents;
