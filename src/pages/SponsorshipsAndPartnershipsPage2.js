import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const partnerships = [
  {
    id: 1,
    name: "Partner 1",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    id: 2,
    name: "Partner 2",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    id: 3,
    name: "Partner 3",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    id: 4,
    name: "Partner 1",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    id: 5,
    name: "Partner 2",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    id: 6,
    name: "Partner 3",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  // Add more partnerships as needed
];

function SponsorshipsAndPartnershipsPage() {
  return (
    <Container>
      <Box sx={{ textAlign: "center", mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Become a Partner
        </Typography>
        <Typography variant="body1" component="p" color="textSecondary">
          We are proud to collaborate with outstanding partners and sponsors who
          support our mission to reunite lost pets with their owners. Their
          contributions are vital to our efforts and help us provide better
          services to our community.
        </Typography>
      </Box>

      <Box sx={{ textAlign: "center", mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Partnerships
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Our partners play a crucial role in enhancing our visibility and
          expanding our reach. Through media coverage, joint initiatives, and
          collaborative efforts, our partners help us connect with more pet
          owners and animal lovers. These partnerships enable us to spread
          awareness about lost and found pets, improve our services, and
          ultimately, reunite more pets with their families.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {partnerships.map((partner) => (
          <Grid item xs={12} sm={6} md={4} key={partner.id}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                textAlign: "center",
                filter: "grayscale(100%)",
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = partner.link)}
            >
              <CardMedia
                component="img"
                height="140"
                image={partner.image}
                alt={partner.name}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SponsorshipsAndPartnershipsPage;
