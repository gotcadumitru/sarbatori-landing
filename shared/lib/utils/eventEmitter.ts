import EventEmitter from 'events'

export enum EventType {
  SAVE_CAR = 'SAVE_CAR',
}

const eventEmitter = new EventEmitter()
export default eventEmitter
