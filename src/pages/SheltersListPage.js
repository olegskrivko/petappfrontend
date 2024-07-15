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

// Import Custom hook
import useFontSizes from '../utils/getFontSize';

const SheltersListPage = () => {
  const { getTypography } = useFontSizes();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const colors = ['2474A3', '21ABCD', '31758D', '006980', '476997', '666699', '88AFD2', '8AB9F1'];
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  const fontColor = 'white';
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
            Adopt, Don't Shop!
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>
            If you've lost a pet or are considering bringing a new furry friend into your life, we
            encourage you to start your search at these local shelters. They provide loving care and
            support to animals in need, and you can make a real difference by adopting rather than
            buying.
          </Typography>
          <Typography paragraph>
            Each shelter listed below offers a unique opportunity to find a companion who will bring
            joy to your home. Click on their names to learn more about their work and how you can
            support their mission.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {shelters.map((shelter) => (
          <Grid item key={shelter._id} xs={12} sm={6} md={3}>
            <Card>
              <Link
                to={`/shelters/${shelter.slug}`}
                color="inherit"
                underline="none"
                style={{ textDecoration: 'none' }}
              >
                <CardMedia
                  component="img"
                  image={`https://placehold.co/600x400/${getRandomColor()}/${fontColor}?text=${
                    shelter.name
                  }&font=roboto`}
                  alt={shelter.name}
                />
              </Link>
              <CardContent style={{ paddingBottom: '1rem' }}>
                {/* <Typography
                  variant="h3"
                  style={{
                    fontSize: getTypography('h3').fontSize,
                    fontWeight: getTypography('h3').fontWeight,
                    marginBottom: '10px',
                  }}
                >
                  {shelter.name}
                </Typography> */}

                <Typography variant="body2" color="textSecondary">
                  {shelter.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      variant="contained"
                      sx={{
                        textTransform: 'capitalize',
                        // backgroundColor: '#ff6600',
                        // backgroundColor: '#20c997',
                        backgroundColor: 'rgba(0,0,0,0.5)',
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
