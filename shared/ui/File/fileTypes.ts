export type FileBaseType = {
  fileUrl: string
  name: string
  mimetype: string
  uid: string
  size: number
}

export type FileInputType = FileBaseType & {
  file: File | string
}
