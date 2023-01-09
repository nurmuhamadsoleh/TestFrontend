import React from "react";
import { colors } from "../../utils";

const ButtonComponent = ({ button }) => {
  return (
    <>
      <button type="button" style={{ backgroundColor: colors.black }}>
        {button}
      </button>
    </>
  );
};

export default ButtonComponent;
