// // OptionSetForm.js

// import React, { useState } from "react";
// import { TextField, Button, Grid } from "@mui/material";
// import { BASE_URL } from "../middleware/config";

// const DashboardPage = ({ onSubmit }) => {
//   const [key, setKey] = useState("");
//   const [value, setValue] = useState("");
//   const [translations, setTranslations] = useState([]);

//   const handleAddTranslation = () => {
//     setTranslations([...translations, { language: "", value: "" }]);
//   };

//   const handleTranslationChange = (index, field, newValue) => {
//     const updatedTranslations = [...translations];
//     updatedTranslations[index][field] = newValue;
//     setTranslations(updatedTranslations);
//   };

//   // const handleSubmit = () => {
//   //   onSubmit({ key, value, translations });
//   // };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/optionSet`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ key, value, translations }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save option");
//       }

//       // Optionally handle success (e.g., show a success message)
//     } catch (error) {
//       console.error("Error saving option:", error);
//       // Optionally handle error (e.g., show an error message)
//     }
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <TextField
//           label="Option Key"
//           variant="outlined"
//           value={key}
//           onChange={(e) => setKey(e.target.value)}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           label="Option Value"
//           variant="outlined"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//       </Grid>
//       {translations.map((translation, index) => (
//         <Grid key={index} item xs={12}>
//           <TextField
//             label={`Translation (${index + 1}) Language`}
//             variant="outlined"
//             value={translation.language}
//             onChange={(e) =>
//               handleTranslationChange(index, "language", e.target.value)
//             }
//           />
//           <TextField
//             label={`Translation (${index + 1}) Value`}
//             variant="outlined"
//             value={translation.value}
//             onChange={(e) =>
//               handleTranslationChange(index, "value", e.target.value)
//             }
//           />
//         </Grid>
//       ))}
//       <Grid item xs={12}>
//         <Button variant="contained" onClick={handleAddTranslation}>
//           Add Translation
//         </Button>
//       </Grid>
//       <Grid item xs={12}>
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           Save Option
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// // export default OptionSetForm;

// export default DashboardPage;
import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { BASE_URL } from "../middleware/config";

const DashboardPage = () => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [translations, setTranslations] = useState([]);

  const handleAddTranslation = () => {
    setTranslations([...translations, { en: "", ru: "", lv: "" }]);
  };

  const handleTranslationChange = (index, field, newValue) => {
    const updatedTranslations = [...translations];
    updatedTranslations[index][field] = newValue;
    setTranslations(updatedTranslations);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${BASE_URL}/optionSet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key, value, translations }),
      });

      if (!response.ok) {
        throw new Error("Failed to save option");
      }

      // Optionally handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error saving option:", error);
      // Optionally handle error (e.g., show an error message)
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Option Key"
          variant="outlined"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Option Value"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Grid>
      {translations.map((translation, index) => (
        <Grid key={index} item xs={12}>
          <TextField
            label={`English Translation (${index + 1})`}
            variant="outlined"
            value={translation.en}
            onChange={(e) =>
              handleTranslationChange(index, "en", e.target.value)
            }
          />
          <TextField
            label={`Russian Translation (${index + 1})`}
            variant="outlined"
            value={translation.ru}
            onChange={(e) =>
              handleTranslationChange(index, "ru", e.target.value)
            }
          />
          <TextField
            label={`Latvian Translation (${index + 1})`}
            variant="outlined"
            value={translation.lv}
            onChange={(e) =>
              handleTranslationChange(index, "lv", e.target.value)
            }
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleAddTranslation}>
          Add Translation
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Option
        </Button>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
