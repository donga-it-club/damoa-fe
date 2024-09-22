import { ContentsCategoryType, TContentsType } from '@/api/@asConst';

export const CONTENTS_CATEGORY_LABEL: Record<keyof TContentsType, string> = {
  [ContentsCategoryType.ALL]: '전체',
  [ContentsCategoryType.PROJECT]: '프로젝트',
  [ContentsCategoryType.STUDY]: '스터디',
};
