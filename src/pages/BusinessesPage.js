import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from '@mui/material';
import { BASE_URL } from '../middleware/config';

function BusinessesPage() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search);
  const serviceId = query.get('service');

  useEffect(() => {
    const fetchBusinesses = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const response = await axios.get(`${BASE_URL}/businesses/services/${serviceId}`);
        setBusinesses(response.data);
      } catch (error) {
        setError('Error fetching businesses');
        console.error('Error fetching businesses:', error);
      } finally {
        setLoading(false);
      }
    };

    if (serviceId) {
      fetchBusinesses();
    }
  }, [serviceId]);

  if (loading) {
    return (
      <Container maxWidth="md" style={{ marginTop: '50px', textAlign: 'center' }}>
        <CircularProgress />
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Loading...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" style={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
        Businesses Offering Service
      </Typography>
      <Grid container spacing={3}>
        {businesses.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              No businesses found for this service.
            </Typography>
          </Grid>
        ) : (
          businesses.map((business) => (
            <Grid item xs={12} sm={6} md={4} key={business._id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={business.image || 'https://placehold.co/600x400'} // Default image if not provided
                  alt={business.name}
                />
                <CardContent>
                  <Typography variant="h6">
                    <Link
                      to={`/businesses/${business._id}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {business.name}
                    </Link>
                  </Typography>
                  {/* <Typography variant="body2" color="textSecondary">
                    {business.description}
                  </Typography> */}

                  {/* <Link
                    to={`/businesses/${business._id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    View Details
                  </Link> */}
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default BusinessesPage;
