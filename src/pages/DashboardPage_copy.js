import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { BASE_URL } from '../middleware/config';
import { Link } from 'react-router-dom';
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
      <Link to="/create-article">Create Article</Link>
    </Grid>
  );
};

export default DashboardPage;
