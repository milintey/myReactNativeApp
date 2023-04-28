import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// import { useDispatch } from "react-redux";

import { app } from "../../firebase/config";
import { setUser } from "./authReducer";

export const authSignUpUser =
  ({ email, password, avatar, login }) =>
  (dispatch, getState) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { uid, email } = userCredential.user;

        console.log(uid);

        // const setUcerr = {
        //   uid: user.uid,
        //   email: user.email,
        // };

        // console.log("user", user);
        dispatch(setUser({ uid, email }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode:", errorCode);
        console.log("errorMessage:", errorMessage);
      });
  };

export const authSignInUser =
  ({ email, password }) =>
  (dispath, getState) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode:", errorCode);
        console.log("errorMessage:", errorMessage);
      });
  };

export const authSignOutUser = () => (dispath, getState) => {};
