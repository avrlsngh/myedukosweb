import React from "react";
import "./styles/App.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Course from "./screens/Course";
import NotFoundScreen from "./screens/NotFoundScreen";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firebaseApp } from "./config/firebaseConfig";
import { setAuth } from "./actions/authActions";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import ReactPixel from "react-facebook-pixel";
import courseList from "./screens/courseList";
import TermsAndConditions from "./screens/TermsAndConditions";

class App extends React.Component {
  componentDidMount() {
    const options = {
      autoConfig: true,
      debug: false,
    };
    ReactPixel.init("691194258142651", null, options);
    ReactPixel.pageView();
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.props.setAuth({
          userStatus: "loggedIn",
          uid: user.uid,
          userEmailVerified: user.emailVerified,
        });
      } else {
        this.props.setAuth({
          userStatus: "loggedOut",
        });
      }
    });
  }
  render() {
    return (
      <div className="appContainer">
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.TOP_CENTER}
          lightBackground
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courseList" component={courseList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/terms-condition" component={TermsAndConditions} />
          <Route exact path="/course/:id" component={Course} />
          <Route path="*" exact component={NotFoundScreen} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: (authParams) => dispatch(setAuth(authParams)),
  };
};

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.authReducer.userLoggedIn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
