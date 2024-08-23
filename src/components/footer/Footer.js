import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('footer');

  const appLinks = [
    { path: '/about', label: 'links.about' },
    { path: '/pets', label: 'links.pets' },
    { path: '/services', label: 'links.petServices' },
    { path: '/virtual-pet-training-classes', label: 'links.virtualPetTrainingClasses' },
  ];

  const exploreLinks = [
    { path: '/shelters', label: 'links.adoptDoNotShop' },
    { path: '/articles', label: 'links.petCareTips' },
    { path: '/articles/how-to-find-a-lost-cat', label: 'links.howToFindALostCat' },
    { path: '/articles/how-to-find-a-lost-dog', label: 'links.howToFindALostDog' },
  ];

  const policyLinks = [
    { path: '/privacy-policy', label: 'links.privacyPolicy' },
    { path: '/terms-of-service', label: 'links.termsOfService' },
    { path: '/cookie-policy', label: 'links.cookiePolicy' },
    { path: '/data-protection-policy', label: 'links.dataProtectionPolicy' },
    { path: '/disclaimer', label: 'links.disclaimer' },
    { path: '/community-guidelines', label: 'links.communityGuidelines' },
  ];

  const infoLinks = [
    { path: '/contact', label: 'links.contact' },
    { path: '/feedback', label: 'links.feedback' },
    { path: '/support', label: 'links.support' },
    { path: '/contact', label: 'links.socialMedia' },
  ];

  const renderLinks = (linksArray) =>
    linksArray.map((link) => (
      <Typography key={link.path} variant="body1" color="#fff" style={{ fontWeight: '400' }}>
        <Link to={link.path} style={{ color: '#fff', textDecoration: 'none' }}>
          {t(link.label)}
        </Link>
      </Typography>
    ));

  return (
    <Box
      component="footer"
      sx={{
        padding: '20px 0',
        textAlign: 'center',
        marginTop: 'auto',
        width: '100%',
        margin: 0,
        background: '#22badf !important',
      }}
    >
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: '2rem',
          paddingBottom: '2rem',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
              {t('titles.app')}
            </Typography>
            {renderLinks(appLinks)}
          </Grid>

          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
              {t('titles.explore')}
            </Typography>
            {renderLinks(exploreLinks)}
          </Grid>

          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
              {t('titles.policiesAndGuidelines')}
            </Typography>
            {renderLinks(policyLinks)}
          </Grid>

          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
              {t('titles.information')}
            </Typography>
            {renderLinks(infoLinks)}
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container>
          <Grid item xs={12} textAlign="center">
            <Typography
              gutterBottom
              variant="body2"
              style={{ fontSize: '0.8rem', color: '#fff', fontWeight: '300' }}
            >
              {t('footnote.supportText')} -{' '}
              <Link
                to="/support"
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                {t('links.support')}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography variant="body2" color="#fff">
              &copy; 2024 Pawclix. {t('footnote.allRightsReserved')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
