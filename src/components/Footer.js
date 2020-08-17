import React from "react";
import "../styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* end page quote and playstore icons */}
        <div className="row mt-5">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center mt-5">
            <div
              style={{
                background: "#fff",
                height: 5,
                borderRadius: 5,
                width: 100,
              }}
            ></div>
            <h2 className="text-center mt-4 companyMoto">
              Never let your dreams die
            </h2>
            <div>
              <h4
                className="text-muted text-center mt-4 appDownloadText"
                style={{ width: 480 }}
              >
                DOWNLOAD OUR APP FROM THE STORE AND NEVER STOP LEARNING
              </h4>
            </div>
            <div
              className="d-flex justify-content-center appStoreLinks mt-5"
              style={{ width: 480 }}
            >
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
                  style={{ height: 60 }}
                />
              </a> */}
            </div>
          </div>
        </div>

        {/* social media handles */}
        <div className="row mt-5 justify-content-center">
          <hr
            className="w-100 bg-dark mt-4"
            style={{ height: 1, position: "absolute", left: 0 }}
          />
          <div className="col-8 col-md-3 mt-5 d-flex justify-content-between">
            <a href="#">
              <i
                className="fa fa-facebook-square socialIcon"
                style={{ color: "gray" }}
                aria-hidden="true"
              ></i>
            </a>
            <a href="#">
              <i
                className="fa fa-youtube-play socialIcon"
                style={{ color: "gray" }}
                aria-hidden="true"
              ></i>
            </a>
            <a href="#">
              <i
                className="fa fa-instagram socialIcon"
                style={{ color: "gray" }}
                aria-hidden="true"
              ></i>
            </a>
            <a href="#">
              <i
                className="fa fa-twitter socialIcon"
                style={{ color: "gray" }}
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>

        {/* extra links */}
        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-between">
            <a href="#" style={{ color: "none" }}>
              <span
                className="text-muted footerExtraLinks"
                style={{ fontSize: 14 }}
              >
                ABOUT
              </span>
            </a>
            <a href="#">
              <span
                className="text-muted footerExtraLinks"
                style={{ fontSize: 14 }}
              >
                TERMS OF SERVICE
              </span>
            </a>
            <a href="#">
              <span
                className="text-muted footerExtraLinks"
                style={{ fontSize: 14 }}
              >
                PRIVACY POLICY
              </span>
            </a>
            <a href="#">
              <span
                className="text-muted footerExtraLinks"
                style={{ fontSize: 14 }}
              >
                CONTACT US
              </span>
            </a>
          </div>
        </div>

        {/* intellectual mark */}
        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <p className="text-muted" style={{ fontSize: 11 }}>
              COPYRRIGHT @MYEDUKOS PVT LTD
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
