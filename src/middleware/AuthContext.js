import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './config';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.get(`${BASE_URL}/auth/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
        console.log(user, 'auth user');
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const register = async (name, email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      return null;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });
      setUser(response.data.user);
      console.log('Login', response.data.user);
      localStorage.setItem('token', response.data.token);
      await fetchUser(); // Fetch the user data after setting the token
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    try {
      // Clear user from state
      setUser(null);
      // Remove token from local storage
      localStorage.removeItem('token');
    } catch (error) {
      // Log the error for debugging purposes
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout, fetchUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// When a user logs in, your backend should create and supply a token back to the front end. Attach this token to the authorization header of every request. Also, store the token in a cookie. you'll have to do some checking on reload, is there a token in a cookie? if there is, use that, if not, you need to get a new token, repeat. your backend should have middleware on each route that validates the token, confirms it with the public key and checks the expiration. If the token is valid, continue the request, if not, you need to respond to the front end that you need to login again, get a new token.

// If you dont want to roll your own jwt, social sign-in is a good alternative.

// import React, { createContext, useState, useContext } from "react";
// import axios from "axios";
// import { BASE_URL } from "./config";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = async (email, password) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/auth/login`, {
//         email,
//         password,
//       });
//       setUser(response.data.user); // Set the user state with user information
//       localStorage.setItem("token", response.data.token);
//       return true; // Indicate successful login
//     } catch (error) {
//       console.error("Login error:", error);
//       return false; // Indicate login failed
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     // Clear the authentication token from local storage
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// import React, { createContext, useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "./config";

// const AuthContext = createContext();

// export const useAuth = () => React.useContext(AuthContext);

// export const AuthProvider = ({
//   children,
//   initialUser = null,
//   initialToken = null,
// }) => {
//   const [user, setUser] = useState(initialUser);
//   const [token, setToken] = useState(initialToken);

//   const login = async (email, password) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/auth/login`, {
//         email,
//         password,
//       });
//       setUser(response.data.user);
//       setToken(response.data.token);
//       localStorage.setItem("token", response.data.token);
//       return true;
//     } catch (error) {
//       console.error("Login error:", error);
//       return false;
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// The fetchUser function in your useEffect hook is used to fetch the user's data from the server when your application starts up. This is necessary for a couple of reasons:

// Authentication: When your application starts up, it checks local storage for a token. If it finds one, it sends a request to the server with that token to verify that the token is valid and hasn't expired. If the server confirms that the token is valid, the user is considered authenticated.

// User data: Even if you store some user data in local storage along with the token, that data might be outdated. By fetching the user data from the server, you ensure that you have the most up-to-date user data. This is especially important for data that might change frequently.

// So, even though you're storing the token in local storage, you still need to fetch the user data from the server when your application starts up to verify the token and get the latest user data.

// The server confirms the token by verifying it. When the server initially issues the token (usually upon login), it signs the token with a secret key. The token typically contains a payload with user information and a signature.

// When a request comes in with a token, the server uses the same secret key to verify the signature. If the signature is valid, the server knows that the token was issued by it and hasn't been tampered with. The server can then extract the user information from the token payload.

// In your code, this verification process happens when you make a GET request to ${BASE_URL}/auth/user with the token in the Authorization header. The server checks the token, and if it's valid, it returns the user data. If the token is not valid (for example, if it's expired or has been tampered with), the server returns an error.

// This is a simplified explanation. The actual process can be more complex and depends on the specific authentication method and library you're using on the server side.
