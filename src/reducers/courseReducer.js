const initState = {
  courseLoaded: false,
  courseDetails: null,
  instructorDetails: null,
  playingIndex: -1,
  videoURL: "",
  videoLoaded: false,
};

const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case "POPULATE_DETAILS":
      return {
        ...state,
        courseDetails: action.payload.courseDetails,
        instructorDetails: action.payload.instructorDetails,
        courseLoaded: true,
        // videoURL: action.payload.url,
        // playingIndex: 0,
      };
    case "SET_VIDEO_URL":
      return {
        ...state,
        playingIndex: action.payload.videoIndex,
        videoURL: action.payload.url,
        videoLoaded: true,
      };
    case "SET_TRAILER_URL":
      return {
        ...state,
        playingIndex: -1,
        videoURL: action.payload,
        videoLoaded: true,
      };
    default:
      return state;
  }
};

export default courseReducer;
