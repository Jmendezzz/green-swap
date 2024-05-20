export enum Quality {
  LIKE_NEW = 'Como nuevo',
  GOOD = 'Bueno',
  FAIR = 'Regular',
}

export function getQualityValue(key: Quality): string {
  return Quality[key as unknown as keyof typeof Quality];
}
export function getQualityKeys(): Quality[] {
  return Object.keys(Quality) as Quality[];
}
