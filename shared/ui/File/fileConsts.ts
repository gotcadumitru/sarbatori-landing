export const MIME_TYPES = {
  '.jpeg': 'image/jpeg',
  '.JPG': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.mpeg': 'video/mpeg',
  '.png': 'image/png',
  '.pdf': 'application/pdf',
  '.HEIC': 'application/octet-stream',
  '.heic': 'application/octet-stream',
}

export const FILE_TYPE = {
  PDF: 'PDF',
  IMG: 'IMG',
  VIDEO: 'VIDEO',
}

export const MIME_TYPE_TO_FILE_TYPE = {
  [MIME_TYPES['.jpeg']]: FILE_TYPE.IMG,
  [MIME_TYPES['.webp']]: FILE_TYPE.IMG,
  [MIME_TYPES['.JPG']]: FILE_TYPE.IMG,
  [MIME_TYPES['.mp4']]: FILE_TYPE.VIDEO,
  [MIME_TYPES['.mpeg']]: FILE_TYPE.VIDEO,
  [MIME_TYPES['.png']]: FILE_TYPE.IMG,
  [MIME_TYPES['.HEIC']]: FILE_TYPE.IMG,
  [MIME_TYPES['.heic']]: FILE_TYPE.IMG,
  [MIME_TYPES['.pdf']]: FILE_TYPE.PDF,
}
