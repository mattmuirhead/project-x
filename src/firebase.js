import firebase from 'firebase'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB6YS6nJ_NLr-dM_x8zJZO_MOze-87zNB0",
  authDomain: "project-chat-4c57e.firebaseapp.com",
  projectId: "project-chat-4c57e",
  storageBucket: "project-chat-4c57e.appspot.com",
  messagingSenderId: "257191234964",
  appId: "1:257191234964:web:2d4d855aee199be8d29381",
  measurementId: "G-FSWW9GL7BH",
}

firebase.initializeApp(config)
firebase.analytics()

export default firebase
