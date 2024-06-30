// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   Avatar,
//   Chip,
//   CircularProgress,
//   Container,
// } from '@mui/material';

// const ArticleDetailsPage = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await axios.get(`/api/articles/${id}`);
//         setArticle(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching article');
//         setLoading(false);
//       }
//     };

//     fetchArticle();
//   }, [id]);

//   if (loading) {
//     return (
//       <Container style={{ textAlign: 'center', marginTop: '20px' }}>
//         <CircularProgress />
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container style={{ textAlign: 'center', marginTop: '20px' }}>
//         <Typography variant="h6" color="error">
//           {error}
//         </Typography>
//       </Container>
//     );
//   }

//   if (!article) {
//     return null;
//   }

//   return (
//     <Box sx={{ flexGrow: 1, padding: 3 }}>
//       <Grid container spacing={3}>
//         <Box sx={{ flexGrow: 1, padding: 3 }}>
//           <Box sx={{ marginBottom: 4 }}>
//             <Typography variant="h3" component="h1" gutterBottom>
//               {article.title}
//             </Typography>
//             <Box display="flex" alignItems="center" mb={2}>
//               <Avatar
//                 sx={{ width: 56, height: 56 }}
//                 src="https://via.placeholder.com/150"
//                 alt={article.author || 'Author'}
//               />
//               <Box ml={2}>
//                 <Typography variant="h6">{article.author || 'Unknown Author'}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Published on: {new Date(article.createdAt).toLocaleDateString()}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Source: <a href={article.source || '#'}>{article.source || 'Unknown Source'}</a>
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>

//           <Grid container spacing={3}>
//             {article.sections.map((section, index) => (
//               <Grid item xs={12} md={8} key={index}>
//                 <Card>
//                   <CardMedia
//                     sx={{ height: 400 }}
//                     image={section.picture || 'https://via.placeholder.com/800x400'}
//                     title={section.title}
//                   />
//                   <CardContent>
//                     <Typography variant="h4" component="h2" gutterBottom>
//                       {section.number}. {section.title}
//                     </Typography>
//                     <Typography variant="body1" color="textSecondary" paragraph>
//                       <span dangerouslySetInnerHTML={{ __html: section.text }} />
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Grid>
//     </Box>
//   );
// };

// export default ArticleDetailsPage;
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   Avatar,
//   Chip,
//   CircularProgress,
//   Container,
// } from '@mui/material';

// const ArticleDetailsPage = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await axios.get(`/api/articles/${id}`);
//         setArticle(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching article');
//         setLoading(false);
//       }
//     };

//     fetchArticle();
//   }, [id]);

//   if (loading) {
//     return (
//       <Container style={{ textAlign: 'center', marginTop: '20px' }}>
//         <CircularProgress />
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container style={{ textAlign: 'center', marginTop: '20px' }}>
//         <Typography variant="h6" color="error">
//           {error}
//         </Typography>
//       </Container>
//     );
//   }

//   if (!article) {
//     return null;
//   }

//   return (
//     <Box sx={{ flexGrow: 1, padding: 3 }}>
//       <Grid container spacing={3}>
//         <Box sx={{ flexGrow: 1, padding: 3 }}>
//           <Box sx={{ marginBottom: 4 }}>
//             <Typography variant="h3" component="h1" gutterBottom>
//               {article.title}
//             </Typography>
//             <Box display="flex" alignItems="center" mb={2}>
//               <Avatar
//                 sx={{ width: 56, height: 56 }}
//                 src="https://via.placeholder.com/150"
//                 alt={article.author || 'Author'}
//               />
//               <Box ml={2}>
//                 <Typography variant="h6">{article.author || 'Unknown Author'}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Published on: {new Date(article.createdAt).toLocaleDateString()}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Source: <a href={article.source || '#'}>{article.source || 'Unknown Source'}</a>
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>

//           {/* <Grid container spacing={3}>
//             {article.sections.map((section, index) => (
//               <Grid item xs={12} md={8} key={index}>
//                 <Card>
//                   <CardMedia
//                     sx={{ height: 400 }}
//                     image={section.picture || 'https://via.placeholder.com/800x400'}
//                     title={section.title}
//                   />
//                   <CardContent>
//                     <Typography variant="h4" component="h2" gutterBottom>
//                       {section.number}. {section.title}
//                     </Typography>
//                     {section.paragraphs?.map((paragraph, i) => (
//                       <Typography variant="body1" color="textSecondary" paragraph key={i}>
//                         {paragraph}
//                       </Typography>
//                     ))}
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid> */}
//         </Box>
//       </Grid>
//     </Box>
//   );
// };

// export default ArticleDetailsPage;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  ListItem,
  List,
  CircularProgress,
  Container,
} from '@mui/material';
import avatarImg from '../images/paw.png';
import { Link as ScrollLink, Element } from 'react-scroll';

const ArticleDetailsPage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/articles/${slug}`);
        setArticle(response.data);
      } catch (err) {
        setError('Error fetching article');
        console.error(err); // Detailed error logging
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <Container style={{ textAlign: 'center', marginTop: '20px' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Box>
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {article.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              {article.content}
            </Typography>
            {/* <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                src={avatarImg}
                alt={article.author || 'Author'}
              />
              <Box ml={2}>
                <Typography variant="h6">{article.author || 'Unknown Author'}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Published on: {new Date(article.createdAt).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Source: <a href={article.source || '#'}>{article.source || 'Unknown Source'}</a>
                </Typography>
              </Box>
            </Box> */}
          </Box>

          <Grid container spacing={3}>
            {article.sections.map((section, index) => (
              <Grid item key={section._id} id={section.number}>
                <Element key={section._id} name={`section-${section.number}`}>
                  <Card>
                    <CardMedia
                      sx={{ height: 400 }}
                      image={section.picture || 'https://via.placeholder.com/800x400'}
                      title={section.title}
                    />
                    <CardContent>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {section.number}. {section.title}
                      </Typography>
                      {section.paragraphs?.map((paragraph, i) => (
                        <Typography variant="body1" color="textSecondary" paragraph key={i}>
                          {paragraph}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </Element>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box
          display="flex"
          alignItems="center"
          mb={2}
          style={{ backgroundColor: 'rgba(0,0,0,0.05)', padding: '1rem', borderRadius: '5px' }}
        >
          <Avatar sx={{ width: 42, height: 42 }} src={avatarImg} alt={article.author || 'Author'} />
          <Box ml={2}>
            <Typography variant="h6">{article.author || 'Unknown Author'}</Typography>
            <Typography variant="body2" color="textSecondary">
              Published on: {new Date(article.createdAt).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Source: <a href={article.source || '#'}>{article.source || 'Unknown Source'}</a>
            </Typography>
          </Box>
        </Box>
        <Typography variant="h5">Quick Navigation</Typography>
        {article.sections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <List>
              <ScrollLink
                to={`section-${section.number}`}
                smooth={true}
                duration={500}
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <ListItem style={{ padding: '0', margin: '0' }}>
                  <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                    {section.number}. {section.title}
                  </Typography>
                </ListItem>
              </ScrollLink>
            </List>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ArticleDetailsPage;
