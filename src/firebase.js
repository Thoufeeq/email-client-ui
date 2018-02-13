import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSdkjfhdsfjdhsfudghDZQnfDSVT2tdMPF-_U',
  authDomain: 'dhsud-4c3f3.firebaseapp.com',
  databaseURL: 'https://sdhfihsdf-546.firebaseio.com',
  projectId: 'shg-35tg65',
  storageBucket: '',
  messagingSenderId: '324567687744332'
}
firebase.initializeApp(config)

export const database = firebase.database()

