import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Initialize Firebase
export const firebaseApp = initializeApp(JSON.parse(process.env.FIREBASE_CONFIG!))
export const firebaseAnalytics = getAnalytics(firebaseApp)

// Initialize Cloud Firestore and get a reference to the service
export const firestoreDb = getFirestore(firebaseApp)

// Create a root reference
export const firebaseStorage = getStorage(firebaseApp)

export const firebaseAppCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider('6LebAAMoAAAAAEPOkEM-9LbGpo0z6E5dtRebzWHB'),
})
