// src/pages/AddInfrastructure.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../middleware/config';
const AddInfrastructure = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState({ type: 'Point', coordinates: [0, 0] });
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [workingHours, setWorkingHours] = useState({
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
  });
  const [image, setImage] = useState('');

  useEffect(() => {
    // Fetch categories when the component mounts
    axios
      .get(`${BASE_URL}/categories`)
      .then((response) => setCategories(response.data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const infrastructureData = {
      category: selectedCategory,
      name,
      address,
      location,
      phone,
      email,
      website,
      workingHours,
      image,
    };

    axios
      .post(`${BASE_URL}/infrastructures`, infrastructureData)
      .then((response) => {
        alert('Infrastructure added successfully');
        // Optionally clear form or redirect
      })
      .catch((error) => console.error('Error adding infrastructure:', error));
  };

  return (
    <div>
      <h1>Add New Infrastructure</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <div>
          <label>Latitude:</label>
          <input
            type="number"
            value={location.coordinates[0]}
            onChange={(e) =>
              setLocation({
                ...location,
                coordinates: [parseFloat(e.target.value), location.coordinates[1]],
              })
            }
            required
          />
        </div>

        <div>
          <label>Longitude:</label>
          <input
            type="number"
            value={location.coordinates[1]}
            onChange={(e) =>
              setLocation({
                ...location,
                coordinates: [location.coordinates[0], parseFloat(e.target.value)],
              })
            }
            required
          />
        </div>

        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Website:</label>
          <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>

        <div>
          <label>Working Hours:</label>
          {Object.keys(workingHours).map((day) => (
            <div key={day}>
              <label>{day.charAt(0).toUpperCase() + day.slice(1)}:</label>
              <input
                type="text"
                value={workingHours[day]}
                onChange={(e) => setWorkingHours({ ...workingHours, [day]: e.target.value })}
              />
            </div>
          ))}
        </div>

        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>

        <button type="submit">Add Infrastructure</button>
      </form>
    </div>
  );
};

export default AddInfrastructure;
