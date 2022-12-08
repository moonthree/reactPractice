// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getDatabase, ref, set, get, remove } from "firebase/database";

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
const database = getDatabase(app);
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

// 로그인하는 명령어 함수
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

// 사용자가 로그인하거나 로그아웃할 때 사용자의 상태가 변경되면 callback 함수로 호출해줌
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    // 1. 사용자가 있는 경우에 (로그인한 경우)
    const updatedUser = user ? await adminUser(user) : null;
    console.log(updatedUser);
    callback(updatedUser);
  });
}

async function adminUser(user) {
  // 2. 사용자가 어드민 권한을 가지고 있는지 확인!
  // 3. {...user, isAdmin: true/false}
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        console.log(admins);
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
    });
}

export async function addNewProdcut(product, imageUrl) {
  const id = uuid();
  return set(ref(database, `products/${uuid()}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image: imageUrl,
    options: product.options.split(","),
  });
}

export async function getProducts() {
  return get(ref(database, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      console.log(items);
      return Object.values(items);
    });
}

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}
