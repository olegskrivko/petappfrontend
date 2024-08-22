import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// React MUI
import { Link as MuiLink } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SearchIcon from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useAuth } from '../middleware/AuthContext';
import { useParams } from 'react-router-dom';
// Import Images
// import BannerImg from '../images/animals_floating_with_balloons_rafiki.svg';
import BannerImg from '../images/catdog.jpg';
// import petposter from '../images/lostdogposter.avif';
import petlisting from '../images/petlisting.png';
import lostdogposter from '../images/lostdogposter.png';
import studies from '../images/studies.png';
import pathlocations from '../images/pathlocations.png';
import search from '../images/search.png';
import notifications from '../images/notifications.png';
import share from '../images/share.png';
/* Add these lines to your CSS file */
import ArticlesListPage from './ArticlesListPage';
import OneSignal from 'react-onesignal';
import PetCounter from './PetCounter';
import TestimonialSlider from './TestimonialSlider';
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
              fontSize: isSmallScreen ? '2.2rem' : '2.6rem',
            }}
          >
            <span style={{ color: '#ffcb56' }}>PawClix</span> -{' '}
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
                width: isLargeScreen ? '30%' : '100%',
                maxHeight: isLargeScreen ? '60vh' : '600px', // Adjust height for large screens
                objectFit: 'cover',
              }}
            />
            {/* <Box
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
            </Box> */}
          </Box>
        </Grid>

        {/* <Grid
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
                  size="small"
                  style={{
                    marginTop: '2rem',
                    marginLeft: 'auto',
                    marginRight: '1rem',
                    display: 'flex',
                    backgroundColor: '#ffcb56',
                    color: 'rgba(0, 0, 0, 0.87)',
                  }}
                >
                  {t('buttons.searchPet')}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    marginTop: '2rem',
                    marginLeft: 'auto',
                    marginRight: '1rem',
                    display: 'flex',
                    backgroundColor: '#ffcb56',
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
                  size="small"
                  style={{
                    marginTop: '2rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    color: '#ffcb56',
                    borderColor: '#ffcb56', // Border color
                    '&:hover': {
                      color: '#ffcb56', // Text color on hover
                      borderColor: '#ffcb56', // Border color on hover
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
                  size="large"
                  style={{
                    marginTop: '2rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    color: '#ffcb56',
                    borderColor: '#ffcb56', // Border color
                    '&:hover': {
                      color: '#ffcb56', // Text color on hover
                      borderColor: '#ffcb56', // Border color on hover
                      backgroundColor: 'rgba(255, 193, 7, 0.08)', // Background color on hover
                    },
                  }}
                >
                  {t('buttons.reportPet')}
                </Button>
              )}
            </Link>
          </Box>
        </Grid> */}
      </Grid>
      {/* Add PetCounter component */}
      {/* <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            textAlign="center"
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              marginTop: '1rem',
            }}
          >
            Pets lost
          </Typography>
        </Grid>
      </Grid> */}
      <PetCounter dailyCount={20} yearlyCount={7300} />

      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            textAlign="center"
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              marginTop: '1rem',
            }}
          >
            How Exactly We Help You
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                alt=""
                image={petlisting}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography
                variant="h6"
                textAlign="center"
                style={{
                  marginBottom: '0.5rem',
                  color: '#22badf',
                  // fontSize: getTypography('h2').fontSize,
                  // fontWeight: getTypography('h2').fontWeight,
                }}
              >
                Listing on our website
              </Typography>
              <Typography variant="body2">
                Your pet is added to our webpage of missing pets, which makes reporting a sighting
                easier than ever.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                alt=""
                image={lostdogposter}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography
                variant="h6"
                textAlign="center"
                style={{
                  marginBottom: '0.5rem',
                  color: '#22badf',
                  // fontSize: getTypography('h2').fontSize,
                  // fontWeight: getTypography('h2').fontWeight,
                }}
              >
                Printable poster
              </Typography>
              <Typography variant="body2">
                Receive an expert-designed missing poster with QR code.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {' '}
              <CardMedia
                component="img"
                alt=""
                image={studies}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography
                variant="h6"
                textAlign="center"
                style={{
                  marginBottom: '0.5rem',
                  color: '#22badf',
                  // fontSize: getTypography('h2').fontSize,
                  // fontWeight: getTypography('h2').fontWeight,
                }}
              >
                Personal guidance and support
              </Typography>
              <Typography variant="body2">
                With helplines, expert articles we support you every step of the way.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            textAlign="center"
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              marginTop: '1rem',
            }}
          >
            3 Steps to Find Your Pet
          </Typography>
        </Grid>
      </Grid> */}
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                alt=""
                image={search}
                style={{ width: 'auto', height: '120px' }}
              />

              <Typography
                variant="h6"
                textAlign="center"
                style={{
                  marginBottom: '0.5rem',
                  color: '#22badf',
                  // fontSize: getTypography('h2').fontSize,
                  // fontWeight: getTypography('h2').fontWeight,
                }}
              >
                Start a PawClix search
              </Typography>
              <Typography variant="body2">
                Discover if your pet has been spotted or reported by someone else.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {' '}
              <CardMedia
                component="img"
                alt=""
                image={notifications}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography
                variant="h6"
                textAlign="center"
                style={{
                  marginBottom: '0.5rem',
                  color: '#22badf',
                  // fontSize: getTypography('h2').fontSize,
                  // fontWeight: getTypography('h2').fontWeight,
                }}
              >
                We alert neighbors
              </Typography>
              <Typography variant="body2">
                Receive timely push notifications alerting you of any updates from neighbors within
                a 20km radius.
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}
        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {' '}
              <CardMedia
                component="img"
                alt=""
                image={share}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography
                variant="h6"
                textAlign="center"
                style={{
                  marginBottom: '0.5rem',
                  color: '#22badf',
                  // fontSize: getTypography('h2').fontSize,
                  // fontWeight: getTypography('h2').fontWeight,
                }}
              >
                Social Media Sharing
              </Typography>
              <Typography variant="body2">
                Share your pet's information on social media to increase visibility.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                alt=""
                image={pathlocations}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography
                variant="h6"
                textAlign="center"
                style={{
                  marginBottom: '0.5rem',
                  color: '#22badf',
                  // fontSize: getTypography('h2').fontSize,
                  // fontWeight: getTypography('h2').fontWeight,
                }}
              >
                Receive sightings
              </Typography>
              <Typography variant="body2">
                Check for new sightings reported by the community to stay updated on any leads for
                your pet.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <a href="https://www.freepik.com/search">Icon by Freepik</a> */}
      {/* <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            textAlign="center"
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              marginTop: '1rem',
            }}
          >
            What our users say
          </Typography>
        </Grid>
      </Grid> */}
      {/* <TestimonialSlider /> */}
      <Grid container spacing={3} style={{ margin: '1rem' }}>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            textAlign="center"
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              marginTop: '1rem',
            }}
          >
            Guidance and Support
          </Typography>
        </Grid>
      </Grid>
      <ArticlesListPage />
    </React.Fragment>
  );
}

export default HomePage;
