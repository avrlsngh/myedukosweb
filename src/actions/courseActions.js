import { courses, instructors } from "../constants";
import { storage } from "../config/firebaseConfig";

export const populateCourse = (courseParams) => {
  return (dispatch, getState) => {
    const courseDetails = courses[courseParams.courseName];
    const instructorDetails = instructors[courseDetails.instructorId];
    dispatch({
      type: "POPULATE_DETAILS",
      payload: { courseDetails, instructorDetails },
    });
    // const pathRef = storage.refFromURL(
    //   courses[courseParams.courseName].lessonURL[0]
    // );
    // pathRef.getDownloadURL().then((url) => {

    // });
  };
};

export const setVideoURL = (videoParams) => (dispatch, getState) => {
  const pathRef = storage.refFromURL(
    courses[videoParams.course].lessonURL[videoParams.videoIndex]
  );
  pathRef.getDownloadURL().then(function (url) {
    dispatch({
      type: "SET_VIDEO_URL",
      payload: { videoIndex: videoParams.videoIndex, url: url },
    });
    if (videoParams.autoplayVideo) {
      let videoPlayer = document.getElementsByTagName("video")[0];
      videoPlayer.addEventListener("loadeddata", () => {
        videoPlayer.play();
      });
    }
  });
};

export const setTrailerURL = (trailerParams) => (dispatch, getState) => {
  dispatch({
    type: "SET_TRAILER_URL",
    payload: trailerParams.trailerURL,
  });
};
