import React from "react";

const STYLES = ["btn__primary", "btn__outline"];

const SIZES = ["btn__medium", "btn__large"];

const Button = ({ childern, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`menu_btn ${checkButtonStyle} ${buttonSize}`}
      onClick={onClick}
    >
      type={type}
      {childern}
    </button>
  );
};
