import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../middleware/config';

const CreateShelterForm = () => {
  const [formData, setFormData] = useState({
    slug: '',
    name: '',
    description: '',
    author: '',
    url: '',
    coverPicture: '',
    addressDetails: {
      address: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    },
    location: {
      latitude: '',
      longitude: '',
    },
    contact: {
      phone: '',
      email: '',
    },
    socialMedia: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: '',
      youtube: '',
    },
    services: '',
    tags: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    if (keys.length > 1) {
      setFormData((prevState) => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const preparedData = {
        ...formData,
        location: {
          type: 'Point',
          coordinates: [
            parseFloat(formData.location.longitude),
            parseFloat(formData.location.latitude),
          ],
        },
        services: formData.services.split(',').map((item) => item.trim()),
        tags: formData.tags.split(',').map((item) => item.trim()),
      };

      const response = await axios.post(`${BASE_URL}/shelters`, preparedData);
      console.log('Shelter created successfully:', response.data);
    } catch (error) {
      console.error('Error creating shelter:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Create Shelter
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="URL"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Cover Picture"
            name="coverPicture"
            value={formData.coverPicture}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Address Details</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Address"
            name="addressDetails.address"
            value={formData.addressDetails.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="City"
            name="addressDetails.city"
            value={formData.addressDetails.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="State"
            name="addressDetails.state"
            value={formData.addressDetails.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Country"
            name="addressDetails.country"
            value={formData.addressDetails.country}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Zip Code"
            name="addressDetails.zipCode"
            value={formData.addressDetails.zipCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Location (Coordinates)</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Latitude"
            name="location.latitude"
            value={formData.location.latitude}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Longitude"
            name="location.longitude"
            value={formData.location.longitude}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Contact Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Phone"
            name="contact.phone"
            value={formData.contact.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Email"
            name="contact.email"
            value={formData.contact.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Social Media</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Facebook"
            name="socialMedia.facebook"
            value={formData.socialMedia.facebook}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Twitter"
            name="socialMedia.twitter"
            value={formData.socialMedia.twitter}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Instagram"
            name="socialMedia.instagram"
            value={formData.socialMedia.instagram}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="LinkedIn"
            name="socialMedia.linkedin"
            value={formData.socialMedia.linkedin}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="YouTube"
            name="socialMedia.youtube"
            value={formData.socialMedia.youtube}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Services</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Services"
            name="services"
            value={formData.services}
            onChange={handleChange}
            placeholder="Comma separated values"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Tags</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Comma separated values"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateShelterForm;
