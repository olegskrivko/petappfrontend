import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Import Variables
import { APP_NAME, EMAIL } from '../middleware/config';

// Import Custom hook
import useFontSizes from '../utils/getFontSize';

const PrivacyPolicyPage = () => {
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
            Privacy Policy
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>
            <strong>We</strong> ("we", "us", or "our") operate the <strong>{APP_NAME}</strong> web
            app application (the "App"). This Privacy Policy outlines our practices regarding the
            collection, use, and disclosure of personal information provided by users of the App.
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
            Personal Information: We may collect personal information such as first name, last name,
            email address, phone number, saved locations, pets owned, country, and preferred
            language.
          </Typography>
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
            We use the collected information to provide and improve our services, including
            facilitating pet reunification, personalizing user experience, and communicating with
            users.
          </Typography>
          <Typography paragraph>
            Your personal information may be used to respond to inquiries, provide technical
            support, and send notifications related to the App.
          </Typography>
          <Typography paragraph>
            We may use aggregated and anonymized data for analytical purposes and to improve our
            services.
          </Typography>
          <Typography paragraph>
            Your personal information may be used to respond to inquiries, provide technical
            support, and send notifications related to the App.
          </Typography>
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
            We implement appropriate security measures to protect your personal information from
            unauthorized access, disclosure, alteration, or destruction.
          </Typography>
          <Typography paragraph>User passwords are encrypted to ensure security.</Typography>
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
            the App.
          </Typography>
          <Typography paragraph>
            Upon request, we will delete user data, including personal information, posts, and other
            associated data.
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
            We do not sell, trade, or otherwise transfer your personal information to third parties
            without your consent, except as required by law or to facilitate the services provided
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
            Cookie Policy
          </Typography>
          <Typography paragraph>
            We may use cookies and similar tracking technologies to enhance user experience and
            collect usage data. Users can control cookie settings through their browser preferences.
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
            Children's Privacy
          </Typography>
          <Typography paragraph>
            The App is not intended for use by children under the age of 13. We do not knowingly
            collect personal information from children.
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Changes to This Policy
          </Typography>
          <Typography paragraph>
            We reserve the right to update or modify this Privacy Policy at any time. Changes will
            be effective immediately upon posting on the App.
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
            If you have any questions or concerns about this Privacy Policy or our data practices,
            please contact us at <strong>{EMAIL}</strong>.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PrivacyPolicyPage;
