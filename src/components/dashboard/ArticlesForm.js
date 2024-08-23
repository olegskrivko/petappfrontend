// import React from 'react';

// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../../middleware/config';

// const ArticlesForm = () => {
//   const [author, setAuthor] = useState('');
//   const [source, setSource] = useState('');
//   const [coverPicture, setCoverPicture] = useState('');
//   const [languages, setLanguages] = useState({
//     en: {
//       title: '',
//       content: '',
//       sections: [{ picture: '', title: '', number: 0, paragraphs: [''] }],
//     },
//     ru: {
//       title: '',
//       content: '',
//       sections: [{ picture: '', title: '', number: 0, paragraphs: [''] }],
//     },
//     lv: {
//       title: '',
//       content: '',
//       sections: [{ picture: '', title: '', number: 0, paragraphs: [''] }],
//     },
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleLanguageChange = (lang, field, value) => {
//     setLanguages((prev) => ({
//       ...prev,
//       [lang]: { ...prev[lang], [field]: value },
//     }));
//   };

//   const handleSectionChange = (lang, index, field, value) => {
//     const newSections = [...languages[lang].sections];
//     newSections[index][field] = value;
//     setLanguages((prev) => ({
//       ...prev,
//       [lang]: { ...prev[lang], sections: newSections },
//     }));
//   };

//   const handleParagraphChange = (lang, sectionIndex, paragraphIndex, value) => {
//     const newSections = [...languages[lang].sections];
//     newSections[sectionIndex].paragraphs[paragraphIndex] = value;
//     setLanguages((prev) => ({
//       ...prev,
//       [lang]: { ...prev[lang], sections: newSections },
//     }));
//   };

//   const handleAddParagraph = (lang, sectionIndex) => {
//     const newSections = [...languages[lang].sections];
//     newSections[sectionIndex].paragraphs.push('');
//     setLanguages((prev) => ({
//       ...prev,
//       [lang]: { ...prev[lang], sections: newSections },
//     }));
//   };

//   const handleRemoveParagraph = (lang, sectionIndex, paragraphIndex) => {
//     const newSections = [...languages[lang].sections];
//     newSections[sectionIndex].paragraphs.splice(paragraphIndex, 1);
//     setLanguages((prev) => ({
//       ...prev,
//       [lang]: { ...prev[lang], sections: newSections },
//     }));
//   };

//   const handleAddSection = (lang) => {
//     setLanguages((prev) => ({
//       ...prev,
//       [lang]: {
//         ...prev[lang],
//         sections: [
//           ...prev[lang].sections,
//           { picture: '', title: '', number: prev[lang].sections.length + 1, paragraphs: [''] },
//         ],
//       },
//     }));
//   };

//   const handleRemoveSection = (lang, index) => {
//     setLanguages((prev) => ({
//       ...prev,
//       [lang]: {
//         ...prev[lang],
//         sections: prev[lang].sections.filter((_, i) => i !== index),
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post(`${BASE_URL}/articles`, {
//         author,
//         source,
//         coverPicture,
//         languages,
//       });
//       setSuccess('Article created successfully');
//       setError('');
//       // Reset form fields
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
//           <label>Author</label>
//           <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
//         </div>
//         <div>
//           <label>Source</label>
//           <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
//         </div>
//         <div>
//           <label>Cover Picture URL</label>
//           <input
//             type="text"
//             value={coverPicture}
//             onChange={(e) => setCoverPicture(e.target.value)}
//             required
//           />
//         </div>

//         {['en', 'ru', 'lv'].map((lang) => (
//           <div key={lang}>
//             <h3>{lang.toUpperCase()} Section</h3>
//             <div>
//               <label>Title</label>
//               <input
//                 type="text"
//                 value={languages[lang].title}
//                 onChange={(e) => handleLanguageChange(lang, 'title', e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label>Content</label>
//               <textarea
//                 value={languages[lang].content}
//                 onChange={(e) => handleLanguageChange(lang, 'content', e.target.value)}
//                 required
//               />
//             </div>
//             {languages[lang].sections.map((section, index) => (
//               <div key={index}>
//                 <label>Picture</label>
//                 <input
//                   type="text"
//                   value={section.picture}
//                   onChange={(e) => handleSectionChange(lang, index, 'picture', e.target.value)}
//                   required
//                 />
//                 <label>Title</label>
//                 <input
//                   type="text"
//                   value={section.title}
//                   onChange={(e) => handleSectionChange(lang, index, 'title', e.target.value)}
//                   required
//                 />
//                 <label>Number</label>
//                 <input
//                   type="number"
//                   value={section.number}
//                   onChange={(e) =>
//                     handleSectionChange(lang, index, 'number', parseInt(e.target.value, 10))
//                   }
//                   required
//                 />
//                 <h4>Paragraphs</h4>
//                 {section.paragraphs.map((paragraph, paragraphIndex) => (
//                   <div key={paragraphIndex}>
//                     <textarea
//                       value={paragraph}
//                       onChange={(e) =>
//                         handleParagraphChange(lang, index, paragraphIndex, e.target.value)
//                       }
//                       required
//                     />
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveParagraph(lang, index, paragraphIndex)}
//                     >
//                       Remove Paragraph
//                     </button>
//                   </div>
//                 ))}
//                 <button type="button" onClick={() => handleAddParagraph(lang, index)}>
//                   Add Paragraph
//                 </button>
//                 <button type="button" onClick={() => handleRemoveSection(lang, index)}>
//                   Remove Section
//                 </button>
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddSection(lang)}>
//               Add Section
//             </button>
//           </div>
//         ))}
//         <button type="submit">Create Article</button>
//       </form>
//     </div>
//   );
// };

// export default ArticlesForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../../middleware/config';

// const CreateArticleForm = () => {
//   const [author, setAuthor] = useState('');
//   const [source, setSource] = useState('');
//   const [coverPicture, setCoverPicture] = useState('');
//   const [sections, setSections] = useState([
//     {
//       picture: '',
//       title: '',
//       number: 0,
//       paragraphs: {
//         en: [''],
//         ru: [''],
//         lv: [''],
//       },
//     },
//   ]);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSectionChange = (index, field, value) => {
//     const newSections = [...sections];
//     newSections[index][field] = value;
//     setSections(newSections);
//   };

//   const handleParagraphChange = (index, lang, paragraphIndex, value) => {
//     const newSections = [...sections];
//     newSections[index].paragraphs[lang][paragraphIndex] = value;
//     setSections(newSections);
//   };

//   const handleAddParagraph = (index) => {
//     const newSections = [...sections];
//     Object.keys(newSections[index].paragraphs).forEach((lang) => {
//       newSections[index].paragraphs[lang].push('');
//     });
//     setSections(newSections);
//   };

//   const handleRemoveParagraph = (index, paragraphIndex) => {
//     const newSections = [...sections];
//     Object.keys(newSections[index].paragraphs).forEach((lang) => {
//       newSections[index].paragraphs[lang].splice(paragraphIndex, 1);
//     });
//     setSections(newSections);
//   };

//   const handleAddSection = () => {
//     setSections([
//       ...sections,
//       {
//         picture: '',
//         title: '',
//         number: sections.length + 1,
//         paragraphs: {
//           en: [''],
//           ru: [''],
//           lv: [''],
//         },
//       },
//     ]);
//   };

//   const handleRemoveSection = (index) => {
//     setSections(sections.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post(`${BASE_URL}/articles`, {
//         author,
//         source,
//         coverPicture,
//         sections,
//       });
//       setSuccess('Article created successfully');
//       setError('');
//       // Reset form fields
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
//           <label>Author</label>
//           <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
//         </div>
//         <div>
//           <label>Source</label>
//           <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
//         </div>
//         <div>
//           <label>Cover Picture URL</label>
//           <input
//             type="text"
//             value={coverPicture}
//             onChange={(e) => setCoverPicture(e.target.value)}
//             required
//           />
//         </div>

//         {sections.map((section, index) => (
//           <div key={index}>
//             <label>Picture</label>
//             <input
//               type="text"
//               value={section.picture}
//               onChange={(e) => handleSectionChange(index, 'picture', e.target.value)}
//               required
//             />
//             <label>Title</label>
//             <input
//               type="text"
//               value={section.title}
//               onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
//               required
//             />
//             <label>Number</label>
//             <input
//               type="number"
//               value={section.number}
//               onChange={(e) => handleSectionChange(index, 'number', parseInt(e.target.value, 10))}
//               required
//             />
//             <h4>Paragraphs</h4>
//             {['en', 'ru', 'lv'].map((lang) => (
//               <div key={lang}>
//                 <h5>{lang.toUpperCase()}</h5>
//                 {section.paragraphs[lang].map((paragraph, paragraphIndex) => (
//                   <div key={paragraphIndex}>
//                     <textarea
//                       value={paragraph}
//                       onChange={(e) =>
//                         handleParagraphChange(index, lang, paragraphIndex, e.target.value)
//                       }
//                       required
//                     />
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveParagraph(index, paragraphIndex)}
//                     >
//                       Remove Paragraph
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ))}
//             <button type="button" onClick={() => handleAddParagraph(index)}>
//               Add Paragraph
//             </button>
//             <button type="button" onClick={() => handleRemoveSection(index)}>
//               Remove Section
//             </button>
//           </div>
//         ))}
//         <button type="button" onClick={handleAddSection}>
//           Add Section
//         </button>
//         <button type="submit">Create Article</button>
//       </form>
//     </div>
//   );
// };

// export default CreateArticleForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../../middleware/config';

// const CreateArticleForm = () => {
//   const [author, setAuthor] = useState('');
//   const [mainTitle, setMainTitle] = useState({ en: '', ru: '', lv: '' });
//   const [description, setDescription] = useState({ en: '', ru: '', lv: '' });
//   const [source, setSource] = useState('');

//   const [notes, setNotes] = useState({ en: [''], ru: [''], lv: [''] });
//   const [sections, setSections] = useState([
//     {
//       picture: '',
//       pictureFile: null, // To store the actual file object
//       title: { en: '', ru: '', lv: '' },
//       number: 1,
//       content: { en: '', ru: '', lv: '' },
//     },
//   ]);
//   const [sectionImages, setSectionImages] = useState([]); // Track images for each section
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSectionImageChange = (index, e) => {
//     const files = e.target.files;
//     setSectionImages((prevImages) => {
//       const newImages = [...prevImages];
//       newImages[index] = files[0];
//       return newImages;
//     });
//   };

//   const handleMainTitleChange = (lang, value) => {
//     setMainTitle({ ...mainTitle, [lang]: value });
//   };

//   const handleDescriptionChange = (lang, value) => {
//     setDescription({ ...description, [lang]: value });
//   };

//   const handleNoteChange = (lang, index, value) => {
//     const newNotes = { ...notes };
//     newNotes[lang][index] = value;
//     setNotes(newNotes);
//   };

//   const handleAddNote = () => {
//     setNotes({
//       en: [...notes.en, ''],
//       ru: [...notes.ru, ''],
//       lv: [...notes.lv, ''],
//     });
//   };

//   const handleRemoveNote = (index) => {
//     setNotes({
//       en: notes.en.filter((_, i) => i !== index),
//       ru: notes.ru.filter((_, i) => i !== index),
//       lv: notes.lv.filter((_, i) => i !== index),
//     });
//   };

//   const handleSectionChange = (index, field, lang, value) => {
//     const newSections = [...sections];
//     newSections[index][field][lang] = value;
//     setSections(newSections);
//   };

//   const handleSectionFieldChange = (index, field, value) => {
//     const newSections = [...sections];
//     newSections[index][field] = value;
//     setSections(newSections);
//   };

//   const handleAddSection = () => {
//     setSections([
//       ...sections,
//       {
//         picture: '',
//         pictureFile: null,
//         title: { en: '', ru: '', lv: '' },
//         number: sections.length + 1,
//         content: { en: '', ru: '', lv: '' },
//       },
//     ]);
//   };

//   const handleRemoveSection = (index) => {
//     setSections(sections.filter((_, i) => i !== index));
//   };
//   /// image upload logic
//   const handleSectionImageUpload = (index, file) => {
//     const newSections = [...sections];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       newSections[index].picture = reader.result; // URL for preview
//       newSections[index].pictureFile = file; // File object
//       setSections(newSections);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${BASE_URL}/articles`, {
//         author,
//         mainTitle,
//         description,
//         source,

//         notes,
//         sections,
//       });
//       setSuccess('Article created successfully');
//       setError('');
//       setAuthor('');
//       setMainTitle({ en: '', ru: '', lv: '' });
//       setDescription({ en: '', ru: '', lv: '' });
//       setSource('');

//       setNotes({ en: [''], ru: [''], lv: [''] });
//       setSections([
//         {
//           picture: '',
//           pictureFile: null,
//           title: { en: '', ru: '', lv: '' },
//           number: 1,
//           content: { en: '', ru: '', lv: '' },
//         },
//       ]);
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
//           <label>Author</label>
//           <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
//         </div>
//         <div>
//           <h3>Main Title</h3>
//           <label>English</label>
//           <input
//             type="text"
//             value={mainTitle.en}
//             onChange={(e) => handleMainTitleChange('en', e.target.value)}
//             required
//           />
//           <label>Russian</label>
//           <input
//             type="text"
//             value={mainTitle.ru}
//             onChange={(e) => handleMainTitleChange('ru', e.target.value)}
//             required
//           />
//           <label>Latvian</label>
//           <input
//             type="text"
//             value={mainTitle.lv}
//             onChange={(e) => handleMainTitleChange('lv', e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <h3>Description</h3>
//           <label>English</label>
//           <input
//             type="text"
//             value={description.en}
//             onChange={(e) => handleDescriptionChange('en', e.target.value)}
//             required
//           />
//           <label>Russian</label>
//           <input
//             type="text"
//             value={description.ru}
//             onChange={(e) => handleDescriptionChange('ru', e.target.value)}
//             required
//           />
//           <label>Latvian</label>
//           <input
//             type="text"
//             value={description.lv}
//             onChange={(e) => handleDescriptionChange('lv', e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Source</label>
//           <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
//         </div>

//         <div>
//           <h3>Notes</h3>
//           {notes.en.map((_, index) => (
//             <div key={index}>
//               <label>English</label>
//               <textarea
//                 value={notes.en[index]}
//                 onChange={(e) => handleNoteChange('en', index, e.target.value)}
//                 required
//               />
//               <label>Russian</label>
//               <textarea
//                 value={notes.ru[index]}
//                 onChange={(e) => handleNoteChange('ru', index, e.target.value)}
//                 required
//               />
//               <label>Latvian</label>
//               <textarea
//                 value={notes.lv[index]}
//                 onChange={(e) => handleNoteChange('lv', index, e.target.value)}
//                 required
//               />
//               <button type="button" onClick={() => handleRemoveNote(index)}>
//                 Remove Note
//               </button>
//             </div>
//           ))}
//           <button type="button" onClick={handleAddNote}>
//             Add Note
//           </button>
//         </div>
//         <div>
//           <h3>Sections</h3>
//           {sections.map((section, index) => (
//             <div key={index}>
//               <label>Picture</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleSectionImageUpload(index, e.target.files[0])}
//               />
//               {section.picture && (
//                 <div>
//                   <img
//                     src={section.picture}
//                     alt={`Section ${index} Preview`}
//                     style={{ width: '100px', height: 'auto', marginTop: '10px' }}
//                   />
//                 </div>
//               )}
//               <label>Number</label>
//               <input
//                 type="number"
//                 value={section.number}
//                 onChange={(e) => handleSectionFieldChange(index, 'number', e.target.value)}
//                 required
//               />
//               <h4>Title</h4>
//               {['en', 'ru', 'lv'].map((lang) => (
//                 <div key={lang}>
//                   <label>{lang.toUpperCase()}</label>
//                   <input
//                     type="text"
//                     value={section.title[lang]}
//                     onChange={(e) => handleSectionChange(index, 'title', lang, e.target.value)}
//                     required
//                   />
//                 </div>
//               ))}
//               <h4>Content</h4>
//               {['en', 'ru', 'lv'].map((lang) => (
//                 <div key={lang}>
//                   <label>{lang.toUpperCase()}</label>
//                   <textarea
//                     value={section.content[lang]}
//                     onChange={(e) => handleSectionChange(index, 'content', lang, e.target.value)}
//                     required
//                   />
//                 </div>
//               ))}
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
import { BASE_URL } from '../../middleware/config';

const CreateArticleForm = () => {
  const [author, setAuthor] = useState('');
  const [mainTitle, setMainTitle] = useState({ en: '', ru: '', lv: '' });
  const [description, setDescription] = useState({ en: '', ru: '', lv: '' });
  const [source, setSource] = useState('');
  const [notes, setNotes] = useState({ en: [''], ru: [''], lv: [''] });
  const [sections, setSections] = useState([
    {
      picture: '',
      pictureFile: null, // To store the actual file object
      title: { en: '', ru: '', lv: '' },
      number: 1,
      content: { en: '', ru: '', lv: '' },
    },
  ]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSectionImageChange = (index, e) => {
    const files = e.target.files;
    const file = files[0];
    if (file) {
      setSections((prevSections) => {
        const newSections = [...prevSections];
        newSections[index].pictureFile = file; // Store the file object
        return newSections;
      });
    }
  };

  const handleMainTitleChange = (lang, value) => {
    setMainTitle({ ...mainTitle, [lang]: value });
  };

  const handleDescriptionChange = (lang, value) => {
    setDescription({ ...description, [lang]: value });
  };

  const handleNoteChange = (lang, index, value) => {
    const newNotes = { ...notes };
    newNotes[lang][index] = value;
    setNotes(newNotes);
  };

  const handleAddNote = () => {
    setNotes({
      en: [...notes.en, ''],
      ru: [...notes.ru, ''],
      lv: [...notes.lv, ''],
    });
  };

  const handleRemoveNote = (index) => {
    setNotes({
      en: notes.en.filter((_, i) => i !== index),
      ru: notes.ru.filter((_, i) => i !== index),
      lv: notes.lv.filter((_, i) => i !== index),
    });
  };

  const handleSectionChange = (index, field, lang, value) => {
    const newSections = [...sections];
    newSections[index][field][lang] = value;
    setSections(newSections);
  };

  const handleSectionFieldChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const handleAddSection = () => {
    setSections([
      ...sections,
      {
        picture: '',
        pictureFile: null,
        title: { en: '', ru: '', lv: '' },
        number: sections.length + 1,
        content: { en: '', ru: '', lv: '' },
      },
    ]);
  };

  const handleRemoveSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append text fields
    formData.append('author', author);
    formData.append('mainTitle', JSON.stringify(mainTitle));
    formData.append('description', JSON.stringify(description));
    formData.append('source', source);

    // Append notes
    formData.append('notes', JSON.stringify(notes));

    // Append sections with file uploads
    sections.forEach((section, index) => {
      formData.append(`sections[${index}].number`, section.number);
      formData.append(`sections[${index}].title`, JSON.stringify(section.title));
      formData.append(`sections[${index}].content`, JSON.stringify(section.content));

      // Append picture file under the field name `sectionImages`
      if (section.pictureFile) {
        formData.append(`sectionImages[${index}]`, section.pictureFile);
      }
    });

    try {
      await axios.post(`${BASE_URL}/articles`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Article created successfully');
      setError('');
      setAuthor('');
      setMainTitle({ en: '', ru: '', lv: '' });
      setDescription({ en: '', ru: '', lv: '' });
      setSource('');
      setNotes({ en: [''], ru: [''], lv: [''] });
      setSections([
        {
          picture: '',
          pictureFile: null,
          title: { en: '', ru: '', lv: '' },
          number: 1,
          content: { en: '', ru: '', lv: '' },
        },
      ]);
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
          <label>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div>
          <h3>Main Title</h3>
          <label>English</label>
          <input
            type="text"
            value={mainTitle.en}
            onChange={(e) => handleMainTitleChange('en', e.target.value)}
            required
          />
          <label>Russian</label>
          <input
            type="text"
            value={mainTitle.ru}
            onChange={(e) => handleMainTitleChange('ru', e.target.value)}
            required
          />
          <label>Latvian</label>
          <input
            type="text"
            value={mainTitle.lv}
            onChange={(e) => handleMainTitleChange('lv', e.target.value)}
            required
          />
        </div>
        <div>
          <h3>Description</h3>
          <label>English</label>
          <input
            type="text"
            value={description.en}
            onChange={(e) => handleDescriptionChange('en', e.target.value)}
            required
          />
          <label>Russian</label>
          <input
            type="text"
            value={description.ru}
            onChange={(e) => handleDescriptionChange('ru', e.target.value)}
            required
          />
          <label>Latvian</label>
          <input
            type="text"
            value={description.lv}
            onChange={(e) => handleDescriptionChange('lv', e.target.value)}
            required
          />
        </div>
        <div>
          <label>Source</label>
          <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
        </div>

        <div>
          <h3>Notes</h3>
          {notes.en.map((_, index) => (
            <div key={index}>
              <label>English</label>
              <textarea
                value={notes.en[index]}
                onChange={(e) => handleNoteChange('en', index, e.target.value)}
                required
              />
              <label>Russian</label>
              <textarea
                value={notes.ru[index]}
                onChange={(e) => handleNoteChange('ru', index, e.target.value)}
                required
              />
              <label>Latvian</label>
              <textarea
                value={notes.lv[index]}
                onChange={(e) => handleNoteChange('lv', index, e.target.value)}
                required
              />
              <button type="button" onClick={() => handleRemoveNote(index)}>
                Remove Note
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddNote}>
            Add Note
          </button>
        </div>
        <div>
          <h3>Sections</h3>
          {sections.map((section, index) => (
            <div key={index}>
              <label>Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleSectionImageChange(index, e)}
              />
              {section.picture && (
                <div>
                  <img
                    src={section.picture}
                    alt={`Section ${index} Preview`}
                    style={{ width: '100px', height: 'auto', marginTop: '10px' }}
                  />
                </div>
              )}
              <label>Number</label>
              <input
                type="number"
                value={section.number}
                onChange={(e) => handleSectionFieldChange(index, 'number', e.target.value)}
                required
              />
              <h4>Title</h4>
              {['en', 'ru', 'lv'].map((lang) => (
                <div key={lang}>
                  <label>{lang.toUpperCase()}</label>
                  <input
                    type="text"
                    value={section.title[lang]}
                    onChange={(e) => handleSectionChange(index, 'title', lang, e.target.value)}
                    required
                  />
                </div>
              ))}
              <h4>Content</h4>
              {['en', 'ru', 'lv'].map((lang) => (
                <div key={lang}>
                  <label>{lang.toUpperCase()}</label>
                  <textarea
                    value={section.content[lang]}
                    onChange={(e) => handleSectionChange(index, 'content', lang, e.target.value)}
                    required
                  />
                </div>
              ))}
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
