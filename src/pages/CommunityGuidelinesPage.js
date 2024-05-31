import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import {
  COMPANY_NAME,
  APP_NAME,
  APP_EMAIL,
  APP_PHONE,
} from "../middleware/config";
function CommunityGuidelinesPage() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Community Guidelines
          </Typography>
          <Typography paragraph>
            Welcome to the <strong>{COMPANY_NAME}</strong> community! To ensure
            a positive and enjoyable experience for all users, we have
            established the following guidelines for participation:
          </Typography>
          <Typography variant="h6" gutterBottom>
            1. Respect Others
          </Typography>
          <Typography paragraph>
            Treat fellow community members with kindness, empathy, and respect.
            Avoid offensive language, harassment, discrimination, and personal
            attacks. Remember that diverse opinions and perspectives are
            welcome, but hateful or inflammatory comments will not be tolerated.
          </Typography>
          <Typography variant="h6" gutterBottom>
            2. Be Constructive
          </Typography>
          <Typography paragraph>
            Share constructive feedback and contribute meaningfully to
            discussions. Avoid spamming, trolling, or posting irrelevant
            content. Focus on fostering a supportive and informative environment
            where everyone can learn and grow.
          </Typography>
          <Typography variant="h6" gutterBottom>
            3. Respect Privacy
          </Typography>
          <Typography paragraph>
            Protect the privacy of others and refrain from sharing personal or
            sensitive information without consent. Respect user confidentiality
            and avoid discussing private matters in public forums.
          </Typography>
          <Typography variant="h6" gutterBottom>
            4. Follow App Policies
          </Typography>
          <Typography paragraph>
            Adhere to the terms of service, privacy policy, and other policies
            outlined by <strong>{COMPANY_NAME}</strong>. Report any violations
            or inappropriate behavior to the app administrators for review and
            action.
          </Typography>
          <Typography variant="h6" gutterBottom>
            5. Be Responsible
          </Typography>
          <Typography paragraph>
            Take responsibility for your actions and contributions within the
            community. Help maintain a positive and welcoming atmosphere by
            upholding these guidelines and encouraging others to do the same.
          </Typography>
          <Typography paragraph>
            By participating in the <strong>{COMPANY_NAME}</strong> community,
            you agree to abide by these guidelines and contribute to creating a
            safe, inclusive, and supportive environment for all members. Thank
            you for your cooperation and commitment to fostering a thriving
            community!
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CommunityGuidelinesPage;
