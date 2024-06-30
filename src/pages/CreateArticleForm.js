// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../middleware/config';

// const CreateArticleForm = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [author, setAuthor] = useState('');
//   const [source, setSource] = useState('');
//   const [sections, setSections] = useState([{ picture: '', title: '', number: 0, text: '' }]);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSectionChange = (index, field, value) => {
//     const newSections = sections.slice();
//     newSections[index][field] = value;
//     setSections(newSections);
//   };

//   const handleAddSection = () => {
//     setSections([...sections, { picture: '', title: '', number: sections.length + 1, text: '' }]);
//   };

//   const handleRemoveSection = (index) => {
//     setSections(sections.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`${BASE_URL}/articles`, {
//         title,
//         content,
//         author,
//         source,
//         sections,
//       });

//       setSuccess('Article created successfully');
//       setError('');
//       setTitle('');
//       setContent('');
//       setAuthor('');
//       setSource('');
//       setSections([{ picture: '', title: '', number: 0, text: '' }]);
//     } catch (error) {
//       setError('Error creating article');
//       setSuccess('');
//     }
//   };

//   return (
//     <div>
//       <h2>Create New Article</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title</label>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         </div>
//         <div>
//           <label>Content</label>
//           <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
//         </div>
//         <div>
//           <label>Author</label>
//           <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
//         </div>
//         <div>
//           <label>Source</label>
//           <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
//         </div>
//         <div>
//           <h3>Sections</h3>
//           {sections.map((section, index) => (
//             <div key={index}>
//               <label>Picture</label>
//               <input
//                 type="text"
//                 value={section.picture}
//                 onChange={(e) => handleSectionChange(index, 'picture', e.target.value)}
//                 required
//               />
//               <label>Title</label>
//               <input
//                 type="text"
//                 value={section.title}
//                 onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
//                 required
//               />
//               <label>Number</label>
//               <input
//                 type="number"
//                 value={section.number}
//                 onChange={(e) => handleSectionChange(index, 'number', parseInt(e.target.value, 10))}
//                 required
//               />
//               <label>Text</label>
//               <textarea
//                 value={section.text}
//                 onChange={(e) => handleSectionChange(index, 'text', e.target.value)}
//                 required
//               />
//               <button type="button" onClick={() => handleRemoveSection(index)}>
//                 Remove Section
//               </button>
//             </div>
//           ))}
//           <button type="button" onClick={handleAddSection}>
//             Add Section
//           </button>
//         </div>
//         <button type="submit">Create Article</button>
//       </form>
//     </div>
//   );
// };

// export default CreateArticleForm;
import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../middleware/config';

const CreateArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [source, setSource] = useState('');
  const [coverPicture, setCoverPicture] = useState(''); // Added coverPicture state
  const [sections, setSections] = useState([
    { picture: '', title: '', number: 0, paragraphs: [''] },
  ]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSectionChange = (index, field, value) => {
    const newSections = sections.slice();
    newSections[index][field] = value;
    setSections(newSections);
  };

  const handleParagraphChange = (sectionIndex, paragraphIndex, value) => {
    const newSections = sections.slice();
    newSections[sectionIndex].paragraphs[paragraphIndex] = value;
    setSections(newSections);
  };

  const handleAddParagraph = (sectionIndex) => {
    const newSections = sections.slice();
    newSections[sectionIndex].paragraphs.push('');
    setSections(newSections);
  };

  const handleRemoveParagraph = (sectionIndex, paragraphIndex) => {
    const newSections = sections.slice();
    newSections[sectionIndex].paragraphs.splice(paragraphIndex, 1);
    setSections(newSections);
  };

  const handleAddSection = () => {
    setSections([
      ...sections,
      { picture: '', title: '', number: sections.length + 1, paragraphs: [''] },
    ]);
  };

  const handleRemoveSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/articles`, {
        title,
        content,
        author,
        source,
        coverPicture, // Added coverPicture field
        sections,
      });

      setSuccess('Article created successfully');
      setError('');
      setTitle('');
      setContent('');
      setAuthor('');
      setSource('');
      setCoverPicture(''); // Reset coverPicture
      setSections([{ picture: '', title: '', number: 0, paragraphs: [''] }]);
    } catch (error) {
      setError('Error creating article');
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Create New Article</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <div>
          <label>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Source</label>
          <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
        </div>
        <div>
          <label>Cover Picture URL</label>
          <input
            type="text"
            value={coverPicture}
            onChange={(e) => setCoverPicture(e.target.value)}
            required
          />
        </div>
        <div>
          <h3>Sections</h3>
          {sections.map((section, index) => (
            <div key={index}>
              <label>Picture</label>
              <input
                type="text"
                value={section.picture}
                onChange={(e) => handleSectionChange(index, 'picture', e.target.value)}
                required
              />
              <label>Title</label>
              <input
                type="text"
                value={section.title}
                onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
                required
              />
              <label>Number</label>
              <input
                type="number"
                value={section.number}
                onChange={(e) => handleSectionChange(index, 'number', parseInt(e.target.value, 10))}
                required
              />
              <h4>Paragraphs</h4>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <div key={paragraphIndex}>
                  <textarea
                    value={paragraph}
                    onChange={(e) => handleParagraphChange(index, paragraphIndex, e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveParagraph(index, paragraphIndex)}
                  >
                    Remove Paragraph
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddParagraph(index)}>
                Add Paragraph
              </button>
              <button type="button" onClick={() => handleRemoveSection(index)}>
                Remove Section
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddSection}>
            Add Section
          </button>
        </div>
        <button type="submit">Create Article</button>
      </form>
    </div>
  );
};

export default CreateArticleForm;
