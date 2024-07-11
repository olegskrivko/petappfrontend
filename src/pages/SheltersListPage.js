import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  CircularProgress,
  Container,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { BASE_URL } from '../middleware/config';

const SheltersListPage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShelters = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/shelters`);
        setShelters(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching shelters:', error);
        setLoading(false);
      }
    };

    fetchShelters();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            textAlign="center"
            style={{
              fontSize: isSmallScreen ? '1.2rem' : '2rem',
              marginBottom: isSmallScreen ? '1.6rem' : '2rem',
              marginTop: isSmallScreen ? '0.4rem' : '1rem',
            }}
            gutterBottom
          >
            Shelters
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {shelters.map((shelter) => (
          <Grid item key={shelter._id} xs={12} sm={3} md={3}>
            <Card>
              <CardMedia
                component="img"
                style={{ backgroundImage: 'cover' }}
                image={shelter.coverPicture}
                alt={shelter.name}
              />
              <CardContent>
                <Typography variant="h5">
                  {/* Link to Shelter Details Page */}
                  <Link
                    to={`/shelters/${shelter.slug}`}
                    color="inherit"
                    underline="none"
                    style={{ textDecoration: 'none' }}
                  >
                    {shelter.name}
                  </Link>
                </Typography>

                {/* <Typography variant="body2" color="textSecondary">
                  {shelter.description}
                </Typography> */}
                {/* <Typography variant="body2" color="textSecondary" marginTop="10px">
                  Location: {shelter.location.city}, {shelter.location.country}
                </Typography> */}
                {/* <Typography variant="body2" color="textSecondary" marginTop="10px">
                  Contact: {shelter.contact.phone}
                </Typography> */}
                <Typography variant="body2" color="textSecondary" marginTop="10px">
                  {shelter.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      variant="contained"
                      sx={{
                        textTransform: 'capitalize',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default SheltersListPage;
