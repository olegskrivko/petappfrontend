import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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

import PetsIcon from '@mui/icons-material/Pets'; // Example MUI icon
import { Button } from '@mui/material';

// Import Custom hook
import useFontSizes from '../utils/getFontSize';

function AboutPage() {
  const { getTypography } = useFontSizes();
  const features = [
    {
      id: 1,
      title: 'Lost and Found Pet Report',
      description:
        'Quickly submit details about your lost or found pet to our community and increase the chances of a reunion.',
      icon: <PostAddIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
    },
    {
      id: 2,
      title: 'Report Last Seen Location',
      description:
        'Enable users to report the last seen location of a lost pet on the map, helping other users in the community locate and reunite pets.',
      icon: <PushPinIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
    },
    {
      id: 3,
      title: 'Lost and Found Pet Map',
      description:
        'A feature that displays a map of lost and found pets in the area, allowing users to easily locate and identify lost pets.',
      icon: <MapIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
    },
    {
      id: 4,
      title: 'Mobile-Optimized Platform',
      description:
        'Our mobile-friendly app uses the latest technologies to provide an innovative platform for reuniting lost pets with their owners.',
      icon: <AppShortcutIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
    },
    {
      id: 5,
      title: 'Pet Health Insights',
      description:
        'Discover vital insights on pet health, including vaccination schedules and reminders, ensuring your pet remains healthy and happy.',
      icon: <HealthAndSafetyIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
    },
    {
      id: 6,
      title: 'Push Notification',
      description:
        'Receive immediate alerts when a lost or found pet is reported in your vicinity. Be the first to help reunite furry friends with their owners.',
      icon: <NotificationsIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
    },
    {
      id: 7,
      title: 'Tips and Resources',
      description:
        'Access resources for pet owners, offering guidance on preventing pet loss and what to do if their pet goes missing.',
      icon: <TipsAndUpdatesIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
    },

    {
      id: 8,
      title: 'Social Media Integration',
      description:
        'Integration with social media platforms to help spread the word about lost pets and facilitate communication among users.',
      icon: <ShareIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
    },
    {
      id: 9,
      title: 'Search Filters',
      description:
        'Enable users to filter lost and found pet listings by location, species, breed, color, and other criteria.',
      icon: <TuneIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
    },

    {
      id: 10,
      title: 'Lost Pet Flyers',
      description:
        'A feature that allows users to easily create and print lost pet flyers to distribute in their local community.',
      icon: <PrintIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
    },
    {
      id: 11,
      title: 'Pet Services Directory',
      description:
        'Discover a wide range of pet services, including veterinarians, shelters, groomers, trainers, and more.',
      icon: <WorkIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
    },

    {
      id: 12,
      title: 'Community Engagement',
      description:
        'Foster a supportive community where users can share tips, advice, and stories about lost and found pets.',
      icon: <GroupsIcon style={{ width: '40px', height: '40px', marginRight: '1rem' }} />,
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
            Our Goal
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1" paragraph>
            Our app utilizes advanced technology to facilitate the reunification of lost pets with
            their owners. We provide a platform for posting lost pet listings and actively work to
            connect owners with individuals who have found them.
          </Typography>
          <Typography variant="body1" paragraph>
            Additionally, our app connects you with a wide range of pet-related services, including
            veterinary clinics, groomers, trainers, and more. We ensure that you have access to the
            right resources for your pet's specific needs.
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
            Features
          </Typography>
        </Grid>
      </Grid>
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
                    {feature.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1">{feature.description}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} sm={6} md={6} lg={6} textAlign="center">
          <Card style={{ backgroundColor: '#1D1D1D', color: '#fff' }}>
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
                Support Our Project
              </Typography>
              <Typography variant="body1">
                Your contribution can help us continue our mission to reunite lost pets with their
                families and provide them with the care they need. Every little bit counts and we
                appreciate your support!
              </Typography>
              <Link to="/support" style={{ textDecoration: 'none' }}>
                <Button
                  style={{
                    backgroundColor: '#ffc107',
                    color: '#000',
                    marginTop: '1rem',
                  }}
                >
                  Support
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} textAlign="center">
          <Card style={{ backgroundColor: '#f8f9fa', color: '#000' }}>
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
                Share Your Thoughts
              </Typography>
              <Typography variant="body1">
                Your feedback is valuable to us as we strive to improve our app and provide the best
                service to pet owners. Please share any comments, suggestions, or criticisms to help
                us make our app even better.
              </Typography>
              <Link to="/feedback" style={{ textDecoration: 'none' }}>
                <Button
                  style={{
                    backgroundColor: '#6c757d',
                    color: '#fff',
                    marginTop: '1rem',
                  }}
                >
                  Leave Feedback
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
