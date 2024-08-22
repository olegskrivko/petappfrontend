import React, { useState } from 'react';
import {
  Grid,
  CssBaseline,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

// React MUI Icons
import ShareIcon from '@mui/icons-material/Share';
import WorkIcon from '@mui/icons-material/Work';
import PetsIcon from '@mui/icons-material/Pets';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ArticleIcon from '@mui/icons-material/Article';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AppsIcon from '@mui/icons-material/Apps';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';

// Import your form components
import PetsForm from '../components/dashboard/PetsForm';
import PetsList from '../components/dashboard/PetsList';
import SheltersForm from '../components/dashboard/SheltersForm';
import SheltersList from '../components/dashboard/SheltersList';
import ServicesForm from '../components/dashboard/ServicesForm';
import ServicesList from '../components/dashboard/ServicesList';
import InfrastructureForm from '../components/dashboard/InfrastructureForm';
import InfrastructureList from '../components/dashboard/InfrastructureList';
import ReviewsForm from '../components/dashboard/ReviewsForm';
import ReviewsList from '../components/dashboard/ReviewsList';
import ArticlesForm from '../components/dashboard/ArticlesForm';
import ArticlesList from '../components/dashboard/ArticlesList';
import TrainingsForm from '../components/dashboard/TrainingsForm';
import TrainingsList from '../components/dashboard/TrainingsList';
import BusinessesForm from '../components/dashboard/BusinessesForm';
import BusinessesList from '../components/dashboard/BusinessesList';
import SocialsForm from '../components/dashboard/SocialsForm';
import SocialsList from '../components/dashboard/SocialsList';
import UsersForm from '../components/dashboard/UsersForm';
import UsersList from '../components/dashboard/UsersList';

const DashboardPage = () => {
  const [selectedPage, setSelectedPage] = useState('recipes');

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <Grid container spacing={2}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Box>
          {/* Sidebar with Icons */}
          <List>
            <ListItem
              button
              selected={selectedPage === 'pets'}
              onClick={() => handlePageChange('pets')}
            >
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText primary="Pets" />
            </ListItem>

            <ListItem
              button
              selected={selectedPage === 'shelters'}
              onClick={() => handlePageChange('shelters')}
            >
              <ListItemIcon>
                <OtherHousesIcon />
              </ListItemIcon>
              <ListItemText primary="Shelters" />
            </ListItem>
            <ListItem
              button
              selected={selectedPage === 'services'}
              onClick={() => handlePageChange('services')}
            >
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem
              button
              selected={selectedPage === 'infrastructure'}
              onClick={() => handlePageChange('infrastructure')}
            >
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Infrastructure" />
            </ListItem>
            <ListItem
              button
              selected={selectedPage === 'reviews'}
              onClick={() => handlePageChange('reviews')}
            >
              <ListItemIcon>
                <ReviewsIcon />
              </ListItemIcon>
              <ListItemText primary="Reviews" />
            </ListItem>
            <ListItem
              button
              selected={selectedPage === 'articles'}
              onClick={() => handlePageChange('articles')}
            >
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Articles" />
            </ListItem>
            <ListItem
              button
              selected={selectedPage === 'trainings'}
              onClick={() => handlePageChange('trainings')}
            >
              <ListItemIcon>
                <VideoLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Trainings" />
            </ListItem>
            <ListItem
              button
              selected={selectedPage === 'businesses'}
              onClick={() => handlePageChange('businesses')}
            >
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Businesses" />
            </ListItem>
            <ListItem
              button
              selected={selectedPage === 'socials'}
              onClick={() => handlePageChange('socials')}
            >
              <ListItemIcon>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText primary="Socials" />
            </ListItem>

            <ListItem
              button
              selected={selectedPage === 'userProfile'}
              onClick={() => handlePageChange('userProfile')}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="User Profile" />
            </ListItem>
          </List>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <Box>
          {selectedPage === 'pets' && (
            <section>
              <Typography variant="h4" gutterBottom>
                Pets
              </Typography>
              <PetsForm />
              <PetsList />
            </section>
          )}
          {selectedPage === 'shelters' && (
            <section>
              <Typography variant="h4" gutterBottom>
                Shelters
              </Typography>
              <SheltersForm />
              <SheltersList />
            </section>
          )}
          {selectedPage === 'services' && (
            <section>
              <Typography variant="h4" gutterBottom>
                Services
              </Typography>
              <ServicesForm />
              <ServicesList />
            </section>
          )}
          {selectedPage === 'infrastructure' && (
            <section>
              <Typography variant="h4" gutterBottom>
                Infrastructure
              </Typography>
              <InfrastructureForm />
              <InfrastructureList />
            </section>
          )}
          {selectedPage === 'reviews' && (
            <section>
              <Typography variant="h4" gutterBottom>
                Reviews
              </Typography>
              <ReviewsForm />
              <ReviewsList />
            </section>
          )}
          {selectedPage === 'articles' && (
            <section>
              <Typography variant="h4" gutterBottom>
                Articles
              </Typography>
              <ArticlesForm />
              <ArticlesList />
            </section>
          )}
          {selectedPage === 'trainings' && (
            <section>
              <Typography variant="h4" gutterBottom>
                Trainings
              </Typography>
              <TrainingsForm />
              <TrainingsList />
            </section>
          )}
          {selectedPage === 'businesses' && (
            <section>
              <Typography variant="h4" gutterBottom>
                Businesses
              </Typography>
              <BusinessesForm />
              <BusinessesList />
            </section>
          )}
          {selectedPage === 'socials' && (
            <section>
              <Typography variant="h4" gutterBottom>
                Socials
              </Typography>
              <SocialsForm />
              <SocialsList />
            </section>
          )}
          {selectedPage === 'userProfile' && (
            <section>
              <Typography variant="h4" gutterBottom>
                User Profile
              </Typography>
              <UsersForm />
              <UsersList />
            </section>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
