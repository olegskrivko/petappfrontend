import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { BASE_URL } from '../middleware/config';

function EditPetPage() {
  const { petId } = useParams();
  const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    petName: '',
    category: '',
    initialStatus: '',
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
          petName: data.petName,
          category: data.category,
          initialStatus: data.initialStatus,
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

  if (loading) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h4">Error: {error}</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom align="center">
        Edit Pet
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Pet Name"
              name="petName"
              value={formData.petName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Initial Status"
              name="initialStatus"
              value={formData.initialStatus}
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
    </Container>
  );
}

export default EditPetPage;
