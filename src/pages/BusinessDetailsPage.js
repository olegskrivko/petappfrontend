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
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Link as MuiLink,
} from '@mui/material';
import { BASE_URL } from '../middleware/config';
import { Link } from 'react-router-dom';
import { LocationOn } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EuroIcon from '@mui/icons-material/Euro';
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
        <List>
          {business.socialMediaProfiles.map((profile) => (
            <ListItem key={profile._id}>
              <MuiLink
                href={profile.profileUrl}
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.platform.name}
              </MuiLink>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" mt={2}>
          Website
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <PublicIcon style={{ color: '#6E6E6E' }} />
            </ListItemIcon>
            <ListItemText style={{ marginLeft: '-1rem' }}>
              <MuiLink
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                {business.website}
              </MuiLink>
            </ListItemText>
          </ListItem>
        </List>
        <Typography variant="h6" mt={2}>
          Price Range
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <EuroIcon style={{ color: '#6E6E6E' }} />
            </ListItemIcon>
            <ListItemText style={{ marginLeft: '-1rem' }}>
              {business.minPrice} - {business.maxPrice}
            </ListItemText>
          </ListItem>
        </List>
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
                <List mt={1}>
                  <Typography variant="body1" color="primary">
                    Opening Hours:
                  </Typography>
                  <ListItem>
                    <Typography variant="body2" color="textSecondary">
                      Monday: {location.monday}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2" color="textSecondary">
                      Tuesday: {location.tuesday}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2" color="textSecondary">
                      Wednesday: {location.wednesday}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2" color="textSecondary">
                      Thursday: {location.thursday}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2" color="textSecondary">
                      Friday: {location.friday}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2" color="textSecondary">
                      Saturday: {location.saturday}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2" color="textSecondary">
                      Sunday: {location.sunday}
                    </Typography>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon style={{ color: '#6E6E6E' }} />
                    </ListItemIcon>
                    <ListItemText primary={location.phone} style={{ marginLeft: '-1rem' }} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon style={{ color: '#6E6E6E' }} />
                    </ListItemIcon>
                    <ListItemText primary={location.email} style={{ marginLeft: '-1rem' }} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BusinessDetailsPage;
