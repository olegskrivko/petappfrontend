import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('http://localhost:5000/api/pets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { url } = res.data;
      setUploadedFile({ url });
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" onChange={onChange} />
          <label>{filename}</label>
        </div>
        <input type="submit" value="Upload" />
      </form>
      {uploadedFile.url ? (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={uploadedFile.url} alt="Uploaded" />
        </div>
      ) : null}
    </div>
  );
};

export default Upload;
