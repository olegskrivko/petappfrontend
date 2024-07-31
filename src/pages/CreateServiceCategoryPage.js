import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../middleware/config'; // Adjust the path as necessary

function CreateServiceCategoryPage() {
  const [category, setCategory] = useState({
    value: '',
    name: {
      en: '',
      ru: '',
      lv: '',
    },
    description: {
      en: '',
      ru: '',
      lv: '',
    },
    tags: {
      en: [],
      ru: [],
      lv: [],
    },
    image: '',
    isActive: true,
    priority: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNameChange = (lang, value) => {
    setCategory((prev) => ({
      ...prev,
      name: {
        ...prev.name,
        [lang]: value,
      },
    }));
  };

  const handleDescriptionChange = (lang, value) => {
    setCategory((prev) => ({
      ...prev,
      description: {
        ...prev.description,
        [lang]: value,
      },
    }));
  };

  const handleTagChange = (lang, tags) => {
    setCategory((prev) => ({
      ...prev,
      tags: {
        ...prev.tags,
        [lang]: tags,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Or wherever you store the JWT token

    try {
      await axios.post(`${BASE_URL}/service-categories/`, category, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Service category created successfully!');
    } catch (error) {
      console.error('Error creating service category:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create Service Category
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="value"
          label="Value"
          type="number"
          value={category.value}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Typography variant="h6" gutterBottom>
          Names
        </Typography>
        <Grid container spacing={2}>
          {['en', 'ru', 'lv'].map((lang) => (
            <Grid item xs={12} sm={4} key={lang}>
              <TextField
                name={`name.${lang}`}
                label={`Name (${lang.toUpperCase()})`}
                value={category.name[lang]}
                onChange={(e) => handleNameChange(lang, e.target.value)}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" gutterBottom>
          Descriptions
        </Typography>
        <Grid container spacing={2}>
          {['en', 'ru', 'lv'].map((lang) => (
            <Grid item xs={12} sm={4} key={lang}>
              <TextField
                name={`description.${lang}`}
                label={`Description (${lang.toUpperCase()})`}
                value={category.description[lang]}
                onChange={(e) => handleDescriptionChange(lang, e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" gutterBottom>
          Tags
        </Typography>
        <Grid container spacing={2}>
          {['en', 'ru', 'lv'].map((lang) => (
            <Grid item xs={12} sm={4} key={lang}>
              <TextField
                name={`tags.${lang}`}
                label={`Tags (${lang.toUpperCase()})`}
                value={category.tags[lang].join(', ')}
                onChange={(e) =>
                  handleTagChange(
                    lang,
                    e.target.value.split(',').map((tag) => tag.trim()),
                  )
                }
                fullWidth
                margin="normal"
                required
              />
            </Grid>
          ))}
        </Grid>
        <TextField
          name="image"
          label="Image URL"
          value={category.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="priority"
          label="Priority"
          type="number"
          value={category.priority}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="isActive"
          label="Active"
          type="checkbox"
          checked={category.isActive}
          onChange={() => setCategory((prev) => ({ ...prev, isActive: !prev.isActive }))}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default CreateServiceCategoryPage;
