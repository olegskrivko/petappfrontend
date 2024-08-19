import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
// Import Variables
import { APP_NAME, EMAIL } from '../../middleware/config';

// Import Custom hook
import useFontSizes from '../../utils/getFontSize';

function DataProtectionPolicyPage() {
  const { t } = useTranslation('dataProtectionPolicyPage');
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
          <ul>
            <li>{t('listItem1')}</li>
            <li>{t('listItem2')}</li>
            <li>{t('listItem3')}</li>
            <li>{t('listItem4')}</li>
            <li>{t('listItem5')}</li>
            <li>{t('listItem6')}</li>
            <li>{t('listItem7')}</li>
            <li>{t('listItem8')}</li>
            <li>{t('listItem9')}</li>
            <li>{t('listItem10')}</li>
            <li>{t('listItem11')}</li>
            <li>{t('listItem12')}</li>
            <li>{t('listItem13')}</li>
            <li>{t('listItem14')}</li>
            <li>{t('listItem15')}</li>
            <li>{t('listItem16')}</li>
            <li>{t('listItem17')}</li>
            <li>{t('listItem18')}</li>
            <li>{t('listItem19')}</li>
            <li>{t('listItem20')}</li>
            <li>{t('listItem21')}</li>
            <li>{t('listItem22')}</li>
            <li>{t('listItem23')}</li>
          </ul>

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
          <Typography paragraph>{t('description3')}</Typography>
          <ul>
            <li>{t('infoListItem1')}</li>
            <li>{t('infoListItem2')}</li>
            <li>{t('infoListItem3')}</li>
            <li>{t('infoListItem4')}</li>
            <li>{t('infoListItem5')}</li>
          </ul>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('title3')}
          </Typography>
          <Typography paragraph>{t('description5')}</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('title4')}
          </Typography>
          <Typography paragraph>{t('description6')}</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('title5')}
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
            {t('title6')}
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
            {t('title7')}
          </Typography>
          <Typography paragraph>{t('description9')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DataProtectionPolicyPage;
