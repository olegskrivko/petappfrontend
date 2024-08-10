import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import ImageUploader from '../components/pets/ImageUploader';
import PetHealth from '../components/petcard/PetHealth';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

import { BASE_URL } from '../middleware/config';
// import TomTomMap from '../components/map/TomTomMap';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';
import LeafletAddPetMap from '../components/map/LeafletAddPetMap';
import { AuthContext } from '../middleware/AuthContext';
import { LanguageContext } from '../middleware/LanguageContext';
import { useTranslation } from 'react-i18next';
// import Upload from '../pages/Upload';

function CreatePetPage() {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const { selectedLanguage } = useContext(LanguageContext);

  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 10); // Returns date in YYYY-MM-DD format
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // Returns time in HH:MM format
  };

  const [formState, setFormState] = useState({
    initialStatus: '',
    category: '',
    identifier: '',
    size: '',
    gender: '',
    behavior: '',
    age: '',
    breed: '',
    health: [],
    healthDetails: '',
    location: { lat: null, lng: null },
    mainColor: { hex: '', label: '' },
    markingPattern: '1',
    markingColors: [],
    date: getCurrentDate(),
    time: getCurrentTime(),
    // mainImage:
    //   'https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image: null,
    phone: '',
    phoneCode: '',
    email: '',
    notes: '',
    updatedStatus: '',
    updatedStatusDescription: '',
    isPublic: true,
    isClosed: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [mainColorDialogOpen, setMainColorDialogOpen] = useState(false);
  const [markingColorDialogOpen, setMarkingColorDialogOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [initialStatusLabel, setInitialStatusLabel] = useState([]);
  const [initialStatusOptions, setInitialStatusOptions] = useState([]);

  const [sizeLabel, setSizeLabel] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);

  const [genderLabel, setGenderLabel] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);

  const [categoryLabel, setCategoryLabel] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  const [behaviorLabel, setBehaviorLabel] = useState([]);
  const [behaviorOptions, setBehaviorOptions] = useState([]);

  const [translations, setTranslations] = useState({});

  const [ageOptions, setAgeOptions] = useState([]);

  const [breedOptions, setBreedOptions] = useState([]);

  const [updatedStatusOptions, setUpdatedStatusOptions] = useState([]);

  // const [colorsListOptions, setColorsListOptions] = useState([]);

  useEffect(() => {
    const fetchAgeOptions = () => {
      const category = formState.category || 1;
      const options = t(`selectOptions.ageOptions.${category}`, { returnObjects: true }) || [];

      //Ensure options is an array before setting state
      if (Array.isArray(options)) {
        console.log('Fetched xxx age options:', options);
        setAgeOptions(options);
      } else {
        console.error('Invalid age YYY options structure:', options);
        setAgeOptions([]);
      }
    };

    fetchAgeOptions();
  }, [formState.category, t]);

  useEffect(() => {
    const fetchBreedOptions = () => {
      const category = formState.category || 1;
      const options = t(`selectOptions.breedOptions.${category}`, { returnObjects: true }) || [];

      //Ensure options is an array before setting state
      if (Array.isArray(options)) {
        console.log('Fetched xxx breed options:', options);
        setBreedOptions(options);
      } else {
        console.error('Invalid breed YYY options structure:', options);
        setBreedOptions([]);
      }
    };

    fetchBreedOptions();
  }, [formState.category, t]);

  useEffect(() => {
    const fetchUpdatedStatusOptions = () => {
      const initialStatus = formState.initialStatus || 1;
      const options =
        t(`selectOptions.updatedStatusOptions.${initialStatus}`, { returnObjects: true }) || [];

      //Ensure options is an array before setting state
      if (Array.isArray(options)) {
        console.log('Fetched xxx breed options:', options);
        setUpdatedStatusOptions(options);
      } else {
        console.error('Invalid breed YYY options structure:', options);
        setUpdatedStatusOptions([]);
      }
    };

    fetchUpdatedStatusOptions();
  }, [formState.initialStatus, t]);

  // const fetchTranslations = async () => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}/translations`, {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         'Accept-Language': selectedLanguage,
  //       },
  //     });
  //     setTranslations(response.data);
  //     console.log('Response from fetch translations:', response.data);
  //   } catch (error) {
  //     console.error('Error fetching category options:', error);
  //   }
  // };
  // Fetch size options based on user's language on component mount
  useEffect(() => {
    // fetchInitialStatusOptions();
    // fetchSizeOptions();
    // fetchGenderOptions();
    // fetchCategoryOptions();
    // fetchBehaviorOptions();
  }, []);

  const fetchTranslations = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/translations`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': selectedLanguage,
        },
      });
      setTranslations(response.data);
      console.log('Response from fetch translations:', response.data);
    } catch (error) {
      console.error('Error fetching translations:', error);
      // Handle error state or notify user accordingly
    }
  };

  // Effect to fetch translations when selectedLanguage changes
  useEffect(() => {
    fetchTranslations();
  }, [selectedLanguage]);

  const handleChange = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));

    // Clear the error message for the field
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '', // Clear the error message for the field
    }));
  };

  // const handleMainColorChange = (colorName) => {
  //   handleChange('mainColor', colorName);
  //   setMainColorDialogOpen(false);
  // };
  const handleMainColorChange = (color) => {
    setFormState((prevState) => ({
      ...prevState,
      mainColor: color, // Update with both hex and label
    }));
    setMainColorDialogOpen(false);
  };

  const handleLocationChange = (coords) => {
    setFormState((prevState) => ({
      ...prevState,
      location: {
        lat: coords.lat,
        lng: coords.lng,
      },
    }));
  };

  const handleMarkingPatternChange = (event) => {
    const value = event.target.value;
    handleChange('markingPattern', value);
  };

  // const handleMarkingColorChange = (colorName) => {
  //   const currentMarkingColors = [...formState.markingColors];
  //   if (currentMarkingColors.includes(colorName)) {
  //     handleChange(
  //       'markingColors',
  //       currentMarkingColors.filter((color) => color !== colorName),
  //     );
  //   } else {
  //     handleChange('markingColors', [...currentMarkingColors, colorName]);
  //   }
  // };

  // Handler for changing marking colors
  const handleMarkingColorChange = (color) => {
    const currentMarkingColors = [...formState.markingColors];
    const colorExists = currentMarkingColors.some((c) => c.hex === color.hex);

    if (colorExists) {
      // Remove color if it already exists
      handleChange(
        'markingColors',
        currentMarkingColors.filter((c) => c.hex !== color.hex),
      );
    } else {
      // Add color if it doesn't exist, but limit to 3 colors
      if (currentMarkingColors.length < 2) {
        handleChange('markingColors', [...currentMarkingColors, color]);
      }
    }
  };

  // const handleImageUpload = (file) => {
  //   handleChange('image', file);
  // };

  // Utility function to resize image
  // Utility function to resize and crop image
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

  // Handler for image upload
  // const handleImageUpload = (file) => {
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     image: file,
  //   }));

  //   // Create a URL for the image and set it as preview
  //   const previewUrl = URL.createObjectURL(file);
  //   setImagePreview(previewUrl);
  // };
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');

      // Create FormData object to send the form data and the file
      const formData = new FormData();
      Object.keys(formState).forEach((key) => {
        if (key === 'image' && formState[key]) {
          formData.append(key, formState[key]); // Append the image file
        } else if (key === 'location') {
          formData.append('location[lat]', formState.location.lat);
          formData.append('location[lng]', formState.location.lng);
          formData.append('author', user.id);
        } else if (key === 'mainColor' && formState[key]) {
          formData.append(`${key}[hex]`, formState[key].hex);
          formData.append(`${key}[label]`, formState[key].label);
        } else if (Array.isArray(formState[key])) {
          formState[key].forEach((item, index) => {
            if (typeof item === 'object' && item !== null) {
              Object.keys(item).forEach((nestedKey) => {
                formData.append(`${key}[${index}][${nestedKey}]`, item[nestedKey]);
              });
            } else {
              formData.append(`${key}[]`, item);
            }
          });
        } else {
          formData.append(key, formState[key]);
        }
      });

      // Append user ID to the form data if needed
      //  console.log('User:', user.id); // Log user object (for debugging
      // formData.append('author', user.id);
      const objectFromFormData = {};
      formData.forEach((value, key) => {
        objectFromFormData[key] = value;
      });
      console.log('aaaa', objectFromFormData.image);

      console.log('FormData:', formData); // Log FormData before making the request
      console.log(JSON.stringify(objectFromFormData));

      const response = await axios.post(`${BASE_URL}/pets`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Pet details sent successfully to the backend.'); // Log success message
    } catch (error) {
      console.error('Error response from the backend:', error.response); // Log error response
      if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        Array.isArray(error.response.data.errors)
      ) {
        const receivedErrors = error.response.data.errors;
        const newFormErrors = {};
        receivedErrors.forEach((error) => {
          newFormErrors[error.path] = error.msg;
        });
        setFormErrors(newFormErrors);
        console.log('Form errors:', formErrors);
      } else {
        console.error('Failed to send pet details to the backend:', error);
      }
    }
  };

  // Handle removal of the selected option
  //  const handleSizeRemove = () => {
  //   setFormState({
  //     ...formState,
  //     size: '', // Reset the size value
  //   });
  // };

  const handleClearSelect = (field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: '', // Reset the specified field
    }));
  };

  // const handleClearSelect = () => {
  //   handleChange('size', ''); // Clear the select value
  // };

  // Function to get error message for a specific field
  const getErrorMessage = (field) => {
    return formErrors[field] ? formErrors[field].msg : '';
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom textAlign="center">
            {/* Report a Pet */} {t('pageTitles.reportAPet')}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
                  {t('formTitles.petDetails')}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="initialStatus-label" shrink>
                    {t('formLabels.initialStatus')}*
                  </InputLabel>
                  <Select
                    labelId="initialStatus-label"
                    id="initialStatus"
                    value={formState.initialStatus}
                    onChange={(e) => handleChange('initialStatus', e.target.value)}
                    error={Boolean(formErrors.initialStatus)}
                    label={t('formLabels.initialStatus') + '*'}
                    notched
                  >
                    {t('selectOptions.initialStatusOptions', { returnObjects: true }).map(
                      (option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ),
                    )}
                  </Select>
                  {/* Display error message if there's an error for the initial status field */}

                  {/* {getErrorMessage('initialStatus') && (
                    <Typography variant="body2" color="error">
                      {getErrorMessage('initialStatus')}
                    </Typography>
                  )} */}
                  {/* {formErrors.initialStatus && (
                    <Typography variant="body2" color="error">
                      {formErrors.initialStatus}
                    </Typography>
                  )} */}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="category-label" shrink>
                    {t('formLabels.category')}*
                  </InputLabel>
                  <Select
                    labelId="category-label"
                    id="category"
                    value={formState.category}
                    label={t('formLabels.category') + '*'}
                    error={Boolean(formErrors.category)}
                    notched
                    onChange={(e) => {
                      handleChange('category', e.target.value);
                      handleChange('age', '');
                      handleChange('breed', '');
                    }}
                  >
                    {/* {categoriesOptions.map((category) => (
                      <MenuItem key={category.value} value={category.value}>
                        {category.label}
                      </MenuItem>
                    ))} */}
                    {/* <MenuItem value="">None</MenuItem>
                    {categoryOptions.map((category) => (
                      <MenuItem key={category._id} value={category.value}>
                        {category.translations[selectedLanguage]}
                      </MenuItem>
                    ))} */}
                    {t('selectOptions.categoryOptions', { returnObjects: true }).map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>

                  {formErrors.category && (
                    <Typography variant="body2" color="error">
                      {formErrors.category}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id="identifier"
                  name="identifier"
                  label={t('formLabels.identifier')}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.identifier}
                  placeholder={t('placeholders.identifier')}
                  onChange={(e) => handleChange('identifier', e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="size-label" shrink>
                    {t('formLabels.size')}
                  </InputLabel>

                  <Select
                    labelId="size-label"
                    id="size"
                    value={formState.size}
                    label={t('formLabels.size')}
                    notched
                    onChange={(e) => handleChange('size', e.target.value)}
                    error={Boolean(formErrors.size)}
                    fullWidth
                  >
                    {t('selectOptions.sizeOptions', { returnObjects: true }).map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formState.size && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('size')} // Pass the field name here
                      sx={{
                        position: 'absolute',
                        right: 8, // Adjust as needed
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // Ensure it is on top of the select
                        backgroundColor: '#f5f5f5', // Light gray background
                        '&:hover': {
                          backgroundColor: '#e0e0e0', // Slightly darker on hover
                        },
                        borderRadius: '50%', // Round button
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                      }}
                    >
                      <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                    </IconButton>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="gender-label" shrink>
                    {/* Gender */} {t('formLabels.gender')}
                  </InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    value={formState.gender}
                    label={t('formLabels.gender')}
                    notched
                    onChange={(e) => handleChange('gender', e.target.value)}
                  >
                    {t('selectOptions.genderOptions', { returnObjects: true }).map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formState.gender && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('gender')} // Pass the field name here
                      sx={{
                        position: 'absolute',
                        right: 8, // Adjust as needed
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // Ensure it is on top of the select
                        backgroundColor: '#f5f5f5', // Light gray background
                        '&:hover': {
                          backgroundColor: '#e0e0e0', // Slightly darker on hover
                        },
                        borderRadius: '50%', // Round button
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                      }}
                    >
                      <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                    </IconButton>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="behavior-label" shrink>
                    {t('formLabels.behavior')}
                  </InputLabel>
                  <Select
                    labelId="behavior-label"
                    id="behavior"
                    value={formState.behavior}
                    onChange={(e) => handleChange('behavior', e.target.value)}
                    label={t('formLabels.behavior')}
                    notched
                  >
                    {t('selectOptions.behaviorOptions', { returnObjects: true }).map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formState.behavior && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('behavior')} // Pass the field name here
                      sx={{
                        position: 'absolute',
                        right: 8, // Adjust as needed
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // Ensure it is on top of the select
                        backgroundColor: '#f5f5f5', // Light gray background
                        '&:hover': {
                          backgroundColor: '#e0e0e0', // Slightly darker on hover
                        },
                        borderRadius: '50%', // Round button
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                      }}
                    >
                      <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                    </IconButton>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="age-label" shrink>
                    {t('formLabels.age')}
                  </InputLabel>
                  <Select
                    labelId="age-label"
                    id="age"
                    value={formState.age}
                    disabled={
                      formState.category === null ||
                      formState.category === '' ||
                      formState.category === undefined
                    }
                    label={t('formLabels.age')}
                    notched
                    onChange={(e) => handleChange('age', e.target.value)}
                  >
                    {ageOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formState.age && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('age')} // Pass the field name here
                      sx={{
                        position: 'absolute',
                        right: 8, // Adjust as needed
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // Ensure it is on top of the select
                        backgroundColor: '#f5f5f5', // Light gray background
                        '&:hover': {
                          backgroundColor: '#e0e0e0', // Slightly darker on hover
                        },
                        borderRadius: '50%', // Round button
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                      }}
                    >
                      <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                    </IconButton>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="breed-label" shrink>
                    {t('formLabels.subcategory')}
                  </InputLabel>
                  <Select
                    labelId="breed-label"
                    id="breed"
                    value={formState.breed}
                    disabled={
                      formState.category === null ||
                      formState.category === '' ||
                      formState.category === undefined
                    }
                    onChange={(e) => handleChange('breed', e.target.value)}
                    label={t('formLabels.subcategory')}
                    notched
                  >
                    {/* {getBreedOptions().map((breed) => (
                      <MenuItem key={breed.value} value={breed.value}>
                        {breed.label}
                      </MenuItem>
                    ))} */}
                    {breedOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formState.breed && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('breed')} // Pass the field name here
                      sx={{
                        position: 'absolute',
                        right: 8, // Adjust as needed
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // Ensure it is on top of the select
                        backgroundColor: '#f5f5f5', // Light gray background
                        '&:hover': {
                          backgroundColor: '#e0e0e0', // Slightly darker on hover
                        },
                        borderRadius: '50%', // Round button
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                      }}
                    >
                      <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                    </IconButton>
                  )}
                </FormControl>
              </Grid>
              {/* {translations.formTitles && translations.formTitles.petDetails} */}
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <PetHealth formState={formState} setFormState={setFormState} />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
                  {t('formTitles.petLocation')}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <LeafletAddPetMap onLocationChange={handleLocationChange} />
                <div>
                  <h2>Current Location:</h2>
                  <p>Latitude: {formState.location.lat}</p>
                  <p>Longitude: {formState.location.lng}</p>
                </div>
                {/* <TomTomMap onLocationChange={handleLocationChange} /> */}
              </Grid>

              <Grid item xs={12}>
                <FormControl component="fieldset">
                  {/* <FormLabel component="legend">
                    Does the pet have markings?
                  </FormLabel> */}
                  <Typography
                    variant="body1"
                    style={{ fontWeight: '500' }}
                    gutterBottom
                    textAlign="left"
                  >
                    {/* Does the pet have markings? */}
                    {t('formTitles.markings')}
                  </Typography>
                  {/* <RadioGroup
                    style={{ display: 'flex !important', flexDirection: 'row' }}
                    value={formState.markingPattern}
                    onChange={handleMarkingPatternChange}
                  >
                    {markingPatternOptions.map((pattern) => (
                      <FormControlLabel
                        key={pattern.value}
                        value={pattern.value}
                        control={<Radio />}
                        label={pattern.label}
                      />
                    ))}
             
                  </RadioGroup> */}
                  <RadioGroup
                    style={{ display: 'flex !important', flexDirection: 'row' }}
                    value={formState.markingPattern}
                    onChange={handleMarkingPatternChange}
                  >
                    {t('selectOptions.markingOptions', { returnObjects: true }).map((option) => (
                      <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
                  {t('formTitles.mainColor')}
                </Typography>
                {/* {t('selectOptions.categoryOptions', { returnObjects: true }).map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))} */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    border: '1px solid #dadada',
                    borderRadius: '5px',
                    padding: '10px',
                    justifyContent: 'flex-start',
                  }}
                  onClick={() => setMainColorDialogOpen(true)}
                >
                  {formState.mainColor.hex ? (
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: formState.mainColor.hex, // Use the stored hex value directly
                        marginRight: '10px',
                      }}
                    />
                  ) : null}

                  {/* <Typography variant="body1">
                    {formState.mainColor.label
                      ? formState.mainColor.label // Use the stored label directly
                      : 'Click to choose one color'}
                  </Typography> */}

                  <Typography variant="body1">
                    {formState.mainColor.label
                      ? t('selectOptions.colorOptions', {
                          returnObjects: true,
                        }).find((color) => color.value === formState.mainColor.hex).label
                      : 'Click to choose one color'}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
                  {t('formTitles.markingColors')}
                </Typography>
                {/* <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: formState.markingPattern === '1' ? 'not-allowed' : 'pointer',
                    border: '1px solid #dadada',
                    borderRadius: '5px',
                    padding: '10px',
                    justifyContent: 'flex-start',
                    opacity: formState.markingPattern === '1' ? 0.5 : 1,
                  }}
                  onClick={() =>
                    formState.markingPattern !== '1' && setMarkingColorDialogOpen(true)
                  }
                > */}
                {/* <Typography
                    variant="body1"
                    style={{ fontWeight: '500' }}
                    gutterBottom
                    textAlign="left"
                  >
                    Marking Colors
                  </Typography> */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    cursor: formState.markingPattern === '1' ? 'not-allowed' : 'pointer',
                    border: '1px solid #dadada',
                    borderRadius: '5px',
                    padding: '10px',
                    justifyContent: 'flex-start',
                    opacity: formState.markingPattern === '1' ? 0.5 : 1,
                  }}
                  onClick={() =>
                    formState.markingPattern !== '1' && setMarkingColorDialogOpen(true)
                  }
                >
                  {formState.markingColors.length > 0 ? (
                    formState.markingColors.map((color, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',

                          marginRight: index === 0 ? '1rem' : '0',
                        }}
                      >
                        <div
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            backgroundColor: color.hex,
                            marginRight: '10px',
                          }}
                        />
                        {/* <Typography variant="body1">{color.label}</Typography> */}
                        {/* <Typography variant="body1">
                          {
                            t('selectOptions.colorOptions', {
                              returnObjects: true,
                            }).find((color) => color.value === formState.markingColors.hex).label
                          }
                        </Typography> */}
                        <Typography variant="body1">
                          {
                            t('selectOptions.colorOptions', { returnObjects: true }).find(
                              (option) => option.value === color.hex,
                            )?.label
                          }
                        </Typography>
                      </div>
                    ))
                  ) : (
                    <Typography variant="body1">Click to choose up to three colors</Typography>
                  )}
                </div>

                {/* <Typography variant="body1">
                  {formState.markingColors.length > 0
                    ? // ? "Click to change colors"
                      ''
                    : 'Click to choose up to two colors'}
                </Typography> */}
                {/* </div> */}
              </Grid>
            </Grid>

            {/* Main Color Dialog */}
            <Dialog open={mainColorDialogOpen} onClose={() => setMainColorDialogOpen(false)}>
              <DialogTitle>
                Select Main Color
                <IconButton
                  aria-label="close"
                  onClick={() => setMainColorDialogOpen(false)}
                  style={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <FormGroup row>
                  {t('selectOptions.colorOptions', {
                    returnObjects: true,
                  }).map((color) => (
                    <div
                      key={color.value}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '1rem',
                        marginBottom: '1rem',
                        cursor: 'pointer',
                        minWidth: '100px',
                      }}
                      onClick={() =>
                        handleMainColorChange({ hex: color.value, label: color.label })
                      }
                    >
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          backgroundColor: color.value,
                          marginRight: '8px',
                          border:
                            formState.mainColor.hex === color.value
                              ? '2px solid #2a9df4'
                              : '0px solid #dadada',
                        }}
                      />
                      <Typography variant="body1">{color.label}</Typography>
                    </div>
                  ))}
                </FormGroup>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setMainColorDialogOpen(false)} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
            {/* Marking Color Dialog */}
            <Dialog open={markingColorDialogOpen} onClose={() => setMarkingColorDialogOpen(false)}>
              <DialogTitle>
                Select Marking Colors
                <IconButton
                  aria-label="close"
                  onClick={() => setMarkingColorDialogOpen(false)}
                  style={{ position: 'absolute', right: 8, top: 8 }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <FormGroup row>
                  {t('selectOptions.colorOptions', {
                    returnObjects: true,
                  }).map((color) => (
                    <div
                      key={color.value}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '1rem',
                        marginBottom: '1rem',
                        cursor: 'pointer',
                        minWidth: '100px',
                      }}
                      onClick={() =>
                        handleMarkingColorChange({ hex: color.value, label: color.label })
                      }
                    >
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          backgroundColor: color.value,
                          marginRight: '8px',
                          border: formState.markingColors.some((c) => c.hex === color.value)
                            ? '2px solid #2a9df4'
                            : '0px solid #dadada',
                        }}
                      />
                      <Typography variant="body1">{color.label}</Typography>
                    </div>
                  ))}
                </FormGroup>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setMarkingColorDialogOpen(false)} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>

            <Grid item xs={12}>
              <Typography
                variant="body1"
                style={{ fontWeight: '500' }}
                gutterBottom
                textAlign="left"
              >
                {t('formTitles.datetime')}
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  // required
                  id="date"
                  name="date"
                  label={t('formLabels.date')}
                  type="date"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  // required
                  id="time"
                  name="time"
                  label={t('formLabels.time')}
                  type="time"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                />
              </Grid>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={6} lg={6}>
         
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
            </Grid> */}
            {/* <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
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
              </Grid>
            </Grid> */}
            <Grid item xs={12}>
              <Typography
                variant="body1"
                style={{ fontWeight: '500' }}
                gutterBottom
                textAlign="left"
              >
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
                // <div style={{ marginTop: '20px' }}>
                //   <img
                //     src={imagePreview}
                //     alt="Preview"
                //     style={{ maxWidth: '100%', height: 'auto' }}
                //   />
                // </div>
                <Box mb={2} style={{ width: '100%', marginTop: '20px' }}>
                  <img src={imagePreview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
              {/* <ImageUploader /> */}
            </Grid>
            {/* add code here to upload image */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
                  {t('formTitles.contactInformation')}
                </Typography>
              </Grid>

              <Grid item xs={3} sm={3} md={2} lg={2}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="phoneCode-label" shrink>
                    {t('formLabels.phoneCode')}
                  </InputLabel>
                  <Select
                    labelId="phoneCode-label"
                    id="phoneCode"
                    value={formState.phoneCode}
                    onChange={(e) => handleChange('phoneCode', e.target.value)}
                    label={t('formLabels.phoneCode')}
                    notched
                  >
                    {/* {phoneCodeOptions.map((code) => (
                      <MenuItem key={code.value} value={code.value}>
                        {code.label}
                      </MenuItem>
                    ))} */}
                    {t('selectOptions.phoneCodeOptions', { returnObjects: true }).map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formState.phoneCode && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('phoneCode')} // Pass the field name here
                      sx={{
                        position: 'absolute',
                        right: 8, // Adjust as needed
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // Ensure it is on top of the select
                        backgroundColor: '#f5f5f5', // Light gray background
                        '&:hover': {
                          backgroundColor: '#e0e0e0', // Slightly darker on hover
                        },
                        borderRadius: '50%', // Round button
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                      }}
                    >
                      <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                    </IconButton>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={9} sm={9} md={4} lg={4}>
                <TextField
                  id="phone"
                  name="phone"
                  label={t('formLabels.phoneNumber')}
                  type="text"
                  fullWidth
                  placeholder="12345678"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id="email"
                  name="email"
                  label={t('formLabels.email')}
                  type="email"
                  fullWidth
                  placeholder="example@gmail.com"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="notes"
                  name="notes"
                  label={t('formLabels.notes')}
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formState.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  placeholder={t('placeholders.notes')}
                  InputLabelProps={{
                    shrink: true, // Always shrink the label
                  }}
                />
                {/* <InputLabel htmlFor="notes">Notes</InputLabel> */}
              </Grid>

              <Grid item xs={12} style={{ display: 'none' }}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
                  {t('formTitles.currentStatus')}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} style={{ display: 'none' }}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="updatedStatus-label" shrink>
                    {t('formLabels.updatedStatus')}
                  </InputLabel>
                  <Select
                    labelId="updatedStatus-label"
                    id="updatedStatus"
                    value={formState.updatedStatus}
                    disabled={!formState.initialStatus}
                    label={t('formLabels.updatedStatus')}
                    notched
                    onChange={(e) => handleChange('updatedStatus', e.target.value)}
                  >
                    {/* {getUpdatedStatusOptions().map((status) => (
                      <MenuItem key={status.value} value={status.value}>
                        {status.label}
                      </MenuItem>
                    ))} */}
                    {updatedStatusOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} style={{ display: 'none' }}>
                <TextField
                  id="updatedStatusDescription"
                  name="updatedStatusDescription"
                  label={t('formLabels.updatedStatusDescription')}
                  disabled={!formState.updatedStatus}
                  fullWidth
                  // multiline
                  // rows={4}
                  variant="outlined"
                  value={formState.updatedStatusDescription}
                  onChange={(e) => handleChange('updatedStatusDescription', e.target.value)}
                  placeholder={t('placeholders.updatedStatusDescription')}
                  InputLabelProps={{
                    shrink: true, // Always shrink the label
                  }}
                />
                {/* <InputLabel htmlFor="notes">Notes</InputLabel> */}
              </Grid>

              {/* <Grid item xs={12}>
                Follow-Up Actions: Update on Pet's Status (e.g., Reunited,
                Adopted) Feedback on Services Provided
              </Grid>
              <Grid item xs={12}>
                Emergency Contacts: Local Animal Shelters Veterinary Clinics
                Animal Control Agencies
              </Grid> */}
              <Grid item xs={12}>
                <Alert severity="info">
                  <AlertTitle>{'INFORMATION'}</AlertTitle>
                  {
                    'This will be made public, please do not provide sensitive information that you would like kept private!'
                  }
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  // startIcon={<SearchIcon />}
                  // size="large"
                  style={{
                    // marginTop: "2rem",
                    marginLeft: 'auto',
                    marginRight: '0',
                    display: 'flex',
                    backgroundColor: '#ffc107',
                    color: 'rgba(0, 0, 0, 0.87)',
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CreatePetPage;
