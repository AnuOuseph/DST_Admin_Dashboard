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

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              {/* <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Authors Table
                </MDTypography>
              </MDBox> */}
              <MDBox p={3}>
                <Typography variant="h4" py={4}>
                  Personal Information
                </Typography>
                <Box display="flex">
                  <Box>
                    <TextField
                      sx={{
                        padding: "10px", // Add your desired padding value here
                      }}
                      label="Client Id"
                      type="text"
                    />
                  </Box>
                  <Box>
                    <TextField
                      sx={{
                        padding: "10px", // Add your desired padding value here
                      }}
                      label="Full Name"
                      type="text"
                    />
                  </Box>
                  <Box>
                    <TextField
                      sx={{
                        padding: "10px", // Add your desired padding value here
                      }}
                      label="Password"
                      type="password"
                    />
                  </Box>
                  <Box>
                    <TextField
                      sx={{
                        padding: "10px", // Add your desired padding value here
                      }}
                      label="Confirm Password"
                      type="password"
                    />
                  </Box>
                </Box>
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
                      label="Check me"
                    />
                  </Box>
                  <Box px={2}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChange} />}
                      label="Check me"
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
                    <Button sx={{
                        margin: "10px",
                      }} 
                      variant="contained" 
                      color="primary"
                      >
                      Click Me
                    </Button>
                  </Box>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
