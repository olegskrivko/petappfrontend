import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
// Import Variables
import { APP_NAME } from '../../middleware/config';

// Import Custom hook
import useFontSizes from '../../utils/getFontSize';

function CommunityGuidelinesPage() {
  const { t } = useTranslation('communityGuidelinesPage');
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
            1.{t('title1')}
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
            2. {t('title2')}
          </Typography>
          <Typography paragraph>{t('description2')}</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            3. {t('title3')}
          </Typography>
          <Typography paragraph>{t('description3')}</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            4. {t('title4')}
          </Typography>
          <Typography paragraph>{t('description4')}</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            5. {t('title5')}
          </Typography>
          <Typography paragraph>{t('description5')}</Typography>
          <Typography paragraph>{t('description6')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CommunityGuidelinesPage;
