import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../middleware/config'; // Adjust this to your actual config path

const CreateServicePage = () => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`${BASE_URL}/services`, {
        name: categoryName,
        description: description,
      });

      setSuccess('Category created successfully!');
      setCategoryName('');
      setDescription('');
    } catch (err) {
      setError('Error creating category. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h5" gutterBottom>
        Create New Service Category
      </Typography>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={4}
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error">{error}</Typography>
            </Grid>
          )}
          {success && (
            <Grid item xs={12}>
              <Typography color="primary">{success}</Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary" disabled={loading}>
              {loading ? 'Creating...' : 'Create Category'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateServicePage;
