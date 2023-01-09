import React from "react";
import { IconNext } from "../../assets";

const ButtonSolid = ({ name }) => {
  return (
    <button
      type="button"
      class="btn btn-info btn-sm"
      style={{
        color: "#FFF",
        fontSize: "18px",
        fontStyle: "normal",
        textTransform: "capitalize",
        width: "150px",
        borderRadius: "20px",
        marginRight: "20px",
      }}
    >
      {name}
      <img
        src={IconNext}
        alt="Next"
        style={{
          color: "#FFF",
          fontWeight: "bold",
          backgroundColor: "transparent",
          paddingLeft: "30px",
        }}
      />
    </button>
  );
};

export default ButtonSolid;
