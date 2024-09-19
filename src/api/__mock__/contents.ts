import { ContentsCategoryType, TContentsType } from '../@asConst';

interface ContentType {
  id: number;
  title: string;
  contents: string;
  category: keyof TContentsType;
  isActived: boolean;
  userId: number;
  username: string;
  createdDate: string;
  deadline: string;
  Bookmark: number;
  view: number;
  comment: number;
}

export const MockRecruitContents: ContentType[] = [
  {
    id: 1,
    title: '[사이드프로젝트] 커뮤니티 앱 백엔드 개발자 구합니다.',
    contents:
      '안녕하세요. 저희는 채팅 기반의 커뮤니티 토론 앱(Flutter 사용)을 만들고 있습니다. 주요 기능은 실시간 채팅 기능과 웹 사이트 크롤링 기능이고, .....',
    category: ContentsCategoryType.PROJECT,
    isActived: true,
    userId: 1,
    username: 'ddd',
    createdDate: '2024-04-18T13:59:52.739Z',
    deadline: '2024-10-18T13:59:52.739Z',
    Bookmark: 1,
    view: 5,
    comment: 4,
  },
  {
    id: 1,
    title: '[사이드프로젝트] 커뮤니티 앱 백엔드 개발자 구합니다.',
    contents:
      '안녕하세요. 저희는 채팅 기반의 커뮤니티 토론 앱(Flutter 사용)을 만들고 있습니다. 주요 기능은 실시간 채팅 기능과 웹 사이트 크롤링 기능이고, .....',
    category: ContentsCategoryType.PROJECT,
    isActived: true,
    userId: 1,
    username: 'ddd',
    createdDate: '2024-04-18T13:59:52.739Z',
    deadline: '2024-10-18T13:59:52.739Z',
    Bookmark: 1,
    view: 5,
    comment: 4,
  },
  {
    id: 1,
    title: '[사이드프로젝트] 커뮤니티 앱 백엔드 개발자 구합니다.',
    contents:
      '안녕하세요. 저희는 채팅 기반의 커뮤니티 토론 앱(Flutter 사용)을 만들고 있습니다. 주요 기능은 실시간 채팅 기능과 웹 사이트 크롤링 기능이고, .....',
    category: ContentsCategoryType.STUDY,
    isActived: false,
    userId: 1,
    username: 'ddd',
    createdDate: '2024-04-18T13:59:52.739Z',
    deadline: '2024-10-18T13:59:52.739Z',
    Bookmark: 1,
    view: 5,
    comment: 4,
  },
  {
    id: 1,
    title: '[사이드프로젝트] 커뮤니티 앱 백엔드 개발자 구합니다.',
    contents:
      '안녕하세요. 저희는 채팅 기반의 커뮤니티 토론 앱(Flutter 사용)을 만들고 있습니다. 주요 기능은 실시간 채팅 기능과 웹 사이트 크롤링 기능이고, .....',
    category: ContentsCategoryType.STUDY,
    isActived: false,
    userId: 1,
    username: 'ddd',
    createdDate: '2024-04-18T13:59:52.739Z',
    deadline: '2024-10-18T13:59:52.739Z',
    Bookmark: 1,
    view: 5,
    comment: 4,
  },
];