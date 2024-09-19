export const ContentsCategoryType = {
  PROJECT: 'PROJECT',
  STUDY: 'STUDY',
} as const;

export type TContentsType = typeof ContentsCategoryType;
