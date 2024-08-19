import React from 'react';
import { Link as MuiLink } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

// Import Images
import NotFoundPageImg from '../images/error_with_a_cute_animal_bro.svg';

const NotFoundPage = () => {
  const creditLink = 'https://storyset.com/web';
  const credit = 'Web illustrations by Storyset';
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
      }}
    >
      <Typography variant={isSmallScreen ? 'h4' : 'h2'} sx={{ marginBottom: 2 }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        The page you're looking for does not exist.
      </Typography>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CardMedia
            component="img"
            src={NotFoundPageImg}
            alt="404 error page not found"
            style={{
              width: isLargeScreen ? '90%' : '100%',
              maxHeight: isLargeScreen ? '60vh' : '600px', // Adjust height for large screens
              objectFit: 'cover',
            }}
          />
          <Box
            style={{
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <MuiLink
              href={creditLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.6rem',
                fontStyle: 'italic',
                color: '#999',
                fontWeight: '300',
              }}
            >
              {credit}
            </MuiLink>
          </Box>
        </Box>
      </Grid>

      <Button
        component={Link}
        to="/"
        variant="contained"
        style={{
          marginTop: '2rem',
          background: '#ffcb56',
          color: 'rgba(0, 0, 0, 0.87)',
        }}
      >
        Return to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
