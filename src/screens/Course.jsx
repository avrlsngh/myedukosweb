import React from "react";
import Header from "../components/Header";
import "../styles/Courses.css";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { populateCourse, setVideoURL } from "../actions/courseActions";
import QierPlayer from "qier-player";
import { setAuth } from "../actions/authActions";
import { firebaseApp, firestore, storage } from "../config/firebaseConfig";
import { firestore as firestore1 } from "firebase";
import { ToastsStore } from "react-toasts";
import { courses } from "../constants";

class Course extends React.Component {
  state = {
    activeThumb: null,
    showInstructorCard: true,
    currentVideoUrl: "",
    loadingURL: false,
    currentIndex: null,
    index: "",
    trailerVideoUrl: "",
  };

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        console.log("user details from course: ", this.props.userDetails);
        this.setState({
          loadingURL: true,
        });
        firestore
          .collection("users")
          .doc(user.uid)
          .get()
          .then((userDetails) => {
            const data = userDetails.data();
            if (
              data.courses !== undefined &&
              data.courses.length !== 0 &&
              data.courses.includes(window.location.pathname.split("/")[2])
            ) {
              this.setVideoLesson(0);
            } else {
              this.setState({
                loadingURL: false,
              });
            }
          });
        // if (
        //   this.props.userDetails.courses !== undefined &&
        //   this.props.userDetails.courses.length !== 0 &&
        //   this.props.userDetails.courses.includes(
        //     window.location.pathname.split("/")[2]
        //   )
        // ) {
        //   this.setVideoLesson(0);
        // }
      }
    });
    const pageRoute = window.location.pathname;
    if (pageRoute === "/course/acting") {
      this.setState({
        activeThumb: require("../assets/thumbnails/acting/thumb.jpg"),
        trailerVideoUrl: "https://www.youtube-nocookie.com/embed/LbHLNHsxu9Q",
      });
      this.props.populateCourse({
        courseName: "acting",
      });
    } else if (pageRoute === "/course/classicalSinging") {
      this.setState({
        activeThumb: require("../assets/thumbnails/classicalSinging/thumb.jpg"),
        trailerVideoUrl: "https://www.youtube-nocookie.com/embed/sM2hOSsBzL8",
      });
      this.props.populateCourse({
        courseName: "classicalSinging",
      });
    } else if (pageRoute === "/course/playbackSinging") {
      this.setState({
        activeThumb: require("../assets/thumbnails/playbackSinging/thumb.jpg"),
        trailerVideoUrl: "https://www.youtube-nocookie.com/embed/8HWYJCZu80Y",
      });
      this.props.populateCourse({
        courseName: "playbackSinging",
      });
    } else if (pageRoute === "/course/filmMaking") {
      this.setState({
        activeThumb: require("../assets/thumbnails/filmMaking/thumb.jpg"),
        trailerVideoUrl: "https://www.youtube-nocookie.com/embed/q-Xncp7qLWA",
      });
      this.props.populateCourse({
        courseName: "filmMaking",
      });
    } else if (pageRoute === "/course/westernSinging") {
      this.setState({
        activeThumb: require("../assets/thumbnails/westernSinging/thumb.jpg"),
        trailerVideoUrl: "https://www.youtube-nocookie.com/embed/n2A8v2Xq9fs",
      });
      this.props.populateCourse({
        courseName: "westernSinging",
      });
    } else {
      window.location.pathname = "/404";
    }
  }

  paymentHandler = (response) => {
    console.log("payment done: ", response);
    firestore
      .collection("users")
      .doc(this.props.userDetails.uid)
      .get()
      .then((userDetails) => {
        const data = userDetails.data();
        if (data.courses === undefined) {
          data["courses"] = [this.props.courseDetails.courseId];
        } else {
          let courses = data["courses"];
          courses.push(this.props.courseDetails.courseId);
          data["courses"] = courses;
        }
        console.log("adding course to user document: ", data);
        firestore
          .collection("users")
          .doc(this.props.userDetails.uid)
          .update(data)
          .then(() => {
            firestore
              .collection("instructors")
              .doc(this.props.courseDetails.uid)
              .update({
                coursesSold: firestore1.FieldValue.increment(1),
              })
              .then(() => {
                this.props.setAuth({
                  userStatus: "loggedIn",
                  uid: this.props.userDetails.uid,
                });
                ToastsStore.success(
                  "Congratulations, Welcome to the Course🎉🎉"
                );
              });
          });
      });
  };

  transact = () => {
    if (this.props.userDetails === null) {
      document.getElementById("headerLoginButton").click();
      ToastsStore.warning("Please login to continue");
      return;
    }
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (!user.emailVerified) {
        ToastsStore.warning("Please verify your Email to continue");
        return;
      } else {
        const options = {
          key: "rzp_test_OJY0ACkNnyQely", // Enter the Key ID generated from the Dashboard
          amount: "99900", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "My Edukos",
          description: "Test Transaction",
          image: "../assets/appstore.png", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: this.paymentHandler,
          notes: {
            address: "My Edukos Platform",
          },
          theme: {
            color: "#ff0000",
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      }
    });
  };

  setVideoLesson = async (index) => {
    this.setState({
      loadingURL: true,
    });
    const pathRef = storage.refFromURL(
      courses[window.location.pathname.split("/")[2]].lessonURL[index]
    );
    const url = await pathRef.getDownloadURL();
    this.setState({
      loadingURL: false,
      currentIndex: index,
      currentVideoUrl: url,
    });
  };

  render() {
    console.log("active thumb", this.props.userDetails);
    return (
      <div className="container pt-3 pb-3">
        {/* Header */}

        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <Header />
          </div>
        </div>

        {/* Section */}
        <div className="row mt-3 mt-md-5">
          {this.props.courseLoaded && this.props.checkedLogin ? (
            <React.Fragment>
              <div
                className={
                  this.props.checkedLogin === true &&
                  (this.props.userDetails === null ||
                  this.props.userDetails.courses === undefined
                    ? "col-12 col-md-8 cardLayoutTab2"
                    : this.props.userDetails.courses.includes(
                        this.props.courseDetails.courseId
                      )
                    ? "col-12"
                    : "col-12 col-md-8 cardLayoutTab2")
                }
              >
                {/* Video */}
                <div className="row">
                  <div className="col-12">
                    <h3 className="mb-2 mb-md-3 courseTitle">
                      {this.props.courseDetails.name}
                    </h3>
                    <div
                      className="videoPlayer d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: "black",
                        borderRadius: 10,
                        height: 480,
                      }}
                    >
                      {this.state.loadingURL ? (
                        <div class="spinner-grow text-secondary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      ) : (
                        <React.Fragment>
                          {this.props.playingIndex === -1 ? (
                            <iframe
                              style={{
                                height: "100%",
                                width: "100%",
                              }}
                              src={this.state.trailerVideoUrl}
                              frameBorder="0"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowFFullScreen
                            ></iframe>
                          ) : (
                            <QierPlayer
                              srcOrigin={this.props.videoURL}
                              width={"100%"}
                              height={"100%"}
                            />
                          )}
                        </React.Fragment>
                      )}
                    </div>
                  </div>

                  {this.props.checkedLogin === true && (
                    <React.Fragment>
                      {this.props.userDetails === null ||
                      this.props.userDetails.courses === undefined ? (
                        <React.Fragment>
                          <div className="buyNowFooter">
                            <div className="priceFooter">
                              <b
                                style={{
                                  fontSize: 24,
                                }}
                              >
                                ₹{this.props.courseDetails.amount}
                              </b>{" "}
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  fontSize: 16,
                                }}
                              >
                                ₹6000
                              </span>
                            </div>
                            <button
                              className="btn w-100 text-white buttonFooter"
                              style={{
                                borderRadius: 10,
                                backgroundColor: "#ff0000",
                                fontSize: 22,
                                fontWeight: "bolder",
                              }}
                              onClick={() => {
                                this.transact();
                              }}
                            >
                              Buy Now
                            </button>
                          </div>
                          <div className="col-12 d-md-none d-flex mt-4 mt-md-5 instructorCard">
                            <div
                              className="instructorCard d-flex flex-column p-4 bg-dark justify-content-center align-items-start"
                              style={{
                                borderRadius: 10,
                                height: "100%",
                              }}
                            >
                              <div className="w-100 d-flex flex-column align-items-center">
                                <div
                                  style={{
                                    height: 150,
                                    width: 150,
                                  }}
                                >
                                  <img
                                    src={this.props.instructorDetails.imageURL}
                                    alt="profile image singer"
                                    style={{
                                      height: "100%",
                                      width: "100%",
                                      objectFit: "cover",
                                      borderRadius: 75,
                                    }}
                                  />
                                </div>
                                <div>
                                  <h4 className="mt-1 text-center">
                                    {this.props.instructorDetails.name}
                                  </h4>
                                  <h6 className="text-muted text-center m-0">
                                    {this.props.instructorDetails.heading}
                                  </h6>
                                </div>
                                <div className="mt-4">
                                  <p
                                    className="text-white m-0"
                                    style={{
                                      fontSize: 13.5,
                                    }}
                                  >
                                    {this.props.instructorDetails.about}
                                  </p>
                                </div>
                              </div>

                              <div className="mt-4">
                                <div className="d-flex justify-content-start align-items-center mt-2">
                                  <span
                                    class="material-icons"
                                    style={{ fontSize: 20, color: "white" }}
                                  >
                                    play_circle_outline
                                  </span>
                                  <p style={{ fontSize: 13 }} className="ml-1">
                                    {this.props.courseDetails.noOfLessons} Video
                                    Lessons
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center mt-2">
                                  <span
                                    class="material-icons"
                                    style={{ fontSize: 20, color: "white" }}
                                  >
                                    star_rate
                                  </span>
                                  <p style={{ fontSize: 13 }} className="ml-1">
                                    Exclusive learning material
                                  </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center mt-2">
                                  <span
                                    class="material-icons"
                                    style={{ fontSize: 20, color: "white" }}
                                  >
                                    verified
                                  </span>
                                  <p style={{ fontSize: 13 }} className="ml-1">
                                    100% Guaranteed
                                  </p>
                                </div>
                              </div>

                              <div className="lessonPrice mt-4">
                                <h4>
                                  Only -&nbsp;
                                  <b
                                    style={{
                                      fontSize: 24,
                                    }}
                                  >
                                    ₹{this.props.courseDetails.amount}
                                  </b>{" "}
                                  <span
                                    style={{
                                      textDecoration: "line-through",
                                      fontSize: 16,
                                    }}
                                  >
                                    ₹6000
                                  </span>
                                </h4>
                              </div>

                              <div className="mt-4 w-100 mobileBuyNow">
                                <button
                                  className="btn btn-lg w-100 text-white"
                                  style={{
                                    borderRadius: 10,
                                    backgroundColor: "#ff0000",
                                    fontSize: 22,
                                    fontWeight: "bolder",
                                  }}
                                  onClick={() => {
                                    this.transact();
                                  }}
                                >
                                  Buy Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          {!this.props.userDetails.courses.includes(
                            this.props.courseDetails.courseId
                          ) ? (
                            <React.Fragment>
                              <div className="buyNowFooter">
                                <div className="priceFooter">
                                  <b
                                    style={{
                                      fontSize: 24,
                                    }}
                                  >
                                    ₹{this.props.courseDetails.amount}
                                  </b>{" "}
                                  <span
                                    style={{
                                      textDecoration: "line-through",
                                      fontSize: 16,
                                    }}
                                  >
                                    ₹6000
                                  </span>
                                </div>
                                <button
                                  className="btn w-100 text-white buttonFooter"
                                  style={{
                                    borderRadius: 10,
                                    backgroundColor: "#ff0000",
                                    fontSize: 22,
                                    fontWeight: "bolder",
                                  }}
                                  onClick={() => {
                                    this.transact();
                                  }}
                                >
                                  Buy Now
                                </button>
                              </div>

                              <div className="col-12 d-md-none d-flex mt-4 mt-md-5 instructorCard">
                                <div
                                  className="instructorCard flex-column p-4 bg-dark justify-content-center align-items-start"
                                  style={{
                                    borderRadius: 10,
                                  }}
                                >
                                  <div className="w-100 d-flex flex-column align-items-center">
                                    <div
                                      style={{
                                        height: 150,
                                        width: 150,
                                      }}
                                    >
                                      <img
                                        src={
                                          this.props.instructorDetails.imageURL
                                        }
                                        alt="profile image singer"
                                        style={{
                                          height: "100%",
                                          width: "100%",
                                          objectFit: "cover",
                                          borderRadius: 75,
                                        }}
                                      />
                                    </div>
                                    <div>
                                      <h4 className="mt-1 text-center">
                                        {this.props.instructorDetails.name}
                                      </h4>
                                      <h6 className="text-muted text-center m-0">
                                        {this.props.instructorDetails.heading}
                                      </h6>
                                    </div>
                                    <div className="mt-4">
                                      <p
                                        className="text-white m-0"
                                        style={{
                                          fontSize: 13.5,
                                        }}
                                      >
                                        {this.props.instructorDetails.about}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="mt-4">
                                    <div className="d-flex justify-content-start align-items-center mt-2">
                                      <span
                                        class="material-icons"
                                        style={{ fontSize: 20, color: "white" }}
                                      >
                                        play_circle_outline
                                      </span>
                                      <p
                                        style={{ fontSize: 13 }}
                                        className="ml-1"
                                      >
                                        {this.props.courseDetails.noOfLessons}{" "}
                                        Video Lessons
                                      </p>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mt-2">
                                      <span
                                        class="material-icons"
                                        style={{ fontSize: 20, color: "white" }}
                                      >
                                        star_rate
                                      </span>
                                      <p
                                        style={{ fontSize: 13 }}
                                        className="ml-1"
                                      >
                                        Exclusive learning material
                                      </p>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center mt-2">
                                      <span
                                        class="material-icons"
                                        style={{ fontSize: 20, color: "white" }}
                                      >
                                        verified
                                      </span>
                                      <p
                                        style={{ fontSize: 13 }}
                                        className="ml-1"
                                      >
                                        100% Guaranteed
                                      </p>
                                    </div>
                                  </div>

                                  <div className="lessonPrice mt-4">
                                    <h4>
                                      Only -&nbsp;
                                      <b
                                        style={{
                                          fontSize: 24,
                                        }}
                                      >
                                        ₹{this.props.courseDetails.amount}
                                      </b>{" "}
                                      <span
                                        style={{
                                          textDecoration: "line-through",
                                          fontSize: 16,
                                        }}
                                      >
                                        ₹6000
                                      </span>
                                    </h4>
                                  </div>

                                  <div className="mt-4 w-100">
                                    <button
                                      className="btn btn-lg w-100 text-white"
                                      style={{
                                        borderRadius: 10,
                                        backgroundColor: "#ff0000",
                                        fontSize: 22,
                                        fontWeight: "bolder",
                                      }}
                                      onClick={() => {
                                        this.transact();
                                      }}
                                    >
                                      Buy Now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </React.Fragment>
                          ) : (
                            <></>
                          )}
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  )}
                </div>

                <div className="lessonList mt-4 mt-md-5">
                  <div className="d-flex justify-content-start align-items-center">
                    <h4 className="m-0">Lessons</h4>
                    {this.props.checkedLogin === true &&
                      (this.props.userDetails === null ||
                      this.props.userDetails.courses === undefined ? (
                        <span class="material-icons ml-2">lock</span>
                      ) : this.props.userDetails.courses.includes(
                          this.props.courseDetails.courseId
                        ) ? (
                        <></>
                      ) : (
                        <span class="material-icons ml-2">lock</span>
                      ))}
                  </div>

                  <div>
                    {this.props.courseDetails.lessons.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          {this.props.checkedLogin === true && (
                            <div className="row mt-4">
                              <div className="col-12">
                                <div
                                  className={
                                    "lessonCard p-4 bg-dark d-flex flex-column flex-md-row justify-content-start align-items-start"
                                  }
                                  style={{
                                    borderRadius: 10,
                                    borderStyle: "solid",
                                    borderColor: "white",
                                    borderWidth:
                                      this.state.currentIndex === index ? 4 : 0,
                                    cursor:
                                      this.state.currentIndex === index
                                        ? ""
                                        : "pointer",
                                  }}
                                  onClick={() => {
                                    if (
                                      this.props.userDetails === null ||
                                      this.props.userDetails.courses ===
                                        undefined
                                    ) {
                                      ToastsStore.info(
                                        "You haven't purchased this course, BUY NOW"
                                      );
                                      return;
                                    } else {
                                      if (
                                        !this.props.userDetails.courses.includes(
                                          this.props.courseDetails.courseId
                                        )
                                      ) {
                                        ToastsStore.info(
                                          "You haven't purchased this course, BUY NOW"
                                        );
                                        return;
                                      }
                                    }

                                    if (this.state.currentIndex === index) {
                                      return;
                                    } else {
                                      console.log(
                                        window.location.pathname.split("/")
                                      );
                                      this.setVideoLesson(index);
                                    }
                                  }}
                                >
                                  <div
                                    className="lessonThumb"
                                    style={{
                                      position: "relative",
                                      height: 160,
                                      width: 250,
                                    }}
                                  >
                                    <img
                                      src={this.state.activeThumb}
                                      alt="singer image"
                                      style={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                        borderRadius: 10,
                                      }}
                                    />
                                    <div className="lessonPlayButton">
                                      <i
                                        className="material-icons"
                                        style={{
                                          fontSize: 80,
                                          color: "#fff",
                                          cursor: "pointer",
                                        }}
                                      >
                                        play_circle_outline
                                      </i>
                                    </div>
                                  </div>
                                  <div
                                    className="lessonDesc d-flex flex-column justify-content-start align-items-start ml-4"
                                    style={{
                                      width:
                                        this.props.checkedLogin === true &&
                                        (this.props.userDetails === null ||
                                        this.props.userDetails.courses ===
                                          undefined
                                          ? 480
                                          : this.props.userDetails.courses.includes(
                                              this.props.courseDetails.courseId
                                            )
                                          ? 720
                                          : 480),
                                    }}
                                  >
                                    <div>
                                      <h6 className="m-0">
                                        Lesson {index + 1}
                                      </h6>
                                    </div>
                                    <div className="mt-3">
                                      <h5>{item}</h5>
                                      <p
                                        className="m-0"
                                        style={{ fontSize: 15 }}
                                      >
                                        {
                                          this.props.courseDetails.aboutLessons[
                                            index
                                          ]
                                        }
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              {this.props.checkedLogin === true && (
                <React.Fragment>
                  {this.props.userDetails === null ||
                  this.props.userDetails.courses === undefined ? (
                    <div className="col-4 d-none d-md-block mt-5 instructorCard">
                      <div
                        className="instructorCard p-4 bg-dark justify-content-center align-items-start"
                        style={{
                          borderRadius: 10,
                        }}
                      >
                        <div className="w-100 d-flex flex-column align-items-center">
                          <div
                            style={{
                              height: 150,
                              width: 150,
                            }}
                          >
                            <img
                              src={this.props.instructorDetails.imageURL}
                              alt="profile image singer"
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: 75,
                              }}
                            />
                          </div>
                          <div>
                            <h4 className="mt-1 text-center">
                              {this.props.instructorDetails.name}
                            </h4>
                            <h6 className="text-muted text-center m-0">
                              {this.props.instructorDetails.heading}
                            </h6>
                          </div>
                          <div className="mt-4">
                            <p
                              className="text-white m-0"
                              style={{
                                fontSize: 13.5,
                              }}
                            >
                              {this.props.instructorDetails.about}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="d-flex justify-content-start align-items-center mt-2">
                            <span
                              class="material-icons"
                              style={{ fontSize: 20, color: "white" }}
                            >
                              play_circle_outline
                            </span>
                            <p style={{ fontSize: 13 }} className="ml-1">
                              {this.props.courseDetails.noOfLessons} Video
                              Lessons
                            </p>
                          </div>
                          <div className="d-flex justify-content-start align-items-center mt-2">
                            <span
                              class="material-icons"
                              style={{ fontSize: 20, color: "white" }}
                            >
                              star_rate
                            </span>
                            <p style={{ fontSize: 13 }} className="ml-1">
                              Exclusive learning material
                            </p>
                          </div>
                          <div className="d-flex justify-content-start align-items-center mt-2">
                            <span
                              class="material-icons"
                              style={{ fontSize: 20, color: "white" }}
                            >
                              verified
                            </span>
                            <p style={{ fontSize: 13 }} className="ml-1">
                              100% Guaranteed
                            </p>
                          </div>
                        </div>

                        <div className="lessonPrice mt-4">
                          <h4>
                            Only -&nbsp;
                            <b
                              style={{
                                fontSize: 24,
                              }}
                            >
                              ₹{this.props.courseDetails.amount}
                            </b>{" "}
                            <span
                              style={{
                                textDecoration: "line-through",
                                fontSize: 16,
                              }}
                            >
                              ₹6000
                            </span>
                          </h4>
                        </div>

                        <div className="mt-4 w-100">
                          <button
                            className="btn btn-lg w-100 text-white"
                            style={{
                              borderRadius: 10,
                              backgroundColor: "#ff0000",
                              fontSize: 22,
                              fontWeight: "bolder",
                            }}
                            onClick={() => {
                              this.transact();
                            }}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <React.Fragment>
                      {!this.props.userDetails.courses.includes(
                        this.props.courseDetails.courseId
                      ) ? (
                        <div className="col-4 d-none d-md-block mt-5 instructorCard">
                          <div
                            className="instructorCard flex-column p-4 bg-dark justify-content-center align-items-start"
                            style={{
                              borderRadius: 10,
                            }}
                          >
                            <div className="w-100 d-flex flex-column align-items-center">
                              <div
                                style={{
                                  height: 150,
                                  width: 150,
                                }}
                              >
                                <img
                                  src={this.props.instructorDetails.imageURL}
                                  alt="profile image singer"
                                  style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                    borderRadius: 75,
                                  }}
                                />
                              </div>
                              <div>
                                <h4 className="mt-1 text-center">
                                  {this.props.instructorDetails.name}
                                </h4>
                                <h6 className="text-muted text-center m-0">
                                  {this.props.instructorDetails.heading}
                                </h6>
                              </div>
                              <div className="mt-4">
                                <p
                                  className="text-white m-0"
                                  style={{
                                    fontSize: 13.5,
                                  }}
                                >
                                  {this.props.instructorDetails.about}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4">
                              <div className="d-flex justify-content-start align-items-center mt-2">
                                <span
                                  class="material-icons"
                                  style={{ fontSize: 20, color: "white" }}
                                >
                                  play_circle_outline
                                </span>
                                <p style={{ fontSize: 13 }} className="ml-1">
                                  {this.props.courseDetails.noOfLessons} Video
                                  Lessons
                                </p>
                              </div>
                              <div className="d-flex justify-content-start align-items-center mt-2">
                                <span
                                  class="material-icons"
                                  style={{ fontSize: 20, color: "white" }}
                                >
                                  star_rate
                                </span>
                                <p style={{ fontSize: 13 }} className="ml-1">
                                  Exclusive learning material
                                </p>
                              </div>
                              <div className="d-flex justify-content-start align-items-center mt-2">
                                <span
                                  class="material-icons"
                                  style={{ fontSize: 20, color: "white" }}
                                >
                                  verified
                                </span>
                                <p style={{ fontSize: 13 }} className="ml-1">
                                  100% Guaranteed
                                </p>
                              </div>
                            </div>

                            <div className="lessonPrice mt-4">
                              <h4>
                                Only -&nbsp;
                                <b
                                  style={{
                                    fontSize: 24,
                                  }}
                                >
                                  ₹{this.props.courseDetails.amount}
                                </b>{" "}
                                <span
                                  style={{
                                    textDecoration: "line-through",
                                    fontSize: 16,
                                  }}
                                >
                                  ₹6000
                                </span>
                              </h4>
                            </div>

                            <div className="mt-4 w-100">
                              <button
                                className="btn btn-lg w-100 text-white"
                                style={{
                                  borderRadius: 10,
                                  backgroundColor: "#ff0000",
                                  fontSize: 22,
                                  fontWeight: "bolder",
                                }}
                                onClick={() => {
                                  this.transact();
                                }}
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          ) : (
            <div className="w-100 d-flex justify-content-center">
              <div
                className="spinner-grow"
                style={{ width: "5rem", height: "5rem" }}
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    populateCourse: (courseParams) => dispatch(populateCourse(courseParams)),
    setVideoURL: (course, videoIndex) =>
      dispatch(setVideoURL(course, videoIndex)),
    setAuth: (authParams) => dispatch(setAuth(authParams)),
  };
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.authReducer.userDetails,
    userLoggedIn: state.authReducer.userLoggedIn,
    checkedLogin: state.authReducer.checkedLogin,
    userEmailVerified: state.authReducer.userEmailVerified,
    courseLoaded: state.courseReducer.courseLoaded,
    courseDetails: state.courseReducer.courseDetails,
    instructorDetails: state.courseReducer.instructorDetails,
    thumbURLs: state.courseReducer.thumbURLs,
    courseDisplayMode: state.courseReducer.courseDisplayMode,
    videoURL: state.courseReducer.videoURL,
    playingIndex: state.courseReducer.playingIndex,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Course);
