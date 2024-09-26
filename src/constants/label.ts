import {
  ContentsActivityType,
  ContentsCategoryType,
  TContentsActivityType,
  TContentsCategoryType,
} from '@/api/@asConst';

export const CONTENTS_CATEGORY_LABEL: Record<keyof TContentsCategoryType, string> = {
  [ContentsCategoryType.ALL]: '전체',
  [ContentsCategoryType.PROJECT]: '프로젝트',
  [ContentsCategoryType.STUDY]: '스터디',
};

export const CONTENTS_ACTIVITY_LABELS: Record<keyof TContentsActivityType, string> = {
  [ContentsActivityType.ACTIVITY_REVIEW]: '활동후기',
  [ContentsActivityType.EMPLOYMENT_ESSAY]: '취업 수기',
  [ContentsActivityType.JOB_POSTING]: '채용 공고',
  [ContentsActivityType.KNOWLEDGE_SHARING]: '지식 공유',
  [ContentsActivityType.PROMOTION]: '홍보',
  [ContentsActivityType.FREE_BOARD]: '자유 게시판',
};
