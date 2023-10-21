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
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Box, Card, TextField } from "@mui/material";
import MDButton from "components/MDButton";
import useFetch from "hooks/useFetch";
import { useState } from "react";
import axios from "axios";

function CreateUser() {
    const [error,setError] = useState(null)
    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        email: '',
        password: '',
        mobile: '',
        nation: '',
        balance: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    console.log(formData)
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            console.log("hahshagg")
            const res = await axios.post("http://localhost:4000/registerUser",formData)
            console.log("nbsbdhqb",res)
        }catch(err){
            console.log(err)
            setError(err)
        }
    };


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
        <MDBox mt={5} mb={3}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: "none" }}>
                        <MDBox p={2}>
                            <MDTypography sx={{ margin: '20px' }} variant="h6" fontWeight="medium" textTransform="capitalize">
                                General Information
                            </MDTypography>
                            <form>
                                <Box p={2}>
                                    <TextField
                                        name="username"
                                        label="Username"
                                        type="text"
                                        value={formData.username}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Box>
                                <Box p={2}>
                                    <TextField
                                        name="fullname"
                                        label="Full Name"
                                        type="text"
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Box>
                                <Box p={2}>
                                    <TextField
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Box>
                                <Box p={2}>
                                    <TextField
                                        label="Confirm Password"
                                        type="password"
                                        fullWidth
                                    />
                                </Box>
                                <Box p={2}>
                                    <TextField
                                        name="balance"
                                        label="Balance"
                                        type="number"
                                        value={formData.balance}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Box>
                                
                            </form>
                        </MDBox>
                        <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
                        </MDBox>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: "none" }}>
                        <MDBox p={2}>
                            <Box p={2}>
                                <TextField
                                    name="email"
                                    label="Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Box>
                            <Box p={2}>
                                <TextField
                                    name="nation"
                                    label="Nation"
                                    type="text"
                                    value={formData.nation}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Box>
                            <Box p={2}>
                                <TextField
                                    name="mobile"
                                    label="Mobile Number"
                                    type="number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Box>
                            <Box p={2}>
                                <TextField
                                    name="role"
                                    label="User Type"
                                    type="text"
                                    fullWidth
                                />
                            </Box>
                            <MDButton sx={{ margin: '20px' }} variant="gradient" color="dark" onClick={handleSubmit} >
                                Create
                            </MDButton>
                        </MDBox>
                        <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
                        </MDBox>
                    </Card>
                </Grid>
            </Grid>
        </MDBox>
    </DashboardLayout>
  );
}

export default CreateUser;
