// import React from 'react';
// import { Link } from 'react-router-dom';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
// import Box from '@mui/material/Box';
// import CardActions from '@mui/material/CardActions';
// import Card from '@mui/material/Card';

// // Import MUI Icons
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// // src="https://placehold.co/600x400"
// const PetCard = ({ pet }) => {
//   return (
//     <Card>
//       <Link to={`/pets/${pet._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//         <CardMedia component="img" src={pet.mainImage} alt="" />
//       </Link>
//       <CardActions disableSpacing style={{ justifyContent: 'start', padding: '8px' }}>
//         <Box style={{ display: 'flex', alignItems: 'center', color: '#343a40' }}>
//           <LocationOnIcon fontSize="small" />
//           <Typography variant="body2" style={{ marginLeft: '4px' }}>
//            {(pet.location.coordinates[0], pet.location.coordinates[1])} km
//           </Typography>
//         </Box>
//       </CardActions>
//     </Card>
//   );
// };

// export default PetCard;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation } from 'react-i18next';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// Define a CSS class for blurring
const blurStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  zIndex: 1,
};

const warningStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: '#D30A0A',
  zIndex: 2,
};
const PetCard = ({ pet, onPanToLocation }) => {
  const [userCoords, setUserCoords] = useState(null);
  const [distance, setDistance] = useState(null);
  const { t } = useTranslation();

  const handleLocationClick = () => {
    console.log(
      'pet coords from pet card',
      pet.location.coordinates[1],
      pet.location.coordinates[0],
    );
    onPanToLocation(pet.location.coordinates[1], pet.location.coordinates[0]);
  };

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserCoords({ latitude, longitude });

      // Calculate distance using the Haversine formula
      const distance = calculateDistance(
        latitude,
        longitude,
        pet.location.coordinates[1],
        pet.location.coordinates[0],
      );
      setDistance(distance);
    });
  }, [pet.location.coordinates]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degrees) => (degrees * Math.PI) / 180;

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance.toFixed(2); // Round to two decimal places
  };

  const getInitialStatusLabel = (value) => {
    const options = t('selectOptions.initialStatusOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  const getCategoryLabel = (value) => {
    const options = t('selectOptions.categoryOptions', { returnObjects: true });
    const option = options.find((option) => option.value === value);
    return option ? option.label : '';
  };

  return (
    <Card>
      <Link to={`/pets/${pet._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box position="relative">
          <CardMedia
            component="img"
            src={pet.mainImage}
            alt=""
            sx={{ width: '100%', height: 'auto' }}
          />
          {pet.health.includes('8') && (
            <>
              <Box sx={blurStyle} />
              <Box sx={warningStyle}>
                <VisibilityOffIcon fontSize="large" />
                <Typography variant="body2" mt={1}>
                  This image contains sensitive content
                </Typography>
              </Box>
            </>
          )}
          <Chip
            label={getInitialStatusLabel(pet.initialStatus)}
            size="small"
            variant="contained"
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              position: 'absolute',
              top: '8px',
              right: '8px',
              zIndex: 3,
            }}
          />
        </Box>
      </Link>
      <CardActions disableSpacing style={{ justifyContent: 'start', padding: '0.8rem' }}>
        <Box style={{ display: 'flex', alignItems: 'center', color: '#343a40' }}>
          <LocationOnIcon
            fontSize="small"
            onClick={handleLocationClick}
            color="primary"
            style={{ cursor: 'pointer' }}
          />
          <Typography variant="body2" style={{ marginLeft: '4px' }}>
            {distance !== null ? `${distance} km` : 'Calculating...'}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};
// #8bc34a
export default PetCard;
