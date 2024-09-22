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
  [ContentsActivityType.ALL]: '전체',
  [ContentsActivityType.RECRUITED]: '모집 중',
  [ContentsActivityType.RECRUITED_DONE]: '모집 완료',
};
