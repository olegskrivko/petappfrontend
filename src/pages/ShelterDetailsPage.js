import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
import { BASE_URL } from '../middleware/config';
import { useParams } from 'react-router-dom'; // Import useParams hook

function ShelterDetailsPage() {
  const { slug } = useParams(); // Retrieve slug from URL params
  const [shelter, setShelter] = useState(null);

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

  return (
    <div style={{ flexGrow: 1, padding: '20px' }}>
      <Paper style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" gutterBottom>
              {shelter.name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                style={{ height: '400px', objectFit: 'cover' }}
                image={shelter.coverPicture}
                title={shelter.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  <strong>Description:</strong> {shelter.description}
                </Typography>
                <Typography variant="body1">
                  <strong>Author:</strong> {shelter.author}
                </Typography>
                <Typography variant="body1">
                  <strong>URL:</strong>{' '}
                  <a
                    href={shelter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {shelter.url}
                  </a>
                </Typography>
                <Typography variant="body1">
                  <strong>Address:</strong> {shelter.addressDetails?.address},{' '}
                  {shelter.addressDetails?.city}, {shelter.addressDetails?.country}
                </Typography>
                <Typography variant="body1">
                  <strong>Coordinates:</strong> Latitude: {shelter.location.coordinates[1]},
                  Longitude: {shelter.location.coordinates[0]}
                </Typography>
                <Typography variant="body1">
                  <strong>Contact:</strong> Phone: {shelter.contact.phone}, Email:{' '}
                  {shelter.contact.email}
                </Typography>
                <Typography variant="body1">
                  <strong>Social Media:</strong>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>Facebook: {shelter.socialMedia.facebook}</li>
                    <li>Twitter: {shelter.socialMedia.twitter}</li>
                    <li>Instagram: {shelter.socialMedia.instagram}</li>
                    <li>LinkedIn: {shelter.socialMedia.linkedin}</li>
                    <li>YouTube: {shelter.socialMedia.youtube}</li>
                  </ul>
                </Typography>
                <Typography variant="body1">
                  <strong>Services:</strong> {shelter.services.join(', ')}
                </Typography>
                <Typography variant="body1">
                  <strong>Tags:</strong> {shelter.tags.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ShelterDetailsPage;
