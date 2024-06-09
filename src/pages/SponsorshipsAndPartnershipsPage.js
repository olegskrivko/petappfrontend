import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import img from "../images/dog_paw_bro.svg";
import img2 from "../images/outer_space_cuate.svg";

const sponsorships = [
  {
    id: 1,
    name: "Sponsor 1",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    id: 2,
    name: "Sponsor 2",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    id: 3,
    name: "Sponsor 3",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    id: 4,
    name: "Sponsor 4",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    id: 5,
    name: "Sponsor 5",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  {
    id: 6,
    name: "Sponsor 6",
    image: "https://via.placeholder.com/150",
    link: "#",
  },

  // Add more sponsorships as needed
];
{
  /* <a href="https://storyset.com/friends">Friends illustrations by Storyset</a> */
}

{
  /* <a href="https://storyset.com/rocket">Rocket illustrations by Storyset</a> */
}
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

function PartnershipsAndSponsorshipsPage() {
  return (
    <Container container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
        <Typography variant="h4" gutterBottom textAlign="center">
          Join Our Mission
        </Typography>
      </Grid>

      <Typography variant="body1" gutterBottom color="textSecondary">
        We are proud to collaborate with outstanding partners and sponsors who
        support our mission to reunite lost pets with their owners. Their
        contributions are vital to our efforts and help us provide better
        services to our community.
      </Typography>
      <Typography variant="body1" gutterBottom color="textSecondary">
        Through their generous support, we are able to expand our reach, enhance
        our platform, and implement innovative solutions to tackle the
        challenges of pet recovery. We are incredibly grateful for their
        dedication and commitment to making a difference in the lives of pets
        and their owners.
      </Typography>

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
          src={img2}
          alt="Influencer"
          style={{
            width: "auto",
            maxHeight: "280px",
            // objectFit: "cover",
          }}
        />
        <Box
          style={{
            marginTop: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MuiLink
            href="https://storyset.com/rocket"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.6rem",
              fontStyle: "italic",
              color: "#999",
              fontWeight: "300",
            }}
          >
            Rocket illustrations by Storyset
          </MuiLink>
        </Box>
      </Box>
      {/* </Box> */}

      <Box id="sponsors" sx={{ textAlign: "center", mt: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Sponsors
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Our sponsors play a crucial role in our mission. Their support helps
          us keep our platform running and allows us to implement new features
          and reach more pet owners in need. We are deeply thankful for their
          contributions.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {sponsorships.map((sponsor) => (
          <Grid item xs={12} sm={6} md={4} key={sponsor.id}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                textAlign: "center",
                filter: "grayscale(100%)",
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = sponsor.link)}
            >
              <CardMedia component="img" height="140" image={img} alt={img} />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box id="partners" sx={{ textAlign: "center", mt: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Partners
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
                // boxShadow: "none",
                maxWidth: 345,
                margin: "auto",
                textAlign: "center",
                filter: "grayscale(100%)",
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = partner.link)}
            >
              <CardMedia component="img" height="140" image={img} alt={img} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PartnershipsAndSponsorshipsPage;
