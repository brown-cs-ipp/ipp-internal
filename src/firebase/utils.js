import { redirect } from "react-router-dom";
import { firebase_app } from "./config";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get, update } from "firebase/database";

const auth = getAuth(firebase_app);
const database = getDatabase(firebase_app);

let currentUser = auth.currentUser;

export const firebaseSignIn = async (info) => {
  return signInWithEmailAndPassword(auth, info.email, info.password).then(
    (userCredential) => {
      currentUser = userCredential.user;
    }
  );
};

export const isLoggedIn = () => {
  if (currentUser) {
    return { user: currentUser };
  } else {
    return redirect("/");
  }
};

export const getApplications = async () => {
  return get(child(ref(database), "partner-application"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No applications");
      }
    })
    .catch((error) => console.error(error));
};

export const approveApplication = async (id, data) => {
  return update(child(ref(database), `partners/${id}`), data);
};

export const logout = () => {
  signOut(auth)
    .then(() => {
      currentUser = null;
    })
    .catch((error) => {
      console.error("Error signing out", error);
    });
};
