import { ContentsActivityType, TContentsActivityType } from '../@asConst';

export interface CommunityContentsType {
  id: number;
  image: ImageType;
  title: string;
  description: string;
  username: string;
  isCreated: string;
  link: string;
  like: number;
  category: keyof TContentsActivityType;
}

export interface ImageType {
  id: number;
  url: string;
}

export const MockCommunityImage: ImageType = {
  id: 1,
  url: 'Logo.svg',
};

export const MockCommunityContents: CommunityContentsType[] = [
  {
    id: 1,
    image: MockCommunityImage,
    like: 2,
    title: '브랜디 - 데이터 엔지니어 채용',
    description:
      '남성의류를 전문으로 하는 의류 판매 서비스인 브랜디에서 추천  시스템 개발을 담당할 데이터 엔지니어를 채용합니다. 인턴십도  가능하니 관심있는 분은 저에게 연락 주시기 바랍니다.',
    username: '정도현',
    isCreated: '2023-09-16T17:50',
    link: 'https://brandiinc.notion.site/DE-DATA-ENGINEER-afcd...',
    category: ContentsActivityType.ACTIVITY_REVIEW,
  },
  {
    id: 2,
    image: MockCommunityImage,
    like: 2,
    title: '브랜디 - 데이터 엔지니어 채용',
    description:
      '남성의류를 전문으로 하는 의류 판매 서비스인 브랜디에서 추천  시스템 개발을 담당할 데이터 엔지니어를 채용합니다. 인턴십도  가능하니 관심있는 분은 저에게 연락 주시기 바랍니다.',
    username: '정도현',
    isCreated: '2023-09-16T17:50',
    link: 'https://brandiinc.notion.site/DE-DATA-ENGINEER-afcd...',
    category: ContentsActivityType.ACTIVITY_REVIEW,
  },
  {
    id: 3,
    image: MockCommunityImage,
    like: 2,
    title: '브랜디 - 데이터 엔지니어 채용',
    description:
      '남성의류를 전문으로 하는 의류 판매 서비스인 브랜디에서 추천  시스템 개발을 담당할 데이터 엔지니어를 채용합니다. 인턴십도  가능하니 관심있는 분은 저에게 연락 주시기 바랍니다.',
    username: '정도현',
    isCreated: '2023-09-16T17:50',
    link: 'https://brandiinc.notion.site/DE-DATA-ENGINEER-afcd...',
    category: ContentsActivityType.ACTIVITY_REVIEW,
  },
  {
    id: 4,
    image: MockCommunityImage,
    like: 2,
    title: '브랜디 - 데이터 엔지니어 채용',
    description:
      '남성의류를 전문으로 하는 의류 판매 서비스인 브랜디에서 추천  시스템 개발을 담당할 데이터 엔지니어를 채용합니다. 인턴십도  가능하니 관심있는 분은 저에게 연락 주시기 바랍니다.',
    username: '정도현',
    isCreated: '2023-09-16T17:50',
    link: 'https://brandiinc.notion.site/DE-DATA-ENGINEER-afcd...',
    category: ContentsActivityType.ACTIVITY_REVIEW,
  },
  {
    id: 5,
    image: MockCommunityImage,
    like: 2,
    title: '브랜디 - 데이터 엔지니어 채용',
    description:
      '남성의류를 전문으로 하는 의류 판매 서비스인 브랜디에서 추천  시스템 개발을 담당할 데이터 엔지니어를 채용합니다. 인턴십도  가능하니 관심있는 분은 저에게 연락 주시기 바랍니다.',
    username: '정도현',
    isCreated: '2023-09-16T17:50',
    link: 'https://brandiinc.notion.site/DE-DATA-ENGINEER-afcd...',
    category: ContentsActivityType.ACTIVITY_REVIEW,
  },
];
