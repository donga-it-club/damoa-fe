import { FaHeart } from 'react-icons/fa';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, Grid, Tag, Flex } from '@chakra-ui/react';
import { MockCommunityContents } from '@/api/__mock__/community';

const CommunityList = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {MockCommunityContents.map(value => (
        <Card maxW="sm" my={10}>
          <CardBody>
            <Image src="/__mock__/community.png" alt="community" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Flex justifyContent="space-between">
                <Tag variant="solid" colorScheme="brand">
                  {value.category as string}
                </Tag>
                <Tag variant="outline" colorScheme="black" gap={2} border="black 1px solid">
                  <FaHeart style={{ color: 'pink' }} />
                  {value.like}
                </Tag>
              </Flex>

              <Heading size="md">{value.title}</Heading>
              <Text>{value.description}</Text>
              <Text color="gray.600">{value.link}</Text>
            </Stack>
            <Divider />
            <Flex justifyContent="space-between">
              <Text flexGrow={1}>{value.username}</Text>
              <Text>1일 전</Text>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
};

export default CommunityList;
