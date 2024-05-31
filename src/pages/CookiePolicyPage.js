import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { COMPANY_NAME, APP_NAME, EMAIL, PHONE } from "../middleware/config";

function CookiePolicyPage() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Cookie Policy
          </Typography>
          <Typography paragraph>
            This Cookie Policy explains how <strong>{COMPANY_NAME}</strong>{" "}
            ("we," "us," or "our") uses cookies and similar tracking
            technologies on our website and mobile application (collectively
            referred to as the "App").
          </Typography>

          <Typography variant="h6" gutterBottom>
            What are Cookies?
          </Typography>
          <Typography paragraph>
            Cookies are small text files that are stored on your device when you
            visit a website or use a mobile application. They enable the website
            or app to remember your actions and preferences over time.
          </Typography>

          <Typography variant="h6" gutterBottom>
            How We Use Cookies
          </Typography>
          <Typography paragraph>
            We use cookies and similar tracking technologies for the following
            purposes:
          </Typography>
          <ul>
            <li>
              <Typography>Essential Cookies</Typography>
              <Typography>
                These cookies are necessary for the operation of the App and to
                provide basic functionalities.
              </Typography>
            </li>
            <li>
              <Typography>Performance and Analytics Cookies</Typography>
              <Typography>
                These cookies help us analyze how users interact with the App,
                allowing us to improve its performance and user experience.
              </Typography>
            </li>
            <li>
              <Typography>Functionality Cookies</Typography>
              <Typography>
                These cookies enable certain features of the App, such as
                personalization and language preferences.
              </Typography>
            </li>
            <li>
              <Typography>Advertising Cookies</Typography>
              <Typography>
                We may use third-party advertising cookies to display
                personalized ads based on your browsing behavior.
              </Typography>
            </li>
          </ul>

          <Typography variant="h6" gutterBottom>
            Your Cookie Choices
          </Typography>
          <Typography paragraph>
            You have the option to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser settings to decline cookies if you prefer. However, this may
            prevent you from accessing certain features of the App.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Third-Party Cookies
          </Typography>
          <Typography paragraph>
            We may allow third-party service providers to place cookies on the
            App to provide us with analytics and advertising services. These
            cookies are subject to the respective privacy policies of these
            third parties.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Updates to this Policy
          </Typography>
          <Typography paragraph>
            We may update this Cookie Policy from time to time to reflect
            changes in our practices or legal requirements. We encourage you to
            review this policy periodically for any updates.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions or concerns about our use of cookies,
            please contact us at {EMAIL}.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CookiePolicyPage;
