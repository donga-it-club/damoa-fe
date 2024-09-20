import { FaPen } from 'react-icons/fa';
import { Button, Icon } from '@chakra-ui/react';

export const WriteButton = () => {
  return (
    <Button
      leftIcon={<Icon as={FaPen} />}
      color="white"
      width="108px"
      height="42px"
      borderRadius="4px"
      fontSize="17px"
      variant="solid"
      bg="#7E7F80"
    >
      글쓰기
    </Button>
  );
};

export default WriteButton;
