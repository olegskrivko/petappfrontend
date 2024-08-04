import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box,
  List,
  ListItem,
  Link as MuiLink,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { BASE_URL } from '../middleware/config';
import { useParams } from 'react-router-dom'; // Import useParams hook
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// Import Custom hook
import useFontSizes from '../utils/getFontSize';
import { useTranslation } from 'react-i18next';
function ShelterDetailsPage() {
  const { t } = useTranslation(); // Initialize translation hook
  const { getTypography } = useFontSizes();
  const { slug } = useParams(); // Retrieve slug from URL params
  const [shelter, setShelter] = useState(null);

  const colors = ['2474A3', '21ABCD', '31758D', '006980', '476997', '666699', '88AFD2', '8AB9F1'];
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  const fontColor = 'white';

  useEffect(() => {
    const fetchShelter = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/shelters/${slug}`);
        setShelter(response.data);
      } catch (error) {
        console.error('Error fetching shelter:', error);
        // Handle error (e.g., show error message)
      }
    };

    if (slug) {
      fetchShelter();
    }
  }, [slug]);

  if (!shelter) {
    return (
      <Typography variant="h6" align="center" gutterBottom style={{ margin: '20px' }}>
        Loading...
      </Typography>
    );
  }

  const handleLocationClick = () => {
    const latitude = shelter.location.coordinates[1];
    const longitude = shelter.location.coordinates[0];
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');
  };

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
            {shelter.name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Card style={{ boxShadow: 'none' }}>
            <CardMedia
              component="img"
              image={`https://placehold.co/600x400/${getRandomColor()}/${fontColor}?text=${
                shelter.name
              }&font=roboto`}
              title={shelter.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Card style={{ boxShadow: 'none' }}>
            <CardContent style={{ paddingTop: '0' }}>
              {/* <Typography variant="body1" gutterBottom>
                <strong>Author:</strong> {shelter.author}
              </Typography> */}
              <Typography variant="body1">
                <strong>{t('sheltersDetailsPage.labels.description')}: </strong>
                {shelter.description}
              </Typography>
              {/* <Typography variant="body1">
                <strong>Website:</strong>{' '}
                <a
                  href={shelter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {shelter.url}
                </a>
              </Typography> */}
              <Typography variant="body1">
                <strong>{t('sheltersDetailsPage.labels.website')}:</strong>
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText style={{ marginLeft: '-1rem' }}>
                    <a
                      href={shelter.website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {shelter.website.name}
                    </a>
                  </ListItemText>
                </ListItem>
              </List>
              <Typography variant="body1">
                <strong>{t('sheltersDetailsPage.labels.address')}:</strong>
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText style={{ marginLeft: '-1rem' }}>
                    <MuiLink onClick={handleLocationClick} style={{ cursor: 'pointer' }}>
                      <Typography variant="body1" sx={{ display: 'inline-block' }}>
                        {shelter.addressDetails?.address}, {shelter.addressDetails?.city},{' '}
                        {shelter.addressDetails?.country}
                      </Typography>
                    </MuiLink>
                  </ListItemText>
                </ListItem>
              </List>
              {/* <Typography variant="body1">
                <strong>Address:</strong> {shelter.addressDetails?.address},{' '}
                {shelter.addressDetails?.city}, {shelter.addressDetails?.country}
              </Typography> */}

              {/* <Box>
                <MuiLink onClick={handleLocationClick}>
                  <Typography variant="body1" sx={{ display: 'inline-block' }}>
                    <strong>Address:</strong> {shelter.addressDetails?.address},{' '}
                    {shelter.addressDetails?.city}, {shelter.addressDetails?.country}
                  </Typography>
                </MuiLink>
              </Box> */}

              {/* <Typography variant="body1">
                <strong>Coordinates:</strong> Latitude: {shelter.location.coordinates[1]},
                Longitude: {shelter.location.coordinates[0]}
              </Typography> */}
              <Typography variant="body1">
                <strong>{t('sheltersDetailsPage.labels.contact')}:</strong>
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText primary={shelter.contact.phone} style={{ marginLeft: '-1rem' }} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText primary={shelter.contact.email} style={{ marginLeft: '-1rem' }} />
                </ListItem>
              </List>
              <Typography variant="body1">
                <strong>{t('sheltersDetailsPage.labels.socialMedia')}:</strong>
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FacebookIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <MuiLink
                        href={shelter.socialMedia.facebook.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        {shelter.socialMedia.facebook.name}
                      </MuiLink>
                    }
                    style={{ marginLeft: '-1rem' }}
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <InstagramIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={shelter.socialMedia.instagram.name}
                    style={{ marginLeft: '-1rem' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LinkedInIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={shelter.socialMedia.linkedin.name}
                    style={{ marginLeft: '-1rem' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <YouTubeIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={shelter.socialMedia.youtube.name}
                    style={{ marginLeft: '-1rem' }}
                  />
                </ListItem>
              </List>
              <Typography variant="body1" gutterBottom>
                <strong>{t('sheltersDetailsPage.labels.services')}:</strong>
                {/* {shelter.services.join(', ')} */}
              </Typography>
              <List>
                {shelter.services.map((service, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={service} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="body1">
                <strong>{t('sheltersDetailsPage.labels.tags')}:</strong>{' '}
                {shelter.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="contained"
                    sx={{
                      textTransform: 'capitalize',
                      backgroundColor: '#6E6E6E',
                      // backgroundColor: '#20c997',
                      // backgroundColor: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      position: 'relative', // Changed from 'absolute' to 'relative'
                      marginRight: '4px',
                    }}
                  />
                ))}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ShelterDetailsPage;
