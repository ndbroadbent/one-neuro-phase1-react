import React from "react";
import { Field } from "redux-form";
import "./formCard.css";
import "../../../app.css";
import "../../Card/cardStyles.css";
import RequiredText from "../../Required/RequiredText";
import { randomId } from "../../../utils/Helpers";
import MaterialIcon from "react-google-material-icons";

function handleTextboxTick(event) {
  const tar = event.currentTarget,
    addDeleteEl = tar.nextSibling.children[1],
    requiredText = tar.nextSibling.nextSibling;
  let val = tar.value;
  if (val !== "") {
    tar.parentNode.classList.add("question__checkbox--selected");
    addDeleteEl.classList.add("question__key-text--visible");
    requiredText.classList.remove("question__required-text--visible");
  } else {
    tar.parentNode.classList.remove("question__checkbox--selected");
    addDeleteEl.classList.remove("question__key-text--visible");
  }
}

function handleRequired(event) {
  const tar = event.currentTarget,
    requiredText = tar.nextSibling;
  let val = tar.parentNode.querySelector("input").value;
  if (val !== "") {
    requiredText.classList.remove("question__required-text--visible");
  } else {
    requiredText.classList.add("question__required-text--visible");
  }
}

function handleDelete(event) {
  event.stopPropagation();
  const tar = event.currentTarget;
  let val = tar.parentNode.parentNode.previousSibling.value;
  const addDeleteEl = tar.parentNode;
  console.log("input = ", tar.parentNode.parentNode.previousSibling.value);
  if (val !== "") {
    addDeleteEl.parentNode.parentNode.classList.remove(
      "question__checkbox--selected"
    );
    addDeleteEl.classList.remove("question__key-text--visible");
    tar.parentNode.parentNode.previousSibling.value = "";
  }
  document
    .querySelector(".question__required-text")
    .classList.remove("question__required-text--visible");
}

const FormCardStacked = ({
  label,
  labelBold,
  labelLast,
  cardInfo,
  classes,
  meta: { touched, error }
}) => {
  return (
    <div className={classes}>
      <label>
        {label} <strong>{labelBold}</strong> {labelLast}?
      </label>
      <div className="question__multiple-choice">
        Select all that apply please
      </div>
      {/* Cards */}
      <ul className="question__cards flex--wrap flex--stretch-vertical">
        <div className="question__choice--radio-shield" />
        {cardInfo.map((card, index) => (
          <li
            key={randomId()}
            className="question__card question__form-card flex--col question__card--vertical-center flex--center-vertical"
            tabIndex={card.tabOrder}
          >
            <div className="question__tick-wrap">
              <MaterialIcon icon="check" />
            </div>
            {card.thumbnail === undefined ? null : (
              <div className="question__image-wrap">
                <img src={card.thumbnail} alt={card.thumbnailAlt} />
              </div>
            )}
            <label className="cardLabel">{card.cardLabel}</label>
            <Field
              name={card.cardName}
              component="input"
              type={undefined ? "text" : card.cardType}
              value={undefined ? null : card.cardValue}
              min={undefined ? null : card.cardMinValue}
              className="cardTextInput"
              placeholder={card.cardPlaceholder}
              onKeyUp={handleTextboxTick}
            />
            <div
              className="question__key-label flex flex--center-vertical"
              onClick={handleRequired}
            >
              <div className="question__key">
                <span>{index + 1}</span>
              </div>
              <div className="question__key-text">
                <span>Add</span>
                <span onClick={handleDelete}>Delete</span>
              </div>
            </div>
            <RequiredText requiredText="Enter an age above :)" />
            <div className="question__bg" />
          </li>
        ))}
        {touched && error && <span>{error}</span>}
      </ul>
    </div>
  );
};

export default FormCardStacked;
