import React from "react";

class NotFoundScreen extends React.Component {
  render() {
    return (
      <div className="container pt-3 pb-3">
        <div
          className="row"
          style={{
            height: "100%",
          }}
        >
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <i
              className="fa fa-chain-broken ml-2"
              style={{
                fontSize: 150,
                color: "#ff0000",
              }}
            />
            <h1
              className="text-center"
              style={{
                fontSize: 108,
              }}
            >
              404
            </h1>
            <h2 className="text-center text-muted">
              Sorry, the page you're looking for doesn't exist.
            </h2>
            <button
              className="btn btn-lg btn-light mt-3"
              style={{
                borderRadius: 10,
              }}
              onClick={() => {
                window.location = "/";
              }}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundScreen;
