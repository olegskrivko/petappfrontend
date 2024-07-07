import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Chip,
  Box,
  List,
  InputLabel,
  TextField,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
  Button,
  Slider,
  Grid,
  Checkbox,
  FormControlLabel,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { BASE_URL } from '../../middleware/config';
// MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { AuthContext } from '../../middleware/AuthContext';
import { LanguageContext } from '../../middleware/LanguageContext';
import { useTranslation } from 'react-i18next';
import { LocationOn } from '@mui/icons-material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
const Sidebar = ({ applyFilters, resetFilters, userLocation }) => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const { selectedLanguage } = useContext(LanguageContext);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [identifier, setIdentifier] = useState('');
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState(5);
  const [colors, setColors] = useState([]);
  const [patterns, setPatterns] = useState([]);
  const [userCurrentLocation, setUserCurrentLocation] = useState('');

  const initialCategories = (queryParams.getAll('categories') || []).flatMap((category) =>
    category.split(','),
  );

  const initialGenders = (queryParams.getAll('genders') || []).flatMap((gender) =>
    gender.split(','),
  );

  const initialStatuses = (queryParams.getAll('statuses') || []).flatMap((status) =>
    status.split(','),
  );

  const initialSizes = (queryParams.getAll('sizes') || []).flatMap((size) => size.split(','));

  const initialColors = (queryParams.getAll('colors') || []).flatMap((color) => color.split(','));

  const initialPatterns = (queryParams.getAll('patterns') || []).flatMap((pattern) =>
    pattern.split(','),
  );
  // const initialUserCurrentLocation = queryParams.getAll('userCurrentLocation') || '';

  // console.log(initialUserCurrentLocation, 'initialUserCurrentLocationx');
  //console.log(userCurrentLocation, 'userCurrentLocationx');
  //const initialIdentifier = queryParams.get('identifier') || '';

  // Use selected state to manage UI updates
  const [selectedCategories, setSelectedCategories] = useState(initialCategories);
  const [selectedGenders, setSelectedGenders] = useState(initialGenders);
  const [selectedStatuses, setSelectedStatuses] = useState(initialStatuses);
  const [selectedSizes, setSelectedSizes] = useState(initialSizes);
  const [selectedColors, setSelectedColors] = useState(initialColors);
  const [selectedPatterns, setSelectedPatterns] = useState(initialPatterns);

  //const [selectedIndentifer, setSelectedIndentifer] = useState(initialIdentifier);

  // useEffect(() => {
  //   // Fetch tastes when the component mounts
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/categories`);
  //       const data = await response.json();
  //       setCategories(data); // Assuming the data structure is an array of tastes
  //       //console.log("ddatadata", data);
  //     } catch (error) {
  //       console.error('Error fetching tastes:', error);
  //     }
  //   };

  //   fetchCategories();
  // }, [location.search]); // Empty dependency array ensures the effect runs only once when the component mounts

  // new down
  useEffect(() => {
    const fetchOptions = async () => {
      const category = t(`selectOptions.categoryOptions`, { returnObjects: true }) || [];
      const gender = t(`selectOptions.genderOptions`, { returnObjects: true }) || [];
      const initialStatus = t(`selectOptions.initialStatusOptions`, { returnObjects: true }) || [];
      const size = t(`selectOptions.sizeOptions`, { returnObjects: true }) || [];
      const color = t(`selectOptions.colorOptions`, { returnObjects: true }) || [];
      const pattern = t(`selectOptions.markingOptions`, { returnObjects: true }) || [];

      setCategories(Array.isArray(category) ? category : []);
      setGenders(Array.isArray(gender) ? gender : []);
      setStatuses(Array.isArray(initialStatus) ? initialStatus : []);
      setSizes(Array.isArray(size) ? size : []);
      setColors(Array.isArray(color) ? color : []);
      setPatterns(Array.isArray(pattern) ? pattern : []);
    };

    fetchOptions();
  }, [t, selectedLanguage]);
  // new up

  // useEffect(() => {
  //   const fetchCategoryOptions = () => {
  //     const category = t(`selectOptions.categoryOptions`, { returnObjects: true }) || [];

  //     //Ensure options is an array before setting state
  //     if (Array.isArray(category)) {
  //       console.log('Fetched xxx category options:', category);
  //       setCategories(category);
  //     } else {
  //       console.error('Invalid breed YYY options structure:', category);
  //       setCategories([]);
  //     }
  //   };

  //   fetchCategoryOptions();
  // }, [categories, t]);

  // useEffect(() => {
  //   const fetchGenderOptions = () => {
  //     const gender = t(`selectOptions.genderOptions`, { returnObjects: true }) || [];

  //     //Ensure options is an array before setting state
  //     if (Array.isArray(gender)) {
  //       console.log('Fetched xxx gender options:', gender);
  //       setGenders(gender);
  //     } else {
  //       console.error('Invalid gender YYY options structure:', gender);
  //       setGenders([]);
  //     }
  //   };

  //   fetchGenderOptions();
  // }, [genders, t]);

  // useEffect(() => {
  //   const fetchInitialStatusOptions = () => {
  //     const initialStatus = t(`selectOptions.initialStatusOptions`, { returnObjects: true }) || [];

  //     //Ensure options is an array before setting state
  //     if (Array.isArray(initialStatus)) {
  //       console.log('Fetched xxx gender options:', initialStatus);
  //       setStatuses(initialStatus);
  //     } else {
  //       console.error('Invalid gender YYY options structure:', initialStatus);
  //       setStatuses([]);
  //     }
  //   };

  //   fetchInitialStatusOptions();
  // }, [statuses, t]);

  // useEffect(() => {
  //   const fetchSizesOptions = () => {
  //     const size = t(`selectOptions.sizeOptions`, { returnObjects: true }) || [];

  //     //Ensure options is an array before setting state
  //     if (Array.isArray(size)) {
  //       console.log('Fetched xxx size options:', size);
  //       setSizes(size);
  //     } else {
  //       console.error('Invalid size YYY options structure:', size);
  //       setSizes([]);
  //     }
  //   };

  //   fetchSizesOptions();
  // }, [sizes, t]);

  // useEffect(() => {
  //   const fetchColorOptions = () => {
  //     const color = t(`selectOptions.colorOptions`, { returnObjects: true }) || [];

  //     //Ensure options is an array before setting state
  //     if (Array.isArray(color)) {
  //       console.log('Fetched xxx color options:', color);
  //       setColors(color);
  //     } else {
  //       console.error('Invalid color YYY options structure:', color);
  //       setColors([]);
  //     }
  //   };

  //   fetchColorOptions();
  // }, [colors, t]);

  // useEffect(() => {
  //   const fetchPatternsOptions = () => {
  //     const pattern = t(`selectOptions.markingOptions`, { returnObjects: true }) || [];

  //     //Ensure options is an array before setting state
  //     if (Array.isArray(pattern)) {
  //       console.log('Fetched xxx size options:', pattern);
  //       setPatterns(pattern);
  //     } else {
  //       console.error('Invalid size YYY options structure:', pattern);
  //       setPatterns([]);
  //     }
  //   };

  //   fetchPatternsOptions();
  // }, [patterns, t]);

  useEffect(() => {
    setIdentifier(queryParams.get('identifier') || '');
    setDate(queryParams.get('date') || '');
    setDistance(parseInt(queryParams.get('distance')) || 5);

    // Check if userLocation is defined and update userCurrentLocation if necessary
    // if (userLocation && userLocation.latitude && userLocation.longitude) {
    //   setUserCurrentLocation(`${userLocation.latitude},${userLocation.longitude}`);
    // }
    // added userLocation to dependency array
  }, [location.search]);

  useEffect(() => {
    console.log('userLocation:', userLocation);

    if (userLocation && userLocation.latitude && userLocation.longitude) {
      console.log('Setting userCurrentLocation:', userLocation.latitude, userLocation.longitude);
      setUserCurrentLocation(`${userLocation.latitude},${userLocation.longitude}`);
    }
  }, [userLocation]);

  // useEffect(() => {

  //   setCategories(queryParams.getAll('categories') || []);
  //   setGenders(queryParams.getAll('genders') || []);
  //   setStatuses(queryParams.getAll('statuses') || []);
  //   setSizes(queryParams.getAll('sizes') || []);
  //   setIdentifier(queryParams.get('identifier') || '');
  //   setDate(queryParams.get('date') || '');
  //   setDistance(parseInt(queryParams.get('distance')) || 5);
  //   setColors(queryParams.getAll('colors') || []);
  //   setPatterns(queryParams.getAll('patterns') || []);
  // }, [location.search]);

  const handleApplyFilters = (e) => {
    e.preventDefault();

    // Create a new URLSearchParams instance
    const newQueryParams = new URLSearchParams();

    // Append selected tastes to query parameters
    selectedCategories.forEach((category) => {
      // Split each taste by comma
      const individualCategories = category.split(',');

      // Append each individual taste after trimming any leading or trailing whitespace
      individualCategories.forEach((individualCategory) => {
        newQueryParams.append('categories', individualCategory.trim());
      });
    });

    selectedGenders.forEach((gender) => {
      // Split each taste by comma
      const individualGenders = gender.split(',');

      // Append each individual taste after trimming any leading or trailing whitespace
      individualGenders.forEach((individualGender) => {
        newQueryParams.append('genders', individualGender.trim());
      });
    });

    selectedStatuses.forEach((status) => {
      // Split each taste by comma
      const individualStatuses = status.split(',');

      // Append each individual taste after trimming any leading or trailing whitespace
      individualStatuses.forEach((individualStatus) => {
        newQueryParams.append('statuses', individualStatus.trim());
      });
    });

    selectedSizes.forEach((size) => {
      // Split each size by comma
      const individualSizes = size.split(',');

      // Append each individual taste after trimming any leading or trailing whitespace
      individualSizes.forEach((individualSize) => {
        newQueryParams.append('sizes', individualSize.trim());
      });
    });

    selectedPatterns.forEach((pattern) => {
      // Split each size by comma
      const individualPatterns = pattern.split(',');

      // Append each individual taste after trimming any leading or trailing whitespace
      individualPatterns.forEach((individualPattern) => {
        newQueryParams.append('patterns', individualPattern.trim());
      });
    });

    if (identifier) {
      newQueryParams.append('identifier', identifier);
    }

    if (date) {
      newQueryParams.append('date', date);
    }

    // Append the distance to query parameters
    if (distance !== null) {
      newQueryParams.append('distance', distance);
    }

    if (colors) {
      newQueryParams.append('colors', colors);
    }

    // Append userLocation as latitude,longitude if available
    if (userCurrentLocation && userCurrentLocation.latitude && userCurrentLocation.longitude) {
      const locationString = `${userCurrentLocation.latitude},${userCurrentLocation.longitude}`;
      console.log('User Location:', locationString);
      newQueryParams.append('userCurrentLocation', locationString);
    }
    // Update the URL with the new query parameters
    navigate(`${location.pathname}?${newQueryParams}`);

    // Call the applyFilters function with the current state
    applyFilters({
      categories: selectedCategories,
      genders: selectedGenders,
      statuses: selectedStatuses,
      sizes: selectedSizes,
      identifier,
      date,
      distance,
      colors: selectedColors,
      patterns: selectedPatterns,
      userCurrentLocation,
    });
  };

  const handleResetFilters = (e) => {
    e.preventDefault();
    resetFilters();
    setSelectedCategories([]);
    setSelectedGenders([]);
    setSelectedStatuses([]);
    setSelectedSizes([]);
    setIdentifier('');
    setDate('');
    setDistance(5); // Reset distance to initial value
    setColors([]);
    setPatterns([]);
    setUserCurrentLocation(''); // Reset userCurrentLocation to null or default
    // Reset the URL to remove query parameters
    navigate(location.pathname);
  };

  const handleCategoryChange = (category) => {
    const isSelected = selectedCategories.includes(category);

    if (isSelected) {
      // If the category is already selected, remove it from the selection
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((selectedCategory) => selectedCategory !== category),
      );
    } else {
      // If the category is not selected, split it by comma and add individual categories to the selection
      const individualCategories = category.split(',');
      setSelectedCategories((prevCategories) => [
        ...prevCategories,
        ...individualCategories.map((t) => t.trim()),
      ]);
    }
  };

  const handleGenderChange = (gender) => {
    const isSelected = selectedGenders.includes(gender);

    if (isSelected) {
      // If the category is already selected, remove it from the selection
      setSelectedGenders((prevGenders) =>
        prevGenders.filter((selectedGender) => selectedGender !== gender),
      );
    } else {
      // If the category is not selected, split it by comma and add individual categories to the selection
      const individualGenders = gender.split(',');
      setSelectedGenders((prevGenders) => [
        ...prevGenders,
        ...individualGenders.map((t) => t.trim()),
      ]);
    }
  };

  const handleStatusChange = (status) => {
    const isSelected = selectedStatuses.includes(status);

    if (isSelected) {
      // If the category is already selected, remove it from the selection
      setSelectedStatuses((prevStatuses) =>
        prevStatuses.filter((selectedStatus) => selectedStatus !== status),
      );
    } else {
      // If the category is not selected, split it by comma and add individual categories to the selection
      const individualStatuses = status.split(',');
      setSelectedStatuses((prevStatuses) => [
        ...prevStatuses,
        ...individualStatuses.map((t) => t.trim()),
      ]);
    }
  };

  const handleSizeChange = (size) => {
    const isSelected = selectedSizes.includes(size);

    if (isSelected) {
      // If the category is already selected, remove it from the selection
      setSelectedSizes((prevSizes) => prevSizes.filter((selectedSize) => selectedSize !== size));
    } else {
      // If the category is not selected, split it by comma and add individual categories to the selection
      const individualSizes = size.split(',');
      setSelectedSizes((prevSizes) => [...prevSizes, ...individualSizes.map((t) => t.trim())]);
    }
  };

  const handleColorChange = (color) => {
    const isSelected = selectedColors.includes(color);

    if (isSelected) {
      // If the category is already selected, remove it from the selection
      setSelectedColors((prevColors) =>
        prevColors.filter((selectedColor) => selectedColor !== color),
      );
    } else {
      // If the category is not selected, split it by comma and add individual categories to the selection
      const individualColors = color.split(',');
      setSelectedColors((prevColors) => [...prevColors, ...individualColors.map((t) => t.trim())]);
    }
  };

  const handlePatternChange = (pattern) => {
    const isSelected = selectedPatterns.includes(pattern);

    if (isSelected) {
      // If the category is already selected, remove it from the selection
      setSelectedPatterns((prevPatterns) =>
        prevPatterns.filter((selectedPattern) => selectedPattern !== pattern),
      );
    } else {
      // If the category is not selected, split it by comma and add individual categories to the selection
      const individualPatterns = pattern.split(',');
      setSelectedPatterns((prevPatterns) => [
        ...prevPatterns,
        ...individualPatterns.map((t) => t.trim()),
      ]);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setDistance(newValue);
  };

  const [breed, setBreed] = useState('');

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  return (
    <form onSubmit={handleApplyFilters}>
      {/* <Typography variant="h6">Filters</Typography> */}
      <List>
        {/* Filter by Initial Status */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Status</InputLabel>
            {Array.isArray(statuses) &&
              statuses.map((status) => (
                <Chip
                  key={status.value}
                  sx={{ marginRight: '5px', marginBottom: '5px' }}
                  size="small"
                  label={status.label}
                  onClick={() => handleStatusChange(status.value)}
                  color={selectedStatuses.includes(status.value) ? 'warning' : 'default'} // Adjusted condition here
                />
              ))}
          </Box>
        </ListItem>

        {/* Filter by category */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Category</InputLabel>
            {Array.isArray(categories) &&
              categories.map((category) => (
                <Chip
                  key={category.value}
                  sx={{ marginRight: '5px', marginBottom: '5px' }}
                  size="small"
                  label={category.label}
                  onClick={() => handleCategoryChange(category.value)}
                  color={selectedCategories.includes(category.value) ? 'warning' : 'default'} // Adjusted condition here
                />
              ))}
          </Box>
        </ListItem>

        {/* Filter by gender */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Gender</InputLabel>
            {Array.isArray(genders) &&
              genders.map((gender) => (
                <Chip
                  key={gender.value}
                  sx={{ marginRight: '5px', marginBottom: '5px' }}
                  size="small"
                  label={gender.label}
                  onClick={() => handleGenderChange(gender.value)}
                  color={selectedGenders.includes(gender.value) ? 'warning' : 'default'} // Adjusted condition here
                />
              ))}
          </Box>
        </ListItem>

        {/* Filter by Size */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Size</InputLabel>
            {Array.isArray(sizes) &&
              sizes.map((size) => (
                <Chip
                  key={size.value}
                  sx={{ marginRight: '5px', marginBottom: '5px' }}
                  size="small"
                  label={size.label}
                  onClick={() => handleSizeChange(size.value)}
                  color={selectedSizes.includes(size.value) ? 'warning' : 'default'} // Adjusted condition here
                />
              ))}
          </Box>
        </ListItem>

        {/* Search by pet Identifier or Name */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box sx={{ width: '100%' }}>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Identifier or Name</InputLabel>
            <TextField
              size="small"
              label=""
              variant="outlined"
              value={identifier}
              placeholder="Type pet identifier or name here..."
              fullWidth
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </Box>
        </ListItem>

        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box sx={{ width: '100%' }}>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Date</InputLabel>
            <TextField
              label=""
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setDate(e.target.value)}
              placeholder=""
              value={date}
            />
          </Box>
        </ListItem>

        {/* <ListItem
            sx={{ padding: "0 !important", paddingTop: "0.8rem !important" }}
          >
            <Box>
              <InputLabel sx={{ fontWeight: "500", color: "#000" }}>
                Country
              </InputLabel>
              <Chip sx={{ marginRight: "5px" }} size="small" label="Latvia" />
              <Chip
                sx={{ marginRight: "5px" }}
                size="small"
                label="Lithuania"
              />
              <Chip sx={{ marginRight: "5px" }} size="small" label="Estonia" />
            </Box>
          </ListItem> */}

        {/* <Box sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
            <InputLabel>Minimum Score {distance}</InputLabel>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Distance {}</InputLabel>
            <Slider
              sx={{ height: '8px', color: '#ff6600' }}
              value={2}
              valueLabelDisplay="auto"
              step={1}
              marks={[{ value: 0, label: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5, label: 5 }]}
              min={0}
              max={5}
            />
          </Box> */}

        {/* Slider for Distance */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box sx={{ width: '100%' }}>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>
              Distance {'<'} {distance && distance < 100 ? distance : '100'}km
            </InputLabel>
            <Slider
              sx={{ height: '8px', color: '#ff6600' }}
              value={distance}
              onChange={handleSliderChange}
              step={5}
              // disabled={
              //   userCurrentLocation === '' ||
              //   userCurrentLocation === null ||
              //   userCurrentLocation === undefined
              //     ? true
              //     : false
              // }
              min={5}
              max={100}
              marks={[
                // { value: 0, label: 0 },
                { value: 5, label: 5 },
                { value: 25 },
                { value: 50 },
                { value: 75 },
                { value: 100, label: 100 },
              ]}
              // valueLabelDisplay="auto"
            />
            {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <MyLocationIcon />

              <Typography variant="body2">Change User Location</Typography>
              <LocationSearchingIcon />
              <Typography variant="body2">Show User Location</Typography>
            </Box> */}
          </Box>
        </ListItem>

        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box sx={{ width: '100%' }}>
            {userLocation ? (
              // <InputLabel sx={{ fontWeight: '500', color: '#000', backgroundColor: 'red' }}>
              //   User Location Is On
              // </InputLabel>
              <Chip
                sx={{ marginRight: '5px', marginBottom: '5px' }}
                size="small"
                label="User Location Is On"
                color={'warning'} // Adjusted condition here
              />
            ) : (
              <Chip
                sx={{ marginRight: '5px', marginBottom: '5px' }}
                size="small"
                label="No user location available."
                color={'default'} // Adjusted condition here
              />
            )}
          </Box>
        </ListItem>

        {/* Filter by Pattern */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Pattern</InputLabel>
            {Array.isArray(patterns) &&
              patterns.map((pattern) => (
                <Chip
                  key={pattern.value}
                  sx={{ marginRight: '5px', marginBottom: '5px' }}
                  size="small"
                  label={pattern.label}
                  onClick={() => handlePatternChange(pattern.value)}
                  color={selectedPatterns.includes(pattern.value) ? 'warning' : 'default'} // Adjusted condition here
                />
              ))}
          </Box>
        </ListItem>

        {/* Filter by Color */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Color</InputLabel>
            {Array.isArray(colors) &&
              colors.map((color) => (
                <Chip
                  key={color.value}
                  sx={{ marginRight: '5px', marginBottom: '5px' }}
                  size="small"
                  label={color.label}
                  onClick={() => handleColorChange(color.value)}
                  color={selectedColors.includes(color.value) ? 'warning' : 'default'} // Adjusted condition here
                />
              ))}
          </Box>
        </ListItem>
      </List>
      {/* <div>
        {userLocation ? (
          <div>
            <p>User Location Is On:</p>
            <p>Lat: {userLocation.latitude}</p>
            <p>Long: {userLocation.longitude}</p>
          </div>
        ) : (
          <p>No user location available.</p>
        )}
      </div> */}
      {/* Apply Filters Button */}
      <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
        <Button type="submit" variant="contained" sx={{ width: '100%' }} color="warning">
          Apply Filters
        </Button>
      </ListItem>
      <ListItem
        sx={{
          padding: '0 !important',
          paddingTop: '0.8rem !important',
          paddingBottom: '0.8rem !important',
        }}
      >
        <Button
          onClick={handleResetFilters}
          variant="outlined"
          sx={{ width: '100%' }}
          color="warning"
        >
          Reset Filters
        </Button>
      </ListItem>
    </form>
  );
};

export default Sidebar;
