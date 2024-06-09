// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { BASE_URL } from "../middleware/config";
// import { Container, Typography, TextField, Button, Box } from "@mui/material";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${BASE_URL}/auth/login`, {
//         email,
//         password,
//       });
//       localStorage.setItem("token", response.data.token);
//       navigate("/");
//     } catch (err) {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Login
//         </Typography>
//         {error && (
//           <Typography variant="body2" color="error">
//             {error}
//           </Typography>
//         )}
//         <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Login
//           </Button>
//           <Typography variant="body2">
//             Don't have an account? <Link to="/register">Register</Link>.
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../middleware/config";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useAuth } from "../middleware/AuthContext"; // Import the useAuth hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth(); // Access the setUser function from the AuthContext

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    try {
      console.log("Attempting login...");
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });
      console.log("user email", response.data);
      console.log("Login successful:", response.data);
      // Set the user state with the user data from the response
      setUser(response.data.user);
      // Store the authentication token in local storage
      localStorage.setItem("token", response.data.token);
      // Redirect to the home page after successful login
      navigate("/");
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Invalid email or password");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Typography variant="body2">
            Don't have an account? <Link to="/register">Register</Link>.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
