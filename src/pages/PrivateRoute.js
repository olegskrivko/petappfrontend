import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../middleware/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, fetchUser, loading } = useAuth();

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user, fetchUser]);

  if (loading) {
    return null; // or a loading spinner
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";

// const BASE_URL = "http://localhost:5000"; // Replace with your server's URL

// const PrivateRoute = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           const response = await axios.get(`${BASE_URL}/auth/user`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           setIsAuthenticated(true);
//         } catch (error) {
//           console.error("Error fetching user:", error);
//           setIsAuthenticated(false);
//         }
//       } else {
//         setIsAuthenticated(false);
//       }
//       setLoading(false);
//     };

//     fetchUser();
//   }, []);

//   if (loading) {
//     return null; // or a loading spinner
//   }

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// import React from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem("token");

//   return token ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;
// PrivateRoute.js
// import React from "react";
// import { Routes, Navigate } from "react-router-dom";
// import { useAuth } from "../middleware/AuthContext";

// const PrivateRoute = ({ element, ...rest }) => {
//   const { user } = useAuth();

//   return user ? (
//     <Routes {...rest} element={element} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// export default PrivateRoute;
