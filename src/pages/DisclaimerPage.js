import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Import Variables
import { APP_NAME } from '../middleware/config';

// Import Custom hook
import useFontSizes from '../utils/getFontSize';

function DisclaimerPage() {
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
            Disclaimer
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>
            The information provided on the <strong>{APP_NAME}</strong> web application is for
            general informational purposes only. While we strive to keep the information up to date
            and accurate, we make no representations or warranties of any kind, express or implied,
            about the completeness, accuracy, reliability, suitability, or availability with respect
            to the web application or the information, products, services, or related graphics
            contained on the web application for any purpose.
          </Typography>
          <Typography paragraph>
            Any reliance you place on such information is therefore strictly at your own risk. In no
            event will we be liable for any loss or damage including without limitation, indirect or
            consequential loss or damage, or any loss or damage whatsoever arising from loss of data
            or profits arising out of, or in connection with, the use of this web application.
          </Typography>
          <Typography paragraph>
            Through this web application, you can link to other websites that are not under the
            control of <strong>{APP_NAME}</strong>. We have no control over the nature, content, and
            availability of those sites. The inclusion of any links does not necessarily imply a
            recommendation or endorse the views expressed within them.
          </Typography>
          <Typography paragraph>
            Every effort is made to keep the web application up and running smoothly. However,{' '}
            <strong>{APP_NAME}</strong> takes no responsibility for, and will not be liable for, the
            website or application being temporarily unavailable due to technical issues beyond our
            control.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DisclaimerPage;
