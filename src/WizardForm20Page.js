import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import FormCardStacked from "./components/Card/FormCard/FormCardStacked";
import ButtonToggle from "./components/ButtonToggle";

const WizardForm20Page = props => {
  const { handleSubmit } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Medical" titleRegular="history" />
        <ButtonToggle buttonToggleLabel="disable" />
      </div>
      <div className="flex">
        <Field
          name="mh-illnesses-group"
          component={FormCardStacked}
          cardInfo={[
            {
              cardName: "mh-measels",
              cardLabel: "Measels?",
              cardType: "month",
              cardValue: "2018-05",
              cardMinValue: "2018-04",
              tabOrder: "1"
            },
            {
              cardName: "mh-rheumatic-fever",
              cardLabel: "Rheumatic fever?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "2"
            },
            {
              cardName: "mh-german-measels",
              cardLabel: "German measels?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "3"
            },
            {
              cardName: "mh-diptheria",
              cardLabel: "Diptheria?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "4"
            },
            {
              cardName: "mh-mumps",
              cardLabel: "Mumps?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "5"
            },
            {
              cardName: "mh-understand-words",
              cardLabel: "Understand first words?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "6"
            },
            {
              cardName: "mdh-meningitis",
              cardLabel: "Meningitis?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "7"
            },
            {
              cardName: "mh-chicken-pox",
              cardLabel: "Chicken pox?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "8"
            },
            {
              cardName: "mh-encephalitis",
              cardLabel: "Encephalitis?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "9"
            },
            {
              cardName: "mh-tuberculosis",
              cardLabel: "Tuberculosis?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "10"
            },
            {
              cardName: "mh-anemia",
              cardLabel: "Anemia?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "11"
            },
            {
              cardName: "mh-whooping-cough",
              cardLabel: "Whooping cough?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "12"
            },
            {
              cardName: "mh-fever-104",
              cardLabel: "Fever above 104 &deg;?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "13"
            },
            {
              cardName: "mh-scarlet-fever",
              cardLabel: "Scarlet fever?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "14"
            },
            {
              cardName: "mh-broken-bones",
              cardLabel: "Broken bones?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "15"
            },
            {
              cardName: "mh-concussion",
              cardLabel: "Concussion?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "16"
            },
            {
              cardName: "mh-coma-loss-consciousness",
              cardLabel: "Coma or loss of consiousness?",
              cardType: "month",
              cardValue: "2018-05",
              tabOrder: "17"
            }
          ]}
          label="Please check the illnesses this child has had"
          labelBold="and indicate the months/years of age"
          classes="question"
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
})(WizardForm20Page);