import React from "react";
import "../styles/Home.css";
import { connect } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

class Home extends React.Component {
  state = {
    slidesPerView: 3,
    videoModal: "none",
    videoSrc: "https://www.youtube-nocookie.com/embed/o8Dgy4jAI_0",
    isPaused: true,
  };
  componentDidMount() {
    if (window.screen.width < 768) {
      console.log("i m in a phone");
      this.setState({
        slidesPerView: 1,
      });
    }
    if (window.screen.width >= 768 && window.screen.width < 1024) {
      console.log("i m in a tab");
      this.setState({
        slidesPerView: 1,
      });
    }
    window.addEventListener("resize", () => {
      if (window.screen.width < 768) {
        console.log("i m in a phone");
        this.setState({
          slidesPerView: 1,
        });
      } else if (window.screen.width >= 768 && window.screen.width < 1024) {
        this.setState({
          slidesPerView: 1,
        });
      } else {
        this.setState({
          slidesPerView: 3,
        });
      }
    });
  }

  render() {
    SwiperCore.use([Navigation]);
    return (
      <div className="container pt-3 pb-3">
        {/* Header */}
        <div className="row w-100 m-0">
          <div className="col-12 d-flex justify-content-between pr-0 pl-0 pr-md-2 pl-md-2">
            <Header />
          </div>
        </div>
        {/* Carousel */}
        <div className="row mt-5">
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
            <div>
              <h3 className="carouselHeading1">Learn Anytime, Anywhere</h3>
              <h3 className="carouselHeading1">Only on MyEdukos</h3>
              <h2
                className="carouselHeading2"
                style={{
                  color: "#ff0000",
                }}
              >
                #LetsSikho
              </h2>
            </div>
            <div className="d-flex justify-content-between appStoreLinks mt-4">
              <a
                href="#"
                style={{
                  backgroundColor: "#000",
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  className="storeImage"
                  src="https://www.mento.co.in/assets/google-play-black-f7eb60056f740e3f7175688fc28e4fc4c2c2a20fc8a26b4fe4d2e944e24fa014.svg"
                  alt=""
                  style={{ height: 60 }}
                />
              </a>
              {/* <a
                className="appstoreIcon2"
                href="#"
                style={{
                  backgroundColor: "#000",
                  borderRadius: 6,
                  alignItems: "center",
                }}
              >
                <img
                  className="storeImage"
                  src="https://www.mento.co.in/assets/app-store-black-89aa31eafa093e3c654fd68421e895d386767ea78997aa91db6ef811c3fb0152.svg"
                  alt=""
                  style={{ height: "100%", width: "100%" }}
                />
              </a> */}
            </div>
          </div>
          <div className="col-12 col-md-8 mt-4 mt-md-0">
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-ride="carousel"
            >
              <div
                className="carousel-inner"
                style={{ height: 480, borderRadius: 10 }}
              >
                <div
                  className="carousel-item active"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  data-interval="5000"
                >
                  <img
                    src={require("../assets/images/carouselImage/ravindra.jpg")}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      opacity: 1,
                    }}
                    alt="..."
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "78%",
                      right: "15%",
                    }}
                  >
                    <button
                      className="carouselCTA btn pr-md-4 pl-md-4"
                      style={{
                        fontSize: 28,
                        borderRadius: 10,
                        color: "#fff",
                        backgroundColor: "#ff0000",
                      }}
                      onClick={() => {
                        window.location.href = "/course/playbackSinging";
                      }}
                    >
                      View Course
                    </button>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  data-interval="5000"
                >
                  <img
                    src={require("../assets/images/carouselImage/hritisha.jpg")}
                    className=""
                    alt="..."
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "bottom",
                      opacity: 1,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "78%",
                      right: "15%",
                    }}
                  >
                    <button
                      className="carouselCTA btn pr-md-4 pl-md-4"
                      style={{
                        fontSize: 28,
                        borderRadius: 10,
                        color: "#fff",
                        backgroundColor: "#ff0000",
                      }}
                      onClick={() => {
                        window.location.href = "/course/westernSinging";
                      }}
                    >
                      View Course
                    </button>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  data-interval="5000"
                >
                  <img
                    src={require("../assets/images/carouselImage/swarna.jpg")}
                    alt="..."
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      opacity: 1,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "78%",
                      right: "15%",
                    }}
                  >
                    <button
                      className="carouselCTA btn pr-md-4 pl-md-4"
                      style={{
                        fontSize: 28,
                        borderRadius: 10,
                        color: "#fff",
                        backgroundColor: "#ff0000",
                      }}
                      onClick={() => {
                        window.location.href = "/course/classicalSinging";
                      }}
                    >
                      View Course
                    </button>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  data-interval="5000"
                >
                  <img
                    src={require("../assets/images/carouselImage/arpit.jpg")}
                    alt="..."
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      opacity: 1,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "78%",
                      right: "15%",
                    }}
                  >
                    <button
                      className="carouselCTA btn pr-md-4 pl-md-4"
                      style={{
                        fontSize: 28,
                        borderRadius: 10,
                        color: "#fff",
                        backgroundColor: "#ff0000",
                      }}
                      onClick={() => {
                        window.location.href = "/course/filmMaking";
                      }}
                    >
                      View Course
                    </button>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  data-interval="5000"
                >
                  <img
                    src={require("../assets/images/carouselImage/sandeep.jpg")}
                    alt="..."
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      opacity: 1,
                    }}
                    onClick={() => {
                      window.location.href = "/course/acting";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "78%",
                      right: "15%",
                    }}
                  >
                    <button
                      className="carouselCTA btn pr-md-4 pl-md-4"
                      style={{
                        fontSize: 28,
                        borderRadius: 10,
                        color: "#fff",
                        backgroundColor: "#ff0000",
                      }}
                    >
                      View Course
                    </button>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleInterval"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleInterval"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        {/* courses list */}
        <div className="row mt-4 mt-md-5 w-100 m-0" id="homeCoursesList">
          <div className="col-12 p-0">
            <h4 className="sectionHeading">Courses</h4>
          </div>
          <div className="col-12 p-0">
            <div className="row">
              {/* card layout */}
              <div className="col-12 cardLayoutTab col-md-4 mt-3 mt-md-5">
                <div
                  className="courseCard"
                  onClick={() => {
                    window.location.href = "/course/acting";
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <div className="courseCardImage">
                    <img
                      className="cardImage"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      src={require("../assets/images/actingCourse.jpg")}
                    />
                  </div>
                  <div className="watchTrailer">
                    <i
                      className="material-icons"
                      style={{ fontSize: 50, color: "#414141" }}
                    >
                      play_arrow
                    </i>
                  </div>
                  <div className="courseCardBody pt-5 pr-4 pl-4 pb-4">
                    <div className="mt-2 d-flex flex-column flex-grow-1">
                      <h4 className="align-top">Acting</h4>
                      <div className="mt-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div
                            className="d-flex align-items-center"
                            style={{
                              width: 40,
                              height: 40,
                            }}
                          >
                            <img
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 20,
                              }}
                              src={require("../assets/images/sandeepInstructor.jpg")}
                            />
                          </div>
                          <div className="ml-3 d-flex flex-column justify-content-center">
                            <p className="m-0" style={{ fontSize: 16 }}>
                              SANDEEP LELE
                            </p>
                            <p
                              className="text-muted m-0"
                              style={{ fontSize: 12 }}
                            >
                              Theatre Artist
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <h6 className="m-0">22</h6>
                          <p
                            className="m-0 text-muted"
                            style={{ fontSize: 12 }}
                          >
                            Videos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 cardLayoutTab col-md-4 mt-3 mt-md-5">
                <div
                  className="courseCard"
                  onClick={() => {
                    window.location.href = "/course/classicalSinging";
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <div className="courseCardImage">
                    <img
                      className="cardImage"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      src={require("../assets/images/classicalSingingCourse.jpg")}
                    />
                  </div>
                  <div className="watchTrailer">
                    <i
                      className="material-icons"
                      style={{ fontSize: 50, color: "#414141" }}
                    >
                      play_arrow
                    </i>
                  </div>
                  <div className="courseCardBody pt-5 pr-4 pl-4 pb-4">
                    <div className="mt-2 d-flex flex-column flex-grow-1">
                      <h4 className="align-top">Classical Singing</h4>
                      <div className="mt-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div
                            className="d-flex align-items-center"
                            style={{
                              width: 40,
                              height: 40,
                            }}
                          >
                            <img
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 20,
                              }}
                              src={require("../assets/images/swarnaInstructor.jpg")}
                            />
                          </div>
                          <div className="ml-3 d-flex flex-column justify-content-center">
                            <p className="m-0" style={{ fontSize: 16 }}>
                              SWARNA GHOSH
                            </p>
                            <p
                              className="text-muted m-0"
                              style={{ fontSize: 12 }}
                            >
                              Classical Singer
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <h6 className="m-0">12</h6>
                          <p
                            className="m-0 text-muted"
                            style={{ fontSize: 12 }}
                          >
                            Videos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 cardLayoutTab col-md-4 mt-3 mt-md-5">
                <div
                  className="courseCard"
                  onClick={() => {
                    window.location.href = "/course/playbackSinging";
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <div className="courseCardImage">
                    <img
                      className="cardImage"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      src={require("../assets/images/playbackSingingCourse.jpg")}
                    />
                  </div>
                  <div className="watchTrailer">
                    <i
                      className="material-icons"
                      style={{ fontSize: 50, color: "#414141" }}
                    >
                      play_arrow
                    </i>
                  </div>
                  <div className="courseCardBody pt-5 pr-4 pl-4 pb-4">
                    <div className="mt-2 d-flex flex-column flex-grow-1">
                      <h4 className="align-top">Playback Singing</h4>
                      <div className="mt-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div
                            className="d-flex align-items-center"
                            style={{
                              width: 40,
                              height: 40,
                            }}
                          >
                            <img
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 20,
                              }}
                              src={require("../assets/images/ravindraInstructor.jpg")}
                            />
                          </div>
                          <div className="ml-3 d-flex flex-column justify-content-center">
                            <p className="m-0" style={{ fontSize: 16 }}>
                              RAVINDRA UPADHYAY
                            </p>
                            <p
                              className="text-muted m-0"
                              style={{ fontSize: 12 }}
                            >
                              Playback Singer
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <h6 className="m-0">12</h6>
                          <p
                            className="m-0 text-muted"
                            style={{ fontSize: 12 }}
                          >
                            Videos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 cardLayoutTab col-md-4 mt-3 mt-md-5">
                <div
                  className="courseCard"
                  onClick={() => {
                    window.location.href = "/course/filmMaking";
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <div className="courseCardImage">
                    <img
                      className="cardImage"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      src={require("../assets/images/filmMakingCourse.jpg")}
                    />
                  </div>
                  <div className="watchTrailer">
                    <i
                      className="material-icons"
                      style={{ fontSize: 50, color: "#414141" }}
                    >
                      play_arrow
                    </i>
                  </div>
                  <div className="courseCardBody pt-5 pr-4 pl-4 pb-4">
                    <div className="mt-2 d-flex flex-column flex-grow-1">
                      <h4 className="align-top">Film Making</h4>
                      <div className="mt-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div
                            className="d-flex align-items-center"
                            style={{
                              width: 40,
                              height: 40,
                            }}
                          >
                            <img
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 20,
                              }}
                              src={require("../assets/images/arpitInstructor.jpg")}
                            />
                          </div>
                          <div className="ml-3 d-flex flex-column justify-content-center">
                            <p className="m-0" style={{ fontSize: 16 }}>
                              ARPIT GANGWAL
                            </p>
                            <p
                              className="text-muted m-0"
                              style={{ fontSize: 12 }}
                            >
                              Film Director
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <h6 className="m-0">21</h6>
                          <p
                            className="m-0 text-muted"
                            style={{ fontSize: 12 }}
                          >
                            Videos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 cardLayoutTab col-md-4 mt-3 mt-md-5">
                <div
                  className="courseCard"
                  onClick={() => {
                    window.location.href = "/course/westernSinging";
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <div className="courseCardImage">
                    <img
                      className="cardImage"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      src={require("../assets/images/westernSingingCourse.jpg")}
                    />
                  </div>
                  <div className="watchTrailer">
                    <i
                      className="material-icons"
                      style={{ fontSize: 50, color: "#414141" }}
                    >
                      play_arrow
                    </i>
                  </div>
                  <div className="courseCardBody pt-5 pr-4 pl-4 pb-4">
                    <div className="mt-2 d-flex flex-column flex-grow-1">
                      <h4 className="align-top">Western Singing</h4>
                      <div className="mt-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div
                            className="d-flex align-items-center"
                            style={{
                              width: 40,
                              height: 40,
                            }}
                          >
                            <img
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 20,
                              }}
                              src={require("../assets/images/hritishaInstructor.jpg")}
                            />
                          </div>
                          <div className="ml-3 d-flex flex-column justify-content-center">
                            <p className="m-0" style={{ fontSize: 16 }}>
                              HRITISHA REWADIA
                            </p>
                            <p
                              className="text-muted m-0"
                              style={{ fontSize: 12 }}
                            >
                              Opera Singer
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <h6 className="m-0">12</h6>
                          <p
                            className="m-0 text-muted"
                            style={{ fontSize: 12 }}
                          >
                            Videos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* features */}
        <div className="row mt-4 mt-md-5 w-100 m-0 align-items-center justify-content-center">
          <div className="col-12">
            <h4>Features</h4>
            <div className="row mt-4 mt-md-5 m-0 w-100 align-items-center justify-content-center">
              <div className="col-md-3 p-0 featureText col-12 d-flex flex-column align-items-start justify-content-center">
                <h4 className="d-flex align-items-center mb-3 text-center">
                  <span
                    class="material-icons mr-3"
                    style={{
                      fontSize: 40,
                    }}
                  >
                    ad_units
                  </span>
                  Simple UI
                </h4>
                <h4 className="d-flex align-items-center mb-3 text-center">
                  <span
                    class="material-icons mr-3"
                    style={{
                      fontSize: 40,
                    }}
                  >
                    devices
                  </span>
                  Easy to access
                </h4>
              </div>
              <div className="col-md-6 featuresPhone col-12 p-0 d-flex flex-column align-items-center justify-content-center">
                <img
                  className="introVideoPhone"
                  src={require("../assets/images/iPhoneFrame.png")}
                />
              </div>
              <div className="col-md-3 featureText mt-3 mt-md-0 col-12 p-0 d-flex flex-column align-items-start justify-content-center">
                <h4 className="d-flex align-items-center mb-3 text-center">
                  <span
                    class="material-icons mr-3"
                    style={{
                      fontSize: 40,
                    }}
                  >
                    query_builder
                  </span>
                  Life time access
                </h4>
                <h4 className="d-flex align-items-center mb-3 text-center">
                  <span
                    class="material-icons mr-3"
                    style={{
                      fontSize: 40,
                    }}
                  >
                    hd
                  </span>
                  HD Media Quality
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Intro video */}
        <div className="row mt-4 mt-md-5">
          <div className="col-12">
            <h4>A little about Us</h4>
            <div className="mt-4 mt-md-5 d-flex flex-column align-items-center">
              <img
                className="introVideoPhone mr-1"
                src={require("../assets/images/iPhoneFrame.png")}
              />
              <div
                className="introVideoPlay"
                onClick={() => {
                  this.setState({
                    videoModal: "flex",
                    isPaused: false,
                  });
                }}
              >
                <i
                  className="material-icons"
                  style={{ fontSize: 50, color: "#414141" }}
                >
                  play_arrow
                </i>
              </div>
            </div>
            <div
              className="videoModal"
              style={{
                display: this.state.videoModal,
              }}
            >
              <div className="row w-100 justify-content-center">
                <div className="col-12 col-md-9 d-flex flex-column videoContent">
                  <div className="d-flex justify-content-end w-100">
                    <i
                      className="text-light"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        this.setState({
                          videoModal: "none",
                          isPaused: true,
                        });
                      }}
                    >
                      &times;
                    </i>
                  </div>
                  <iframe
                    src={this.state.isPaused ? "" : this.state.videoSrc}
                    frameborder="0"
                    id="youtubeVideoFrame"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    style={{
                      borderRadius: 10,
                      height: "100%",
                      width: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="row mt-2 p-0">
          <div className="col-12 mt-4 mt-md-5 p-0">
            <h4 className="pl-3 sectionHeading">Our Student Reviews</h4>
            <Swiper
              spaceBetween={16}
              slidesPerView={this.state.slidesPerView}
              navigation
            >
              <SwiperSlide>
                <div className="mt-4 mt-md-5 w-100">
                  <div
                    className="p-4 text-light pt-5 pb-5"
                    style={{
                      backgroundColor: "#414141",
                      borderRadius: 10,
                    }}
                  >
                    <h5 style={{ fontWeight: "400" }}>
                      Just installed the app. Was very much convinced by the
                      faculty, quality and guidance on various techniques used
                      in singing. Joined for western vocals. Easy to use app 💯
                    </h5>
                    <h5
                      className="d-flex justify-content-end mt-4"
                      style={{ fontSize: 22 }}
                    >
                      <b>~Darshana R.</b>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mt-5 w-100">
                  <div
                    className="p-4 text-light pt-5 pb-5"
                    style={{
                      backgroundColor: "#414141",
                      borderRadius: 10,
                    }}
                  >
                    <h5 style={{ fontWeight: "400" }}>
                      Loved this app! The courses are designed in a such a
                      manner that I am able to understand the concept & so
                      simple to use.
                    </h5>
                    <h5
                      className="d-flex justify-content-end mt-4"
                      style={{ fontSize: 22 }}
                    >
                      <b>~Navneet S.</b>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mt-5 w-100">
                  <div
                    className="p-4 text-light pt-5 pb-5"
                    style={{
                      backgroundColor: "#414141",
                      borderRadius: 10,
                    }}
                  >
                    <h5 style={{ fontWeight: "400" }}>
                      Very interesting and beautiful app. Loved the audio-video
                      quality of videos and the easy to use interface. Nice
                      teaching. Happy user!!
                    </h5>
                    <h5
                      className="d-flex justify-content-end mt-4"
                      style={{ fontSize: 22 }}
                    >
                      <b>~Meena M.</b>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mt-5 w-100">
                  <div
                    className="p-4 text-light pt-5 pb-5"
                    style={{
                      backgroundColor: "#414141",
                      borderRadius: 10,
                    }}
                  >
                    <h5 style={{ fontWeight: "400" }}>
                      It is very good app for learning music from very well
                      experienced music teachers.
                    </h5>
                    <h5
                      className="d-flex justify-content-end mt-4"
                      style={{ fontSize: 22 }}
                    >
                      <b>~Adarsh L.</b>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* FAQ */}
        <div className="row mt-0 mt-md-5 p-0">
          <div className="col-12">
            <h4 className="sectionHeading">Frequently Asked Questions</h4>
          </div>
          <div className="col-12 mt-4 mt-md-5">
            <div
              className="accordion"
              style={{
                borderRadius: 10,
              }}
              id="accordionExample"
            >
              <div
                className="card"
                style={{
                  borderRadius: 10,
                  borderWidth: 0,
                }}
              >
                <div
                  className="card-header"
                  style={{
                    backgroundColor: "#414141",
                  }}
                  id="headingOne"
                >
                  <h4 className="faqQuestion mb-0">
                    <p
                      className="text-left"
                      style={{
                        color: "white",
                        outline: "none",
                        outlineStyle: "none",
                        cursor: "pointer",
                      }}
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is My Edukos?
                    </p>
                  </h4>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body text-dark">
                    <h5 className="faqAnswer">
                      My edukos is an online platform where you can explore the
                      skill based courses & learn directly from the expert and
                      celebrities.
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="card mt-4"
                style={{
                  borderRadius: 10,
                  borderWidth: 0,
                }}
              >
                <div
                  className="card-header"
                  style={{
                    backgroundColor: "#414141",
                  }}
                  id="headingTwo"
                >
                  <h4 className="faqQuestion mb-0">
                    <p
                      style={{
                        color: "white",
                        outline: "none",
                        outlineStyle: "none",
                        cursor: "pointer",
                      }}
                      className="text-left collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Where can I watch?
                    </p>
                  </h4>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body text-dark">
                    <h5 className="faqAnswer">
                      You can learn anytime, anywhere, on your smartphone,
                      personal computer.
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="card mt-4"
                style={{
                  borderRadius: 10,
                  borderWidth: 0,
                }}
              >
                <div
                  className="card-header"
                  style={{
                    backgroundColor: "#414141",
                  }}
                  id="headingThree"
                >
                  <h4 className="faqQuestion mb-0">
                    <p
                      style={{
                        color: "white",
                        outline: "none",
                        outlineStyle: "none",
                        cursor: "pointer",
                      }}
                      className="text-left collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How much does it cost?
                    </p>
                  </h4>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body text-dark">
                    <h5 className="faqAnswer">
                      Prices varies from 999 to 1499. The validity of your
                      purchased course is for a life time.
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="card mt-4"
                style={{
                  borderRadius: 10,
                  borderWidth: 0,
                }}
              >
                <div
                  className="card-header"
                  style={{
                    backgroundColor: "#414141",
                  }}
                  id="headingThree"
                >
                  <h4 className="faqQuestion mb-0">
                    <p
                      style={{
                        color: "white",
                        outline: "none",
                        outlineStyle: "none",
                        cursor: "pointer",
                      }}
                      className="text-left collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What is My edukos community?
                    </p>
                  </h4>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body text-dark">
                    <h5 className="faqAnswer">
                      My Edukos community is a platform with various activities
                      and opportunities every month for artists all over the
                      world. we conduct activities like : Mini-monthly contests
                      which occur every month to month and on the basis of these
                      mini-monthly contests, the top three artists of every
                      contest of previous one year have to compete in the GRAND
                      EVENT OF "THE SHOW". FEATURING IN MOKSHA FESTIVAL, BIG
                      CASH PRIZE, MINIMUM 2 PAID EVENTS IN FUTURE, SIGN A SONG
                      WITH MOKSHA PRODUCTIONS, SCHOLARSHIP ON STUDIES FROM
                      ANGEL'S CONSERVATORY, OTHER ELECTRONIC ITEM PRIZES.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GIT form */}
        <GetInTouch />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.authReducer.userLoggedIn,
  };
};

export default connect(mapStateToProps)(Home);
