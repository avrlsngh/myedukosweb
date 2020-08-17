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
  };
};

export const setVideoURL = (course, videoIndex) => {
  console.log("course name: ", course, videoIndex);
  return (dispatch, getState) => {
    console.log("doing dispatch");
    const pathRef = storage.refFromURL(courses[course].lessonURL[videoIndex]);
    pathRef.getDownloadURL().then((url) => {
      console.log(url);
      dispatch({
        type: "SET_VIDEO_URL",
        payload: { videoIndex, url },
      });
    });
  };
};
