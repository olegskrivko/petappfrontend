// import React from "react";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: "#1976d2",
//         padding: "20px",
//         textAlign: "center",
//         marginTop: "auto",
//         width: "100%", // Ensure the footer takes full width
//         margin: 0, // Reset margin to remove any default spacing
//         background: "#1D1D1D !important",
//       }}
//     >
//       <Typography variant="body2" color="#fff">
//         &copy; 2024 Pawclix App. All rights reserved.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: "#1976d2",
        padding: "20px",
        textAlign: "center",
        marginTop: "auto",
        width: "100%", // Ensure the footer takes full width
        margin: 0, // Reset margin to remove any default spacing
        background: "#1D1D1D !important",
      }}
    >
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: "2rem",
          paddingBottom: "2rem",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} textAlign="left">
            <Typography
              variant="h6"
              color="#ffc107"
              style={{ fontWeight: "500" }}
            >
              App
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/about"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                About
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/pets"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Pets
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/pet-services"
                disabled
                style={{ color: "darkgray", textDecoration: "none" }}
              >
                Pet Services
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/virtual-pet-training-classes"
                style={{ color: "darkgray", textDecoration: "none" }}
              >
                Virtual Pet Training Classes
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/community-forums"
                style={{ color: "darkgray", textDecoration: "none" }}
              >
                Community Forums
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/emergency-pet-alerts"
                style={{ color: "darkgray", textDecoration: "none" }}
              >
                Emergency Pet Alerts
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} textAlign="left">
            <Typography
              variant="h6"
              color="#ffc107"
              style={{ fontWeight: "500" }}
            >
              Explore
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/pet-care-guide"
                style={{ color: "darkgray", textDecoration: "none" }}
              >
                Pet Care Guide
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/pet-compatibility-quiz"
                style={{ color: "darkgray", textDecoration: "none" }}
              >
                Pet Compatibility Quiz
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/lost-pet-prevention-tips"
                style={{ color: "darkgray", textDecoration: "none" }}
              >
                Lost Pet Prevention Tips
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/guide-to-retrieving-lost-pets"
                style={{ color: "darkgray", textDecoration: "none" }}
              >
                Guide to Retrieving Lost Pets
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/adopt-do-not-shop"
                style={{ color: "darkgray", textDecoration: "none" }}
              >
                Adopt, Don't Shop
              </Link>
            </Typography>

            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/how-to"
                style={{ color: "darkgray", textDecoration: "none" }}
              >
                How To
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} textAlign="left">
            <Typography
              variant="h6"
              color="#ffc107"
              style={{ fontWeight: "500" }}
            >
              Policies and Guidelines
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/privacy-policy"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Privacy Policy
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/terms-of-service"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Terms of Service
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/cookie-policy"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Cookie Policy
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/data-protection-policy"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Data Protection Policy
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/disclaimer"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Disclaimer
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/community-guidelines"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Community Guidelines
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} textAlign="left">
            <Typography
              variant="h6"
              color="#ffc107"
              style={{ fontWeight: "500" }}
            >
              Information
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contact
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/feedback"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Feedback
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/support"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Support
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/sponsors-and-partners#partners"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Partners
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Social Media
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              style={{ fontWeight: "300" }}
            >
              <Link
                to="/sponsors-and-partners#sponsors"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Sponsors
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Typography
        gutterBottom
        variant="body2"
        color="#adb5bd"
        style={{ fontSize: "0.8rem" }}
      >
        We are grateful for any support or sponsorship that can help us unlock
        the full potential of our web application -{" "}
        <Link
          to="/support"
          style={{
            color: "#ffc107",
            fontWeight: "500",
            textDecoration: "none",
          }}
        >
          SUPPORT
        </Link>
      </Typography>

      <Typography variant="body2" color="#fff">
        &copy; 2024 Pawclix. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
