import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

import { Link as MuiLink } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

// Import React MUI Icons
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PetsIcon from "@mui/icons-material/Pets";

// Import SVG Images
import influencerImg from "../images/mobile_marketing_cuate.svg";
import socialImg from "../images/mobile_marketing_amico.svg";
import feedbackImg from "../images/customer_feedback_amico.svg";

import {
  COMPANY_NAME,
  APP_NAME,
  EMAIL,
  PHONE,
  COUNTRY,
  CITY,
  FACEBOOK,
  INSTAGRAM,
} from "../middleware/config";

{
  /* <a href="https://storyset.com/business">Business illustrations by Storyset</a> */
}
// man -<a href="https://storyset.com/business">Business illustrations by Storyset</a>
const ContactPage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Typography
            variant="h5"
            sx={{ mb: 3 }}
            gutterBottom
            style={{ textAlign: "left" }}
          >
            Partner With Us
          </Typography>

          <Typography variant="body1" paragraph style={{ textAlign: "left" }}>
            Are you passionate about pets? Whether you're a vet, animal lover,
            or just want to share your knowledge, we're here for you!
          </Typography>

          <Typography variant="body1" paragraph style={{ textAlign: "left" }}>
            Join us in our mission to reunite lost pets with their families,
            spread awareness about pet adoption, or provide valuable resources
            to pet owners in need. Let's make a positive impact together!
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5}>
          {/* <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <CardMedia
              component="img"
              src={influencerImg}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box> */}
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
              src={influencerImg}
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
                href="https://storyset.com/business"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.6rem",
                  fontStyle: "italic",
                  color: "#999",
                  fontWeight: "300",
                }}
              >
                Business illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} order={{ xs: 2, md: 1 }}>
          {/* <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <CardMedia
              component="img"
              src={socialImg}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box> */}
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
              src={socialImg}
              alt="Social apps"
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
                href="https://storyset.com/business"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.6rem",
                  fontStyle: "italic",
                  color: "#999",
                  fontWeight: "300",
                }}
              >
                Business illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7} order={{ xs: 1, md: 2 }}>
          <Typography
            variant="h5"
            sx={{ mb: 3 }}
            gutterBottom
            style={{ textAlign: "right" }}
          >
            Further Collaboration Opportunities
          </Typography>

          <Typography variant="body1" style={{ textAlign: "right" }}>
            Additionally, we're open to exploring other collaboration
            opportunities including visionary branding, development
            partnerships, and more.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Typography
            variant="h5"
            sx={{ mb: 3 }}
            gutterBottom
            style={{ textAlign: "left" }}
          >
            Get In Touch
          </Typography>

          <Typography variant="body1" style={{ textAlign: "left" }}>
            We value your feedback, inquiries, and suggestions. Whether you have
            a question about our services, want to provide feedback, or simply
            want to say hello, we’d love to hear from you.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2 }}
            style={{ textAlign: "left" }}
          >
            Additionally, if you come across any mistakes or errors on our
            platform or have any concerns regarding the source of a recipe or
            intellectual property rights, please don't hesitate to contact us.
          </Typography>
          <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
            <Link to="/feedback">
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#ffc107", color: "#000" }}
              >
                Get In Touch
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5}>
          {/* <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <CardMedia
              component="img"
              src={feedbackImg}
              alt="Image Description"
              style={{
                width: "auto",
                maxHeight: "280px",
                // objectFit: "cover",
              }}
            />
          </Box> */}
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
              src={feedbackImg}
              alt="Feedabck"
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
                href="https://storyset.com/people"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.6rem",
                  fontStyle: "italic",
                  color: "#999",
                  fontWeight: "300",
                }}
              >
                People illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12} sx={{ paddingBottom: "1rem !important" }}>
        <Typography
          variant="h5"
          sx={{ m: 3, textAlign: "center" }}
          gutterBottom
        >
          Policies & Community Guidelines
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: "center" }}>
          Explore our policies and community guidelines to learn about how we
          collect and protect your data, community rules, and more. For detailed
          information, please refer to our links down below.
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ paddingTop: "0 !important" }}
        >
          <List sx={{ paddingBottom: "0 !important" }}>
            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <PetsIcon sx={{ color: "#ffc107" }} />
              </ListItemIcon>
              <Link to="/privacy-policy">
                <Typography variant="body1">Privacy Policy</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <PetsIcon sx={{ color: "#ffc107" }} />
              </ListItemIcon>
              <Link to="/terms-of-service">
                <Typography variant="body1">Terms of Service</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <PetsIcon sx={{ color: "#ffc107" }} />
              </ListItemIcon>
              <Link to="/cookie-policy">
                <Typography variant="body1">Cookie Policy</Typography>
              </Link>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <PetsIcon sx={{ color: "#ffc107" }} />
              </ListItemIcon>
              <Link to="/data-protection-policy">
                <Typography variant="body1">Data Protection Policy</Typography>
              </Link>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <PetsIcon sx={{ color: "#ffc107" }} />
              </ListItemIcon>
              <Link to="/disclaimer">
                <Typography variant="body1">Disclaimer</Typography>
              </Link>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                <PetsIcon sx={{ color: "#ffc107" }} />
              </ListItemIcon>

              <Link to="/community-guidelines">
                <Typography variant="body1">Community Guidelines</Typography>
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Social Media
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <MuiLink href={FACEBOOK} target="_blank" rel="noopener">
              <FacebookIcon fontSize="large" style={{ color: "#ffc107" }} />
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href={INSTAGRAM} target="_blank" rel="noopener">
              <InstagramIcon fontSize="large" style={{ color: "#ffc107" }} />
            </MuiLink>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }} gutterBottom>
          Contact Information
        </Typography>

        <Grid container spacing={2} sx={{ mb: 5 }} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: "2rem 0", backgroundColor: "#F0F4F9" }}>
              <MailIcon fontSize="large" sx={{ color: "#ffc107" }} />

              <Typography variant="body1">
                Email:{" "}
                <strong>
                  <a
                    href={`mailto:${EMAIL}`}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {EMAIL}
                  </a>
                </strong>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: "2rem 0", backgroundColor: "#F0F4F9" }}>
              <PhoneIcon fontSize="large" sx={{ color: "#ffc107" }} />
              <Typography variant="body1">
                Phone: <strong>{PHONE}</strong>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: "2rem 0", backgroundColor: "#F0F4F9" }}>
              <LocationOnIcon fontSize="large" sx={{ color: "#ffc107" }} />
              <Typography variant="body1">
                Location:{" "}
                <strong>
                  {COUNTRY}, {CITY}
                </strong>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
