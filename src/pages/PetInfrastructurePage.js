import React from 'react';

import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LeafletPetInfrastructureMap from '../components/map/LeafletPetInfrastructureMap';

import ParkIcon from '@mui/icons-material/Park';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HotelIcon from '@mui/icons-material/Hotel';

// Import Custom hook
import useFontSizes from '../utils/getFontSize';

function PetInfrastructurePage() {
  const { getTypography } = useFontSizes();
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
            Pet Infrastructure
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <LeafletPetInfrastructureMap />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h2"
            textAlign="left"
            sx={{ mt: 3 }}
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Pet-Friendly Infrastructure
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <ParkIcon />
              </ListItemIcon>
              <ListItemText
                primary="Pet Park"
                secondary="A designated area for pets to socialize and play."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalCafeIcon />
              </ListItemIcon>
              <ListItemText
                primary="Pet-Friendly Cafe"
                secondary="Cafes welcoming pets with outdoor seating areas."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalHospitalIcon />
              </ListItemIcon>
              <ListItemText
                primary="Veterinary Clinic"
                secondary="Medical care and services for pets."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText
                primary="Pet Store"
                secondary="Shops offering pet supplies, food, and accessories."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BeachAccessIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dog Beach"
                secondary="Beach areas where dogs can swim and play."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HotelIcon />
              </ListItemIcon>
              <ListItemText
                primary="Pet Hotel"
                secondary="Accommodations providing boarding and pet care services."
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PetInfrastructurePage;
// Parks: Various types including dog parks, playgrounds, and recreational parks.
// Pet-friendly cafes and restaurants: Establishments that allow pets in outdoor seating areas.
// Veterinary clinics: Medical facilities for pets.
// Pet stores: Shops selling pet supplies, food, and accessories.
// Dog beaches: Beach areas where dogs are allowed to swim and play.
// Pet hotels or boarding facilities: Accommodations for pets when owners are away.
// Grooming salons: Places for pet grooming and hygiene.
// Pet daycare centers: Facilities where pets can stay and play during the day.
// Pet-friendly hotels and accommodations: Hotels and lodgings that welcome pets.
// Pet-friendly public transportation: Public transport options that allow pets.
// Pet-friendly public spaces: Squares, markets, and plazas that allow pets.
// Pet-friendly trails and hiking areas: Trails suitable for walking pets.
// Pet-friendly rental properties: Apartments or houses that permit pets.
// Pet-friendly workplaces: Offices or businesses where employees can bring pets.
// Pet-friendly events and festivals: Community events that cater to pets and their owners.
// Pet training and obedience schools: Institutions offering pet training and behavior classes.
// Pet adoption centers: Places to adopt pets, often linked with animal shelters.
// Pet crematoriums and memorial services: Services for deceased pets.
// Pet waste stations: Disposal stations for pet waste in public areas.
// Pet-friendly travel services: Airlines and travel agencies catering to pet travel needs.
// Pet photographers and artists: Services specializing in pet portraits and artwork.
// Pet-friendly cafes: Cafes with designated pet areas.
// Pet exercise and agility courses: Outdoor courses for pet exercise and training.
// Pet therapy centers: Facilities offering pet therapy sessions.
// Pet food delivery services: Services delivering pet food to homes.
// Pet insurance providers: Companies offering insurance plans for pets.
// Pet-friendly gyms and fitness centers: Fitness facilities where pets are allowed.
// Pet-sitting and dog-walking services: Professional services for pet care.
// Pet behavioral consulting services: Consultants offering advice on pet behavior.
// Pet-friendly beaches and swimming areas: Beaches and ponds open to pets for swimming.
