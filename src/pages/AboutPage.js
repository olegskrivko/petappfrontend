import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

// Import MUI Icons
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ArticleIcon from '@mui/icons-material/Article';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ShareIcon from '@mui/icons-material/Share';
import StorageIcon from '@mui/icons-material/Storage';
import TuneIcon from '@mui/icons-material/Tune';
import MapIcon from '@mui/icons-material/Map';
import PrintIcon from '@mui/icons-material/Print';
import WorkIcon from '@mui/icons-material/Work';
import PushPinIcon from '@mui/icons-material/PushPin';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link as MuiLink } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets'; // Example MUI icon
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
// Import Custom hook
import useFontSizes from '../utils/getFontSize';

import programmerImg from '../images/programmer_cuate.svg';
import lightBulbImg from '../images/light_bulb_bro.svg';
import scrumBoardImg from '../images/scrum_board_pana.svg';
import mobileWireframeImg from '../images/mobile_wireframe_amico.svg';
import walkingAroundImg from '../images/walking_around_amico.svg';
import socialIdeasImg from '../images/social_ideas_cuate.svg';
import navigationImg from '../images/navigation_pana.svg';
import programmingImg from '../images/programming_pana.svg';

function AboutPage() {
  const { t } = useTranslation('aboutPage'); // Initialize translation hook
  const { getTypography } = useFontSizes();
  {
    /* <a href="https://storyset.com/technology">Technology illustrations by Storyset</a> */
  }
  // <a href="https://storyset.com/people">People illustrations by Storyset</a>

  const features = [
    {
      id: 1,
      title: 'features.title1',
      description: 'features.description1',
      icon: (
        <PostAddIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 2,
      title: 'features.title2',
      description: 'features.description2',
      icon: (
        <PushPinIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 3,
      title: 'features.title3',
      description: 'features.description3',
      icon: (
        <MapIcon style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }} />
      ),
    },
    {
      id: 4,
      title: 'features.title4',
      description: 'features.description4',
      icon: (
        <AppShortcutIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 5,
      title: 'features.title5',
      description: 'features.description5',
      icon: (
        <HealthAndSafetyIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 6,
      title: 'features.title6',
      description: 'features.description6',
      icon: (
        <NotificationsIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 7,
      title: 'features.title7',
      description: 'features.description7',
      icon: (
        <TipsAndUpdatesIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 8,
      title: 'features.title8',
      description: 'features.description8',
      icon: (
        <ShareIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 9,
      title: 'features.title9',
      description: 'features.description9',
      icon: (
        <TuneIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 10,
      title: 'features.title10',
      description: 'features.description10',
      icon: (
        <PrintIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 11,
      title: 'features.title11',
      description: 'features.description11',
      icon: (
        <WorkIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 12,
      title: 'features.title12',
      description: 'features.description12',
      icon: (
        <GroupsIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
  ];

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
            {t('title')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('goal.title')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1" paragraph>
            {t('goal.description1')}
          </Typography>
          {/* <Typography variant="body1" paragraph>
            {t('goal.description2')}
          </Typography> */}
        </Grid>
      </Grid>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 3 }}
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('ourJourney.title')}
          </Typography>
        </Grid>
      </Grid> */}
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('ourJourney.title')}
          </Typography>
        </Grid>
      </Grid>
      {/* <a href="https://storyset.com/work">Work illustrations by Storyset</a> */}
      {/* lefttext */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title1')}
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
            {t('ourJourney.description1')}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={walkingAroundImg}
              alt="Feedabck"
              style={{
                width: 'auto',
                maxHeight: '380px',
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
                href="https://storyset.com/people"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                People illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* rightext */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} order={{ xs: 2, md: 1 }}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={socialIdeasImg}
              alt="Feedabck"
              style={{
                width: 'auto',
                maxHeight: '380px',
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
                href="https://storyset.com/social-media"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                Social media illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} order={{ xs: 1, md: 2 }}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title2')}
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
            {t('ourJourney.description2')}
          </Typography>
        </Grid>
      </Grid>
      {/* lefttext */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title3')}
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
            {t('ourJourney.description3')}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={programmingImg}
              alt="Feedabck"
              style={{
                width: 'auto',
                maxHeight: '380px',
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
                href="https://storyset.com/technology"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                Technology illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <a href="https://storyset.com/technology">Technology illustrations by Storyset</a> */}
      {/* <a href="https://storyset.com/technology">Technology illustrations by Storyset</a> */}

      {/* <a href="https://storyset.com/user">User illustrations by Storyset</a> */}
      {/* rightext */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} order={{ xs: 2, md: 1 }}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={mobileWireframeImg}
              alt="Feedabck"
              style={{
                width: 'auto',
                maxHeight: '380px',
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
                href="https://storyset.com/web"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                Web illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} order={{ xs: 1, md: 2 }}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title4')}
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
            {t('ourJourney.description4')}
          </Typography>
        </Grid>
      </Grid>
      {/* lefttext */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title5')}
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
            {t('ourJourney.description5')}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={navigationImg}
              alt="Feedabck"
              style={{
                width: 'auto',
                maxHeight: '380px',
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
                href="https://storyset.com/city"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                City illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* 
      <Grid container spacing={3}>
        <Grid item mt={3} xs={12} sm={12} md={8} lg={8}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title2')}
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
            {t('ourJourney.description2')}
          </Typography>
          <Typography
            sx={{ mt: 2 }}
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title3')}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }} style={{ textAlign: 'left' }}>
            {t('ourJourney.description3')}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={programmerImg}
              alt="Feedabck"
              style={{
                width: 'auto',
                maxHeight: '380px',
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
                href="https://storyset.com/web"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                Web illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            sx={{ mt: 2 }}
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title4')}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }} paragraph>
            {t('ourJourney.description4')}
          </Typography>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title5')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('ourJourney.description5')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 3 }}
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('features.title')}
          </Typography>
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} mt={5}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 3 }}
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('features.title')}
          </Typography>
        </Grid>
      </Grid>
      {/* features */}
      <Grid container spacing={3}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={feature.id}>
            <Card>
              <CardContent>
                {/* Icon */}
                <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '0.4rem' }}>
                  {feature.icon}
                  <Typography
                    variant="h3"
                    gutterBottom
                    style={{
                      fontSize: getTypography('h3').fontSize,
                      fontWeight: getTypography('h3').fontWeight,
                    }}
                  >
                    {t(feature.title)}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1"> {t(feature.description)}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} mt={5}>
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('helpUs.title')}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent>
              <Typography
                variant="h2"
                textAlign="center"
                style={{
                  marginBottom: '0.5rem',
                  fontSize: getTypography('h2').fontSize,
                  fontWeight: getTypography('h2').fontWeight,
                }}
              >
                {t('support.title')}
              </Typography>
              <Typography variant="body1">{t('support.description')}</Typography>
              <Link to="/support" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: '1rem',
                  }}
                >
                  {t('support.button')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        {/* <a href="https://storyset.com/work">Work illustrations by Storyset</a> */}
        {/* <a href="https://storyset.com/idea">Idea illustrations by Storyset</a> */}
        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent>
              <Typography
                variant="h2"
                textAlign="center"
                style={{
                  marginBottom: '0.5rem',
                  fontSize: getTypography('h2').fontSize,
                  fontWeight: getTypography('h2').fontWeight,
                }}
              >
                {t('feedback.title')}
              </Typography>
              <Typography variant="body1">{t('feedback.description')}</Typography>
              <Link to="/feedback" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: '1rem',
                  }}
                >
                  {t('feedback.button')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* <Grid container spacing={3} style={{ marginTop: "1rem" }}>
        <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
          <Typography variant="h4" gutterBottom textAlign="center">
            Our Technology Stack
          </Typography>
          <Typography variant="body1" paragraph>
            We appreciate any help or collaboration from developers who share
            our passion for building amazing web applications. If you're
            interested in contributing, please don't hesitate to reach out.
            Together, we can create something incredible!
          </Typography>
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}

export default AboutPage;
