/* eslint-disable prettier/prettier */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Box, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import MDButton from "components/MDButton";
import axios from "axios";


function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [checked, setChecked] = React.useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    adminID:'',
    fullname:'',
    password:'',
    privilages:'',
  })

  const handleAdmin = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };
  console.log(formData);


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/api/admin/createAdmin`, formData);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox p={3}>
                <Typography variant="h4" py={4}>
                  Personal Information
                </Typography>
                <Grid display="flex" lg={12}>
                  <Grid lg={4}>
                    <TextField
                      sx={{
                        padding: "10px", // Add your desired padding value here
                      }}
                      name="adminID"
                      label="Admin Id"
                      type="text"
                      value={formData.adminID}
                      onChange={handleAdmin}
                    />
                  </Grid>
                  <Grid lg={4}>
                    <TextField
                      sx={{
                        padding: "10px", // Add your desired padding value here
                      }}
                      name="fullname"
                      label="Full Name"
                      type="text"
                      value={formData.fullname}
                      onChange={handleAdmin}
                    />
                  </Grid>
                  <Grid lg={4}>
                    <TextField
                      sx={{
                        padding: "10px", // Add your desired padding value here
                      }}
                      name="password"
                      label="Password"
                      type="password"
                      value={formData.password}
                      onChange={handleAdmin}
                    />
                  </Grid>
                  <Grid lg={4}>
                    <TextField
                      sx={{
                        padding: "10px", // Add your desired padding value here
                      }}
                      name="confirm password"
                      label="Confirm Password"
                    />
                  </Grid>
                </Grid>
                <Typography variant="h4" py={4}>
                  Previleges
                </Typography>
                <Box sx={{display: "flex", flexWrap: "wrap", padding: "10px",}}>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="All"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="Dashboard"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="Market Analysis"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="User List"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="Insert User"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="Bank"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="Account Statement"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="Current Bets"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="User History"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="Casino Result"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="Events"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="Market Analysis"
                    />
                  </Box>
                </Box>
                <Box sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}>
                    <TextField
                      sx={{
                        padding: "10px",
                      }}
                      label="Transaction Code"
                      type="text"
                    />
                    <MDButton variant="gradient" color="error" sx={{marginY: "10px"}} onClick={handleSubmit}>
                      Submit
                    </MDButton>
                  </Box>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
