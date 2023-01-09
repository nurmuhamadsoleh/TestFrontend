import React from "react";
import { colors } from "../../utils";

const ButtonOutlineSmall = ({ name, logo }) => {
  return (
    <>
      {name === "bot account-1" ? (
        <button
          type="button"
          class="btn btn-outline-secondary"
          style={{
            marginRight: "5px",
            borderRadius: "35px",
            height: "30px",
            lineHeight: "10px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              // height: "10px",
              fontWeight: "bold",
              paddingRight: "10px",
              color: colors.warning,
              backgroundColor: "transparent",
            }}
          >
            {logo}
          </span>
          {name}
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-outline-secondary"
          style={{
            marginRight: "5px",
            borderRadius: "35px",
            // width: "150px",
            height: "30px",
            lineHeight: "10px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              // height: "10px",
              fontWeight: "bold",
              paddingRight: "10px",
              color: "#8f9194",
              backgroundColor: "transparent",
            }}
          >
            {logo}
          </span>
          {name}
        </button>
      )}
    </>
  );
};

export default ButtonOutlineSmall;
