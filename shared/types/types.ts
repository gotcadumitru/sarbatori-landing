export enum OpenMode {
  EDIT = 'edit',
  CLONE = 'clone',
  VIEW = 'view',
  CREATE = 'create',
}

export enum QueryParams {
  MODAL = 'modal',
  ID = 'id',
}

export type PropsWithParams<T> = {
  params: T
}
