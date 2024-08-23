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
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Container,
  List,
  ListItem,
} from '@mui/material';
import { Link as ScrollLink, Element } from 'react-scroll';
import { BASE_URL } from '../middleware/config';
import { LanguageContext } from '../middleware/LanguageContext';
import useFontSizes from '../utils/getFontSize';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
const ArticleDetailsPage = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const { getTypography } = useFontSizes();
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/articles/${id}`);
        setArticle(response.data);
      } catch (err) {
        setError('Error fetching article');
        console.error(err); // Detailed error logging
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

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
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} order={{ xs: 2, sm: 1 }}>
          <Box>
            {/* <Card> */}
            {/* <CardMedia
              sx={{ height: 400 }}
              image={article.coverPicture || 'https://via.placeholder.com/800x400'}
              title={article.mainTitle[selectedLanguage] || 'Cover Image'}
            /> */}
            {/* <CardContent> */}
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
              {article.mainTitle[selectedLanguage]}
            </Typography>

            <Typography variant="body1" color="textSecondary" paragraph>
              {article.description[selectedLanguage]}
            </Typography>
            {/* </CardContent>
            </Card> */}

            <Box sx={{ mt: 4 }}>
              {article.sections.map((section) => (
                <Box key={section._id} id={`section-${section.number}`} sx={{ mb: 4 }}>
                  <Element name={`section-${section.number}`}>
                    <Card>
                      <CardMedia
                        sx={{ height: 400 }}
                        image={section.picture || 'https://via.placeholder.com/800x400'}
                        title={section.title[selectedLanguage]}
                      />
                      <CardContent>
                        <Typography
                          variant="h2"
                          textAlign="left"
                          sx={{ mb: 3 }}
                          gutterBottom
                          style={{
                            fontSize: getTypography('h2').fontSize,
                            fontWeight: getTypography('h2').fontWeight,
                          }}
                        >
                          {section.number}. {section.title[selectedLanguage]}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" paragraph>
                          {section.content[selectedLanguage]}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Element>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} order={{ xs: 1, sm: 2 }}>
          <Box>
            <Typography
              variant="h2"
              textAlign="left"
              sx={{ mb: 3 }}
              gutterBottom
              style={{
                fontSize: getTypography('h2').fontSize,
                fontWeight: getTypography('h2').fontWeight,
              }}
            >
              Quick Navigation
            </Typography>
            <List>
              {article.sections.map((section) => (
                <ListItem key={section._id}>
                  <ScrollLink
                    to={`section-${section.number}`}
                    smooth={true}
                    duration={500}
                    style={{
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <Typography
                      variant="h3"
                      textAlign="left"
                      sx={{ mb: 1 }}
                      gutterBottom
                      style={{
                        fontSize: getTypography('h3').fontSize,
                        fontWeight: getTypography('h3').fontWeight,
                      }}
                    >
                      {section.number}. {section.title[selectedLanguage]}
                    </Typography>
                  </ScrollLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} order={{ xs: 2, sm: 1 }}>
          <Box>
            {/* <Card>
              <CardContent> */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2, // Margin below the icon and title
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40, // Adjust the size of the circle
                  height: 40, // Adjust the size of the circle
                  borderRadius: '50%',
                  backgroundColor: '#22badf', // Light green background
                  // #97ba78
                  mr: 2, // Margin right to space from the title
                }}
              >
                <TipsAndUpdatesIcon sx={{ color: 'white' }} />
              </Box>
              <Typography
                variant="h2"
                textAlign="left"
                gutterBottom
                style={{
                  fontSize: getTypography('h2').fontSize,
                  fontWeight: getTypography('h2').fontWeight,
                }}
              >
                Tips
              </Typography>
            </Box>
            <Box
              component="ul"
              sx={{ paddingLeft: 2 }} // Indentation for the list
            >
              {article.notes[selectedLanguage]?.map((note, index) => (
                <Typography
                  component="li"
                  key={index}
                  variant="body1"
                  color="textSecondary"
                  paragraph
                >
                  {note}
                </Typography>
              ))}
            </Box>
            {/* </CardContent>
            </Card> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ArticleDetailsPage;
