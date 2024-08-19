import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
// Import Custom hook
import useFontSizes from '../utils/getFontSize';

// const trainingTips = [
//   {
//     title: 'title1',
//     description: 'description1',
//   },
//   {
//     title: 'Use Positive Reinforcement',
//     description:
//       'Reward your pet with treats, praise, or playtime when they exhibit desired behaviors. Positive reinforcement encourages them to repeat those behaviors.',
//   },
//   {
//     title: 'Be Consistent',
//     description:
//       'Consistency is key to successful training. Use the same cues and rewards consistently so your pet learns what is expected of them.',
//   },
//   {
//     title: 'Keep Training Sessions Short and Positive',
//     description:
//       'Pets have short attention spans, so keep training sessions brief (around 10-15 minutes) and upbeat. End on a positive note to keep them engaged and eager for the next session.',
//   },
//   {
//     title: 'Patience is Vital',
//     description:
//       'Understand that training takes time and patience. Avoid getting frustrated if progress is slow. Each pet learns at their own pace.',
//   },
//   {
//     title: "Understand Your Pet's Breed and Personality",
//     description:
//       "Different breeds have different temperaments and behaviors. Tailor your training approach to suit your pet's specific needs and personality.",
//   },
//   {
//     title: 'Socialization is Key',
//     description:
//       'Expose your pet to various environments, people, and animals from a young age. Proper socialization helps prevent behavioral issues and builds confidence.',
//   },
//   {
//     title: 'Seek Professional Help if Needed',
//     description:
//       "If you're struggling with training or encountering behavioral issues you can't resolve, don't hesitate to seek guidance from a professional trainer or behaviorist.",
//   },
//   {
//     title: 'Stay Calm and Positive',
//     description:
//       'Pets can sense your emotions, so remain calm and patient during training sessions. Your positive attitude will help create a positive learning environment.',
//   },
//   {
//     title: 'Enjoy the Process',
//     description:
//       'Training your pet should be a fun and bonding experience for both of you. Celebrate each milestone and enjoy watching your pet grow and learn.',
//   },
// ];

function VirtualPetTrainingClasses() {
  const { t } = useTranslation('virtualPetTrainingClassesPage');
  const { getTypography } = useFontSizes();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const trainingTips = t('tips', { returnObjects: true });
  const videos = [
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 1: how to teach your dog to sit and drop',
      src: 'https://www.youtube.com/embed/NFSkzAuCjcI',
    },
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 2: how to teach your dog to touch or target',
      src: 'https://www.youtube.com/embed/VJczka-U0D8?list=PLkvsL5zUVV5FJhwRnWXfAF96ss2vvltJ1', // Replace with actual video URL
    },
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 3: how to teach your dog to walk on a loose lead',
      src: 'https://www.youtube.com/embed/Ya72yz1X40g?list=PLkvsL5zUVV5FJhwRnWXfAF96ss2vvltJ1', // Replace with actual video URL
    },
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 4: how to teach your dog to come or recall',
      src: 'https://www.youtube.com/embed/CUbZ6refFKA?list=PLkvsL5zUVV5FJhwRnWXfAF96ss2vvltJ1', // Replace with actual video URL
    },
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 5: how to teach your dog to wait',
      src: 'https://www.youtube.com/embed/jnKxnUvlZcU?list=PLkvsL5zUVV5FJhwRnWXfAF96ss2vvltJ1', // Replace with actual video URL
    },
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 6: how to teach your dog tricks',
      src: 'https://www.youtube.com/embed/7qW2OU8n9ZM?list=PLkvsL5zUVV5FJhwRnWXfAF96ss2vvltJ1', // Replace with actual video URL
    },
  ];

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
          <Typography variant="body1" sx={{ mb: 3 }} gutterBottom>
            {t('description1')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }} gutterBottom>
            {t('description2')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }} gutterBottom>
            {t('description3')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {videos.map((video, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 800, boxShadow: 5, borderRadius: 2 }}>
              <CardMedia
                component="div"
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                }}
              >
                <iframe
                  src={video.src}
                  title={t('{title}')}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  variant="h3"
                  gutterBottom
                  style={{
                    fontSize: getTypography('h3').fontSize,
                    fontWeight: getTypography('h3').fontWeight,
                  }}
                >
                  {video.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{
                    fontSize: getTypography('body2').fontSize,
                    fontWeight: getTypography('body2').fontWeight,
                  }}
                >
                  Author: RSPCA South Australia
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 3, mt: 5 }}
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('title1')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {/* <Grid container spacing={3}>
            {trainingTips.map((tip, index) => (
              <Grid item xs={12} key={index}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                  >
                    <Typography
                      variant="h3"
                      style={{
                        fontSize: getTypography('h3').fontSize,
                        fontWeight: getTypography('h3').fontWeight,
                      }}
                    >
                      {tip.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">{tip.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid> */}
          <Grid container spacing={3}>
            {trainingTips.map((tip, index) => (
              <Grid item key={index} xs={12}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography
                      variant="h3"
                      style={{
                        fontSize: getTypography('h3').fontSize,
                        fontWeight: getTypography('h3').fontWeight,
                      }}
                    >
                      {tip[`title${index + 1}`]}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">{tip[`description${index + 1}`]}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default VirtualPetTrainingClasses;
