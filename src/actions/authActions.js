import { firebaseApp, facebookProvider } from "../config/firebaseConfig";
import { googleProvider } from "../config/firebaseConfig";
import { firestore } from "../config/firebaseConfig";
import { ToastsStore } from "react-toasts";
import { setVideoURL } from "./courseActions";

export const loginUser = (loginParams) => {
  return (dispatch, getState) => {
    if (loginParams.method === "facebook") {
      // TODO: Auth with facebook
      firebaseApp
        .auth()
        .signInWithPopup(facebookProvider)
        .then((result) => {
          const user = result.user;
          if (user !== null) {
            const dbRef = firestore.collection("users").doc(user.uid);
            dbRef
              .set(
                {
                  displayName: user.displayName,
                  email: user.email,
                  uid: user.uid,
                  photoURL: user.photoURL,
                  lastSeen: new Date(),
                },
                { merge: true }
              )
              .then(() => {
                dbRef.get().then((userDetails) => {
                  const data = userDetails.data();
                  dispatch({ type: "USER_LOGIN", payload: data });
                });
              })
              .catch((err) => {
                ToastsStore.error("Login Error, Try Again");
              });
          }
        })
        .catch((error) => {
          ToastsStore.error("error occured: ", error);
        });
    }
    if (loginParams.method === "google") {
      // TODO: Auth with google
      firebaseApp
        .auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
          const user = result.user;
          if (user !== null) {
            const dbRef = firestore.collection("users").doc(user.uid);
            dbRef
              .set(
                {
                  displayName: user.displayName,
                  email: user.email,
                  uid: user.uid,
                  photoURL: user.photoURL,
                  lastSeen: new Date(),
                },
                { merge: true }
              )
              .then(() => {
                dbRef.get().then((userDetails) => {
                  const data = userDetails.data();
                  dispatch({ type: "USER_LOGIN", payload: data });
                });
              })
              .catch((err) => {
                ToastsStore.error("Login Error, Try Again");
              });
          }
        })
        .catch((error) => {
          ToastsStore.error("error occured: ", error);
        });
    }
    if (loginParams.method === "email") {
      // TODO: Login with email and password
      if (loginParams.mode === "SIGNUP") {
        firebaseApp
          .auth()
          .createUserWithEmailAndPassword(
            loginParams.email,
            loginParams.password
          )
          .then((res) => {
            const userObject = {
              displayName: loginParams.fullName,
              email: loginParams.email,
              lastSeen: new Date(),
              uid: res.user.uid,
            };
            const dbRef = firestore.collection("users").doc(res.user.uid);
            dbRef.set(userObject, { merge: true }).then(() => {
              res.user
                .sendEmailVerification()
                .then(() => {
                  dbRef.get().then((userDetails) => {
                    const data = userDetails.data();
                    dispatch({
                      type: "EMAIL_USER_SIGNUP",
                      payload: data,
                    });
                  });
                })
                .catch((err) => {
                  ToastsStore.error(err);
                });
            });
          })
          .catch((error) => {
            ToastsStore.error(error.message);
          });
      }
      if (loginParams.mode === "LOGIN") {
        firebaseApp
          .auth()
          .signInWithEmailAndPassword(loginParams.email, loginParams.password)
          .then((res) => {
            const dbRef = firestore.collection("users").doc(res.user.uid);
            dbRef
              .set(
                {
                  email: loginParams.email,
                  lastSeen: new Date(),
                },
                { merge: true }
              )
              .then(() => {
                dbRef.get().then((userDetails) => {
                  const data = userDetails.data();
                  dispatch({
                    type: "USER_LOGIN",
                    payload: data,
                  });
                });
              });
          })
          .catch((error) => {
            ToastsStore.error(error.message);
          });
      }
    }
  };
};

export const logoutUser = () => {
  return (dispatch, getState) => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        window.location.reload();
      });
  };
};

export const setAuth = (authParams) => {
  return (dispatch, getState) => {
    if (authParams.userStatus === "loggedIn") {
      firestore
        .collection("users")
        .where("uid", "==", authParams.uid)
        .get()
        .then((userDetails) => {
          const data = userDetails.forEach((doc) => {
            const data = doc.data();

            dispatch({
              type: "SET_AUTH_LOGGED_IN",
              payload: {
                userDetails: data,
                userEmailVerified: authParams.userEmailVerified,
              },
            });
          });
        });
    }
    if (authParams.userStatus === "loggedOut") {
      dispatch({
        type: "SET_AUTH_LOGGED_OUT",
      });
    }
  };
};

export const toggleModal = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "TOGGLE_MODAL",
    });
  };
};

export const forgotPassword = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "FORGOT_PASSWORD",
    });
  };
};
