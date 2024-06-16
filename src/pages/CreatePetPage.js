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
import TomTomMap from '../components/map/TomTomMap';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { AuthContext } from '../middleware/AuthContext';
import { LanguageContext } from '../middleware/LanguageContext';
import { useTranslation } from 'react-i18next';

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
    mainColor: '',
    markingPattern: 'solid',
    markingColors: [],
    date: getCurrentDate(),
    time: getCurrentTime(),
    mainImage:
      'https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    fetchInitialStatusOptions();
    fetchSizeOptions();
    fetchGenderOptions();
    fetchCategoryOptions();
    fetchBehaviorOptions();
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

  const fetchInitialStatusOptions = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/options/initialStatus`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': selectedLanguage,
        },
      });

      console.log('Response from fetch initial status options:', response.data.options);
      if (response.data && response.data.options) {
        const initialStatusOption = response.data.options.find(
          (opt) => opt.key === 'initialStatus',
        );
        if (initialStatusOption) {
          setInitialStatusLabel(initialStatusOption.name);
          setInitialStatusOptions(initialStatusOption.values);
          console.log('Initial status options fetched successfully:', initialStatusOption.values);
        }
      }
    } catch (error) {
      console.error('Error fetching initial status options:', error);
    }
  };

  const fetchSizeOptions = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/options/size`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': selectedLanguage,
        },
      });

      console.log('Response from fetch size options:', response.data.options);
      if (response.data && response.data.options) {
        const sizeOption = response.data.options.find((opt) => opt.key === 'size');
        if (sizeOption) {
          setSizeLabel(sizeOption.name);
          setSizeOptions(sizeOption.values);
          console.log('Size options fetched successfully:', sizeOption.values);
        }
      }
    } catch (error) {
      console.error('Error fetching size options:', error);
    }
  };

  const fetchBehaviorOptions = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/options/behavior`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': selectedLanguage,
        },
      });

      console.log('Response from fetch behavior options:', response.data.options);
      if (response.data && response.data.options) {
        const behaviorOption = response.data.options.find((opt) => opt.key === 'behavior');
        if (behaviorOption) {
          setBehaviorLabel(behaviorOption.name);
          setBehaviorOptions(behaviorOption.values);
          console.log('Behavior options fetched successfully:', behaviorOption.values);
        }
      }
    } catch (error) {
      console.error('Error fetching behavior options:', error);
    }
  };

  const fetchGenderOptions = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/options/gender`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': selectedLanguage,
        },
      });

      console.log('Response from fetch gender options:', response.data.options);
      if (response.data && response.data.options) {
        const genderOption = response.data.options.find((opt) => opt.key === 'gender');
        if (genderOption) {
          setGenderLabel(genderOption.name);
          setGenderOptions(genderOption.values);
          console.log('Gender options fetched successfully:', genderOption.values);
        }
      }
    } catch (error) {
      console.error('Error fetching gender options:', error);
    }
  };

  const fetchCategoryOptions = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/options/category`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': selectedLanguage,
        },
      });

      console.log('Response from fetch category options:', response.data.options);
      if (response.data && response.data.options) {
        const categoryOption = response.data.options.find((opt) => opt.key === 'category');
        if (categoryOption) {
          setCategoryLabel(categoryOption.name);
          setCategoryOptions(categoryOption.values);
          console.log('Category options fetched successfully:', categoryOption.values);
          // console.log('Category options fetched successfully:', categoryOptions);
        }
      }
    } catch (error) {
      console.error('Error fetching category options:', error);
    }
  };
  // const initialStatusOptions = [
  //   { value: 'missing', label: 'Missing' },
  //   { value: 'found', label: 'Found' },
  //   { value: 'seen', label: 'Seen' },
  // ];

  // const categoriesOptions = [
  //   { value: 'dog', label: 'Dog' },
  //   { value: 'cat', label: 'Cat' },
  //   { value: 'cow', label: 'Cow' },
  //   { value: 'horse', label: 'Horse' },
  // ];

  // const sizeOptions = [
  //   { value: "", label: "None" },
  //   { value: "small", label: "Small" },
  //   { value: "medium", label: "Medium" },
  //   { value: "large", label: "Large" },
  // ];

  // const genderOptions = [
  //   { value: '', label: 'None' },
  //   { value: 'he', label: 'He' },
  //   { value: 'she', label: 'She' },
  // ];

  // const behaviorOptions = [
  //   { value: '', label: 'None' },
  //   { value: 'friendly', label: 'Friendly' },
  //   { value: 'aggressive', label: 'Aggressive' },
  //   { value: 'protective', label: 'Protective' },
  //   { value: 'playful', label: 'Playful' },
  //   { value: 'calm', label: 'Calm' },
  // ];

  // Function to fetch ageOptions based on category

  // const getAgeOptions = () => {
  //   const ageOptionsMap = {
  //     0: [
  //       { value: '', label: 'None' },
  //       { value: '0', label: 'Puppy' },
  //       { value: '1', label: 'Adolescent' },
  //       { value: '2', label: 'Adult' },
  //       { value: '3', label: 'Senior' },
  //     ],
  //     1: [
  //       { value: '', label: 'None' },
  //       { value: '0', label: 'Kitten' },
  //       { value: '1', label: 'Adolescent' },
  //       { value: '2', label: 'Adult' },
  //       { value: '3', label: 'Senior' },
  //     ],
  //     2: [
  //       { value: '', label: 'None' },
  //       { value: '0', label: 'Calf' },
  //       { value: '1', label: 'Adolescent' },
  //       { value: '2', label: 'Adult' },
  //       { value: '3', label: 'Senior' },
  //     ],
  //     3: [
  //       { value: '', label: 'None' },
  //       { value: '0', label: 'Foal' },
  //       { value: '1', label: 'Adolescent' },
  //       { value: '2', label: 'Adult' },
  //       { value: '3', label: 'Senior' },
  //     ],
  //   };
  //   return ageOptionsMap[formState.category] || [];
  // };

  const markingPatternOptions = [
    { value: 'solid', label: 'No' },
    { value: 'striped', label: 'Striped' },
    { value: 'spotted', label: 'Spotted' },
    { value: 'patched', label: 'Patched' },
    { value: 'marbled', label: 'Marbled' },
  ];

  const phoneCodeOptions = [
    { value: '', label: 'N/A' },
    { value: '+371', label: '+371' },
    { value: '+372', label: '+372' },
    { value: '+370', label: '+370' },
  ];

  const colorsListOptions = [
    { name: 'Black', hexCode: '#000000' },
    { name: 'Gray', hexCode: '#BEBEBE' },
    { name: 'White', hexCode: '#f7f7f7' },
    { name: 'Cream', hexCode: '#FFF1B9' },
    { name: 'Yellow', hexCode: '#FCDC5C' },
    { name: 'Golden', hexCode: '#FFA500' },
    { name: 'Brown', hexCode: '#C37C4D' },
    { name: 'Red', hexCode: '#A71A20' },
    { name: 'Lilac', hexCode: '#BA97AA' },
    { name: 'Blue', hexCode: '#1A355E' },
    { name: 'Green', hexCode: '#5F6F52' },
    { name: 'Khaki', hexCode: '#BDB76B' },
    { name: 'Beige', hexCode: '#E5DECA' },
    { name: 'Tan', hexCode: '#D2B48C' },
    { name: 'Fawn', hexCode: '#E5AA70' },
    { name: 'Chestnut', hexCode: '#954535' },
  ];

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

  const handleMainColorChange = (colorName) => {
    handleChange('mainColor', colorName);
    setMainColorDialogOpen(false);
  };

  const handleLocationChange = (coords) => {
    setFormState((prevState) => ({
      ...prevState,
      location: coords,
    }));
  };

  const handleMarkingPatternChange = (event) => {
    const value = event.target.value;
    handleChange('markingPattern', value);
  };

  const handleMarkingColorChange = (colorName) => {
    const currentMarkingColors = [...formState.markingColors];
    if (currentMarkingColors.includes(colorName)) {
      handleChange(
        'markingColors',
        currentMarkingColors.filter((color) => color !== colorName),
      );
    } else {
      handleChange('markingColors', [...currentMarkingColors, colorName]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // await axios.post(`${BASE_URL}/pets`, { ...formState, author: user.id });
      const token = localStorage.getItem('token'); // assuming the token is stored in local storage
      await axios.post(
        `${BASE_URL}/pets`,
        { ...formState, author: user.id },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log('Pet details sent successfully to the backend.');
    } catch (error) {
      //   console.log("Error response from the backend:", error.response); // Add this log statement
      //   if (error.response && error.response.data && error.response.data.errors) {
      //     // If backend returns errors, update formErrors state with received errors
      //     setFormErrors(error.response.data.errors);
      //   } else {
      //     console.error("Failed to send pet details to the backend:", error);
      //   }
      // }
      console.log('Error response from the backend:', error.response);
      if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        Array.isArray(error.response.data.errors)
      ) {
        // If backend returns errors, update formErrors state with received errors
        const receivedErrors = error.response.data.errors;
        const newFormErrors = {};
        receivedErrors.forEach((error) => {
          newFormErrors[error.path] = error.msg;
        });
        setFormErrors(newFormErrors);
        console.log('Form errors:', formErrors); // Add this log statement
      } else {
        console.error('Failed to send pet details to the backend:', error);
      }
    }
  };

  // Function to get error message for a specific field
  const getErrorMessage = (field) => {
    return formErrors[field] ? formErrors[field].msg : '';
  };

  const getUpdatedStatusOptions = () => {
    const updatedStatusOptionsMap = {
      missing: [
        { value: '', label: 'None' },
        { value: 'activelySearching', label: 'Actively Searching' },
        { value: 'stillMissing', label: 'Still Missing' },
        { value: 'reunited', label: 'Reunited' },
        { value: 'deceased', label: 'Deceased' },
        { value: 'other', label: 'Other' },
      ],
      found: [
        { value: '', label: 'None' },
        { value: 'awaitingOwner', label: 'Awaiting Owner' },
        { value: 'adopted', label: 'Adopted' },
        { value: 'takenToShelter', label: 'Taken to Shelter' },
        {
          value: 'takenToVeterinaryClinic',
          label: 'Taken to Veterinary Clinic',
        },
        { value: 'deceased', label: 'Deceased' },
        { value: 'other', label: 'Other' },
      ],
      seen: [
        { value: '', label: 'None' },
        { value: 'reportedToAuthorities', label: 'Reported to Authorities' },
        { value: 'freeRoaming', label: 'Free Roaming' },
        { value: 'deceased', label: 'Deceased' },
        { value: 'other', label: 'Other' },
      ],
    };
    return updatedStatusOptionsMap[formState.initialStatus] || [];
  };

  const getBreedOptions = () => {
    const breedOptionsMap = {
      dog: [
        { value: '', label: 'None' },
        { value: 'labradorRetriever', label: 'Labrador Retriever' },
        { value: 'germanShepherd', label: 'German Shepherd' },
        { value: 'goldenRetriever', label: 'Golden Retriever' },
        { value: 'bulldog', label: 'Bulldog' },
        { value: 'beagle', label: 'Beagle' },
        { value: 'poodle', label: 'Poodle' },
        { value: 'rottweiler', label: 'Rottweiler' },
        { value: 'yorkshireTerrier', label: 'Yorkshire Terrier' },
        { value: 'boxer', label: 'Boxer' },
        { value: 'dachshund', label: 'Dachshund' },
      ],
      cat: [
        { value: '', label: 'None' },
        { value: 'Persian', label: 'Persian' },
        { value: 'maineCoon', label: 'Maine Coon' },
        { value: 'ragdoll', label: 'Ragdoll' },
        { value: 'siamese', label: 'Siamese' },
        { value: 'scottishFold', label: 'Scottish Fold' },
        { value: 'sphynx', label: 'Sphynx' },
        { value: 'bengal', label: 'Bengal' },
        { value: 'birman', label: 'Birman' },
        { value: 'americanShorthair', label: 'American Shorthair' },
      ],
      cow: [
        { value: '', label: 'None' },
        { value: 'holstein', label: 'Holstein' },
        { value: 'jersey', label: 'Jersey' },
        { value: 'guernsey', label: 'Guernsey' },
        { value: 'brownSwiss', label: 'Brown Swiss' },
        { value: 'ayrshire', label: 'Ayrshire' },
        { value: 'hereford', label: 'Hereford' },
        { value: 'angus', label: 'Angus' },
        { value: 'brahman', label: 'Brahman' },
        { value: 'simmental', label: 'Simmental' },
        { value: 'charolais', label: 'Charolais' },
      ],
      horse: [
        { value: '', label: 'None' },
        { value: 'arabian', label: 'Arabian' },
        { value: 'thoroughbred', label: 'Thoroughbred' },
        { value: 'quarterHorse', label: 'Quarter Horse' },
        { value: 'clydesdale', label: 'Clydesdale' },
        { value: 'friesian', label: 'Friesian' },
        { value: 'appaloosa', label: 'Appaloosa' },
        { value: 'shetlandPony', label: 'Shetland Pony' },
        { value: 'americanPaintHorse', label: 'American Paint Horse' },
        { value: 'morgan', label: 'Morgan' },
        { value: 'tennesseeWalkingHorse', label: 'Tennessee Walking Horse' },
      ],
    };
    return breedOptionsMap[formState.category] || [];
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Report a Pet
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
                  Pet Details
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
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="gender-label" shrink>
                    {/* Gender */} {genderLabel[selectedLanguage]}
                  </InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    value={formState.gender}
                    label={genderLabel[selectedLanguage]}
                    notched
                    onChange={(e) => handleChange('gender', e.target.value)}
                  >
                    {/* {genderOptions.map((gender) => (
                      <MenuItem key={gender.value} value={gender.value}>
                        {gender.label}
                      </MenuItem>
                    ))} */}
                    <MenuItem value="">None</MenuItem>
                    {genderOptions.map((gender) => (
                      <MenuItem key={gender._id} value={gender.value}>
                        {gender.translations[selectedLanguage]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="behavior-label" shrink>
                    {/* Behavior */} {behaviorLabel[selectedLanguage]}
                  </InputLabel>
                  <Select
                    labelId="behavior-label"
                    id="behavior"
                    value={formState.behavior}
                    onChange={(e) => handleChange('behavior', e.target.value)}
                    label={behaviorLabel[selectedLanguage]}
                    notched
                  >
                    {/* {behaviorOptions.map((behavior) => (
                      <MenuItem key={behavior.value} value={behavior.value}>
                        {behavior.label}
                      </MenuItem>
                    ))} */}
                    <MenuItem value="">None</MenuItem>
                    {behaviorOptions.map((behavior) => (
                      <MenuItem key={behavior._id} value={behavior.value}>
                        {behavior.translations[selectedLanguage]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="age-label" shrink>
                    Age
                  </InputLabel>
                  <Select
                    labelId="age-label"
                    id="age"
                    value={formState.age}
                    // disabled={!formState.category}
                    disabled={
                      formState.category === null ||
                      formState.category === '' ||
                      formState.category === undefined
                    }
                    label="Age"
                    notched
                    onChange={(e) => handleChange('age', e.target.value)}
                  >
                    {/* {getAgeOptions().map((age) => (
                      <MenuItem key={age.value} value={age.value}>
                        {age.label}
                      </MenuItem>
                    ))} */}
                    {/* {ageOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))} */}
                    {/* {ageOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))} */}
                    {ageOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* {ageOptions} */}
              {/* <p> {t(`selectOptions.ageOptions.${formState.category}`)}</p> */}
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="breed-label" shrink>
                    Breed
                  </InputLabel>
                  <Select
                    labelId="breed-label"
                    id="breed"
                    value={formState.breed}
                    disabled={!formState.category}
                    onChange={(e) => handleChange('breed', e.target.value)}
                    label="Breed"
                    notched
                  >
                    {getBreedOptions().map((breed) => (
                      <MenuItem key={breed.value} value={breed.value}>
                        {breed.label}
                      </MenuItem>
                    ))}
                  </Select>
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
                  Pet Location
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TomTomMap onLocationChange={handleLocationChange} />
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
                    Does the pet have markings?
                  </Typography>
                  <RadioGroup
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
                    {/* <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    /> */}
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
                  Main Color
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    border: '1px solid #dadada',
                    borderRadius: '5px',
                    padding: '10px',
                    justifyContent: 'center',
                  }}
                  onClick={() => setMainColorDialogOpen(true)}
                >
                  {formState.mainColor ? (
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: colorsListOptions.find(
                          (color) => color.name === formState.mainColor,
                        ).hexCode,
                        marginRight: '10px',
                      }}
                    />
                  ) : null}
                  <Typography variant="body1">
                    {formState.mainColor ? formState.mainColor : 'Click to choose one color'}
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
                  Marking Colors
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: formState.markingPattern === 'solid' ? 'not-allowed' : 'pointer',
                    border: '1px solid #dadada',
                    borderRadius: '5px',
                    padding: '10px',
                    justifyContent: 'center',
                    opacity: formState.markingPattern === 'solid' ? 0.5 : 1,
                  }}
                  onClick={() =>
                    formState.markingPattern !== 'solid' && setMarkingColorDialogOpen(true)
                  }
                >
                  {formState.markingColors.length > 0 ? (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center !important',
                        alignItems: 'center !important',
                      }}
                    >
                      {formState.markingColors.map((colorName) => (
                        <div
                          key={colorName}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            backgroundColor: colorsListOptions.find(
                              (color) => color.name === colorName,
                            ).hexCode,
                            marginRight: '10px',
                          }}
                        >
                          {/* <p>{colorName}</p> */}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <Typography variant="body1">
                    {formState.markingColors.length > 0
                      ? // ? "Click to change colors"
                        ''
                      : 'Click to choose up to two colors'}
                  </Typography>
                </div>
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
                  {colorsListOptions.map((color) => (
                    <div
                      key={color.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '1rem',
                        marginBottom: '1rem',
                        cursor: 'pointer',
                        minWidth: '100px',
                      }}
                      onClick={() => handleMainColorChange(color.name)}
                    >
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          backgroundColor: color.hexCode,
                          marginRight: '8px',
                          border:
                            formState.mainColor === color.name
                              ? '2px solid #2a9df4'
                              : '0px solid #dadada',
                        }}
                      />
                      <Typography variant="body1">{color.name}</Typography>
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
                  {colorsListOptions.map((color) => (
                    <div
                      key={color.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '1rem',
                        marginBottom: '1rem',
                        cursor: 'pointer',
                        minWidth: '100px',
                      }}
                      onClick={() => handleMarkingColorChange(color.name)}
                    >
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          backgroundColor: color.hexCode,
                          marginRight: '8px',
                          border: formState.markingColors.includes(color.name)
                            ? '2px solid #2a9df4'
                            : '0px solid #dadada',
                        }}
                      />
                      <Typography variant="body1">{color.name}</Typography>
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
                Date / Time
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  // required
                  id="date"
                  name="date"
                  label="Date"
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
                  label="Time"
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
                  Upload File
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ImageUploader />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
                  Contact Information
                </Typography>
              </Grid>

              <Grid item xs={3} sm={3} md={2} lg={2}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="phoneCode-label" shrink>
                    Code
                  </InputLabel>
                  <Select
                    labelId="phoneCode-label"
                    id="phoneCode"
                    value={formState.phoneCode}
                    onChange={(e) => handleChange('phoneCode', e.target.value)}
                    label="Code"
                    notched
                  >
                    {phoneCodeOptions.map((code) => (
                      <MenuItem key={code.value} value={code.value}>
                        {code.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={9} sm={9} md={4} lg={4}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
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
                  label="Email"
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
                  label="Notes"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formState.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  placeholder="Appearance, behavior, special medical care, circumstances of loss, or any other relevant notes."
                  InputLabelProps={{
                    shrink: true, // Always shrink the label
                  }}
                />
                {/* <InputLabel htmlFor="notes">Notes</InputLabel> */}
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
                  Current Status
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="updatedStatus-label" shrink>
                    Updated Status
                  </InputLabel>
                  <Select
                    labelId="updatedStatus-label"
                    id="updatedStatus"
                    value={formState.updatedStatus}
                    disabled={!formState.initialStatus}
                    label="Follow Up Updates"
                    notched
                    onChange={(e) => handleChange('updatedStatus', e.target.value)}
                  >
                    {getUpdatedStatusOptions().map((status) => (
                      <MenuItem key={status.value} value={status.value}>
                        {status.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="updatedStatusDescription"
                  name="updatedStatusDescription"
                  label="Updated Status Description"
                  disabled={!formState.petLastStatus}
                  fullWidth
                  // multiline
                  // rows={4}
                  variant="outlined"
                  value={formState.updatedStatusDescription}
                  onChange={(e) => handleChange('updatedStatusDescription', e.target.value)}
                  placeholder="Enter details such as where the pet was found, shelter name, vet clinic name, and any additional information."
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

// Basic Information:

// Pet Name
// Pet Species (e.g., Dog, Cat, Bird, Rabbit)
// Pet Breed
// Pet Color
// Pet Gender
// Pet Age
// Pet Size (e.g., Small, Medium, Large)
// Pet Weight
// Unique Identifiers (e.g., Microchip ID, Collar ID)
// Appearance Details:

// Coat Pattern
// Markings
// Eye Color
// Fur Length
// Tail Type
// Ear Shape
// Health Information:

// Health Condition (e.g., Healthy, Injured, Sick)
// Medical Conditions
// Required Medications
// Allergies
// Vaccination Status
// Microchip Status
// Dietary Needs
// Lost/Found Details:

// Date and Time Lost/Found
// Location Lost/Found
// Last Seen Location
// Circumstances of Loss/Discovery
// Area Description (e.g., Urban, Rural, Wooded)
// Contact Information:

// Owner's Name
// Owner's Contact Information (Phone, Email)
// Finder's Contact Information (if found)
// Additional Information:

// Reward Offered
// Behavior Traits
// Pet's Likes and Dislikes
// Personality Description
// Any Identifying Features
// Collar Description
// Photos of the Pet
// Videos of the Pet
// Legal Information (if applicable):

// Pet License Information
// Proof of Ownership
// Police Report Details (for theft cases)
// Follow-Up Actions:

// Update on Pet's Status (e.g., Reunited, Adopted)
// Feedback on Services Provided
// Social Media Integration:

// Share Buttons for Social Media Platforms
// Links to Share Lost/Found Pet Information
// Emergency Contacts:

// Local Animal Shelters
// Veterinary Clinics
// Animal Control Agencies
