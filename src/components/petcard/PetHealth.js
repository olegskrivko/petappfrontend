// import React, { useState } from "react";
// import {
//   Grid,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Typography,
// } from "@mui/material";

// const commonHealthIssues = [
//   "Healthy",
//   "Injured",
//   "Sick",
//   "Malnourished",
//   "Blind",
//   "Deaf",
//   "Mobility Issues",
//   "Deceased",

//   // "Requires Blood Donation",
//   // "Needs Medication",
//   // "Surgery Required",
//   // "Chronic Illness",
//   // "Vaccination Needed",
//   // "Parasite Infestation",
//   // "Allergic Reactions",
//   // "Skin Problems",
//   // "Mobility Issues",
//   // "Partly Paralyzed",
//   // "Paralyzed",
// ];

// const PetHealth = ({ formState, setFormState }) => {
//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setFormState((prevState) => {
//       const newHealth = [...prevState.health];
//       if (checked) {
//         newHealth.push(name);
//       } else {
//         const index = newHealth.indexOf(name);
//         if (index > -1) {
//           newHealth.splice(index, 1);
//         }
//       }
//       return {
//         ...prevState,
//         health: newHealth,
//       };
//     });
//   };

//   const handleTextChange = (event) => {
//     const { name, value } = event.target;
//     setFormState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <Grid item xs={12}>
//         <Typography
//           variant="body1"
//           style={{ fontWeight: "500" }}
//           gutterBottom
//           textAlign="left"
//         >
//           Health Information
//         </Typography>
//       </Grid>
//       <Grid item xs={12} style={{ marginBottom: "1rem" }}>
//         {commonHealthIssues.map((issue) => (
//           <FormControlLabel
//             key={issue}
//             control={
//               <Checkbox
//                 name={issue}
//                 checked={formState.health[issue] || false}
//                 onChange={handleCheckboxChange}
//               />
//             }
//             label={issue}
//           />
//         ))}
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           label="Additional Health Details"
//           name="healthDetails"
//           multiline
//           rows={3}
//           value={formState.healthDetails || ""}
//           InputLabelProps={{
//             shrink: true,
//           }}
//           onChange={handleTextChange}
//           fullWidth
//         />
//       </Grid>
//     </>
//   );
// };

// export default PetHealth;
import React from "react";
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
  // ...other issues
];

const PetHealth = ({ formState, setFormState }) => {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormState((prevState) => {
      const newHealth = [...prevState.health];
      if (checked) {
        newHealth.push(name);
      } else {
        const index = newHealth.indexOf(name);
        if (index > -1) {
          newHealth.splice(index, 1);
        }
      }
      return {
        ...prevState,
        health: newHealth,
      };
    });
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
                checked={formState.health.includes(issue)}
                onChange={handleCheckboxChange}
              />
            }
            label={issue}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Additional Health Details"
          name="healthDetails"
          multiline
          rows={3}
          value={formState.healthDetails || ""}
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
