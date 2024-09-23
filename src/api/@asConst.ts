export const ContentsCategoryType = {
  ALL: 'ALL',
  PROJECT: 'PROJECT',
  STUDY: 'STUDY',
} as const;

export const ContentsActivityType = {
  ACTIVITY_REVIEW: 'ACTIVITY_REVIEW',
  EMPLOYMENT_ESSAY: 'EMPLOYMENT_ESSAY',
  JOB_POSTING: 'JOB_POSTING',
  KNOWLEDGE_SHARING: 'KNOWLEDGE_SHARING',
  PROMOTION: 'PROMOTION',
  FREE_BOARD: 'FREE_BOARD',
} as const;

export type TContentsCategoryType = typeof ContentsCategoryType;
export type TContentsActivityType = typeof ContentsActivityType;
