import React, { useState, useEffect, useContext } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Container,
  Paper,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../../middleware/config';
import { AuthContext } from '../../middleware/AuthContext';

import { useTranslation } from 'react-i18next';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const BusinessesForm = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);

  const [formState, setFormState] = useState({
    name: '',
    category: '',
    businessForm: '',
    registrationNumber: '',
    isActive: true,
    description: '',
    image: null,
    tags: [],
    website: '',
    minPrice: 0,
    maxPrice: 0,
    socialMediaProfiles: [{ platform: '', profileUrl: '', username: '' }],
    services: [],
    locations: [],
    owner: '',
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [platforms, setPlatforms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/social-media-platforms`);
        setPlatforms(response.data);
      } catch (error) {
        setError('Failed to load social media platforms');
      } finally {
        setLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  useEffect(() => {
    // Fetch categories from service-categories endpoint
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/services`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveLocation = () => {};

  const handleLocationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedLocations = [...formState.locations];
    updatedLocations[index] = { ...updatedLocations[index], [name]: value };
    setFormState((prev) => ({
      ...prev,
      locations: updatedLocations,
    }));
  };

  const addLocation = () => {
    setFormState((prev) => ({
      ...prev,
      locations: [
        ...prev.locations,
        {
          name: '',
          description: '',
          phone: '',
          email: '',
          latitude: '',
          longitude: '',
          monday: '',
          tuesday: '',
          wednesday: '',
          thursday: '',
          friday: '',
          saturday: '',
          sunday: '',
          street: '',
          city: '',
          state: '',
          zipCode: '',
          country: '',
        },
      ],
    }));
  };

  const removeLocation = (index) => {
    const updatedLocations = formState.locations.filter((_, i) => i !== index);
    setFormState((prev) => ({
      ...prev,
      locations: updatedLocations,
    }));
  };

  const handleSocialMediaChange = (index, field, value) => {
    console.log(`Updating profile at index ${index} - Field: ${field}, Value: ${value}`);
    const updatedProfiles = [...formState.socialMediaProfiles];
    updatedProfiles[index][field] = value;
    setFormState({
      ...formState,
      socialMediaProfiles: updatedProfiles,
    });
    console.log('Updated Social Media Profiles:', updatedProfiles);
  };

  const handleTagChange = (index, value) => {
    const updatedTags = [...formState.tags];
    updatedTags[index] = value;
    setFormState({
      ...formState,
      tags: updatedTags,
    });
  };

  const addSocialMediaProfile = () => {
    setFormState({
      ...formState,
      socialMediaProfiles: [
        ...formState.socialMediaProfiles,
        { platform: '', profileUrl: '', username: '' },
      ],
    });
  };

  const addTag = () => {
    setFormState({
      ...formState,
      tags: [...formState.tags, ''], // Add a new empty tag input
    });
  };

  const resizeAndCropImage = (file, callback) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set target dimensions for the canvas
        const targetAspectRatio = 4 / 3;
        const targetWidth = 800;
        const targetHeight = targetWidth / targetAspectRatio;

        // Calculate the source dimensions
        let srcX = 0,
          srcY = 0,
          srcWidth = img.width,
          srcHeight = img.height;

        if (img.width / img.height > targetAspectRatio) {
          // Source is wider than target aspect ratio
          srcWidth = img.height * targetAspectRatio;
          srcX = (img.width - srcWidth) / 2;
        } else {
          // Source is taller than target aspect ratio
          srcHeight = img.width / targetAspectRatio;
          srcY = (img.height - srcHeight) / 2;
        }

        // Set canvas dimensions
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        // Draw image on canvas with cropping
        ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);

        // Convert canvas to Blob
        canvas.toBlob(
          (blob) => {
            callback(blob);
          },
          'image/jpeg',
          0.7,
        ); // Adjust quality as needed
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (file) => {
    resizeAndCropImage(file, (resizedImage) => {
      setFormState((prevState) => ({
        ...prevState,
        image: resizedImage,
      }));
      const previewUrl = URL.createObjectURL(resizedImage);
      setImagePreview(previewUrl);
    });
  };

  // Cleanup image URL when component unmounts
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const formData = new FormData();
      Object.keys(formState).forEach((key) => {
        if (key === 'socialMediaProfiles') {
          formData.append(key, JSON.stringify(formState[key])); // Stringify array before appending
        } else if (key === 'image' && formState[key]) {
          formData.append(key, formState[key]);
        } else if (key === 'locations') {
          formState[key].forEach((item, index) => {
            Object.keys(item).forEach((nestedKey) => {
              formData.append(`locations[${index}][${nestedKey}]`, item[nestedKey]);
            });
          });
        } else if (Array.isArray(formState[key])) {
          formState[key].forEach((item) => {
            formData.append(`${key}[]`, item);
          });
        } else if (key === 'owner') {
          formData.append('owner', user.id);
        } else {
          formData.append(key, formState[key]);
        }
      });
      console.log('FormData Entries:');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      // Ensure the 'owner' field is appended correctly
      // if (user.id) {
      //   formData.append('owner', user.id);
      // } else {
      //   console.error('User ID is missing or invalid');
      //   return;
      // }

      const response = await axios.post(`${BASE_URL}/businesses`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Business created successfully!');
    } catch (error) {
      console.error('Error creating business:', error.response);

      if (error.response && error.response.data) {
        // Log detailed error response
        console.error('Error details:', error.response.data);

        if (error.response.data.errors && Array.isArray(error.response.data.errors)) {
          const receivedErrors = error.response.data.errors;
          const newFormErrors = {};
          receivedErrors.forEach((error) => {
            newFormErrors[error.path] = error.msg;
          });
          setFormErrors(newFormErrors);
        } else {
          console.error('Failed to send business details to the backend:', error.response.data);
        }
      } else {
        console.error('Failed to send business details to the backend:', error);
      }
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t('createBusinessTitle')}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              {t('formTitles.uploadFile')}
            </Typography>
            <input
              accept="image/*"
              id="image"
              type="file"
              onChange={(e) => handleImageUpload(e.target.files[0])}
              style={{ display: 'none' }}
            />
            <label htmlFor="image">
              <Button
                variant="contained"
                color="primary"
                component="span"
                fullWidth
                style={{ marginTop: '20px' }}
              >
                Upload Image
              </Button>
            </label>
            {imagePreview && (
              <Box mb={2} style={{ width: '100%', marginTop: '20px' }}>
                <img src={imagePreview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
              </Box>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Business Name"
              value={formState.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="businessForm"
              label="Business Form"
              value={formState.businessForm}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="registrationNumber"
              label="Registration Number"
              value={formState.registrationNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>

          {/* Social Media Profiles */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Social Media Profiles
            </Typography>
            {formState.socialMediaProfiles.map((profile, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12} sm={4}>
                  <Select
                    fullWidth
                    value={profile.platform}
                    onChange={(e) => handleSocialMediaChange(index, 'platform', e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>Select Platform</em>
                    </MenuItem>
                    {platforms.map((platform) => (
                      <MenuItem key={platform._id} value={platform._id}>
                        {platform.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Profile URL"
                    name={`profileUrl-${index}`}
                    value={profile.profileUrl}
                    onChange={(e) => handleSocialMediaChange(index, 'profileUrl', e.target.value)}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Username"
                    name={`username-${index}`}
                    value={profile.username}
                    onChange={(e) => handleSocialMediaChange(index, 'username', e.target.value)}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={addSocialMediaProfile}
              sx={{ mt: 2 }}
            >
              Add Another Social Media Profile
            </Button>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Category</InputLabel>
              <Select name="category" value={formState.category} onChange={handleChange} required>
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name.en}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description"
              value={formState.description}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          {/* Social Media Links */}
          <Grid item xs={12} sm={12}>
            <TextField
              name="website"
              label="Website"
              value={formState.website}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h6" gutterBottom>
              Price range
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              name="minPrice"
              label="Min price"
              value={formState.minPrice}
              onChange={handleChange}
              fullWidth
              margin="normal"
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              name="maxPrice"
              label="Max price"
              value={formState.maxPrice}
              onChange={handleChange}
              fullWidth
              margin="normal"
              type="number"
            />
          </Grid>

          {/* <TextField
            name="tags"
            label="Tags (comma separated)"
            value={formState.tags.join(', ')}
            onChange={(e) =>
              setFormState((prev) => ({
                ...prev,
                tags: e.target.value.split(',').map((tag) => tag.trim()),
              }))
            }
            fullWidth
            margin="normal"
          /> */}
          {/* Locations */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Locations
            </Typography>
            {formState.locations.map((location, index) => (
              <Box key={index} mb={3} p={2} border={1} borderRadius={2} borderColor="grey.300">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      name="name"
                      label="Location Name"
                      value={location.name}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="description"
                      label="Location Description"
                      value={location.description}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="phone"
                      label="Phone"
                      value={location.phone}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      label="Email"
                      value={location.email}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="latitude"
                      label="Latitude"
                      value={location.latitude}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="longitude"
                      label="Longitude"
                      value={location.longitude}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  {/* Hours of Operation */}
                  <Grid item xs={12}>
                    <TextField
                      name="monday"
                      label="Monday Hours"
                      value={location.monday}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="tuesday"
                      label="Tuesday Hours"
                      value={location.tuesday}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="wednesday"
                      label="Wednesday Hours"
                      value={location.wednesday}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="thursday"
                      label="Thursday Hours"
                      value={location.thursday}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="friday"
                      label="Friday Hours"
                      value={location.friday}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="saturday"
                      label="Saturday Hours"
                      value={location.saturday}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="sunday"
                      label="Sunday Hours"
                      value={location.sunday}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="street"
                      label="Street"
                      value={location.street}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="city"
                      label="City"
                      value={location.city}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="state"
                      label="State"
                      value={location.state}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="zipCode"
                      label="ZIP Code"
                      value={location.zipCode}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="country"
                      label="Country"
                      value={location.country}
                      onChange={(e) => handleLocationChange(index, e)}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleRemoveLocation(index)}
                      style={{ marginTop: '20px' }}
                    >
                      Remove Location
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            ))}

            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                setFormState((prev) => ({
                  ...prev,
                  locations: [
                    ...prev.locations,
                    {
                      name: '',
                      description: '',
                      phone: '',
                      email: '',
                      latitude: '',
                      longitude: '',
                      monday: '',
                      tuesday: '',
                      wednesday: '',
                      thursday: '',
                      friday: '',
                      saturday: '',
                      sunday: '',
                      street: '',
                      city: '',
                      state: '',
                      zipCode: '',
                      country: '',
                    },
                  ],
                }))
              }
              style={{ marginTop: '20px' }}
            >
              Add Location
            </Button>
          </Grid>

          {/* Contact Information */}
          {/* <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="contactName"
                  label="Contact Name"
                  value={formState.contactName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="contactEmail"
                  label="Contact Email"
                  value={formState.contactEmail}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="contactPhone"
                  label="Contact Phone"
                  value={formState.contactPhone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="contactRole"
                  label="Contact Role"
                  value={formState.contactRole}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
            </Grid>
          </Grid> */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default BusinessesForm;
