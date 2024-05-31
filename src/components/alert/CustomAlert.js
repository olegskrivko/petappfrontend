import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const CustomAlert = ({ errorMessage, solutionMessage }) => {
  return (
    <Alert severity="error" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <AlertTitle>{errorMessage}</AlertTitle>
      {solutionMessage}
    </Alert>
  );
};

export default CustomAlert;
