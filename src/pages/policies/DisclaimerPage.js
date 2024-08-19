import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
// Import Variables
import { APP_NAME } from '../../middleware/config';

// Import Custom hook
import useFontSizes from '../../utils/getFontSize';

function DisclaimerPage() {
  const { t } = useTranslation('disclaimerPage');
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
            {t('title')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>{t('description1')}</Typography>
          <Typography paragraph>{t('description2')}</Typography>
          <Typography paragraph>{t('description3')}</Typography>
          <Typography paragraph>{t('description4')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DisclaimerPage;
