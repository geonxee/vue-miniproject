import firebase from 'firebase/app'; // 파이어베이스 기능 불러오기
import 'firebase/firestore'; // 파이어베이스의 파이어스토어 기능 불러오기

const firebaseConfig = {
    apiKey: "AIzaSyCmmGZH_a9-5HoP7d18Fm4_7JLStrE51uQ",
    authDomain: "my-todo1-9064b.firebaseapp.com",
    projectId: "my-todo1-9064b",
    storageBucket: "my-todo1-9064b.appspot.com",
    messagingSenderId: "216326114801",
    appId: "1:216326114801:web:3b0cfaf753a0b19ef48850"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();