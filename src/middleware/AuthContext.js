// AuthContext.js
import React from "react";
import { createContext, useContext, useState } from "react";
import { BASE_URL } from "../middleware/config";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("token") || null
  );

  const login = (userData) => {
    setUser(userData.user);
    setAccessToken(userData.token);
    localStorage.setItem("token", userData.token);
    //console.log("Logged in with token:", userData.token);
    //console.log("User data:", userData.user); // Add this line
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("token");
  };

  // const isAuthenticated = () => {
  //   return !!localStorage.getItem("token") || !!user;
  // };
  // const isAuthenticated = () => {
  //   return !!accessToken || !!user;
  // };
  const isAuthenticated = () => {
    return !!accessToken || !!localStorage.getItem("token") || !!user;
  };

  // This function should handle the user login and return the access token
  const obtainAccessToken = async (credentials) => {
    try {
      // Check if the access token is already present in local storage
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        setAccessToken(storedToken);
        return storedToken;
      }

      // If no stored token, make a POST request to obtain a new token
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Failed to obtain access token");
      }

      const { token } = await response.json();

      // Save the obtained token in local storage for future use
      localStorage.setItem("token", token);

      // Update the state with the obtained token
      setAccessToken(token);

      return token;
    } catch (error) {
      console.error("Error obtaining access token:", error.message);
      throw new Error("Authentication failed");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, obtainAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
