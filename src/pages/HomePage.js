import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// React MUI
import { Link as MuiLink } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useAuth } from '../middleware/AuthContext';
import { useParams } from 'react-router-dom';
// Import Images
import BannerImg from '../images/animals_floating_with_balloons_rafiki.svg';
import OneSignal from 'react-onesignal';

function HomePage() {
  const { t } = useTranslation();
  const { user } = useAuth();

  // const { t, i18n } = useTranslation();
  // const { lang } = useParams();

  // useEffect(() => {
  //   if (lang && lang !== i18n.language) {
  //     i18n.changeLanguage(lang);
  //   }
  // }, [lang, i18n]);

  // Check if user is logged in
  const isLoggedIn = !!user;
  console.log('isLoggedIn', isLoggedIn);
  const creditLink = 'https://storyset.com/animal';
  const credit = 'Animal illustrations by Storyset';
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // useEffect(() => {
  //   const initOneSignal = async () => {
  //     await OneSignal.init({
  //       appId: '07831676-ef12-409c-895e-3352642c136d',
  //       allowLocalhostAsSecureOrigin: true, // Only for development
  //     });

  //     console.log('OneSignal initialized');

  //     // Show subscription prompt after initialization
  //     OneSignal.Slidedown.promptPush();
  //   };

  //   initOneSignal();
  // }, []);

  // const onHandleTag = (tag) => {
  //   console.log('Tagging');
  //   OneSignal.sendTag('tech', tag).then(() => {
  //     console.log('Tagged');
  //   });
  // };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h1"
            textAlign="center"
            style={{
              fontWeight: '700',
              fontSize: isSmallScreen ? '2.2rem' : '3.2rem',
            }}
          >
            <span style={{ color: '#ffc107' }}>PawClix</span> -{' '}
            {t('pageTitles.lostPetReunionsOneClickAway')}
          </Typography>
          {/* <div>
            <h1>{t('key1')}</h1>
            <p>{t('key2')}</p>
          </div> */}
          {/* <div>
            {isLoggedIn ? (
              <p>User is logged in</p>
            ) : (
              <p>User is not logged in</p>
            )}
          </div> */}
          <Typography
            variant="body1"
            textAlign="center"
            style={{
              fontSize: '1.2rem',
              fontWeight: '400',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
          >
            {t('pageTitles.findYourFurryFriend')}
          </Typography>
          {/* <button className='react' onClick={()=>onHandleTag('react')}>Raect Js</button>
          <button className='angular' onClick={()=>onHandleTag('angular')}>Angular Js</button> */}
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
              src={BannerImg}
              alt="Dog and cat Floating with balloons"
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

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ paddingTop: '0 !important', marginBottom: '2rem' }}
        >
          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/pets" style={{ textDecoration: 'none' }}>
              {isSmallScreen ? (
                <Button
                  variant="contained"
                  startIcon={<SearchIcon />}
                  size="small"
                  style={{
                    marginTop: '2rem',
                    marginLeft: 'auto',
                    marginRight: '1rem',
                    display: 'flex',
                    backgroundColor: '#ffc107',
                    color: 'rgba(0, 0, 0, 0.87)',
                  }}
                >
                  {t('buttons.searchPet')}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<SearchIcon />}
                  size="large"
                  style={{
                    marginTop: '2rem',
                    marginLeft: 'auto',
                    marginRight: '1rem',
                    display: 'flex',
                    backgroundColor: '#ffc107',
                    color: 'rgba(0, 0, 0, 0.87)',
                  }}
                >
                  {t('buttons.searchPet')}
                </Button>
              )}
            </Link>
            <Link to="/add-pet" style={{ textDecoration: 'none' }}>
              {isSmallScreen ? (
                <Button
                  variant="outlined"
                  color="warning"
                  startIcon={<PetsIcon />}
                  size="small"
                  style={{
                    marginTop: '2rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    color: '#ffc107',
                    borderColor: '#ffc107', // Border color
                    '&:hover': {
                      color: '#ffc107', // Text color on hover
                      borderColor: '#ffc107', // Border color on hover
                      backgroundColor: 'rgba(255, 193, 7, 0.08)', // Background color on hover
                    },
                  }}
                >
                  {t('buttons.reportPet')}
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  color="warning"
                  startIcon={<PetsIcon />}
                  size="large"
                  style={{
                    marginTop: '2rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    color: '#ffc107',
                    borderColor: '#ffc107', // Border color
                    '&:hover': {
                      color: '#ffc107', // Text color on hover
                      borderColor: '#ffc107', // Border color on hover
                      backgroundColor: 'rgba(255, 193, 7, 0.08)', // Background color on hover
                    },
                  }}
                >
                  {t('buttons.reportPet')}
                </Button>
              )}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default HomePage;
