import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

const commonHealthIssues = [
  "Healthy",
  "Injured",
  "Sick",
  "Malnourished",
  "Blind",
  "Deaf",
  "Mobility Issues",
  "Deceased",

  // "Requires Blood Donation",
  // "Needs Medication",
  // "Surgery Required",
  // "Chronic Illness",
  // "Vaccination Needed",
  // "Parasite Infestation",
  // "Allergic Reactions",
  // "Skin Problems",
  // "Mobility Issues",
  // "Partly Paralyzed",
  // "Paralyzed",
];

const PetHealth = ({ formState, setFormState }) => {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      healthIssues: {
        ...prevState.healthIssues,
        [name]: checked,
      },
    }));
  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {/* <Grid item xs={12}>
        <Typography variant="h6">Health Information</Typography>
      </Grid> */}
      <Grid item xs={12}>
        <Typography
          variant="body1"
          style={{ fontWeight: "500" }}
          gutterBottom
          textAlign="left"
        >
          Health Information
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginBottom: "1rem" }}>
        {commonHealthIssues.map((issue) => (
          <FormControlLabel
            key={issue}
            control={
              <Checkbox
                name={issue}
                checked={formState.healthIssues[issue] || false}
                onChange={handleCheckboxChange}
              />
            }
            label={issue}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Other Health Issues"
          name="otherHealthIssues"
          multiline
          rows={3}
          value={formState.otherHealthIssues || ""}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTextChange}
          fullWidth
        />
      </Grid>
    </>
  );
};

export default PetHealth;
