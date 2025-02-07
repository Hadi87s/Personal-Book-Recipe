"use client";

import type React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

// Create a custom theme for MUI components
const theme = createTheme({
  palette: {
    primary: {
      main: "#FCAF3C",
    },
  },
});

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { email, password });
      // Here you would typically send the data to your backend
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ThemeProvider theme={theme}>
        <div className="flex max-w-[900px] ml-auto mr-auto mt-8">
          {/* Sign-in Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center rounded-bl-2xl rounded-tl-2xl bg-amber-50">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-8">
              <h2 className="text-3xl font-bold mb-6 text-[#FCAF3C]">
                Sign In
              </h2>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                InputLabelProps={{
                  style: { color: "#FCAF3C" },
                }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                InputLabelProps={{
                  style: { color: "#FCAF3C" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                className="mt-4"
              >
                Sign In
              </Button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden md:block w-1/2 relative overflow-hidden group rounded-br-2xl rounded-tr-2xl">
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Recipe"
              className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 group transition duration-150">
              <h1 className="text-4xl font-bold mb-4 text-center group-hover:text-amber-500 transition duration-300">
                Start Your Culinary Adventure
              </h1>
              <p className="text-xl text-center ">
                Discover delicious recipes and share your creations.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </motion.div>
  );
}
