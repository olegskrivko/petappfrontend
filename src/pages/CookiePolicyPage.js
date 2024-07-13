import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Import Variables
import { APP_NAME, EMAIL } from '../middleware/config';

// Import Custom hook
import useFontSizes from '../utils/getFontSize';

function CookiePolicyPage() {
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
            Cookie Policy
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>
            This Cookie Policy explains how <strong>{APP_NAME}</strong> ("we," "us," or "our") uses
            cookies and similar tracking technologies on our website and mobile application
            (collectively referred to as the "App").
          </Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            What are Cookies?
          </Typography>
          <Typography paragraph>
            Cookies are small text files that are stored on your device when you visit a website or
            use a mobile application. They enable the website or app to remember your actions and
            preferences over time.
          </Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            How We Use Cookies
          </Typography>
          <Typography paragraph>
            We use cookies and similar tracking technologies for the following purposes:
          </Typography>
          <ul>
            <li>
              <Typography>Essential Cookies</Typography>
              <Typography>
                These cookies are necessary for the operation of the App and to provide basic
                functionalities.
              </Typography>
            </li>
            <li>
              <Typography>Performance and Analytics Cookies</Typography>
              <Typography>
                These cookies help us analyze how users interact with the App, allowing us to
                improve its performance and user experience.
              </Typography>
            </li>
            <li>
              <Typography>Functionality Cookies</Typography>
              <Typography>
                These cookies enable certain features of the App, such as personalization and
                language preferences.
              </Typography>
            </li>
            <li>
              <Typography>Advertising Cookies</Typography>
              <Typography>
                We may use third-party advertising cookies to display personalized ads based on your
                browsing behavior.
              </Typography>
            </li>
          </ul>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Your Cookie Choices
          </Typography>
          <Typography paragraph>
            You have the option to accept or decline cookies. Most web browsers automatically accept
            cookies, but you can usually modify your browser settings to decline cookies if you
            prefer. However, this may prevent you from accessing certain features of the App.
          </Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Third-Party Cookies
          </Typography>
          <Typography paragraph>
            We may allow third-party service providers to place cookies on the App to provide us
            with analytics and advertising services. These cookies are subject to the respective
            privacy policies of these third parties.
          </Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Updates to this Policy
          </Typography>
          <Typography paragraph>
            We may update this Cookie Policy from time to time to reflect changes in our practices
            or legal requirements. We encourage you to review this policy periodically for any
            updates.
          </Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions or concerns about our use of cookies, please contact us at{' '}
            <strong>{EMAIL}</strong>.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CookiePolicyPage;
