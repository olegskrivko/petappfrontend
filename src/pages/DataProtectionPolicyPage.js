import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Import Variables
import { APP_NAME, EMAIL } from '../middleware/config';

// Import Custom hook
import useFontSizes from '../utils/getFontSize';

function DataProtectionPolicyPage() {
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
            Data Protection Policy
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>
            This Data Protection Policy outlines how <strong>{APP_NAME}</strong> ("we," "us," or
            "our") protects the personal information of users collected through our website and
            mobile application (collectively referred to as the "App").
          </Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Information We Collect
          </Typography>
          <Typography paragraph>
            We may collect personal information from users, including but not limited to:
          </Typography>
          <ul>
            <li>Avatar</li>
            <li>Username</li>
            <li>First name</li>
            <li>Last name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Phone code</li>
            <li>Password (stored securely in hashed format)</li>
            <li>Favorited pets</li>
            <li>Owned pets</li>
            <li>Comments made</li>
            <li>Address (city, country)</li>
            <li>Preferred language</li>
            <li>Default location (geographical coordinates)</li>
            <li>Theme preference (light or dark mode)</li>
            <li>Notification preference</li>
            <li>Newsletter subscription status</li>
            <li>User role (user or admin)</li>
            <li>Verification status (email and phone)</li>
            <li>Account active status</li>
            <li>Email verification token and its expiration date</li>
            <li>Phone verification token and its expiration date</li>
            <li>Password reset token and its expiration date</li>
          </ul>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            How We Use Your Information
          </Typography>
          <Typography paragraph>
            We use the collected information for the following purposes:
          </Typography>
          <ul>
            <li>To provide and improve our services</li>
            <li>To personalize user experience</li>
            <li>To communicate with users</li>
            <li>To respond to inquiries and provide support</li>
            <li>To comply with legal obligations</li>
          </ul>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Data Security
          </Typography>
          <Typography paragraph>
            We implement appropriate security measures to protect personal information from
            unauthorized access, disclosure, alteration, or destruction. User passwords are
            encrypted to ensure security.
          </Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Data Retention and Deletion
          </Typography>
          <Typography paragraph>
            Users have the right to access, update, or delete their personal information stored on
            the App. Upon request, we will delete user data, including personal information, posts,
            and other associated data.
          </Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Third-Party Disclosure
          </Typography>
          <Typography paragraph>
            We do not sell, trade, or otherwise transfer personal information to third parties
            without user consent, except as required by law or to facilitate the services provided
            by the App.
          </Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Compliance with Laws
          </Typography>
          <Typography paragraph>
            We comply with applicable privacy laws and regulations, including the General Data
            Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
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
            If you have any questions or concerns about our Data Protection Policy or our data
            practices, please contact us at <strong>{EMAIL}</strong>.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DataProtectionPolicyPage;
