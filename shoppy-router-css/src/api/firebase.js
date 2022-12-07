// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// 이제 앱에서 로그인이 필요할 때는 firebase.js에서
// login을 호출하여 사용할 것
// navbar에서 로그인을 하기 때문에 navbar에서 로그인을 해도 되지만
// 그럴 경우엔 firebase에 너무 의존적이다.
// 최대한 컴포넌트에는 비즈니스 로직을 담고싶지 않다.
// navbar에서는 login 함수를 호출만 하고 싶다.

// async로 비동기 함수임을 명확히 표기
// export async function login() {
//   return signInWithPopup(auth, provider)
//     .then((result) => {
//       // The signed-in user info.
//       const user = result.user;
//       console.log(user);
//       return user; //로그인한 사용자가 있다면 user를 리턴
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

// 로그아웃하면 null을 리턴
// export async function logout() {
//   return signOut(auth).then(() => null);
// }

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
