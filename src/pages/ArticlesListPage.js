// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ArticlesListPage = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get('/api/articles');
//         setArticles(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching articles');
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h2>Articles List</h2>
//       {articles.length === 0 ? (
//         <div>No articles found</div>
//       ) : (
//         <ul>
//           {articles.map((article) => (
//             <li key={article._id}>
//               <h3>{article.title}</h3>
//               <p>{article.content}</p>
//               <p>Author: {article.author}</p>
//               <p>Source: {article.source}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ArticlesListPage;
import React, { useEffect, useState } from 'react';
import { Link as MuiLink } from '@mui/material';
import axios from 'axios';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';

const ArticlesListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/articles');
        setArticles(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching articles');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Pet Care Tips and Advice
      </Typography>
      <Grid container spacing={4}>
        {articles.length === 0 ? (
          <Typography variant="h6" style={{ margin: 'auto' }}>
            No articles found
          </Typography>
        ) : (
          articles.map((article) => (
            <Grid item key={article._id} xs={12} sm={6} md={4}>
              <Link
                to={`/articles/${article.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={article.sections[0]?.picture || 'https://via.placeholder.com/150'}
                    alt={article.title}
                  />

                  <CardContent>
                    <Typography variant="h5" component="div">
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {article.content.substring(0, 100)}...
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default ArticlesListPage;
