export type FindByIDOptions<PayloadConfig extends {collections: string}> = {
  id: string,
  collection: keyof PayloadConfig['collections'],
  depth?: number,
  locale?: string,
  fallbackLocale?: boolean,
  jwt?: string,
}

export function findByID<PayloadConfig extends {collections: string}>(options: FindByIDOptions<PayloadConfig>): PayloadConfig['collections'][FindByIDOptions<PayloadConfig>['collection']]  {
  return options as any; 

}
