import React from "react";
import { Field } from "redux-form";
import "./descriptionCheckboxCardStyles.css";
import "../../../app.css";
import "../../Card/cardStyles.css";
import { randomId } from "../../../utils/Helpers";
import MaterialIcon from "react-google-material-icons";

function handleTick(event) {
  const tar = event.currentTarget;
  tar.classList.toggle("question__checkbox--selected");
}

function handleTextboxTick(event) {
  const tar = event.currentTarget;
  tar.parentNode.parentNode.classList.add("question__checkbox--selected");
}

const DescriptionCheckboxCard = ({
  label,
  labelBold,
  labelLast,
  checkboxInfo,
  classes,
  liClasses,
  cardName,
  cardNameDescription,
  meta: { touched, error }
}) => {
  return (
    <div className={classes}>
      <label>
        {label} <strong>{labelBold}</strong> {labelLast}?
      </label>
      <div className="question__input">
        <div className="question__multiple-choice">
          Select all that apply please
        </div>
        {/* Checkboxes */}
        <ul className="question__choices question__checkboxCard flex--wrap">
          <div className="question__choice--radio-shield" />
          {checkboxInfo.map(card => (
            <li
              key={randomId()}
              className={
                card.liClasses == null
                  ? "question__choice"
                  : `${card.liClasses} question__choice`
              }
              tabIndex={card.tabOrder}
              onClick={handleTick}
            >
              <Field
                name={card.cardNameCheckbox}
                type="checkbox"
                component="input"
              />

              <div className="question__tick-wrap">
                <MaterialIcon icon="check" />
              </div>
              {card.thumbnail === undefined ? null : (
                <div className="question__image-wrap">
                  <img src={card.thumbnail} alt={card.thumbnailAlt} />
                </div>
              )}
              <div className="question__text-wrap flex flex--center-vertical">
                <div className="question__label">
                  <div className="question__letter">
                    <span>{card.cardKey}</span>
                  </div>
                </div>
                <div className="question__text-label">{card.cardLabel}</div>
                <Field
                  name={card.cardNameDescription}
                  component="input"
                  type="text"
                  // onClick={handleTextboxTick}
                  onKeyPress={handleTextboxTick}
                />
              </div>
              <div className="question__bg" />
            </li>
          ))}
          {touched && error && <span>{error}</span>}
        </ul>
      </div>
    </div>
  );
};

export default DescriptionCheckboxCard;
