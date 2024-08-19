import React, { useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, TextField, MenuItem, CardMedia, Link as MuiLink } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FeedbackImg from '../images/customer_feedback_amico.svg';
import { BASE_URL } from '../middleware/config';
import useFontSizes from '../utils/getFontSize';
import { useTranslation } from 'react-i18next';

function FeedbackPage() {
  // const { t } = useTranslation(['selectOptions', 'feedbackPage']); // Initialize translation hook

  const { t: tSelectOptions } = useTranslation('selectOptions');
  const { t: tFeedbackPage } = useTranslation('feedbackPage');

  const { getTypography } = useFontSizes();
  const creditLink = 'https://storyset.com/people';
  const credit = 'People illustrations by Storyset';
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [subject, setSubject] = useState('1');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = email ? '' : 'Email is required.';
    tempErrors.message = message ? '' : 'Message is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/utilities/send-feedback`, {
        subject,
        email,
        message,
      });
      setLoading(false);
      toast.success('Feedback submitted successfully!');
      setEmail('');
      setMessage('');
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // Server responded with a status other than 200 range
        toast.error(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        // Request was made but no response received
        toast.error('Network error, please try again later.');
      } else {
        // Something else caused the error
        toast.error('Error sending feedback, please try again later.');
      }
      console.error('Error sending feedback:', error);
    }
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
            {tFeedbackPage('title')}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={FeedbackImg}
              alt="A visual representation of user reactions with thumbs-up images"
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
        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="left">
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                select
                label={tFeedbackPage('labels.subject')}
                fullWidth
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                {/* {subjects.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))} */}

                {tSelectOptions('selectOptions.subjectsOptions', { returnObjects: true }).map(
                  (option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ),
                )}
              </TextField>
            </Box>
            <Box mb={2}>
              <TextField
                label={tFeedbackPage('labels.email')}
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label={tFeedbackPage('labels.message')}
                multiline
                fullWidth
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={!!errors.message}
                helperText={errors.message}
              />
            </Box>
            <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
              <Button
                type="submit"
                size="small"
                variant="contained"
                style={{ backgroundColor: '#ffcb56', color: '#000' }}
                disabled={loading}
              >
                {loading ? 'Submitting...' : tFeedbackPage('button')}
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <ToastContainer position="top-right" autoClose={3000} />
    </React.Fragment>
  );
}

export default FeedbackPage;
