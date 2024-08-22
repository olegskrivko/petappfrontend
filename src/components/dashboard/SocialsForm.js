import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { BASE_URL } from '../../middleware/config';

const SocialsForm = () => {
  const [name, setName] = useState('');
  const [iconUrl, setIconUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/social-media-platforms`, {
        name,
        iconUrl,
      });
      setSuccess('Social media platform added successfully');
      setName('');
      setIconUrl('');
    } catch (error) {
      setError('Failed to add social media platform');
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Add New Social Media Platform
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Platform Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="Icon URL"
              variant="outlined"
              value={iconUrl}
              onChange={(e) => setIconUrl(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Platform
            </Button>
          </Grid>
          {error && (
            <Grid item xs={12} mt={3}>
              <Typography color="error">{error}</Typography>
            </Grid>
          )}
          {success && (
            <Grid item xs={12}>
              <Typography color="primary">{success}</Typography>
            </Grid>
          )}
        </Grid>
      </form>
    </div>
  );
};

export default SocialsForm;
