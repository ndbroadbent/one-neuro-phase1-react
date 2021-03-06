import React from "react";
import { Field } from "redux-form";
import "./formCard.css";
import "../../../app.css";
import MaterialIcon from "react-google-material-icons";

function handleTick(event) {
  const tar = event.currentTarget;
  let val = tar.parentNode.children[1].value;
  const addDeleteEl = tar.children[1];
  if (val !== "") {
    tar.parentNode.classList.add("question__checkbox--selected");
    addDeleteEl.classList.add("question__key-text--visible");
  } else {
    tar.parentNode.classList.remove("question__checkbox--selected");
    addDeleteEl.classList.remove("question__key-text--visible");
  }
}

function handleDelete(event) {
  const tar = event.currentTarget;
  let val = tar.parentNode.parentNode.parentNode.children[1].value;
  console.log("value = ", val);
  const addDeleteEl = tar.parentNode,
    checkboxes = tar.parentNode.parentNode.parentNode.querySelectorAll("input");
  // console.log("Checkboxes", checkboxes);
  if (val !== "") {
    addDeleteEl.classList.remove("question__checkbox--selected");
    addDeleteEl.classList.remove("question__key-text--visible");
    tar.parentNode.parentNode.parentNode.children[1].value = "";
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
    tar.parentNode.parentNode.parentNode.remove();
  }
}

const FormCardBrotherSister = ({ fields }) => {
  return (
    <div className="question">
      <ul className="question__cards flex--wrap">
        <div className="question__choice--radio-shield" />
        <li className="question__card question__cards__button flex--center-vertical question__form-card">
          <button
            type="button"
            onClick={() => fields.push({})}
            className="flex--col-vertical-center flex--wrap"
          >
            <MaterialIcon icon="add_box" size={36} />
            <span>New Record</span>
          </button>
          <div className="question__bg" />
        </li>
        {fields.map((card, index) => (
          <li
            key={index + 1}
            className="question__card question__form-card flex--col flex--center-vertical flex--space-between"
          >
            <div className="question__tick-wrap">
              <MaterialIcon icon="check" />
            </div>
            <Field
              name={`${card}.age`}
              type="text"
              component="input"
              className="cardTextInput"
              placeholder="Age"
            />
            <div className="question-card__radio">
              <Field
                name={`${card}.gender`}
                type="radio"
                component="input"
                value="Girl"
                className="radio-visible"
                id={`bs-choice-${index}-${index}`}
              />
              <label htmlFor={`bs-choice-${index}-${index}`}>Girl</label>
            </div>
            <div className="question-card__radio">
              <Field
                name={`${card}.gender`}
                type="radio"
                component="input"
                value="Boy"
                className="radio-visible"
                id={`bs-choice-${index}-${index + 1}`}
              />
              <label htmlFor={`bs-choice-${index}-${index + 1}`}>Boy</label>
            </div>
            <div className="question-card__radio">
              <Field
                name={`${card}.relationship`}
                type="radio"
                component="input"
                value="Sister"
                className="radio-visible"
                id={`bs-choice-${index}-${index + 2}`}
              />
              <label htmlFor={`bs-choice-${index}-${index + 2}`}>Sister</label>
            </div>
            <div className="question-card__radio">
              <Field
                name={`${card}.relationship`}
                type="radio"
                component="input"
                value="Brother"
                className="radio-visible"
                id={`bs-choice-${index}-${index + 3}`}
              />
              <label htmlFor={`bs-choice-${index}-${index + 3}`}>Brother</label>
            </div>
            <div className="question-card__radio">
              <Field
                name={`${card}.home`}
                type="radio"
                component="input"
                value="Yes"
                className="radio-visible"
                id={`bs-choice-${index}-${index + 4}`}
              />
              <label htmlFor={`bs-choice-${index}-${index + 4}`}>
                Lives at home
              </label>
            </div>
            <div className="question-card__radio">
              <Field
                name={`${card}.home`}
                type="radio"
                component="input"
                value="No"
                className="radio-visible"
                id={`bs-choice-${index}-${index + 5}`}
              />
              <label htmlFor={`bs-choice-${index}-${index + 5}`}>
                Not at home
              </label>
            </div>
            <div
              className="question__key-label flex flex--center-vertical"
              onClick={handleTick}
            >
              <div className="question__key">
                <span>{index + 1}</span>
              </div>
              <div className="question__key-text">
                <span>Add</span>
                <span onClick={handleDelete}>Delete</span>
              </div>
            </div>
            <div className="question__bg" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormCardBrotherSister;
