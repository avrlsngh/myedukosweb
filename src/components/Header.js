import React from "react";
import { connect } from "react-redux";
import {
  loginUser,
  logoutUser,
  toggleModal,
  forgotPassword,
} from "../actions/authActions";
import validator from "validator";
import { ToastsStore } from "react-toasts";
import "../styles/Header.css";
import { firebaseApp } from "../config/firebaseConfig";

class Header extends React.Component {
  state = {
    mode: "login",
    email: null,
    fullName: "",
    password1: null,
    password2: null,
    forgotEmail: null,
  };
  render() {
    console.log("logged in user: ", this.props.userDetails);
    return (
      <React.Fragment>
        <div
          className="loginModal"
          id="exampleModal"
          style={{
            display: this.props.modalOpen ? "block" : "none",
          }}
        >
          <div
            className="loginModalContent pr-2 pl-2 pr-md-4 pl-md-4"
            style={{
              borderRadius: 10,
            }}
          >
            <div
              className="modal-header d-flex align-items-center"
              style={{ borderWidth: 0 }}
            >
              {this.state.mode === "login" && (
                <h4
                  className="modal-title text-dark text-center w-100"
                  id="exampleModalLabel"
                >
                  LogIn to My Edukos
                </h4>
              )}
              {this.state.mode === "signup" && (
                <h4
                  className="modal-title text-dark text-center w-100"
                  id="exampleModalLabel"
                >
                  SignUp to My Edukos
                </h4>
              )}
              <button
                type="button"
                className="close"
                style={{
                  outline: "none",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    outline: "none",
                  }}
                  onClick={() => {
                    this.props.toggleModal();
                  }}
                >
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center">
              {this.props.showForgotPasswordScreen ? (
                <div className="row w-100">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your Email"
                    />
                    <div className="d-flex justify-content-between mt-3">
                      <button
                        className="btn btn-light text-danger"
                        onClick={() => {
                          this.props.forgotPassword();
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn text-white"
                        style={{
                          borderRadius: 10,
                          backgroundColor: "#414141",
                        }}
                        onClick={() => {
                          if (
                            this.state.forgotEmail !== null &&
                            this.state.forgotEmail.trim() !== "" &&
                            validator.isEmail(this.state.forgotEmail)
                          ) {
                            firebaseApp
                              .auth()
                              .sendPasswordResetEmail(this.state.forgotEmail)
                              .then(() => {
                                ToastsStore.success("Sent password reset link");
                                this.props.forgotPassword();
                              })
                              .catch((err) => {
                                ToastsStore.error(err);
                              });
                          } else {
                            ToastsStore.error("Please enter a correct Email");
                            return;
                          }
                        }}
                      >
                        Send Link
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <React.Fragment>
                  {this.props.showEmailVerificationMsg ? (
                    <div className="row">
                      <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                        <span
                          class="material-icons text-success"
                          style={{
                            fontSize: 72,
                          }}
                        >
                          check_circle_outline
                        </span>
                        <h5 className="text-dark text-center">
                          Verification Mail sent! <br></br> Please Verify your
                          email
                        </h5>
                      </div>
                    </div>
                  ) : (
                    <React.Fragment>
                      {this.state.mode === "login" && (
                        <form className="w-100">
                          <div className="form-group w-100">
                            <input
                              type="email"
                              required
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter your Email"
                              onChange={(event) => {
                                this.setState({
                                  email: event.target.value,
                                });
                              }}
                              style={{
                                borderRadius: 10,
                              }}
                            />
                            <input
                              type="password"
                              required
                              className="form-control mt-4"
                              id="exampleInputPassword1"
                              aria-describedby="passwordHelp"
                              placeholder="Enter your Password"
                              style={{
                                borderRadius: 10,
                              }}
                              onChange={(event) => {
                                this.setState({
                                  password: event.target.value,
                                });
                              }}
                            />
                            <button
                              className="btn btn-dark w-100 mt-4 text-white"
                              onClick={(e) => {
                                if (
                                  this.state.email !== null &&
                                  validator.isEmail(this.state.email) &&
                                  this.state.password !== null
                                ) {
                                  e.preventDefault();
                                  this.props.loginUser({
                                    method: "email",
                                    email: this.state.email,
                                    password: this.state.password,
                                    mode: "LOGIN",
                                  });
                                }
                              }}
                              style={{
                                borderRadius: 10,
                                backgroundColor: "#414141",
                                outlineColor: "#414141",
                              }}
                            >
                              Login
                            </button>

                            <div className="text-dark d-flex mt-3 justify-content-between">
                              <div className="text-dark d-flex">
                                <h6
                                  className="ml-2 loginExtraLink"
                                  style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    this.props.forgotPassword();
                                  }}
                                >
                                  Forgot Password
                                </h6>
                              </div>
                              <div className="text-dark d-flex ">
                                <h6 className="loginExtraLink">New User?</h6>
                                <h6
                                  className="ml-2 loginExtraLink"
                                  style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    this.setState({
                                      mode: "signup",
                                    });
                                  }}
                                >
                                  Signup here
                                </h6>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}

                      {this.state.mode === "signup" && (
                        <form className="w-100">
                          <div className="form-group w-100">
                            <input
                              type="email"
                              required
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter your Email"
                              onChange={(event) => {
                                this.setState({
                                  email: event.target.value,
                                });
                              }}
                              style={{
                                borderRadius: 10,
                              }}
                            />
                            <input
                              type="text"
                              required
                              className="form-control mt-4"
                              id="exampleInputName1"
                              aria-describedby="emailHelp"
                              placeholder="Enter your Full Name"
                              onChange={(event) => {
                                this.setState({
                                  fullName: event.target.value,
                                });
                              }}
                              style={{
                                borderRadius: 10,
                              }}
                            />
                            <input
                              type="password"
                              required
                              className="form-control mt-4"
                              id="exampleInputPassword1"
                              aria-describedby="passwordHelp"
                              placeholder="Enter your Password"
                              style={{
                                borderRadius: 10,
                              }}
                              onChange={(event) => {
                                this.setState({
                                  password1: event.target.value,
                                });
                              }}
                            />
                            <input
                              type="password"
                              required
                              className="form-control mt-4"
                              id="exampleInputPassword2"
                              aria-describedby="passwordHelp"
                              placeholder="Confirm your Password"
                              style={{
                                borderRadius: 10,
                              }}
                              onChange={(event) => {
                                this.setState({
                                  password2: event.target.value,
                                });
                              }}
                            />
                            <button
                              className="btn btn-dark w-100 mt-4 text-white"
                              onClick={(e) => {
                                if (
                                  this.state.password1 === null ||
                                  this.state.password1.trim() === "" ||
                                  this.state.password2 === null ||
                                  this.state.password2.trim() === "" ||
                                  this.state.email === null ||
                                  this.state.email.trim() === "" ||
                                  this.state.fullName === null ||
                                  this.state.fullName.trim() === ""
                                ) {
                                  ToastsStore.error(
                                    "Please fill all the fields"
                                  );
                                  return;
                                }

                                if (
                                  this.state.password1 !== this.state.password2
                                ) {
                                  e.preventDefault();
                                  ToastsStore.error(
                                    "Please confirm your password correctly"
                                  );
                                  return;
                                }

                                if (
                                  this.state.email !== null &&
                                  validator.isEmail(this.state.email) &&
                                  (this.state.password1 !== null ||
                                    this.state.password1.trim() !== "") &&
                                  (this.state.password2 !== null ||
                                    this.state.password2.trim() !== "") &&
                                  this.state.fullName.trim() !== ""
                                ) {
                                  e.preventDefault();
                                  this.props.loginUser({
                                    method: "email",
                                    email: this.state.email,
                                    fullName: this.state.fullName,
                                    password: this.state.password1,
                                    mode: "SIGNUP",
                                  });
                                }
                              }}
                              style={{
                                borderRadius: 10,
                                backgroundColor: "#414141",
                                outlineColor: "#414141",
                              }}
                            >
                              Signup
                            </button>

                            <div className="text-dark d-flex mt-3 justify-content-end">
                              <h6 className="loginExtraLink">
                                Already an User?
                              </h6>
                              <h6
                                className="ml-2 loginExtraLink"
                                style={{
                                  textDecoration: "underline",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  this.setState({
                                    mode: "login",
                                  });
                                }}
                              >
                                Login here
                              </h6>
                            </div>
                          </div>
                        </form>
                      )}

                      <div className="d-flex justify-content-between align-items-center w-100 mb-3 mt-3">
                        <hr
                          style={{
                            backgroundColor: "gray",
                            width: "100%",
                            borderRadius: 10,
                          }}
                        />
                        <p
                          className="text-muted m-0 pr-3 pl-3"
                          style={{
                            fontSize: 14,
                          }}
                        >
                          OR
                        </p>
                        <hr
                          style={{
                            backgroundColor: "gray",
                            width: "100%",
                            borderRadius: 10,
                          }}
                        />
                      </div>
                      <button
                        className="btn btn-danger d-flex align-items-center justify-content-center mt-3 w-100"
                        style={{
                          borderRadius: 10,
                          backgroundColor: "#DB4437",
                          outlineColor: "#DB4437",
                          paddingLeft: 20,
                          paddingRight: 20,
                        }}
                        onClick={() => {
                          this.props.loginUser({
                            method: "google",
                          });
                        }}
                      >
                        <i
                          className="fa fa-google"
                          style={{ fontSize: 24 }}
                          aria-hidden="true"
                        ></i>
                        <p className="m-0 ml-2">SignIn with Google</p>
                      </button>

                      <button
                        className="btn btn-primary d-flex text-white align-items-center justify-content-center mt-4 mb-3 w-100"
                        style={{
                          borderRadius: 10,
                          backgroundColor: "#4267B2",
                          outlineColor: "#4267B2",
                          paddingLeft: 15,
                          paddingRight: 15,
                        }}
                        onClick={() => {
                          this.props.loginUser({
                            method: "facebook",
                          });
                        }}
                      >
                        <i
                          className="fa fa-facebook"
                          style={{ fontSize: 24 }}
                          aria-hidden="true"
                        ></i>
                        <p className="m-0 ml-2">SignIn with Facebook</p>
                      </button>
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.pathname = "/";
          }}
        >
          <img
            style={{ height: 55 }}
            src={require("../assets/images/appstore.png")}
            alt="logo of My Edukos platform"
            className="brandLogo"
          />
          <h4
            style={{
              letterSpacing: 2,
            }}
            className="ml-2 mt-md-3 brandHeading"
          >
            MYEDUKOS
          </h4>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6
              style={{
                cursor: "pointer",
                borderBottomColor: "#ff0000",
                borderBottomStyle: "solid",
                borderBottomWidth: window.location.pathname === "/" ? 3 : 0,
                marginTop: window.location.pathname === "/" ? 14 : 0,
                paddingBottom: window.location.pathname === "/" ? 10 : 0,
              }}
              onClick={() => {
                window.location.href = "/";
              }}
              className={
                window.location.pathname === "/" ? "" : "animatedLink mb-0 mt-2"
              }
            >
              Home
            </h6>
          </div>
          <div className="pr-3 pl-3 pr-md-4 pl-md-4 mr-md-2 ml-md-2 mr-0 ml-0">
            <h6
              style={{
                cursor: "pointer",
                borderBottomColor: "#ff0000",
                borderBottomStyle: "solid",
                borderBottomWidth: window.location.pathname.includes(
                  "/#homeCoursesList"
                )
                  ? 3
                  : 0,
                marginTop: window.location.pathname.includes(
                  "/#homeCoursesList"
                )
                  ? 14
                  : 0,
                paddingBottom: window.location.pathname.includes(
                  "/#homeCoursesList"
                )
                  ? 10
                  : 0,
              }}
              className={
                window.location.pathname.includes("/#homeCoursesList")
                  ? ""
                  : "animatedLink mb-0 mt-2"
              }
              onClick={() => {
                window.location.href = "/#homeCoursesList";
              }}
            >
              Courses
            </h6>
          </div>
          <div>
            {this.props.checkedLogin === false ? (
              <div
                class="spinner-grow text-dark
               mb-2"
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <div>
                {this.props.userLoggedIn === true ? (
                  <div
                    className="dropdown"
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  >
                    {this.props.userDetails.photoURL === undefined ||
                    this.props.userDetails.photoURL === null ? (
                      <img
                        src={require("../assets/images/userIcon.png")}
                        style={{
                          color: "white",
                          height: "100%",
                          width: "100%",
                          cursor: "pointer",
                        }}
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-hidden="true"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                    ) : (
                      <img
                        src={this.props.userDetails.photoURL}
                        alt="singer image"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: 25,
                          cursor: "pointer",
                        }}
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                    )}

                    <div
                      class="dropdown-menu dropdown-menu-right"
                      style={{
                        borderRadius: 10,
                      }}
                      aria-labelledby="dropdownMenuButton"
                      onClick={() => {
                        window.location.href = "/courseList";
                      }}
                    >
                      <span
                        className="dropdown-item d-flex align-items-center"
                        style={{ cursor: "pointer" }}
                      >
                        <span
                          class="material-icons mr-2"
                          style={{
                            fontSize: 18,
                          }}
                        >
                          list
                        </span>
                        My Courses
                      </span>

                      <span
                        className="dropdown-item d-flex align-items-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          console.log("logging out..");
                          this.props.logoutUser();
                        }}
                      >
                        <span
                          class="material-icons mr-2"
                          style={{
                            fontSize: 18,
                          }}
                        >
                          power_settings_new
                        </span>
                        Log Out
                      </span>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      this.props.toggleModal();
                    }}
                    type="button"
                    className="btn border-0 bg-light"
                    style={{
                      color: "#414141",
                    }}
                    id="headerLoginButton"
                  >
                    LOGIN
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginParams) => dispatch(loginUser(loginParams)),
    logoutUser: () => dispatch(logoutUser()),
    toggleModal: () => dispatch(toggleModal()),
    forgotPassword: () => dispatch(forgotPassword()),
  };
};

const mapStateToProps = (state) => {
  return {
    modalOpen: state.authReducer.modalOpen,
    userLoggedIn: state.authReducer.userLoggedIn,
    userDetails: state.authReducer.userDetails,
    checkedLogin: state.authReducer.checkedLogin,
    showEmailVerificationMsg: state.authReducer.showEmailVerificationMsg,
    showForgotPasswordScreen: state.authReducer.showForgotPasswordScreen,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
