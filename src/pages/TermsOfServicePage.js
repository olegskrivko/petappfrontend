import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { COMPANY_NAME, APP_NAME, EMAIL, PHONE } from "../middleware/config";

const TermsOfServicePage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Terms of Service
          </Typography>
          <Typography paragraph>
            These Terms of Service ("Terms") govern your use of the {APP_NAME}{" "}
            web application (the "App") operated by our team ("us", "we", or
            "our").
          </Typography>
          <Typography variant="h6" gutterBottom>
            Agreement to Terms
          </Typography>
          <Typography paragraph>
            By accessing or using the App, you agree to be bound by these Terms.
            If you disagree with any part of the Terms, then you may not access
            the App.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Changes to Terms
          </Typography>
          <Typography paragraph>
            We reserve the right to update or modify these Terms at any time
            without prior notice. Changes are effective immediately upon posting
            on the App. Your continued use of the App after changes constitutes
            acceptance of the revised Terms.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Disclaimer of Liability
          </Typography>
          <Typography paragraph>
            The App and its content are provided on an "as is" and "as
            available" basis. We make no representations or warranties of any
            kind, express or implied, regarding the accuracy, adequacy,
            reliability, or completeness of the information provided on the App.
            We disclaim all liability for any errors or omissions in the content
            or for any loss or damage resulting from the use of the App or
            reliance on its content.
          </Typography>
          <Typography variant="h6" gutterBottom>
            User Responsibility and Security
          </Typography>
          <Typography paragraph>
            Users are responsible for maintaining the confidentiality and
            security of their account credentials, including passwords. We
            encourage users to create strong, unique passwords and to avoid
            using the same password for multiple accounts.
          </Typography>
          <Typography paragraph>
            While we implement security measures to protect user data, including
            encryption of passwords, we cannot guarantee the absolute security
            of user information. Users acknowledge and accept the inherent risks
            associated with transmitting information over the internet and using
            online services.
          </Typography>
          <Typography paragraph>
            In the event of a security breach or unauthorized access to user
            accounts, we will promptly notify affected users and take
            appropriate measures to mitigate the impact of the breach. However,
            we disclaim all liability for any loss or damage resulting from
            unauthorized access to user accounts, including but not limited to
            data breaches or unauthorized use of account credentials.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Intellectual Property Rights
          </Typography>
          <Typography paragraph>
            The content and materials on the App, including but not limited to
            text, images, logos, and trademarks, are owned or licensed by us and
            are protected by intellectual property laws. You may not use,
            reproduce, or distribute any content from the App without our prior
            written consent.
          </Typography>
          <Typography variant="h6" gutterBottom>
            User Conduct
          </Typography>
          <Typography paragraph>
            Users agree not to engage in any activity that may disrupt or
            interfere with the functioning of the App or its services.
            Prohibited activities include but are not limited to abusive
            behavior, spamming, unauthorized access, or illegal activities.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Termination
          </Typography>
          <Typography paragraph>
            We reserve the right to terminate or suspend user accounts, at our
            sole discretion, for any reason, including but not limited to
            violation of these Terms or misuse of the App.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Indemnification
          </Typography>
          <Typography paragraph>
            Users agree to indemnify and hold us harmless from any claims,
            damages, or losses arising from their use of the App or violation of
            these Terms.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Governing Law
          </Typography>
          <Typography paragraph>
            These Terms are governed by and construed in accordance with the
            laws of Latvia, without regard to its conflict of law principles.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions or concerns about these Terms, please
            contact us at {EMAIL}.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TermsOfServicePage;
