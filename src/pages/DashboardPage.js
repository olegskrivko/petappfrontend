import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { BASE_URL } from '../middleware/config';

const DashboardPage = () => {
  const [optionKey, setOptionKey] = useState('');
  const [optionNames, setOptionNames] = useState({ en: '', lv: '', ru: '' });
  const [values, setValues] = useState([{ value: '', en: '', lv: '', ru: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedValues = [...values];
    updatedValues[index] = { ...updatedValues[index], [name]: value };
    setValues(updatedValues);
  };

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setOptionNames({ ...optionNames, [name]: value });
  };

  const addValueField = () => {
    setValues([...values, { value: '', en: '', lv: '', ru: '' }]);
  };

  const removeValueField = (index) => {
    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    setValues(updatedValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/options`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: optionKey, name: optionNames, values }),
      });

      if (!response.ok) {
        throw new Error('Failed to save option');
      }

      // Optionally handle success (e.g., show a success message)
      console.log('Option saved successfully!');
    } catch (error) {
      console.error('Error saving option:', error);
      // Optionally handle error (e.g., show an error message)
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Option Key"
          variant="outlined"
          fullWidth
          value={optionKey}
          onChange={(e) => setOptionKey(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="en"
          label="English Name"
          variant="outlined"
          fullWidth
          value={optionNames.en}
          onChange={handleNameChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="lv"
          label="Latvian Name"
          variant="outlined"
          fullWidth
          value={optionNames.lv}
          onChange={handleNameChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="ru"
          label="Russian Name"
          variant="outlined"
          fullWidth
          value={optionNames.ru}
          onChange={handleNameChange}
        />
      </Grid>
      {values.map((value, index) => (
        <Grid container item spacing={2} key={index}>
          <Grid item xs={3}>
            <TextField
              name="value"
              label="Value"
              variant="outlined"
              fullWidth
              value={value.value}
              onChange={(e) => handleInputChange(index, e)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="en"
              label="English Translation"
              variant="outlined"
              fullWidth
              value={value.en}
              onChange={(e) => handleInputChange(index, e)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="lv"
              label="Latvian Translation"
              variant="outlined"
              fullWidth
              value={value.lv}
              onChange={(e) => handleInputChange(index, e)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="ru"
              label="Russian Translation"
              variant="outlined"
              fullWidth
              value={value.ru}
              onChange={(e) => handleInputChange(index, e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => removeValueField(index)}>Remove Value</Button>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button onClick={addValueField}>Add Value</Button>
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

// import React, { useState } from 'react';
// import { TextField, Button, Grid } from '@mui/material';
// import { BASE_URL } from '../middleware/config';

// const DashboardPage = () => {
//   const [optionKey, setOptionKey] = useState('');
//   const [optionName, setOptionName] = useState('');
//   const [values, setValues] = useState([{ value: '', en: '', lv: '', ru: '' }]);

//   const handleInputChange = (index, event) => {
//     const { name, value } = event.target;
//     const updatedValues = [...values];
//     updatedValues[index] = { ...updatedValues[index], [name]: value };
//     setValues(updatedValues);
//   };

//   const addValueField = () => {
//     setValues([...values, { value: '', en: '', lv: '', ru: '' }]);
//   };

//   const removeValueField = (index) => {
//     const updatedValues = [...values];
//     updatedValues.splice(index, 1);
//     setValues(updatedValues);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(`${BASE_URL}/options`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ key: optionKey, name: optionName, values }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to save option');
//       }

//       // Optionally handle success (e.g., show a success message)
//       console.log('Option saved successfully!');
//     } catch (error) {
//       console.error('Error saving option:', error);
//       // Optionally handle error (e.g., show an error message)
//     }
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <TextField
//           label="Option Key"
//           variant="outlined"
//           fullWidth
//           value={optionKey}
//           onChange={(e) => setOptionKey(e.target.value)}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           label="Option Name"
//           variant="outlined"
//           fullWidth
//           value={optionName}
//           onChange={(e) => setOptionName(e.target.value)}
//         />
//       </Grid>
//       {values.map((value, index) => (
//         <Grid container item spacing={2} key={index}>
//           <Grid item xs={3}>
//             <TextField
//               name="value"
//               label="Value"
//               variant="outlined"
//               fullWidth
//               value={value.value}
//               onChange={(e) => handleInputChange(index, e)}
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <TextField
//               name="en"
//               label="English Translation"
//               variant="outlined"
//               fullWidth
//               value={value.en}
//               onChange={(e) => handleInputChange(index, e)}
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <TextField
//               name="lv"
//               label="Latvian Translation"
//               variant="outlined"
//               fullWidth
//               value={value.lv}
//               onChange={(e) => handleInputChange(index, e)}
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <TextField
//               name="ru"
//               label="Russian Translation"
//               variant="outlined"
//               fullWidth
//               value={value.ru}
//               onChange={(e) => handleInputChange(index, e)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button onClick={() => removeValueField(index)}>Remove Value</Button>
//           </Grid>
//         </Grid>
//       ))}
//       <Grid item xs={12}>
//         <Button onClick={addValueField}>Add Value</Button>
//       </Grid>
//       <Grid item xs={12}>
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           Save Option
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default DashboardPage;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../middleware/config';
// import MenuItem from '@mui/material/MenuItem';
// import TextField from '@mui/material/TextField';

// import Button from '@mui/material/Button';
// import { Grid, Typography } from '@mui/material';

// const CreateOptionForm = () => {
//   const [key, setKey] = useState('');
//   const [name, setName] = useState('');
//   const [value, setValue] = useState('');
//   const [language, setLanguage] = useState('en'); // Default language
//   const [translation, setTranslation] = useState('');
//   const [translations, setTranslations] = useState([]);

//   const handleAddTranslation = () => {
//     if (value && translation && language) {
//       setTranslations([...translations, { value, translation, language }]);
//       setValue('');
//       setTranslation('');
//       setLanguage('en'); // Reset language to default after adding translation
//     }
//   };

//   const handleRemoveTranslation = (index) => {
//     const updatedTranslations = [...translations];
//     updatedTranslations.splice(index, 1);
//     setTranslations(updatedTranslations);
//   };

//   const handleSubmit = async () => {
//     try {
//       const newOption = {
//         key,
//         name,
//         values: translations.map(({ value, translation, language }) => ({
//           value: Number(value),
//           translations: [{ language, value: translation }],
//         })),
//       };

//       const response = await axios.post(`${BASE_URL}/options`, newOption);
//       console.log('Option created successfully:', response.data);
//       // Reset form state
//       setKey('');
//       setName('');
//       setTranslations([]);
//     } catch (error) {
//       console.error('Error creating option:', error);
//     }
//   };

//   return (
//     <div>
//       <Typography variant="h5" gutterBottom>
//         Create New Option
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Key"
//             variant="outlined"
//             value={key}
//             onChange={(e) => setKey(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Name"
//             variant="outlined"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="subtitle1">Translations:</Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={4}>
//               <TextField
//                 fullWidth
//                 label="Value"
//                 variant="outlined"
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={4}>
//               <TextField
//                 fullWidth
//                 label="Translation"
//                 variant="outlined"
//                 value={translation}
//                 onChange={(e) => setTranslation(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={2}>
//               <TextField
//                 fullWidth
//                 select
//                 label="Language"
//                 variant="outlined"
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//               >
//                 <MenuItem value="en">English</MenuItem>
//                 <MenuItem value="lv">Latvian</MenuItem>
//                 <MenuItem value="ru">Russian</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={2}>
//               <Button variant="contained" color="primary" onClick={handleAddTranslation}>
//                 Add
//               </Button>
//             </Grid>
//           </Grid>
//           {translations.length > 0 && (
//             <Grid container spacing={2}>
//               {translations.map((item, index) => (
//                 <Grid item xs={12} key={index}>
//                   <Typography>
//                     {item.value} - {item.translation} ({item.language})
//                     <Button
//                       size="small"
//                       onClick={() => handleRemoveTranslation(index)}
//                       style={{ marginLeft: '1rem' }}
//                     >
//                       Remove
//                     </Button>
//                   </Typography>
//                 </Grid>
//               ))}
//             </Grid>
//           )}
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="contained" color="primary" onClick={handleSubmit}>
//             Create Option
//           </Button>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default CreateOptionForm;
