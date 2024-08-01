// // BusinessDetailsPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Typography, Grid, Paper, CircularProgress } from '@mui/material';
// import { BASE_URL } from '../middleware/config';
// const BusinessDetailsPage = () => {
//   const { id } = useParams();
//   const [business, setBusiness] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBusiness = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/businesses/${id}`);
//         console.log('response', response);
//         setBusiness(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchBusiness();
//   }, [id]);

//   if (loading) return <CircularProgress />;
//   if (error)
//     return (
//       <Typography variant="h6" color="error">
//         {error}
//       </Typography>
//     );

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         {business.name}
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} style={{ padding: '16px' }}>
//             <Typography variant="h6">Address</Typography>
//             <Typography>{business.address}</Typography>
//             <Typography>
//               {business.city}, {business.state}, {business.zipCode}, {business.country}
//             </Typography>
//             <Typography>{business.phone}</Typography>
//             <Typography>{business.email}</Typography>
//             <Typography>
//               <a href={business.website} target="_blank" rel="noopener noreferrer">
//                 {business.website}
//               </a>
//             </Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           {/* You can add more sections such as social media links, services offered, etc. */}
//         </Grid>
//       </Grid>
//       {/* Add more details or sections as needed */}
//     </Container>
//   );
// };

// export default BusinessDetailsPage;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Grid,
  Paper,
  CircularProgress,
  Card,
  Chip,
  CardContent,
  CardMedia,
  Box,
  Link as MuiLink,
} from '@mui/material';
import { BASE_URL } from '../middleware/config';
import { Link } from 'react-router-dom';
import { ExpandMore, Facebook, Instagram, YouTube, LocationOn } from '@mui/icons-material';
const BusinessDetailsPage = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/businesses/${id}`);
        console.log('response', response);
        setBusiness(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error)
    return (
      <Typography variant="h6" color="error">
        {error}
      </Typography>
    );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          {business.name}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={6}>
        <Typography variant="body1" gutterBottom>
          {business.description}
        </Typography>

        <Typography variant="h6" mt={2}>
          Social Media
        </Typography>
        <Typography>
          <a href={business?.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </Typography>
        <Typography>
          <a href={business?.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </Typography>
        <Typography>
          <a href={business?.youtube} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={6}>
        <Card>
          <CardMedia
            component="img"
            height="auto"
            image={business.image || 'https://placehold.co/600x400'} // Default image if not provided
            alt={business.name}
          />
        </Card>
      </Grid>

      {/* Locations Section */}
      <Typography variant="h5" gutterBottom style={{ marginTop: '24px' }}>
        Locations
      </Typography>
      <Grid container spacing={3}>
        {business.locations.map((location, index) => (
          <Grid item xs={12} key={index}>
            <Card
              elevation={3}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardContent>
                <Typography variant="h6">
                  {' '}
                  <LocationOn /> {location.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={2}>
                  {location.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Coordinates: {location.coordinates[0]}, {location.coordinates[1]}
                </Typography>
                <MuiLink
                  href={`https://www.google.com/maps?q=${location.coordinates[0]},${location.coordinates[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: '16px' }}
                >
                  View on Google Maps
                </MuiLink>
                <Typography variant="body2" color="textSecondary" mb={2}>
                  {location.country}, {location.city ? location.city : location.state},{' '}
                  {location.zipCode}
                </Typography>
                <Typography variant="body1" color="primary">
                  Season:
                </Typography>
                <Box mt={1}>
                  {location.season &&
                    location.season.map((tag, index) => (
                      <Chip
                        key={index}
                        size="small"
                        label={tag}
                        style={{
                          marginRight: '4px',
                          marginTop: '4px',
                          backgroundColor: 'lightgray',
                        }}
                      />
                    ))}
                </Box>
                <Box mt={1}>
                  <Typography variant="body1" color="primary">
                    Opening Hours:
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Monday: {location.monday}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Tuesday: {location.tuesday}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Wednesday: {location.wednesday}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Thursday: {location.thursday}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Friday: {location.friday}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Saturday: {location.saturday}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Sunday: {location.sunday}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BusinessDetailsPage;
