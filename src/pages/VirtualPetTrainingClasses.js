import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function VirtualPetTrainingClasses() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
        <Grid item xs={12}>
          <Typography
            variant="h4"
            textAlign="center"
            style={{
              fontSize: isSmallScreen ? '1.2rem' : '2rem',
              marginBottom: isSmallScreen ? '1.6rem' : '2rem',
              marginTop: isSmallScreen ? '0.4rem' : '1rem',
            }}
            gutterBottom
          >
            Virtual Pet Training Classes
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
                  title={video.title}
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
                <Typography variant="h6" gutterBottom style={{ fontSize: '1rem' }}>
                  {video.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Learn how to train your dog with our free video series.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default VirtualPetTrainingClasses;
