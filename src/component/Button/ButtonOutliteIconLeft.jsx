import React from "react";
import { IconDownload, IconLink } from "../../assets";
import { colors } from "../../utils";

const ButtonOutliteIconLeft = ({ name }) => {
  return (
    <>
      {name === "Visit Link" ? (
        <button
          type="button"
          class="btn btn-outline-info"
          style={{
            color: colors.blue,
            fontSize: "18px",
            fontStyle: "normal",
            textTransform: "capitalize",
            width: "160px",
            borderRadius: "20px",
            marginTop: "20px",
            marginRight: "50px",
          }}
        >
          <img
            src={IconLink}
            alt="Link"
            style={{
              color: "red",
              fontWeight: "bold",
              backgroundColor: "transparent",
              paddingRight: "30px",
            }}
          />
          {name}
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-outline-light"
          style={{
            color: colors.white,
            fontSize: "18px",
            fontStyle: "normal",
            textTransform: "capitalize",
            width: "160px",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <img
            src={IconDownload}
            alt="Link"
            style={{
              color: colors.white,
              fontWeight: "bold",
              backgroundColor: "transparent",
              paddingRight: "30px",
            }}
          />
          {name}
        </button>
      )}
    </>
  );
};

export default ButtonOutliteIconLeft;
