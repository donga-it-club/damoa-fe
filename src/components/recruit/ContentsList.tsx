import { useState } from 'react';
import { CiBookmark, CiCalendar } from 'react-icons/ci';
import { FaRegCommentAlt } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { Badge, Flex, Heading, HStack, Spacer, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import WriteButton from '../WriteButton';
import { ContentsActivityType, TContentsActivityType } from '@/api/@asConst';
import { ContentType } from '@/api/__mock__/contents';
import { CONTENTS_ACTIVITY_LABELS, CONTENTS_CATEGORY_LABEL } from '@/constants/label';

interface ContentsListProps {
  contents: ContentType[];
}

const ContentsList: React.FC<ContentsListProps> = ({ contents }) => {
  const [activity, setActivity] = useState<TContentsActivityType[keyof TContentsActivityType]>(
    ContentsActivityType.ALL,
  );
  const mappedActivities = Object.values(ContentsActivityType);

  const handleClick = (value: keyof TContentsActivityType) => {
    setActivity(value);
  };

  const filteredActivityContents = contents.filter(value => {
    if (activity === ContentsActivityType.ALL) return true;
    return activity === value.isActivated;
  });
  return (
    <>
      <Flex mt={5} borderBottom="1px" borderColor="gray.200">
        <Flex>
          <Tabs>
            <TabList>
              {mappedActivities.map(value => (
                <Tab title={activity} value={value} onClick={() => handleClick(value)} pb={5} px={5}>
                  {CONTENTS_ACTIVITY_LABELS[value]}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </Flex>
        <Spacer />
        <WriteButton />
      </Flex>
      {filteredActivityContents.map(value => (
        <Flex
          key={value.id}
          flexDirection="column"
          gap={5}
          my={10}
          p={5}
          borderRadius="md"
          transition="all 0.2s ease-in-out"
          _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
        >
          <HStack>
            <Badge variant="subtle" colorScheme="brand" color="black" fontSize={15}>
              {CONTENTS_CATEGORY_LABEL[value.category]}
            </Badge>
            <Badge variant="solid" colorScheme="brand" fontSize={15}>
              {CONTENTS_ACTIVITY_LABELS[value.isActivated]}
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
