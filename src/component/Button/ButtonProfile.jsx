import React from "react";

const ButtonProfile = ({ icon, name }) => {
  return (
    <>
      <button
        type="button"
        class="btn btn-outline-secondary"
        style={{ borderRadius: "35px" }}
      >
        <span
          style={{
            color: "#a5a8a6",
            // backgroundColor: "#a5a8a6",
            paddingRight: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {icon}
        </span>
        {name}
      </button>
    </>
  );
};

export default ButtonProfile;
