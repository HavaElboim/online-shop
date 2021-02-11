import React, { useEffect } from "react";
import "./SaleCountdown.css";
import PropTypes from "prop-types";

/* this component is called by the Header component *

/* counts down by seconds the time left until the end of the sale,
and sets state of display message depending on whether the sale has finished */

const SaleCountdown = (props) => {
  const { secondsLeft, setSecondsLeft } = props;

  const convertToDHMS = () => {
    let temp = "";
    if (secondsLeft) {
      temp = `
      ${Math.floor(secondsLeft / (60 * 60 * 24))}:${Math.floor(
        (secondsLeft / (60 * 60)) % 24
      )}:`;
      temp = `${temp}${Math.floor((secondsLeft / 60) % 60)}:${Math.floor(
        secondsLeft % 60
      )}`;
      return temp;
    }
  };

  /* Each time the state of DHMSLeft is updated, useEffect sets a 1 second timeout.
  At the end of the timeout, the state of the DHMSLeft and secondsLeft update, and so the useEffect runs again,
  and sets another 1 second timeout.
  If the secondsLeft reaches zero, 
 */
  useEffect(() => {
    const countdown = setTimeout(() => {
      if (secondsLeft) {
        setSecondsLeft(secondsLeft - 1);
      }
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(countdown);
  });
  //The return will runs each time useEffect finishes the timeout except for the first time
  // and clears the timeout if the component is unmounted

  const saleMessage = () => {
    return secondsLeft
      ? `10% off!! ${convertToDHMS(
          secondsLeft
        )} days left until the end of the Sale`
      : "Sale over";
  };

  return (
    <div>
      <h2 id="message">{saleMessage()} </h2>
    </div>
  );
};

SaleCountdown.propTypes = {
  secondsLeft: PropTypes.number,
  setSecondsLeft: PropTypes.func,
};

export default SaleCountdown;
