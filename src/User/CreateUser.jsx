import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { fetchData } from "../utils";

const dummyData = {
  message: "User created successfully",
  data: {
    ret: 0,
    code: 0,
    msg: "success",
    ret_data: {
      id: 555451,
      username: "user1234",
      email: "user1234@lightningproxies.net",
      password: "b0c3aa9c8ba985605771f9be6cf73397",
      unset_pass: "P@ssw0rd!",
      status: 1,
      created_at: 1730879557,
      agent_id: 179,
      ip_white_quantity_upper_limit: 500,
      unlimited_ip_white_quantity_upper_limit: 500,
      proxy_account_quantity_upper_limit: 500,
      channel: 7,
    },
    timestamp: 1730879557,
  },
};

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.username) formErrors.username = "Username is required";
    // if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
    // Handle successful registration logic

    console.log("User registered successfully:", formData);
    const {username,password} = formData;
    setLoading(true);
    const res = await fetchData("create-user-residential", {
      username,
      email:`${username}@lightningproxies.net`,
      password,
      status: "1",
    });
    console.log(res);
    //   await new Promise(res=>setTimeout(res,2000));
    if(!res.error){
     localStorage.setItem("userInfo", JSON.stringify(res.response?.data?.ret_data));
      window.location.reload();
    }
    setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <Typography variant="h5" component="h1" className="!mb-6 text-center">
          Create User
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <TextField
              label="Username"
              name="username"
              fullWidth
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              variant="outlined"
            />
          </div>
          {/* <div className="mb-4">
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              variant="outlined"
            />
          </div> */}
          <div className="mb-4">
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              variant="outlined"
            />
          </div>
          <div className="mb-6">
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              fullWidth
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              variant="outlined"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="py-2"
            disabled={loading}
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
