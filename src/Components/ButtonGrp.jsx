import React from "react";

function ButtonGrp({ buttons, isSelected, setIsSelected }) {
  return (
    <div className="btn-group" role="group">
      {buttons.map((text, index) => {
        return (
          <button
            key={text}
            className={isSelected === index ? "btn" : "selected-button"}
            onClick={() => setIsSelected(index)}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonGrp;
