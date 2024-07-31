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
  CardContent,
  CardMedia,
} from '@mui/material';
import { BASE_URL } from '../middleware/config';

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
    <Container>
      <Typography variant="h4" gutterBottom>
        {business.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {business.description}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          {/* <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Address</Typography>
            <Typography>{business.address}</Typography>
            <Typography>
              {business.city}, {business.state}, {business.zipCode}, {business.country}
            </Typography>
            <Typography>{business.phone}</Typography>
            <Typography>{business.email}</Typography>
            <Typography>
              <a href={business.website} target="_blank" rel="noopener noreferrer">
                {business.website}
              </a>
            </Typography>
          </Paper> */}
          {/* <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Social Media</Typography>
            <Typography>
              <a href={business.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </Typography>
            <Typography>
              <a href={business.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Typography>
            <Typography>
              <a href={business.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </Typography>
          </Paper> */}
        </Grid>
        {/* <Grid item xs={12} md={6}>
        
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Social Media</Typography>
            <Typography>
              <a href={business.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </Typography>
            <Typography>
              <a href={business.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Typography>
            <Typography>
              <a href={business.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </Typography>
          </Paper>
        </Grid> */}
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
              {/* {location.image && (
                <CardMedia
                  component="img"
                  alt={location.name}
                  height="140"
                  image={location.image}
                  title={location.name}
                />
              )} */}
              <CardContent>
                <Typography variant="h6">{location.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {location.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Coordinates: {location.coordinates[0]}, {location.coordinates[1]}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Season: {location.season}
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                  Opening Hours:
                  {Object.entries(location.openingHours).map(([day, hours]) => (
                    <div key={day}>
                      {day.charAt(0).toUpperCase() + day.slice(1)}: {hours}
                    </div>
                  ))}
                </Typography> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BusinessDetailsPage;
