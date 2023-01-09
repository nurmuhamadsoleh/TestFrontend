import React from "react";
import { IconSearch } from "../../assets";

const ButtonOutline = ({ name }) => {
  return (
    <button
      type="button"
      class="btn btn-outline-info"
      style={{
        color: "#FFF",
        fontSize: "18px",
        fontStyle: "normal",
        textTransform: "capitalize",
        width: "170px",
        borderRadius: "20px",
        position: "absolute",
        left: "230px",
      }}
    >
      {name}
      <img
        src={IconSearch}
        alt="search"
        style={{
          color: "#FFF",
          fontWeight: "bold",
          backgroundColor: "transparent",
          paddingLeft: "50px",
        }}
      />
    </button>
  );
};

export default ButtonOutline;
