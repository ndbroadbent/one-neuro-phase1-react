import React, { Component } from "react";
import { reduxForm } from "redux-form";
import FormAPI from "formapi";
import validate from "../validate";
import Button from "../components/Button";
import Appendix from "../components/Test/Appendix";

class WizardForm50Page extends Component {
  generatePDFTest = () => {
    console.log("Make submission go now!");
    const TEMPLATE_ID = "tpl_kbrXFcG2zFCHQTyrSQ";
    const pdfData = {
      "di-name": "Jane Smith",
      "di-age": "8"
    };
    const options = {
      data: pdfData
    };

    let formapiConfig = new FormAPI.Configuration();
    formapiConfig.apiTokenId = "api_test_nK62yQ9snkS4CQqJYA";
    formapiConfig.apiTokenSecret =
      "xO7QZdhq_CqdfJHdPx8wWqwZrwrncNO2I5LNvOZe6Pg";
    const formapiClient = new FormAPI.Client(formapiConfig);

    formapiClient.generatePDF(TEMPLATE_ID, options, function(error, response) {
      if (error) throw error;

      const submission = response.submission;

      console.log(response.status); // "success"
      console.log(submission.id); // "sub_********"
      console.log(submission.state); // "processed"
      console.log(submission.download_url); // URL to download the PDF
    });
  };

  render() {
    //const { handleSubmit } = this.props;
    //console.log("Wizard50 props, ", props);
    return (
      <form className="col" onSubmit={this.generatePDFTest}>
        <Appendix values={this.props} />
        <Button onClick={this.generatePDFTest} buttonLabel="OK" />
      </form>
    );
  }
}

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm50Page);
