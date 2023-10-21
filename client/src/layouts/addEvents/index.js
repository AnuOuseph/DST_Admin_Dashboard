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

function AddEvents() {
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
                                Create Event
                            </MDTypography>
                            <form>
                                <Box p={2}>
                                    <TextField
                                        name="title"
                                        label="Title"
                                        fullWidth
                                    />
                                </Box>
                                <Box p={2}>
                                    <TextField
                                        name="date"
                                        label="Date"
                                        fullWidth
                                    />
                                </Box>
                                <Box p={2}>
                                    <TextField
                                        name="sport"
                                        label="Sport"
                                        fullWidth
                                    />
                                </Box>
                                <Box p={2}>
                                    <TextField
                                        name="location"
                                        label="Location"
                                        fullWidth
                                    />
                                </Box>
                                <Box p={2}>
                                    <TextField
                                        name="description"
                                        label="Description"
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
                                    name="outcome"
                                    label="Outcome"
                                    fullWidth
                                />
                            </Box>
                            <Box p={2}>
                                <TextField
                                    name="team1"
                                    label="Team1"
                                    fullWidth
                                />
                            </Box>
                            <Box p={2}>
                                <TextField
                                    name="team2"
                                    label="Team2"
                                    fullWidth
                                />
                            </Box>
                            <MDButton sx={{ margin: '20px' }} variant="gradient" color="dark" >
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

export default AddEvents;
