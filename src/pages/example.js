// // UserContext.js
// import React, { createContext, useState, useContext } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => useContext(UserContext);

// // App.js
// import React from 'react';
// import { UserProvider } from './UserContext';
// import Profile from './Profile';
// import Settings from './Settings';

// const App = () => (
//   <UserProvider>
//     <Profile />
//     <Settings />
//   </UserProvider>
// );

// export default App;

// // Profile.js
// import React from 'react';
// import { useUser } from './UserContext';

// const Profile = () => {
//   const { user } = useUser();

//   return (
//     <div>
//       <h1>Profile</h1>
//       {user ? <p>Welcome, {user.name}</p> : <p>Please log in.</p>}
//     </div>
//   );
// };

// export default Profile;

// // Settings.js
// import React, { useState } from 'react';
// import { useUser } from './UserContext';

// const Settings = () => {
//   const { user, setUser } = useUser();
//   const [name, setName] = useState(user ? user.name : '');

//   const handleSave = () => {
//     setUser({ name });
//   };

//   return (
//     <div>
//       <h1>Settings</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default Settings;
