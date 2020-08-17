const initState = {
  courseLoaded: false,
  courseDetails: null,
  instructorDetails: null,
  playingIndex: -1,
  videoURL:
    "https://r2---sn-npoe7n7r.googlevideo.com/videoplayback?expire=1597176912&ei=8KcyX_6bKIWC0wW6m5iICg&ip=80.24.133.109&id=o-AJSQvXPUfuRBLBKLqsp1NvN3lQI2UvqWEUxG9ZIIiT-G&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=7341316&ratebypass=yes&dur=166.649&lmt=1595324575376244&fvip=2&fexp=23883098&c=WEB&txp=6216222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhALx5m4D5brwsAnxPpGdf1rE1L-2kHsM4clOxHULTCuLGAiEAobVZovfFppwdmPdMDdBGZSSvQP2fLcmK1odJhtPbun0%3D&video_id=LbHLNHsxu9Q&title=Acting+lessons+online+on+My+Edukos-+%23Letssikho&cm2rm=sn-h5q6s7l&req_id=8582308a86a5a3ee&redirect_counter=2&rm=sn-npoll7l&cms_redirect=yes&ipbypass=yes&mh=KH&mip=2405:205:1309:3faf:dd8c:4911:9630:2898&mm=34&mn=sn-npoe7n7r&ms=ltu&mt=1597155264&mv=m&mvi=2&pl=45&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAPuxvDvK3cPIhAK_Qx1EBfSJyZionC1jry515GAOXGseAiAE9HYBPjrhaxrrhpWtJ33jn0cMQU1Y4ClRar_gc4xDVw%3D%3D",
};

const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case "POPULATE_DETAILS":
      return {
        ...state,
        courseDetails: action.payload.courseDetails,
        instructorDetails: action.payload.instructorDetails,
        courseLoaded: true,
      };
    case "SET_VIDEO_URL":
      return {
        ...state,
        playingIndex: action.payload.videoIndex,
        videoURL: action.payload.url,
      };
    default:
      return state;
  }
};

export default courseReducer;
