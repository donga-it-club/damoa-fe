export const ContentsCategoryType = {
  ALL: 'ALL',
  PROJECT: 'PROJECT',
  STUDY: 'STUDY',
} as const;

export type TContentsType = typeof ContentsCategoryType;
