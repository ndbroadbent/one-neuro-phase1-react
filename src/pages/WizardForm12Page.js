import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import SectionTitle from "../components/SectionTitle";
import RadioCard from "../components/Card/RadioCard/RadioCard";
import Button from "../components/Button";
import ButtonToggle from "../components/ButtonToggle";

const WizardForm12Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleFirst="Child's" titleBold="residence" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: "cr-residence",
              cardKey: "A",
              cardLabel: "Apartment",
              tabOrder: "1"
            },
            {
              cardName: "cr-residence",
              cardKey: "B",
              cardLabel: "Single-family home",
              tabOrder: "2"
            },
            {
              cardName: "cr-residence",
              cardKey: "C",
              cardLabel: "Townhome",
              tabOrder: "3"
            },
            {
              cardName: "cr-residence",
              cardKey: "D",
              cardLabel: "Other",
              tabOrder: "4"
            }
          ]}
          label="Where does this child"
          labelBold="live"
          name="cr-residence-group"
          classes="question question--thumbless"
        />
      </div>
      <div className="flex">
        <Field
          component={RadioCard}
          cardInfo={[
            {
              cardName: "cr-residence-length",
              cardLabel: "1",
              tabOrder: "5"
            },
            {
              cardName: "cr-residence-length",
              cardLabel: "2",
              tabOrder: "6"
            },
            {
              cardName: "cr-residence-length",
              cardLabel: "3",
              tabOrder: "7"
            },
            {
              cardName: "cr-residence-length",
              cardLabel: "4",
              tabOrder: "8"
            },
            {
              cardName: "cr-residence-length",
              cardLabel: "5",
              tabOrder: "9"
            },
            {
              cardName: "cr-residence-length",
              cardLabel: "6",
              tabOrder: "10"
            }
          ]}
          label="How many"
          labelBold="years living"
          labelLast="at the current address"
          name="cr-residence-length-group"
          classes="question question--thumbless question--numbers"
        />
      </div>

      <Button onClick={handleSubmit} buttonLabel="OK" />
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardForm12Page);
