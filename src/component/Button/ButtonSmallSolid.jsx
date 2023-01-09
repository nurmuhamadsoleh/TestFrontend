import React from "react";

const ButtonSmallSolid = ({ name, color }) => {
  return (
    <button
      type="button"
      class={color}
      style={{
        marginRight: "5px",
        borderRadius: "35px",
        height: "30px",
        lineHeight: "10px",
        marginBottom: "10px",
        color: "white",
      }}
    >
      {name}
    </button>
  );
};

export default ButtonSmallSolid;
