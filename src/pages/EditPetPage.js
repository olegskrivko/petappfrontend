import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Typography, MenuItem, TextField, Button, Grid } from '@mui/material';
import { BASE_URL } from '../middleware/config';
import { useTranslation } from 'react-i18next';

function EditPetPage() {
  const { t } = useTranslation();
  const { petId } = useParams();

  const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    updatedStatusDescription: '',
    updatedStatus: '',
  });

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/pets/${petId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch pet data');
        }
        const data = await response.json();
        setPet(data);
        setFormData({
          updatedStatusDescription: data.updatedStatusDescription,
          updatedStatus: data.updatedStatus,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pet data:', error);
        setError('Failed to fetch pet data');
        setLoading(false);
      }
    };

    fetchPetData();
  }, [petId]);

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${BASE_URL}/pets/${petId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to update pet');
      }
      // Navigate to another page after successful update
      // Replace '/pets' with the path you want to navigate to
      navigate('/pets');
    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };

  const getUpdatedStatusOptions = () => {
    const initialStatus = pet.initialStatus; // Assuming 'initialStatus' exists in the pet object
    console.log('initialStatus', initialStatus);
    // if (!initialStatus) return [];

    const options = t(`selectOptions.updatedStatusOptions.${initialStatus}`, {
      returnObjects: true,
    });
    return options || [];
  };

  if (loading) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h4">Error: {error}</Typography>;
  }

  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        Edit Pet
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              label="Updated Status"
              name="updatedStatus"
              value={formData.updatedStatus}
              onChange={handleInputChange}
              required
            >
              {getUpdatedStatusOptions().map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="updatedStatusDescription"
              value={formData.updatedStatusDescription}
              onChange={handleInputChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Save Changes
            </Button>
            <Button component={Link} to="/pets" variant="contained" style={{ marginLeft: '1rem' }}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default EditPetPage;
