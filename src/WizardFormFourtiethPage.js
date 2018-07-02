import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import SectionTitle from "./components/SectionTitle";
import Button from "./components/Button";
import TextQuestion from "./components/TextQuestion";
import RadioCard from "./components/Card/RadioCard/RadioCard";

const WizardFormFourtiethPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form className="col" onSubmit={handleSubmit}>
      <div className="flex">
        <SectionTitle titleBold="Educational" titleRegular="history" />
        <div className="toggleVis">
          <div className="btn__hover" />
          <span>disable</span>
        </div>
      </div>
      <Field
        name="eh-daycare-yes-no"
        component={RadioCard}
        cardInfo={[
          {
            cardName: "eh-daycare",
            cardKey: "A",
            cardLabel: "Yes",
            tabOrder: "1"
          },
          {
            cardName: "eh-daycare",
            cardKey: "B",
            cardLabel: "No",
            tabOrder: "2"
          }
        ]}
        label="Does or did this child"
        labelBold="attend"
        labelLast="preschool/daycare"
        classes="question question--thumbless"
      />
      <Field
        alt="Ghost"
        component={TextQuestion}
        label="Does this child have"
        labelBold="fears"
        name="bt-fears"
        src="img/icons-ghost.svg"
        tabOrder="13"
        type="input"
        classes="question"
      />
      <div className="flex">
        <Field
          alt="Birthday cake"
          component={TextQuestion}
          label="At what"
          labelBold="age"
          name="eh-daycare-age"
          src="img/icons-birthday-cake.svg"
          tabOrder="3"
          type="input"
          classes="question grid__half"
        />
        <Field
          alt="Clock"
          component={TextQuestion}
          label="Amount of"
          labelBold="time"
          labelLast="per week"
          name="eh-daycare-time"
          src="img/icons-stopwatch.svg"
          tabOrder="4"
          type="input"
          classes="question grid__half"
        />
      </div>
      <Field
        alt="Calendar"
        component={TextQuestion}
        label=""
        labelBold="Days"
        labelLast="per week"
        name="eh-daycare-days"
        src="img/icons-calendar-large.svg"
        tabOrder="5"
        type="input"
        classes="question grid__half"
      />
      <Field
        alt="Bomb"
        component={TextQuestion}
        label="Any"
        labelBold="problems"
        labelLast="in preschool/daycare"
        name="eh-daycare-problems"
        src="img/icons-bomb.svg"
        tabOrder="6"
        type="input"
        classes="question"
      />
      <Field
        name="eh-kindergarten-yes-no"
        component={RadioCard}
        cardInfo={[
          {
            cardName: "eh-kindergarten",
            cardKey: "A",
            cardLabel: "Yes ",
            tabOrder: "7"
          },
          {
            cardName: "eh-kindergarten",
            cardKey: "B",
            cardLabel: "No ",
            tabOrder: "8"
          }
        ]}
        label="Does or did this child"
        labelBold="attend"
        labelLast="kindergarten"
        classes="question question--thumbless"
      />
      <Field
        alt="Bomb"
        component={TextQuestion}
        label="Any"
        labelBold="problems"
        labelLast="in kindergarten"
        name="eh-kindergarten-problems"
        src="img/icons-bomb.svg"
        tabOrder="9"
        type="input"
        classes="question"
      />

      <Button onClick={handleSubmit} buttonLabel="OK" />

      <button type="button" className="previous" onClick={previousPage}>
        Previous
      </button>
    </form>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFourtiethPage);
