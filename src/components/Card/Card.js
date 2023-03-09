import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ name, surname, cardNumber, cvc, isErste = false }) => {
  return (
    <div className={`Card ${isErste ? "Card_erste" : ""}`}>
      <p className="Card-Holder">
        {name} {surname}
      </p>
      <p className="Card-Number"> {cardNumber}</p>
      <p className="Card-Cvc">{cvc}</p>
      {isErste ? "Erste" : "ZABA"}
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  cardNumber: PropTypes.number,
  cvc: PropTypes.number,
  isErste: PropTypes.bool,
};

export default Card;
