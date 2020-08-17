const initState = {
  checkedLogin: false,
  userLoggedIn: false,
  userDetails: null,
  userEmailVerified: false,
  showEmailVerificationMsg: false,
  showForgotPasswordScreen: false,
  modalOpen: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      const modalStatus = state.modalOpen;
      return {
        ...state,
        modalOpen: !modalStatus,
        showEmailVerificationMsg: false,
      };
    case "FORGOT_PASSWORD":
      const forgotStatus = state.showForgotPasswordScreen;
      return {
        ...state,
        showForgotPasswordScreen: !forgotStatus,
      };
    case "USER_LOGIN":
      return {
        ...state,
        checkedLogin: true,
        userLoggedIn: true,
        modalOpen: false,
        userDetails: action.payload,
      };
    case "EMAIL_USER_SIGNUP":
      return {
        ...state,
        checkedLogin: true,
        userLoggedIn: true,
        userDetails: action.payload,
        showEmailVerificationMsg: true,
      };
    case "SET_AUTH_LOGGED_IN":
      return {
        ...state,
        checkedLogin: true,
        userLoggedIn: true,
        modalOpen: false,
        userDetails: action.payload.userDetails,
        userEmailVerified: action.payload.userEmailVerified,
      };
    case "SET_AUTH_LOGGED_OUT":
      return {
        ...state,
        checkedLogin: true,
        userLoggedIn: false,
        userDetails: null,
        userEmailVerified: false,
        modalOpen: false,
      };
    default:
      return state;
  }
};

export default authReducer;
