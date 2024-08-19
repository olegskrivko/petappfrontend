import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
// Import Variables
import { APP_NAME, EMAIL } from '../../middleware/config';

// Import Custom hook
import useFontSizes from '../../utils/getFontSize';

function CookiePolicyPage() {
  const { t } = useTranslation('cookiePolicyPage');
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
          <Typography paragraph>{t('description')}</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('title1')}
          </Typography>
          <Typography paragraph>{t('description1')}</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('title2')}
          </Typography>
          <Typography paragraph>{t('description2')}</Typography>
          <ul>
            <li>
              <Typography>{t('title3')}</Typography>
              <Typography>{t('description3')}</Typography>
            </li>
            <li>
              <Typography>{t('title4')}</Typography>
              <Typography>{t('description4')}</Typography>
            </li>
            <li>
              <Typography>{t('title5')}</Typography>
              <Typography>{t('description5')}</Typography>
            </li>
            <li>
              <Typography>{t('title6')}</Typography>
              <Typography>{t('description6')}</Typography>
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
            {t('title7')}
          </Typography>
          <Typography paragraph>{t('description7')}</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('title8')}
          </Typography>
          <Typography paragraph>{t('description8')}</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('title9')}
          </Typography>
          <Typography paragraph>{t('description9')}</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('title10')}
          </Typography>
          <Typography paragraph>{t('description10')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CookiePolicyPage;
