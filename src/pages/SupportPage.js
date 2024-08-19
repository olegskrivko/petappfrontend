// import React, { useState } from 'react';
// // Import React MUI Components
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import { Button } from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';
// import { Link as MuiLink } from '@mui/material';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// // Import Custom hook
// import useFontSizes from '../utils/getFontSize';

// // Import SVG Images
// import SupportImg from '../images/cat_stronaut_cuate.svg';

// function SupportPage() {
//   const handleCopyUrl = () => {
//     navigator.clipboard.writeText('https://www.yourwebsite.com').then(
//       () => setCopySuccess('URL copied!'),
//       (err) => setCopySuccess('Failed to copy URL'),
//     );
//   };
//   const { getTypography } = useFontSizes();
//   const creditLink = 'https://storyset.com/business';
//   const credit = 'Business illustrations by Storyset';
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const [copySuccess, setCopySuccess] = useState('');
//   return (
//     <React.Fragment>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <Typography
//             variant="h1"
//             textAlign="center"
//             sx={{ mb: 3 }}
//             gutterBottom
//             style={{
//               fontSize: getTypography('h1').fontSize,
//               fontWeight: getTypography('h1').fontWeight,
//             }}
//           >
//             Support Our Project
//           </Typography>
//         </Grid>
//       </Grid>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={12} md={6} lg={6} textAlign="left">
//           <Box
//             position="relative"
//             display="flex"
//             flexDirection="column"
//             justifyContent="center"
//             alignItems="center"
//           >
//             {/* Banner Image */}
//             <CardMedia
//               component="img"
//               src={SupportImg}
//               alt="Helping a partner"
//               style={{
//                 width: isLargeScreen ? '400px' : '100%',
//                 maxHeight: isLargeScreen ? '100%' : '60vh', // Adjust height for large screens
//                 objectFit: 'cover',
//               }}
//             />
//             <Box
//               style={{
//                 marginTop: '0.5rem',
//                 display: 'flex',
//                 alignItems: 'center',
//               }}
//             >
//               <MuiLink
//                 href={creditLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   fontSize: '0.6rem',
//                   fontStyle: 'italic',
//                   color: '#999',
//                   fontWeight: '300',
//                 }}
//               >
//                 {credit}
//               </MuiLink>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={6} lg={6} textAlign="justify">
//           <Typography variant="body1" paragraph>
//             We are grateful for any support or sponsorship that can help us unlock the full
//             potential of our web application. If you share our vision and would like to contribute
//             towards the cost of utilizing premium tiers and services, please reach out to us.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Your support will enable us to enhance our app and provide an even better experience for
//             our users.
//           </Typography>
//           <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center" mt={3}>
//             <Button
//               style={{ backgroundColor: '#ffcb56', color: '#000' }}
//               onClick={() =>
//                 (window.location.href =
//                   'https://www.paypal.com/donate/?hosted_button_id=7X42GYG39BMSG')
//               }
//             >
//               Donate
//             </Button>
//           </Grid>
//           <Typography variant="body1" paragraph>
//             You can also support our project by simply sharing our web app with friends and fellow
//             pet owners. Spread the word on social media or tell your friends about it. It’s a
//             cost-free way to help us grow and reach more people who could benefit from our service.
//           </Typography>

//           <Box mt={2} p={2} border={1} borderColor="grey.400" borderRadius={2} textAlign="center">
//             <Typography variant="body1">Share this link with others:</Typography>
//             <TextField
//               fullWidth
//               value="https://www.yourwebsite.com"
//               variant="outlined"
//               InputProps={{
//                 readOnly: true,
//                 endAdornment: (
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleCopyUrl}
//                     style={{ marginLeft: '1rem' }}
//                   >
//                     Copy
//                   </Button>
//                 ),
//               }}
//               style={{ marginTop: '1rem' }}
//             />
//             {copySuccess && (
//               <Typography variant="body2" color="success.main" mt={1}>
//                 {copySuccess}
//               </Typography>
//             )}
//           </Box>
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default SupportPage;
import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, IconButton, TextField } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Link as MuiLink } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import MUI Icons
import CopyAllIcon from '@mui/icons-material/CopyAll';
import { useTranslation } from 'react-i18next';
// Import Custom hook
import useFontSizes from '../utils/getFontSize';
import { DOMAIN_URL } from '../middleware/config';
// Import SVG Images
import SupportImg from '../images/cat_stronaut_cuate.svg';

function SupportPage() {
  const { t } = useTranslation('supportPage'); // Initialize translation hook
  const { getTypography } = useFontSizes();
  const creditLink = 'https://storyset.com/business';
  const credit = 'Business illustrations by Storyset';
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCopyUrl = () => {
    navigator.clipboard.writeText('https://www.yourwebsite.com').then(
      () => {
        toast.success('URL copied to clipboard!');
      },
      (err) => {
        toast.error('Failed to copy URL');
      },
    );
  };

  return (
    <React.Fragment>
      <ToastContainer />

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
        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="left">
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {/* Banner Image */}
            <CardMedia
              component="img"
              src={SupportImg}
              alt="Helping a partner"
              style={{
                width: isLargeScreen ? '400px' : '100%',
                maxHeight: isLargeScreen ? '100%' : '60vh', // Adjust height for large screens
                objectFit: 'cover',
              }}
            />
            <Box
              style={{
                marginTop: '0.5rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <MuiLink
                href={creditLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                {credit}
              </MuiLink>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="justify">
          <Typography variant="body1" paragraph>
            {t('description1')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('description2')}
          </Typography>
          <Grid item mt={2} xs={12} sm={12} md={12} lg={12} textAlign="center" my={3}>
            <Link to="/feedback">
              <Button
                type="submit"
                size="small"
                variant="contained"
                style={{ backgroundColor: '#ffcb56', color: '#000' }}
              >
                {t('button.getInTouch')}
              </Button>
            </Link>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center" my={3}>
            <Button
              style={{ backgroundColor: '#ffcb56', color: '#000' }}
              onClick={() =>
                (window.location.href =
                  'https://www.paypal.com/donate/?hosted_button_id=7X42GYG39BMSG')
              }
            >
              {t('supportPage.button')}
            </Button>
          </Grid> */}
          <Typography variant="body1" paragraph>
            {t('description3')}
          </Typography>

          {/* Shareable URL Box */}
          {/* Shareable URL Box */}

          <Typography variant="body1" paragraph>
            {t('label')}
          </Typography>
          <Box display="flex" alignItems="center" sx={{ color: 'orange !important' }}>
            <TextField
              fullWidth
              value={DOMAIN_URL}
              variant="outlined"
              InputProps={{
                readOnly: true,

                endAdornment: (
                  <IconButton onClick={handleCopyUrl} color="primary">
                    <CopyAllIcon />
                  </IconButton>
                ),
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SupportPage;
