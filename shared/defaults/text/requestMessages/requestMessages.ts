import { FetchStatus } from '@/shared/api'

export const REQUEST_MESSAGES = {
  SAVE: {
    [FetchStatus.IN_PROGRESS]: 'Please wait, the data is being processed...',
    [FetchStatus.SUCCESS]: 'The data was successfully saved.',
    [FetchStatus.FAIL]: 'An error occurred when saving the data.',
  },
  EDIT: {
    [FetchStatus.IN_PROGRESS]: 'Please wait, the data is being processed...',
    [FetchStatus.SUCCESS]: 'The data was successfully modified.',
    [FetchStatus.FAIL]: 'An error occurred when editing the data.',
  },
  DELETE: {
    [FetchStatus.IN_PROGRESS]: 'Please wait, the data is being processed...',
    [FetchStatus.SUCCESS]: 'The data was successfully deleted.',
    [FetchStatus.FAIL]: 'An error occurred when deleting data.',
  },
  DELETE_VEHICLE: {
    [FetchStatus.IN_PROGRESS]: 'Te rog asteapta, se sterge vehiculul.',
    [FetchStatus.SUCCESS]: 'Stergerea a fost efectuata cu succes',
    [FetchStatus.FAIL]: 'A aparut o eroare la stergere, te rog sa reancerci.',
  },
  EDIT_VEHICLE: {
    [FetchStatus.IN_PROGRESS]: 'Te rog asteapta, se modifica vehiculul.',
    [FetchStatus.SUCCESS]: 'Salvarea a fost efectuata cu succes',
    [FetchStatus.FAIL]: 'A aparut o eroare la salvarea, te rog sa reancerci.',
  },
  SAVE_NEW_VEHICLE: {
    [FetchStatus.IN_PROGRESS]: 'Te rog asteapta, se salveaza noul vehicul.',
    [FetchStatus.SUCCESS]: 'Salvarea a fost efectuata cu succes',
    [FetchStatus.FAIL]: 'A aparut o eroare la salvarea, te rog sa reancerci.',
  },
  SAVE_NEW_VEHICLE_DOCUMENT: {
    [FetchStatus.IN_PROGRESS]: 'Te rog asteapta, se salveaza noul document.',
    [FetchStatus.SUCCESS]: 'Salvarea a fost efectuata cu succes',
    [FetchStatus.FAIL]: 'A aparut o eroare la salvarea, te rog sa reancerci.',
  },
  EDIT_VEHICLE_DOCUMENT: {
    [FetchStatus.IN_PROGRESS]: 'Te rog asteapta, se modifica documentul.',
    [FetchStatus.SUCCESS]: 'Modificarea a fost efectuata cu succes',
    [FetchStatus.FAIL]: 'A aparut o eroare la salvarea, te rog sa reancerci.',
  },
}
