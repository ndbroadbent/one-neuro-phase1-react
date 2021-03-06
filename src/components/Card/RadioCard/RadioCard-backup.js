import React, { Component } from "react";
import "../cardStyles.css";
import "./RadioCard.css";
import "../../../app.css";
import MaterialIcon from "react-google-material-icons";
import { randomId } from "../../../utils/Helpers";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

class RadioCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: ""
    };
  }

  handleShow = cardKey => {
    console.log("Fired!", cardKey);
    if (cardKey === "1") {
      console.log("cardkey = 1");
      this.props.showLetterFormat();
    } else if (cardKey === "2") {
      this.props.showDomainBased();
    }
  };

  handleTick = () => {
    this.setState(prevState => {
      return { isChecked: !prevState.isChecked };
    });
  };
  render() {
    const {
      label,
      labelBold,
      labelLast,
      cardInfo,
      classes,
      meta: { touched, error }
    } = this.props;

    return (
      <div className={classes}>
        <label hidden={label == null ? true : false}>
          {label} <strong>{labelBold}</strong> {labelLast}?
        </label>
        <div className="question__input">
          <div className="question__single-choice">Pick one please</div>
          {/* Radio Buttons */}
          <ul className="question__choices flex--wrap">
            <div className="question__choice--radio-shield" />
            {cardInfo.map(card => (
              <li
                onClick={() => this.handleShow(card.cardKey)}
                key={randomId()}
                className={
                  this.props.ReduxValue1 === card.cardLabel ||
                  this.props.ReduxValue2 === card.cardLabel ||
                  this.props.ReduxValue3 === card.cardLabel ||
                  this.props.ReduxValue4 === card.cardLabel ||
                  this.props.ReduxValue5 === card.cardLabel ||
                  this.props.ReduxValue6 === card.cardLabel ||
                  this.props.ReduxValue7 === card.cardLabel ||
                  this.props.ReduxValue8 === card.cardLabel ||
                  this.props.ReduxValue9 === card.cardLabel ||
                  this.props.ReduxValue10 === card.cardLabel ||
                  this.props.ReduxValue11 === card.cardLabel ||
                  this.props.ReduxValue12 === card.cardLabel ||
                  this.props.ReduxValue13 === card.cardLabel ||
                  this.props.ReduxValue14 === card.cardLabel ||
                  this.props.ReduxValue15 === card.cardLabel ||
                  this.props.ReduxValue16 === card.cardLabel ||
                  this.props.ReduxValue17 === card.cardLabel ||
                  this.props.ReduxValue18 === card.cardLabel ||
                  this.props.ReduxValue19 === card.cardLabel ||
                  this.props.ReduxValue20 === card.cardLabel ||
                  this.props.ReduxValue21 === card.cardLabel ||
                  this.props.ReduxValue22 === card.cardLabel ||
                  this.props.ReduxValue23 === card.cardLabel ||
                  this.props.ReduxValue24 === card.cardLabel ||
                  this.props.ReduxValue25 === card.cardLabel ||
                  this.props.ReduxValue26 === card.cardLabel ||
                  this.props.ReduxValue27 === card.cardLabel ||
                  this.props.ReduxValue28 === card.cardLabel ||
                  this.props.ReduxValue29 === card.cardLabel ||
                  this.props.ReduxValue30 === card.cardLabel ||
                  this.props.ReduxValue31 === card.cardLabel ||
                  this.props.ReduxValue32 === card.cardLabel ||
                  this.props.ReduxValue33 === card.cardLabel ||
                  this.props.ReduxValue34 === card.cardLabel ||
                  this.props.ReduxValue35 === card.cardLabel ||
                  this.props.ReduxValue36 === card.cardLabel ||
                  this.props.ReduxValue37 === card.cardLabel ||
                  this.props.ReduxValue38 === card.cardLabel ||
                  this.props.ReduxValue39 === card.cardLabel ||
                  this.props.ReduxValue40 === card.cardLabel ||
                  this.props.ReduxValue41 === card.cardLabel ||
                  this.props.ReduxValue42 === card.cardLabel ||
                  this.props.ReduxValue43 === card.cardLabel ||
                  this.props.ReduxValue44 === card.cardLabel ||
                  this.props.ReduxValue45 === card.cardLabel ||
                  this.props.ReduxValue46 === card.cardLabel ||
                  this.props.ReduxValue47 === card.cardLabel ||
                  this.props.ReduxValue48 === card.cardLabel ||
                  this.props.ReduxValue49 === card.cardLabel ||
                  this.props.ReduxValue50 === card.cardLabel ||
                  this.props.ReduxValue51 === card.cardLabel ||
                  this.props.ReduxValue52 === card.cardLabel ||
                  this.props.ReduxValue53 === card.cardLabel ||
                  this.props.ReduxValue54 === card.cardLabel ||
                  this.props.ReduxValue55 === card.cardLabel
                    ? "question__choice question__checkbox--selected"
                    : "question__choice"
                }
                tabIndex={card.tabOrder}
                onChange={this.handleTick}
              >
                <Field
                  name={card.cardName}
                  type="radio"
                  component="input"
                  value={card.cardLabel}
                />
                <div className="question__tick-wrap">
                  <MaterialIcon icon="check" />
                </div>
                {card.thumbnail === undefined ? null : (
                  <div className="question__image-wrap">
                    <img src={card.thumbnail} alt={card.thumbnailAlt} />
                  </div>
                )}
                {card.cardText == null ? null : (
                  <p className="question__choice__radioCard-text">
                    {card.cardText}
                  </p>
                )}
                <div className="question__text-wrap flex flex--center-vertical">
                  <div className="question__label">
                    <div className="question__letter">
                      <span>{card.cardKey}</span>
                    </div>
                  </div>
                  <div className="question__text-label">{card.cardLabel}</div>
                </div>
                <div className="question__bg" />
              </li>
            ))}
            {touched && error && <span>{error}</span>}
          </ul>
        </div>
      </div>
    );
  }
}

// Decorate with redux-form
RadioCard = reduxForm({
  form: "wizard" // a unique identifier for this form
})(RadioCard);

// Decorate with connect to read form values
const selector = formValueSelector("wizard"); // <-- same as form name
RadioCard = connect(state => {
  // can select values individually
  const ReduxValue1 = selector(state, "di-gender");
  const ReduxValue2 = selector(state, "di-handedness");
  const ReduxValue3 = selector(state, "paq-guardian");
  const ReduxValue4 = selector(state, "bh-stepmother");
  const ReduxValue5 = selector(state, "bh-stepfather");
  const ReduxValue6 = selector(state, "bh-other-parent-stepparent");
  const ReduxValue7 = selector(state, "bh-other-parent-stepparent-guardian");
  const ReduxValue8 = selector(state, "fh-closeness");
  const ReduxValue9 = selector(state, "fh-custody");
  const ReduxValue10 = selector(state, "fh-visitation");
  const ReduxValue11 = selector(state, "fh-experienced");
  const ReduxValue12 = selector(state, "cr-residence");
  const ReduxValue13 = selector(state, "cr-residence-length");
  const ReduxValue14 = selector(state, "fr-agree-discipline");
  const ReduxValue15 = selector(state, "fr-disciplinarian");
  const ReduxValue16 = selector(state, "fr-grandparent-frequency");
  const ReduxValue17 = selector(state, "fr-education-level");
  const ReduxValue18 = selector(state, "mdh-hospital-birth");
  const ReduxValue19 = selector(state, "mdh-mother-length-hospital");
  const ReduxValue20 = selector(state, "mdh-child-length-hospital");
  const ReduxValue21 = selector(state, "mdh-planned-pregnancy");
  const ReduxValue22 = selector(state, "mdh-dr-care");
  const ReduxValue23 = selector(state, "mdh-total-pregnancies");
  const ReduxValue24 = selector(state, "mdh-change-writing-hand");
  const ReduxValue25 = selector(state, "md-neurological-meds");
  const ReduxValue26 = selector(state, "md-neurological-tranquilizer");
  const ReduxValue27 = selector(state, "md-neurological-adhd-meds");
  const ReduxValue28 = selector(state, "f-relating-problems");
  const ReduxValue29 = selector(state, "f-fight");
  const ReduxValue30 = selector(state, "f-younger-friends");
  const ReduxValue31 = selector(state, "f-making-friends");
  const ReduxValue32 = selector(state, "f-alone");
  const ReduxValue33 = selector(state, "f-neighborhood-friends");
  const ReduxValue34 = selector(state, "eh-daycare");
  const ReduxValue35 = selector(state, "eh-kindergarten");
  const ReduxValue36 = selector(state, "rda-religon-affiliation");
  const ReduxValue37 = selector(state, "rda-religon-involvement");
  const ReduxValue38 = selector(state, "rda-religon-building");
  const ReduxValue39 = selector(state, "tor-format");
  const ReduxValue40 = selector(state, "mdh-breast-fed");
  const ReduxValue41 = selector(state, "mdh-bottle-fed");
  const ReduxValue42 = selector(state, "mdh-bed-wetting");
  const ReduxValue43 = selector(state, "mdh-bed-soiling");
  const ReduxValue44 = selector(state, "mdh-bed-wetting-medical-reasons");
  const ReduxValue45 = selector(state, "eh-changed-schools");
  const ReduxValue46 = selector(state, "eh-repeat-grade");
  const ReduxValue47 = selector(state, "eh-grade-skip");
  const ReduxValue48 = selector(state, "eh-difficulty-reading");
  const ReduxValue49 = selector(state, "eh-difficulty-math");
  const ReduxValue50 = selector(state, "eh-poor-grades");
  const ReduxValue51 = selector(state, "eh-special-ed");
  const ReduxValue52 = selector(state, "eh-special-ed-current");
  const ReduxValue53 = selector(state, "eh-dislikes-school");
  const ReduxValue54 = selector(state, "eh-absent");
  const ReduxValue55 = selector(state, "eh-teacher-concerns");

  return {
    ReduxValue1,
    ReduxValue2,
    ReduxValue3,
    ReduxValue4,
    ReduxValue5,
    ReduxValue6,
    ReduxValue7,
    ReduxValue8,
    ReduxValue9,
    ReduxValue10,
    ReduxValue11,
    ReduxValue12,
    ReduxValue13,
    ReduxValue14,
    ReduxValue15,
    ReduxValue16,
    ReduxValue17,
    ReduxValue18,
    ReduxValue19,
    ReduxValue20,
    ReduxValue21,
    ReduxValue22,
    ReduxValue23,
    ReduxValue24,
    ReduxValue25,
    ReduxValue26,
    ReduxValue27,
    ReduxValue28,
    ReduxValue29,
    ReduxValue30,
    ReduxValue31,
    ReduxValue32,
    ReduxValue33,
    ReduxValue34,
    ReduxValue35,
    ReduxValue36,
    ReduxValue37,
    ReduxValue38,
    ReduxValue39,
    ReduxValue40,
    ReduxValue41,
    ReduxValue42,
    ReduxValue43,
    ReduxValue44,
    ReduxValue45,
    ReduxValue46,
    ReduxValue47,
    ReduxValue48,
    ReduxValue49,
    ReduxValue50,
    ReduxValue51,
    ReduxValue52,
    ReduxValue53,
    ReduxValue54,
    ReduxValue55
  };
})(RadioCard);

export default RadioCard;
