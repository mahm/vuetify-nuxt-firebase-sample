import firebase from 'firebase'
import 'firebase/firestore'

const options = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID
}

if (firebase.apps.length === 0) {
  const firebaseApp = firebase.initializeApp(options)
  const firestore = firebaseApp.firestore()
  firestore.settings({
    timestampsInSnapshots: true
  })
}

export default firebase.app()
