export const ContentsCategoryType = {
  ALL: 'ALL',
  PROJECT: 'PROJECT',
  STUDY: 'STUDY',
} as const;

export const ContentsActivityType = {
  ALL: 'ALL',
  RECRUITED: 'RECRUITED',
  RECRUITED_DONE: 'RECRUITED_DONE',
} as const;

export type TContentsCategoryType = typeof ContentsCategoryType;
export type TContentsActivityType = typeof ContentsActivityType;
