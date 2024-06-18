import React from 'react';
import { Container, Typography, Card, CardContent, Avatar, Grid, Box, Link } from '@mui/material';

const posts = [
  {
    id: 1,
    petName: 'Fluffy',
    petImage:
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Missing',
    date: '2024-06-10',
  },
  {
    id: 2,
    petName: 'Buddy',
    petImage:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Found',
    date: '2024-05-22',
  },
  // Add more posts as needed
];

function ProfilePostsPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Pet Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={post.petImage}
                    alt={post.petName}
                    sx={{ width: 64, height: 64, marginRight: 2 }}
                  />
                  <Box flexGrow={1}>
                    <Typography variant="h6">
                      <Link href={`/post/${post.id}`} underline="none">
                        {post.petName}
                      </Link>
                    </Typography>
                    <Typography color="textSecondary">{post.status}</Typography>
                  </Box>
                  <Typography color="textSecondary">{post.date}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProfilePostsPage;
