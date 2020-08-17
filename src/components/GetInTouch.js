import React from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { ToastsStore } from "react-toasts";
import sheetsCredentials from "../config/sheetsConfig";
import validator from "validator";

const SPREADSHEET_ID = sheetsCredentials.spreadsheetId;
const SHEET_ID = sheetsCredentials.sheetId;
const CLIENT_EMAIL = sheetsCredentials.client_email;
const PRIVATE_KEY = sheetsCredentials.private_key;

class GetInTouch extends React.Component {
  componentDidMount() {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    this.setState({
      doc,
    });
  }

  state = {
    doc: null,
    queryEmail: "",
    queryText: "",
    sheetLoaded: false,
    addingQuery: false,
  };

  addQuery = async (row) => {
    try {
      this.setState({
        addingQuery: true,
      });
      await this.state.doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      await this.state.doc.loadInfo();

      const sheet = this.state.doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);
      this.setState(
        {
          addingQuery: false,
        },
        () => {
          ToastsStore.success("Recieved your query, We'll reply shortly");
        }
      );
    } catch (e) {
      this.setState({
        addingQuery: false,
      });
      ToastsStore.error("Error recieving your query, TRY AGAIN");
    }
  };
  render() {
    return (
      <div className="row mt-4 mt-md-5 justify-content-center">
        <div className="col-12 col-md-9 mt-4">
          <h2 className="d-flex justify-content-center align-items-center GITHeading">
            <span
              className="material-icons mr-3 GITEmailIcon"
              style={{ fontSize: 35 }}
            >
              email
            </span>
            Get in Touch
          </h2>
          <form className="mt-4">
            <div className="form-group">
              <label
                htmlFor="formGroupExampleInput"
                style={{ fontSize: 25 }}
                className="GITLabel"
              >
                Your Email
              </label>
              <input
                required
                type="email"
                className="form-control form-control-md-lg"
                style={{ borderRadius: 10 }}
                value={this.state.queryEmail}
                onChange={(e) => {
                  this.setState({
                    queryEmail: e.target.value,
                  });
                }}
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="formGroupExampleInput2"
                style={{ fontSize: 25 }}
                className="GITLabel"
              >
                Type your Query
              </label>
              <textarea
                required
                className="form-control"
                id="exampleFormControlTextarea1"
                value={this.state.queryText}
                rows="3"
                onChange={(e) => {
                  this.setState({
                    queryText: e.target.value,
                  });
                }}
                style={{ borderRadius: 10 }}
              ></textarea>
            </div>
            <div className="w-100 d-flex justify-content-end mt-4">
              {this.state.doc !== null ? (
                <button
                  className="btn text-light pr-4 pl-4 pr-md-5 pl-md-5 btn btn-md-lg mt-md-2"
                  disabled={this.state.addingQuery}
                  type="submit"
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#414141",
                  }}
                  onClick={(e) => {
                    if (
                      this.state.queryEmail.trim() === "" ||
                      !validator.isEmail(this.state.queryEmail) ||
                      this.state.queryText.trim() === ""
                    ) {
                      ToastsStore.error("Please enter correct values");
                      return;
                    }
                    e.preventDefault();
                    this.addQuery({
                      EMAIL: this.state.queryEmail,
                      QUERY: this.state.queryText,
                    });
                  }}
                >
                  Send
                </button>
              ) : (
                <div
                  class="spinner-grow text-dark
               mb-2"
                  role="status"
                >
                  <span class="sr-only">Loading...</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GetInTouch;
