import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        width: "100%",
        maxWidth: "1200px",
        margin: " 0 auto",
        padding: " 0 20px",
      }}
      className="contentWrapper">
      {children}
    </div>
  );
};

export default Wrapper;
