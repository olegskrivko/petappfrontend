import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Box, Link } from '@mui/material';
import { Work as ServiceIcon } from '@mui/icons-material';

const services = [
  {
    id: 1,
    name: 'Veterinarian',
    link: '/services/veterinarian',
  },
  {
    id: 2,
    name: 'Cynologist',
    link: '/services/cynologist',
  },
  {
    id: 3,
    name: 'Dog Walker',
    link: '/services/dog-walker',
  },
  {
    id: 4,
    name: 'Groomer',
    link: '/services/groomer',
  },
  // Add more services as needed
];

function ProfileServicesPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Available Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} key={service.id}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      backgroundColor: '#f0f0f0',
                      marginRight: 2,
                    }}
                  >
                    <ServiceIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Box flexGrow={1}>
                    <Typography variant="h6">
                      <Link href={service.link} underline="none">
                        {service.name}
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProfileServicesPage;
