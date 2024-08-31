// import React, { useState, useContext, useEffect } from 'react';
// import { Typography, Grid, Button, TextField, Box, Slider, Snackbar, Alert } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import OneSignal from 'react-onesignal';
// import Map from '../components/map/LeafletSubscribeMap'; // Assuming you have a Map component for location selection
// import { AuthContext } from '../middleware/AuthContext';
// const ProfileNotificationsPage = () => {
//   const { t } = useTranslation();
//   //const [radius, setRadius] = useState(20); // Default radius
//   //const [location, setLocation] = useState(null); // To hold location data
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   // Handle radius change
//   //   const handleRadiusChange = (event, newValue) => {
//   //     setRadius(newValue);
//   //   };

//   // Handle subscribe button click
//   const handleSubscribe = () => {
//     // Logic to subscribe to notifications
//     setOpenSnackbar(true); // Show success message
//   };

//   // Handle map location selection or get current location
//   const handleLocationChange = (newLocation) => {
//     setLocation(newLocation);
//   };

//   const { user, logout } = useContext(AuthContext);
//   console.log('user', user);
//   const [location, setLocation] = useState({
//     latitude: localStorage.getItem('latitude') || '',
//     longitude: localStorage.getItem('longitude') || '',
//   });
//   const [distance, setDistance] = useState(localStorage.getItem('distance') || '');

//   // Function to initialize OneSignal
//   const initOneSignal = async () => {
//     await OneSignal.init({
//       appId: '07831676-ef12-409c-895e-3352642c136d',
//     });

//     console.log('OneSignal initialized');
//     OneSignal.Slidedown.promptPush(); // Show subscription prompt after initialization
//   };

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocation({
//             latitude: latitude.toString(),
//             longitude: longitude.toString(),
//           });
//           localStorage.setItem('latitude', latitude.toString());
//           localStorage.setItem('longitude', longitude.toString());
//         },
//         (error) => {
//           console.error('Error getting geolocation: ', error);
//         },
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   };

//   const addLocationTags = () => {
//     OneSignal.User.addTags({ ...location, distance });
//     console.log('Tags added successfully');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLocation((prevLocation) => ({
//       ...prevLocation,
//       [name]: value,
//     }));
//     localStorage.setItem(name, value);
//   };

//   const handleDistanceChange = (e) => {
//     setDistance(e.target.value);
//     localStorage.setItem('distance', e.target.value);
//   };

//   useEffect(() => {
//     // Retrieve location from localStorage on component mount
//     const storedLatitude = localStorage.getItem('latitude');
//     const storedLongitude = localStorage.getItem('longitude');
//     const storedDistance = localStorage.getItem('distance');

//     if (storedLatitude && storedLongitude) {
//       setLocation({
//         latitude: storedLatitude,
//         longitude: storedLongitude,
//       });
//     }

//     if (storedDistance) {
//       setDistance(storedDistance);
//     }
//   }, []);

//   return (
//     <React.Fragment>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Typography variant="h1" textAlign="center" gutterBottom>
//             {t('profileNotificationsPage.title')}
//           </Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="body1" paragraph>
//             {t('profileNotificationsPage.step1')}
//           </Typography>
//           <Grid container spacing={2} sx={{ mt: 1, mb: 5 }} justifyContent="center">
//             <Grid item xs={12}>
//               <Box p={2} bgcolor="lightgray">
//                 <Grid container spacing={1} alignItems="center">
//                   <Grid item xs={12} sm={12}>
//                     <Button variant="contained" onClick={initOneSignal} fullWidth>
//                       Subscribe
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="body1" paragraph>
//                 {t('profileNotificationsPage.step2')}
//               </Typography>
//               <Box p={2} bgcolor="lightgray">
//                 <Grid item xs={12} sm={12}>
//                   <Button variant="contained" onClick={getLocation} fullWidth>
//                     {t('profileNotificationsPage.getCurrentLocation')}
//                   </Button>
//                 </Grid>
//               </Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleLocationChange('current')}
//               >
//                 {t('profileNotificationsPage.getCurrentLocation')}
//               </Button>
//               {/* <Typography variant="body1" mt={2}>
//               {t('profileNotificationsPage.chooseLocation')}
//             </Typography> */}
//               <Map onLocationSelect={handleLocationChange} />
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="body1" mt={2}>
//                 {t('profileNotificationsPage.chooseLocation')}
//               </Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="body1" paragraph>
//                 {t('profileNotificationsPage.step3')}
//               </Typography>
//               <Box p={2} bgcolor="lightgray">
//                 <Typography variant="body1" mt={2}>
//                   {t('profileNotificationsPage.setRadius')}
//                 </Typography>
//                 <Slider
//                   value={distance}
//                   onChange={handleDistanceChange}
//                   min={1}
//                   max={20}
//                   valueLabelDisplay="auto"
//                   aria-labelledby="radius-slider"
//                   sx={{ width: '100%' }}
//                 />
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="body1" paragraph>
//                 {t('profileNotificationsPage.step4')}
//               </Typography>
//               <Box p={2} bgcolor="lightgray">
//                 <Grid item xs={12} sm={12}>
//                   <Button variant="contained" onClick={addLocationTags} color="secondary" fullWidth>
//                     {t('profileNotificationsPage.save')}
//                   </Button>
//                 </Grid>
//               </Box>
//             </Grid>
//           </Grid>

//           {/* <Typography variant="body1" paragraph>
//             {t('profileNotificationsPage.step5')}
//           </Typography> */}
//         </Grid>
// <Grid item xs={12}>
//   <Box p={2} bgcolor="lightgray">
//     <Grid item xs={12} sm={4}>
//       <TextField
//         variant="outlined"
//         type="text"
//         name="latitude"
//         value={location.latitude}
//         onChange={handleChange}
//         fullWidth
//         size="small"
//         label="Latitude"
//       />
//     </Grid>
//     <Grid item xs={12} sm={4}>
//       <TextField
//         variant="outlined"
//         type="text"
//         name="longitude"
//         value={location.longitude}
//         onChange={handleChange}
//         fullWidth
//         size="small"
//         label="Longitude"
//       />
//     </Grid>
//     <Grid item xs={12} sm={4}>
//       <TextField
//         variant="outlined"
//         type="text"
//         name="distance"
//         value={distance}
//         onChange={handleDistanceChange}
//         fullWidth
//         size="small"
//         label="Distance"
//       />
//     </Grid>
//   </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
//             {/* <Typography variant="body1" mt={2}>
//               {t('profileNotificationsPage.setRadius')}
//             </Typography> */}
//             {/* <Slider
//               value={radius}
//               onChange={handleRadiusChange}
//               min={1}
//               max={20}
//               valueLabelDisplay="auto"
//               aria-labelledby="radius-slider"
//               sx={{ width: 300 }}
//             /> */}
//             <Box mt={2}>
//               <Button variant="contained" color="secondary" onClick={handleSubscribe}>
//                 {t('profileNotificationsPage.save')}
//               </Button>
//             </Box>
//             <Typography variant="body2" mt={2}>
//               {t('profileNotificationsPage.info')}
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
//         <Alert onClose={() => setOpenSnackbar(false)} severity="success">
//           {t('profileNotificationsPage.successMessage')}
//         </Alert>
//       </Snackbar>
//     </React.Fragment>
//   );
// };

// export default ProfileNotificationsPage;
import React, { useState, useContext, useEffect } from 'react';
import { Typography, Grid, Button, TextField, Box, Slider, Snackbar, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import OneSignal from 'react-onesignal';
import Map from '../components/map/LeafletSubscribeMap'; // Ensure correct path
import { AuthContext } from '../middleware/AuthContext';
import useFontSizes from '../utils/getFontSize';
const ProfileNotificationsPage = () => {
  const { getTypography } = useFontSizes();
  const { t } = useTranslation();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [location, setLocation] = useState({
    latitude: localStorage.getItem('latitude') || '',
    longitude: localStorage.getItem('longitude') || '',
  });
  const [distance, setDistance] = useState(localStorage.getItem('distance') || 20);

  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    // Retrieve location from localStorage on component mount
    const storedLatitude = localStorage.getItem('latitude');
    const storedLongitude = localStorage.getItem('longitude');
    const storedDistance = localStorage.getItem('distance');

    if (storedLatitude && storedLongitude) {
      setLocation({
        latitude: storedLatitude,
        longitude: storedLongitude,
      });
    }

    if (storedDistance) {
      setDistance(parseInt(storedDistance, 10));
    }
  }, []);

  const initOneSignal = async () => {
    await OneSignal.init({
      appId: '07831676-ef12-409c-895e-3352642c136d',
    });
    OneSignal.Slidedown.promptPush(); // Show subscription prompt
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
            latitude: latitude.toString(),
            longitude: longitude.toString(),
          });
          localStorage.setItem('latitude', latitude.toString());
          localStorage.setItem('longitude', longitude.toString());
        },
        (error) => {
          console.error('Error getting geolocation: ', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleLocationChange = (newLocation) => {
    setLocation({
      latitude: newLocation.lat.toString(),
      longitude: newLocation.lng.toString(),
    });
    localStorage.setItem('latitude', newLocation.lat.toString());
    localStorage.setItem('longitude', newLocation.lng.toString());
  };

  const handleDistanceChange = (event, newValue) => {
    setDistance(newValue);
    localStorage.setItem('distance', newValue);
  };

  const handleSubscribe = () => {
    // 1st step
    // can you add here initOneSignal(), but after its done, you can continue with next steps, so they should be in sync,

    // 2nd step
    OneSignal.User.addTags({ ...location, distance: distance.toString() });
    setOpenSnackbar(true); // Show success message
  };

  //   const handleSubscribe = async () => {
  //     try {
  //       // 1st step: Initialize OneSignal
  //       await initOneSignal();

  //       // 2nd step: Add tags for notifications
  //       OneSignal.User.addTags({ ...location, distance: distance.toString() });

  //       // 3rd step: Show success message
  //       setOpenSnackbar(true);
  //     } catch (error) {
  //       console.error('Subscription failed:', error);
  //       // Optionally, handle errors here (e.g., show an error message)
  //     }
  //   };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h1"
            textAlign="center"
            sx={{ mb: 3 }}
            gutterBottom
            style={{
              fontSize: getTypography('h1').fontSize,
              fontWeight: getTypography('h1').fontWeight,
            }}
          >
            {t('profileNotificationsPage.title')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <Typography variant="h1" textAlign="center" gutterBottom>
            {t('profileNotificationsPage.title')}
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            {t('profileNotificationsPage.step1')}
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Button variant="contained" onClick={initOneSignal} fullWidth>
                {t('profileNotificationsPage.subscribe')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            {t('profileNotificationsPage.step2')}
          </Typography>

          {/* <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Button variant="contained" onClick={getLocation} fullWidth>
                  {t('profileNotificationsPage.getCurrentLocation')}
                </Button>
              </Grid>
            </Grid> */}
          <Map onLocationChange={handleLocationChange} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            {t('profileNotificationsPage.step3')}
          </Typography>

          <Typography variant="body1" mt={2}>
            {t('profileNotificationsPage.setRadius')}
          </Typography>
          <Slider
            value={distance}
            onChange={handleDistanceChange}
            min={1}
            max={20}
            valueLabelDisplay="auto"
            aria-labelledby="radius-slider"
            sx={{ width: '100%' }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            {t('profileNotificationsPage.step4')}
          </Typography>

          <Button variant="contained" color="secondary" onClick={handleSubscribe} fullWidth>
            {t('profileNotificationsPage.save')}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" mt={2}>
            {t('profileNotificationsPage.info')}
          </Typography>
        </Grid>
      </Grid>

      {/* <Grid item xs={12}>
        <TextField
          variant="outlined"
          type="text"
          name="latitude"
          value={location.latitude}
          // onChange={handleChange}
          fullWidth
          size="small"
          label="Latitude"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          type="text"
          name="longitude"
          value={location.longitude}
          // onChange={handleChange}
          fullWidth
          size="small"
          label="Longitude"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          type="text"
          name="distance"
          value={distance}
          onChange={handleDistanceChange}
          fullWidth
          size="small"
          label="Distance"
        />
      </Grid> */}

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          {t('profileNotificationsPage.successMessage')}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default ProfileNotificationsPage;
