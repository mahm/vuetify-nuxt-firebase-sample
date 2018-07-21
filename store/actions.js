import firebase from '~/plugins/firebase'
import { firebaseAction } from 'vuexfire'

const db = firebase.firestore()
const checksRef = db.collection('checks')

export const initCheck = async ({ commit }) => {
  await checksRef.add({})
    .then((checkRef) => commit('initCheck', checkRef.id))
    .catch((error) => console.error('error adding document: ', error))
}
export const setCheckRef = firebaseAction(({ bindFirebaseRef }, checkId) => {
  bindFirebaseRef('check.data', checksRef.doc(checkId), { wait: true })
})
