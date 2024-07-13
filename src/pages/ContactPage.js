import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  Button,
  Grid,
  Paper,
  CardMedia,
  Link as MuiLink,
} from '@mui/material';

// Import React MUI Icons
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PetsIcon from '@mui/icons-material/Pets';

// Import SVG Images
import influencerImg from '../images/mobile_marketing_cuate.svg';
import socialImg from '../images/mobile_marketing_amico.svg';
import feedbackImg from '../images/customer_feedback_amico.svg';
import useFontSizes from '../utils/getFontSize';

// Import Variables
import { EMAIL, PHONE, COUNTRY, CITY, FACEBOOK, INSTAGRAM } from '../middleware/config';

const ContactPage = () => {
  const { getTypography } = useFontSizes();

  const handleLocationClick = () => {
    const locationQuery = `${COUNTRY}, ${CITY}`;
    const encodedLocationQuery = encodeURIComponent(locationQuery);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocationQuery}`;
    window.open(googleMapsUrl, '_blank');
  };

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
            Contact Us
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Typography
            variant="h2"
            sx={{ mb: 2 }}
            gutterBottom
            style={{
              textAlign: 'left',
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Partner With Us
          </Typography>

          <Typography variant="body1" paragraph style={{ textAlign: 'left' }}>
            Are you passionate about pets? Whether you're a vet, animal lover, or just want to share
            your knowledge, we're here for you!
          </Typography>

          <Typography variant="body1" paragraph style={{ textAlign: 'left' }}>
            Join us in our mission to reunite lost pets with their families and provide valuable
            resources to pet owners in need. Let's make a positive impact together!
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={influencerImg}
              alt="Influencer"
              style={{
                width: 'auto',
                maxHeight: '280px',
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
                href="https://storyset.com/business"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                Business illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} order={{ xs: 2, md: 1 }}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={socialImg}
              alt="Social apps"
              style={{
                width: 'auto',
                maxHeight: '280px',
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
                href="https://storyset.com/business"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                Business illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7} order={{ xs: 1, md: 2 }}>
          <Typography
            variant="h2"
            sx={{ mb: 2 }}
            gutterBottom
            style={{
              textAlign: 'right',
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Further Collaboration Opportunities
          </Typography>

          <Typography variant="body1" style={{ textAlign: 'right' }}>
            Additionally, we're open to exploring other collaboration opportunities including
            visionary branding, development partnerships, and more.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item mt={3} xs={12} sm={12} md={7} lg={7}>
          <Typography
            variant="h2"
            sx={{ mb: 2 }}
            gutterBottom
            style={{
              textAlign: 'left',
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Get In Touch
          </Typography>

          <Typography variant="body1" style={{ textAlign: 'left' }}>
            We value your feedback, inquiries, and suggestions. Whether you have a question about
            our services, want to provide feedback, or simply want to say hello, we’d love to hear
            from you.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }} style={{ textAlign: 'left' }}>
            Additionally, if you encounter any mistakes or errors on our platform or have concerns
            regarding the source of data or intellectual property rights, please feel free to
            contact us. If you have any other questions or feedback, we're here to assist you.
          </Typography>
          <Grid item mt={2} xs={12} sm={12} md={12} lg={12} textAlign="center">
            <Link to="/feedback">
              <Button
                type="submit"
                size="small"
                variant="contained"
                style={{ backgroundColor: '#ffc107', color: '#000' }}
              >
                Get In Touch
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={feedbackImg}
              alt="Feedabck"
              style={{
                width: 'auto',
                maxHeight: '280px',
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
                href="https://storyset.com/people"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                People illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} my={3} sm={12} md={12} lg={12} sx={{ paddingBottom: '1rem !important' }}>
          <Typography
            variant="h2"
            sx={{ mb: 2 }}
            style={{
              textAlign: 'center',
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
            gutterBottom
          >
            Policies & Community Guidelines
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
            Explore our policies and community guidelines to learn about how we collect and protect
            your data, community rules, and more. For detailed information, please refer to our
            links down below.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ paddingTop: '0 !important' }}>
          <List sx={{ paddingBottom: '0 !important' }}>
            <ListItem sx={{ paddingLeft: '0 !important' }}>
              <ListItemIcon sx={{ marginRight: '-20px' }}>
                <PetsIcon sx={{ color: '#ff6600' }} />
              </ListItemIcon>
              <Link to="/privacy-policy">
                <Typography
                  variant="h3"
                  style={{
                    textAlign: 'center',
                    fontSize: getTypography('h3').fontSize,
                    fontWeight: getTypography('h3').fontWeight,
                  }}
                >
                  Privacy Policy
                </Typography>
              </Link>
            </ListItem>
            <ListItem sx={{ paddingLeft: '0 !important' }}>
              <ListItemIcon sx={{ marginRight: '-20px' }}>
                <PetsIcon sx={{ color: '#ff6600' }} />
              </ListItemIcon>
              <Link to="/terms-of-service">
                <Typography
                  variant="h3"
                  style={{
                    textAlign: 'center',
                    fontSize: getTypography('h3').fontSize,
                    fontWeight: getTypography('h3').fontWeight,
                  }}
                >
                  Terms of Service
                </Typography>
              </Link>
            </ListItem>
            <ListItem sx={{ paddingLeft: '0 !important' }}>
              <ListItemIcon sx={{ marginRight: '-20px' }}>
                <PetsIcon sx={{ color: '#ff6600' }} />
              </ListItemIcon>
              <Link to="/cookie-policy">
                <Typography
                  variant="h3"
                  style={{
                    textAlign: 'center',
                    fontSize: getTypography('h3').fontSize,
                    fontWeight: getTypography('h3').fontWeight,
                  }}
                >
                  Cookie Policy
                </Typography>
              </Link>
            </ListItem>

            <ListItem sx={{ paddingLeft: '0 !important' }}>
              <ListItemIcon sx={{ marginRight: '-20px' }}>
                <PetsIcon sx={{ color: '#ff6600' }} />
              </ListItemIcon>
              <Link to="/data-protection-policy">
                <Typography
                  variant="h3"
                  style={{
                    textAlign: 'center',
                    fontSize: getTypography('h3').fontSize,
                    fontWeight: getTypography('h3').fontWeight,
                  }}
                >
                  Data Protection Policy
                </Typography>
              </Link>
            </ListItem>

            <ListItem sx={{ paddingLeft: '0 !important' }}>
              <ListItemIcon sx={{ marginRight: '-20px' }}>
                <PetsIcon sx={{ color: '#ff6600' }} />
              </ListItemIcon>
              <Link to="/disclaimer">
                <Typography
                  variant="h3"
                  style={{
                    textAlign: 'center',
                    fontSize: getTypography('h3').fontSize,
                    fontWeight: getTypography('h3').fontWeight,
                  }}
                >
                  Disclaimer
                </Typography>
              </Link>
            </ListItem>

            <ListItem sx={{ paddingLeft: '0 !important' }}>
              <ListItemIcon sx={{ marginRight: '-20px' }}>
                <PetsIcon sx={{ color: '#ff6600' }} />
              </ListItemIcon>

              <Link to="/community-guidelines">
                <Typography
                  variant="h3"
                  style={{
                    textAlign: 'center',
                    fontSize: getTypography('h3').fontSize,
                    fontWeight: getTypography('h3').fontWeight,
                  }}
                >
                  Community Guidelines
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography
          variant="h2"
          sx={{ mt: 4, mb: 2 }}
          style={{
            textAlign: 'center',
            fontSize: getTypography('h2').fontSize,
            fontWeight: getTypography('h2').fontWeight,
          }}
        >
          Social Media
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <MuiLink href={FACEBOOK} target="_blank" rel="noopener">
              <FacebookIcon fontSize="large" style={{ color: '#316FF6' }} />
            </MuiLink>
          </Grid>
          <Grid item>
            <MuiLink href={INSTAGRAM} target="_blank" rel="noopener">
              <InstagramIcon fontSize="large" style={{ color: '#DD2A7B' }} />
            </MuiLink>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{ mt: 4, mb: 2 }}
          gutterBottom
          style={{
            textAlign: 'center',
            fontSize: getTypography('h2').fontSize,
            fontWeight: getTypography('h2').fontWeight,
          }}
        >
          Contact Information
        </Typography>

        <Grid container spacing={2} sx={{ mb: 5 }} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '2rem 0', backgroundColor: '#F0F4F9' }}>
              <MailIcon fontSize="large" sx={{ color: '#ff6600' }} />
              <Box>
                <MuiLink href={`mailto:${EMAIL}`}>
                  <Typography variant="body1" sx={{ display: 'inline-block' }}>
                    Email: <strong>{EMAIL}</strong>
                  </Typography>
                </MuiLink>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '2rem 0', backgroundColor: '#F0F4F9' }}>
              <PhoneIcon fontSize="large" sx={{ color: '#ff6600' }} />
              <Box>
                <MuiLink href={`tel:${PHONE}`}>
                  <Typography variant="body1" sx={{ display: 'inline-block' }}>
                    Phone: <strong>{PHONE}</strong>
                  </Typography>
                </MuiLink>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{ padding: '2rem 0', backgroundColor: '#F0F4F9' }}
              onClick={handleLocationClick}
            >
              <LocationOnIcon fontSize="large" sx={{ color: '#ff6600' }} />
              <Box>
                <MuiLink href={`tel:${PHONE}`} onClick={handleLocationClick}>
                  <Typography variant="body1" sx={{ display: 'inline-block' }}>
                    Location:{' '}
                    <strong>
                      {COUNTRY}, {CITY}
                    </strong>
                  </Typography>
                </MuiLink>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ContactPage;
