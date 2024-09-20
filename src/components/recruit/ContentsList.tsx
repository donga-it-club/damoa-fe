import { CiBookmark, CiCalendar } from 'react-icons/ci';
import { FaRegCommentAlt } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { Badge, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { ContentType } from '@/api/__mock__/contents';

interface ContentsListProps {
  contents: ContentType[];
}

const ContentsList: React.FC<ContentsListProps> = ({ contents }) => {
  return (
    <>
      {contents.map(value => (
        <Flex key={value.id} flexDirection="column" gap={5} my={10}>
          <HStack>
            <Badge variant="subtle" colorScheme="brand" color="black" fontSize={15}>
              {value.category}
            </Badge>
            <Badge variant="solid" colorScheme="brand" fontSize={15}>
              {value.isActived === true ? '모집중' : '모집 완료'}
            </Badge>
          </HStack>
          <Heading size="md">{value.title}</Heading>
          <Text color="gray" fontSize={15}>
            {value.contents}
          </Text>
          <HStack justifyContent="space-between">
            <Flex>
              <ContentText>{value.username}</ContentText>
              <Flex gap={2}>
                <CiCalendar style={{ margin: 'auto 0', color: 'gray' }} />
                <ContentText>한 시간 전</ContentText>
              </Flex>
              <Badge colorScheme="gray" backgroundColor="gray.300" ml={3}>
                D-15
              </Badge>
            </Flex>
            <Flex>
              <CiBookmark style={{ margin: 'auto 5px', color: 'gray' }} />
              <ContentText>{value.Bookmark}</ContentText>
              <IoEyeOutline style={{ margin: 'auto 5px', color: 'gray' }} />
              <ContentText>{value.view}</ContentText>
              <FaRegCommentAlt style={{ margin: 'auto 5px', color: 'gray' }} />
              <ContentText>{value.comment}</ContentText>
            </Flex>
          </HStack>
        </Flex>
      ))}
    </>
  );
};

export default ContentsList;

export const ContentText = styled.p`
  font-size: 13px;
  color: gray;
`;
