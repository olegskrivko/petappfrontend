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
          <CardMedia component="img" src={pet.mainImage} alt="" />
          <Chip
            label={getInitialStatusLabel(pet.initialStatus)}
            size="small"
            variant="contained"
            sx={{
              // backgroundColor: 'orange',
              // fontWeight: 'bold',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              position: 'absolute',
              top: '8px',
              right: '8px',
            }}
          />
          {/* <Box
            position="absolute"
            top={8}
            right={8}
            bgcolor="rgba(0, 0, 0, 0.6)"
            color="white"
            px={1}
            py={0.5}
            borderRadius={1}
          >
            <Typography variant="body2"> {getInitialStatusLabel(pet.initialStatus)}</Typography>

          </Box> */}
        </Box>
      </Link>
      <CardActions disableSpacing style={{ justifyContent: 'start', padding: '8px' }}>
        <Box style={{ display: 'flex', alignItems: 'center', color: '#343a40' }}>
          <LocationOnIcon fontSize="small" onClick={handleLocationClick} />
          <Typography variant="body2" style={{ marginLeft: '4px' }}>
            {distance !== null ? `${distance} km` : 'Calculating...'}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PetCard;
