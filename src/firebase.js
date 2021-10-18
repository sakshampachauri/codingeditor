import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Config from './Firebase/Config'

firebase.initializeApp(Config)

const auth = firebase.auth()
const db = firebase.firestore()
export {auth,db}