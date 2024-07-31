import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';
import { BASE_URL } from '../middleware/config';
function CreateCategoryForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/categories`, {
        name,
        description,
      });
      setSuccess(`Category '${response.data.name}' created successfully!`);
      setName('');
      setDescription('');
      setError('');
    } catch (err) {
      setError('Error creating category. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create New Category
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="success">{success}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create Category
        </Button>
      </form>
    </Box>
  );
}

export default CreateCategoryForm;
