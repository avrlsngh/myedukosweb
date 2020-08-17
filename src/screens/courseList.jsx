import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { courses } from "../constants";
import "../styles/courseList.css";
import Footer from "../components/Footer";

class courseList extends React.Component {
  render() {
    return (
      <div className="container pb-3 pt-3">
        {/* Header */}
        <div className="row w-100 m-0">
          <div className="col-12 d-flex justify-content-between pr-0 pl-0 pr-md-2 pl-md-2">
            <Header />
          </div>
        </div>

        {/* course purchased list */}
        <div className="row w-100 m-0 flex-column justify-content-center align-items-center">
          <h3 className="w-100 mt-md-5 mt-4">Purchased Courses</h3>
          <div className="col-12 col-md-9">
            {this.props.checkedLogin === true &&
              this.props.userDetails === null && (
                <div className="messageCard mt-md-5 mt-4">
                  <span
                    class="material-icons"
                    style={{
                      fontSize: 60,
                    }}
                  >
                    lock
                  </span>
                  <h3 className="courseListWarning text-danger mt-3">
                    Login to see Purchased Courses
                  </h3>
                  <button
                    className="btn btn-lg bg-white text-dark mt-3"
                    onClick={() => {
                      document.getElementById("headerLoginButton").click();
                    }}
                  >
                    LOGIN
                  </button>
                </div>
              )}

            {this.props.checkedLogin === true &&
              this.props.userDetails !== null &&
              (this.props.userDetails.courses === undefined ||
                this.props.userDetails.courses.length === 0) && (
                <div className="messageCard mt-md-5 mt-4">
                  <span
                    class="material-icons"
                    style={{
                      fontSize: 60,
                    }}
                  >
                    sentiment_very_dissatisfied
                  </span>
                  <h3 className="courseListWarning text-danger mt-4">
                    You Haven't Purchased Any Course
                  </h3>
                  <button
                    className="btn btn-lg bg-white text-dark mt-3"
                    onClick={() => {
                      window.location.href = "/#homeCoursesList";
                    }}
                  >
                    See Courses
                  </button>
                </div>
              )}

            {this.props.checkedLogin === true &&
              this.props.userDetails !== null &&
              this.props.userDetails.courses !== undefined &&
              this.props.userDetails.courses.length !== 0 && (
                <React.Fragment>
                  {this.props.userDetails.courses.map((item, index) => {
                    if (item === "acting") {
                      return (
                        <div className="detailCard bg-dark p-4 mt-md-5 mt-4 d-flex justify-content-between align-items-center">
                          <div>
                            <img
                              src={require("../assets/images/sandeepInstructor.jpg")}
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "100%",
                              }}
                            />
                          </div>
                          <div>
                            <h5 className="text-muted mb-0">Course</h5>
                            <h2>{courses["acting"].name}</h2>
                            <h5 className="text-muted mb-0">Instructor</h5>
                            <h3>{courses["acting"].instructorName}</h3>
                            <h5 className="text-muted mb-0">Lessons</h5>
                            <h4>{courses["acting"].noOfLessons}</h4>
                          </div>
                          <div>
                            <button
                              className="btn btn-lg text-white pr-3 pl-3"
                              style={{
                                background: "#ff0000",
                                borderRadius: 10,
                              }}
                              onClick={() => {
                                window.location.pathname = "/course/acting";
                              }}
                            >
                              View Course
                            </button>
                          </div>
                        </div>
                      );
                    }
                    if (item === "classicalSingingSG") {
                      return (
                        <div className="detailCard bg-dark p-4 mt-md-5 mt-4 d-flex justify-content-between align-items-center">
                          <div>
                            <img
                              src={require("../assets/images/swarnaInstructor.jpg")}
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "100%",
                              }}
                            />
                          </div>
                          <div>
                            <h5 className="text-muted mb-0">Course</h5>
                            <h2>{courses["classicalSinging"].name}</h2>
                            <h5 className="text-muted mb-0">Instructor</h5>
                            <h3>
                              {courses["classicalSinging"].instructorName}
                            </h3>
                            <h5 className="text-muted mb-0">Lessons</h5>
                            <h4>{courses["classicalSinging"].noOfLessons}</h4>
                          </div>
                          <div>
                            <button
                              className="btn btn-lg text-white pr-3 pl-3"
                              style={{
                                background: "#ff0000",
                                borderRadius: 10,
                              }}
                              onClick={() => {
                                window.location.pathname =
                                  "/course/classicalSinging";
                              }}
                            >
                              View Course
                            </button>
                          </div>
                        </div>
                      );
                    }
                    if (item === "westernSingingHR") {
                      return (
                        <div className="detailCard bg-dark p-4 mt-md-5 mt-4 d-flex justify-content-between align-items-center">
                          <div>
                            <img
                              src={require("../assets/images/hritishaInstructor.jpg")}
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "100%",
                              }}
                            />
                          </div>
                          <div>
                            <h5 className="text-muted mb-0">Course</h5>
                            <h2>{courses["westernSinging"].name}</h2>
                            <h5 className="text-muted mb-0">Instructor</h5>
                            <h3>{courses["westernSinging"].instructorName}</h3>
                            <h5 className="text-muted mb-0">Lessons</h5>
                            <h4>{courses["westernSinging"].noOfLessons}</h4>
                          </div>
                          <div>
                            <button
                              className="btn btn-lg text-white pr-3 pl-3"
                              style={{
                                background: "#ff0000",
                                borderRadius: 10,
                              }}
                              onClick={() => {
                                window.location.pathname =
                                  "/course/westernSinging";
                              }}
                            >
                              View Course
                            </button>
                          </div>
                        </div>
                      );
                    }
                    if (item === "playbackSingingRU") {
                      return (
                        <div className="detailCard bg-dark p-4 mt-md-5 mt-4 d-flex justify-content-between align-items-center">
                          <div>
                            <img
                              src={require("../assets/images/ravindraInstructor.jpg")}
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "100%",
                              }}
                            />
                          </div>
                          <div>
                            <h5 className="text-muted mb-0">Course</h5>
                            <h2>{courses["playbackSinging"].name}</h2>
                            <h5 className="text-muted mb-0">Instructor</h5>
                            <h3>{courses["playbackSinging"].instructorName}</h3>
                            <h5 className="text-muted mb-0">Lessons</h5>
                            <h4>{courses["playbackSinging"].noOfLessons}</h4>
                          </div>
                          <div>
                            <button
                              className="btn btn-lg text-white pr-3 pl-3"
                              style={{
                                background: "#ff0000",
                                borderRadius: 10,
                              }}
                              onClick={() => {
                                window.location.pathname =
                                  "/course/playbackSinging";
                              }}
                            >
                              View Course
                            </button>
                          </div>
                        </div>
                      );
                    }
                    if (item === "filmMakingAG") {
                      return (
                        <div className="detailCard bg-dark p-4 mt-md-5 mt-4 d-flex justify-content-between align-items-center">
                          <div>
                            <img
                              src={require("../assets/images/arpitInstructor.jpg")}
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "100%",
                              }}
                            />
                          </div>
                          <div>
                            <h5 className="text-muted mb-0">Course</h5>
                            <h2>{courses["filmMaking"].name}</h2>
                            <h5 className="text-muted mb-0">Instructor</h5>
                            <h3>{courses["filmMaking"].instructorName}</h3>
                            <h5 className="text-muted mb-0">Lessons</h5>
                            <h4>{courses["filmMaking"].noOfLessons}</h4>
                          </div>
                          <div>
                            <button
                              className="btn btn-lg text-white pr-3 pl-3"
                              style={{
                                background: "#ff0000",
                                borderRadius: 10,
                              }}
                              onClick={() => {
                                window.location.pathname = "/course/filmMaking";
                              }}
                            >
                              View Course
                            </button>
                          </div>
                        </div>
                      );
                    }
                  })}
                </React.Fragment>
              )}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.authReducer.userDetails,
    checkedLogin: state.authReducer.checkedLogin,
  };
};

export default connect(mapStateToProps)(courseList);
