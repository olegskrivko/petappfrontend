import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Link as MuiLink } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Import Custom hook
import useFontSizes from '../utils/getFontSize';

// Import SVG Images
import SupportImg from '../images/cat_stronaut_cuate.svg';

function SupportPage() {
  const { getTypography } = useFontSizes();
  const creditLink = 'https://storyset.com/business';
  const credit = 'Business illustrations by Storyset';
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
            Support Our Project
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="left">
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {/* Banner Image */}
            <CardMedia
              component="img"
              src={SupportImg}
              alt="Helping a partner"
              style={{
                width: isLargeScreen ? '400px' : '100%',
                maxHeight: isLargeScreen ? '100%' : '60vh', // Adjust height for large screens
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
        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="justify">
          <Typography variant="body1" paragraph>
            We are grateful for any support or sponsorship that can help us unlock the full
            potential of our web application. If you share our vision and would like to contribute
            towards the cost of utilizing premium tiers and services, please reach out to us.
          </Typography>
          <Typography variant="body1" paragraph>
            Your support will enable us to enhance our app and provide an even better experience for
            our users.
          </Typography>
          <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
            <Button
              style={{ backgroundColor: '#ffc107', color: '#000' }}
              onClick={() =>
                (window.location.href =
                  'https://www.paypal.com/donate/?hosted_button_id=7X42GYG39BMSG')
              }
            >
              Donate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SupportPage;
