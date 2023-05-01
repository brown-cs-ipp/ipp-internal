
import { firebase_app } from "./config";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase_app);

export const login = async (info) => {
  return signInWithEmailAndPassword(auth, info.email, info.password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("uid", user.uid);
    })
    .catch((error) => console.log(error));
};

export const isLoggedIn = () => {
  const user = localStorage.getItem("uid");
  if (user) {
    return user;
  } else {
    throw new Response("User not logged in", { status: 401 });
  }
};

export const logout = () => {
  signOut(auth);
  localStorage.clear();
};
