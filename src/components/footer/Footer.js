// import React from "react";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: "#1976d2",
//         padding: "20px",
//         textAlign: "center",
//         marginTop: "auto",
//         width: "100%", // Ensure the footer takes full width
//         margin: 0, // Reset margin to remove any default spacing
//         background: "#1D1D1D !important",
//       }}
//     >
//       <Typography variant="body2" color="#fff">
//         &copy; 2024 Pawclix App. All rights reserved.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: "#1976d2",
        padding: '20px 0',
        textAlign: 'center',
        marginTop: 'auto',
        width: '100%', // Ensure the footer takes full width
        margin: 0, // Reset margin to remove any default spacing
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
            <Typography variant="h6" color="#ffc107" style={{ fontWeight: '500' }}>
              {t('footerTitles.app')}
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
                {t('footerLinks.about')}
              </Link>
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/pets" style={{ color: '#fff', textDecoration: 'none' }}>
                {t('footerLinks.pets')}
              </Link>
            </Typography>
            {/* <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link
                to="/pet-services"
                disabled
                style={{ color: 'darkgray', textDecoration: 'none' }}
              >
                {t('footerLinks.petServices')}
              </Link>
            </Typography> */}
            {/* <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link
                to="/virtual-pet-training-classes"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                {t('footerLinks.virtualPetTrainingClasses')}
              </Link>
            </Typography> */}
            {/* <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/pet-infrastructure" style={{ color: '#fff', textDecoration: 'none' }}>
                {t('footerLinks.petInfrastructure')}
              </Link>
            </Typography> */}

            {/* <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link
                to="/emergency-pet-alerts"
                style={{ color: 'darkgray', textDecoration: 'none' }}
              >
                {t('footerLinks.emergencyPetAlerts')}
              </Link>
            </Typography> */}
          </Grid>
          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffc107" style={{ fontWeight: '500' }}>
              {t('footerTitles.explore')}
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link
                to="/virtual-pet-training-classes"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                {t('footerLinks.virtualPetTrainingClasses')}
              </Link>
            </Typography>
            {/* <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/shelters" style={{ color: '#fff', textDecoration: 'none' }}>
                {t('footerLinks.adoptDoNotShop')}
              </Link>
            </Typography> */}
            {/* <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/articles" style={{ color: '#fff', textDecoration: 'none' }}>
                {t('footerLinks.petCareTips')}
              </Link>
            </Typography> */}
            {/* <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link
                to="/articles/how-to-find-a-lost-cat"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                {t('footerLinks.howToFindALostCat')}
              </Link>
            </Typography> */}
            {/* <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link
                to="/articles/how-to-find-a-lost-dog"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                {t('footerLinks.howToFindALostDog')}
              </Link>
            </Typography> */}
          </Grid>
          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffc107" style={{ fontWeight: '500' }}>
              {t('footerTitles.policiesAndGuidelines')}
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>
                {/* Privacy Policy */} {t('footerLinks.privacyPolicy')}
              </Link>
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/terms-of-service" style={{ color: '#fff', textDecoration: 'none' }}>
                {/* Terms of Service */} {t('footerLinks.termsOfService')}
              </Link>
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/cookie-policy" style={{ color: '#fff', textDecoration: 'none' }}>
                {/* Cookie Policy */} {t('footerLinks.cookiePolicy')}
              </Link>
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/data-protection-policy" style={{ color: '#fff', textDecoration: 'none' }}>
                {/* Data Protection Policy */} {t('footerLinks.dataProtectionPolicy')}
              </Link>
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/disclaimer" style={{ color: '#fff', textDecoration: 'none' }}>
                {/* Disclaimer */} {t('footerLinks.disclaimer')}
              </Link>
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/community-guidelines" style={{ color: '#fff', textDecoration: 'none' }}>
                {/* Community Guidelines */} {t('footerLinks.communityGuidelines')}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffc107" style={{ fontWeight: '500' }}>
              {t('footerTitles.information')}
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
                {/* Contact  */} {t('footerLinks.contact')}
              </Link>
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/feedback" style={{ color: '#fff', textDecoration: 'none' }}>
                {/* Feedback */} {t('footerLinks.feedback')}
              </Link>
            </Typography>
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/support" style={{ color: '#fff', textDecoration: 'none' }}>
                {/* Support */} {t('footerLinks.support')}
              </Link>
            </Typography>
            {/* <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link
                to="/sponsors-and-partners#partners"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                {t('footerLinks.partners')}
              </Link>
            </Typography> */}
            <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
                {/* Social Media */} {t('footerLinks.socialMedia')}
              </Link>
            </Typography>
            {/* <Typography variant="body1" color="#fff" style={{ fontWeight: '300' }}>
              <Link
                to="/sponsors-and-partners#sponsors"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
               {t('footerLinks.sponsors')}
              </Link>
            </Typography> */}
          </Grid>
        </Grid>
      </Container>
      {/* <Typography gutterBottom variant="body2" color="#adb5bd" style={{ fontSize: '0.8rem' }}>
        {t('footerNote.supportText')} -{' '}
        <Link
          to="/support"
          style={{
            color: '#ffc107',
            fontWeight: '500',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          {t('footerLinks.support')}
        </Link>
      </Typography> */}

      <Typography variant="body2" color="#fff">
        &copy; 2024 Pawclix. {t('footerNote.allRightsReserved')}
      </Typography>
    </Box>
  );
};

export default Footer;
