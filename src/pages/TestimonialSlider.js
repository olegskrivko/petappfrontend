// src/components/TestimonialSlider.js
import React from 'react';
import Slider from 'react-slick';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const testimonials = [
  {
    text: 'PawClix has truly been a lifesaver. Thanks to their efficient system, I was able to find my lost dog in just a few days. Highly recommend!',
    author: 'Alice Johnson',
    date: new Date('2024-07-10'),
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg', // Use a real avatar URL or image
  },
  {
    text: 'The user-friendly interface and quick response from the PawClix team helped us reunite with our cat so quickly. Fantastic service!',
    author: 'Michael Smith',
    date: new Date('2024-06-25'),
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg', // Use a real avatar URL or image
  },
  {
    text: 'I was impressed by the support and resources available on PawClix. It made the whole process of finding our pet much easier. Great app!',
    author: 'Jessica Lee',
    date: new Date('2024-05-15'),
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg', // Use a real avatar URL or image
  },
];

const CustomAvatar = styled(Avatar)({
  width: 50,
  height: 50,
});

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',

        mt: 5,
        mb: 5,
      }}
    >
      {/* <Typography variant="h4" gutterBottom>
        What Our Users Say
      </Typography> */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ p: 3 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <CustomAvatar src={testimonial.avatar} alt={testimonial.author} />
              <Box ml={2}>
                <Typography variant="body2" color="textSecondary">
                  {formatDistanceToNow(testimonial.date, { addSuffix: true })}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {testimonial.author}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" fontStyle="italic">
              “{testimonial.text}”
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialSlider;
