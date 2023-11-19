import { FetchStatus } from '../api'

export type RequestMessageType = {
  [FetchStatus.IN_PROGRESS]: string
  [FetchStatus.SUCCESS]: string
  [FetchStatus.FAIL]: string
}

export type ThunkRequestFetchStatus = {
  [key: number | string]: {
    requestId: string
    fetchStatus: FetchStatus
  }
}
