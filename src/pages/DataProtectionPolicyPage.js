import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { COMPANY_NAME, APP_NAME, EMAIL, PHONE } from "../middleware/config";

function DataProtectionPolicyPage() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Data Protection Policy
          </Typography>
          <Typography paragraph>
            This Data Protection Policy outlines how{" "}
            <strong>{COMPANY_NAME}</strong> ("we," "us," or "our") protects the
            personal information of users collected through our website and
            mobile application (collectively referred to as the "App").
          </Typography>

          <Typography variant="h6" gutterBottom>
            Information We Collect
          </Typography>
          <Typography paragraph>
            We may collect personal information from users, including but not
            limited to:
          </Typography>
          <ul>
            <li>First name</li>
            <li>Last name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Saved locations</li>
            <li>Pets owned</li>
            <li>Country</li>
            <li>Preferred language</li>
          </ul>

          <Typography variant="h6" gutterBottom>
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

          <Typography variant="h6" gutterBottom>
            Data Security
          </Typography>
          <Typography paragraph>
            We implement appropriate security measures to protect personal
            information from unauthorized access, disclosure, alteration, or
            destruction. User passwords are encrypted to ensure security.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Data Retention and Deletion
          </Typography>
          <Typography paragraph>
            Users have the right to access, update, or delete their personal
            information stored on the App. Upon request, we will delete user
            data, including personal information, posts, and other associated
            data.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Third-Party Disclosure
          </Typography>
          <Typography paragraph>
            We do not sell, trade, or otherwise transfer personal information to
            third parties without user consent, except as required by law or to
            facilitate the services provided by the App.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Compliance with Laws
          </Typography>
          <Typography paragraph>
            We comply with applicable privacy laws and regulations, including
            the General Data Protection Regulation (GDPR) and the California
            Consumer Privacy Act (CCPA).
          </Typography>

          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions or concerns about our Data Protection
            Policy or our data practices, please contact us at {EMAIL}.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DataProtectionPolicyPage;
