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

import Header from "layouts/profile/components/Header";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import { Box, Button, Card, TextField } from "@mui/material";
import MDButton from "components/MDButton";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
        <Card sx={{ boxShadow: "none" }}>
          <Grid xs={12} lg={12} sx={{ display: "flex", justifyContent: "space-between", paddingX: "20px" }}>
              <MDBox height="100%" mt={2} lineHeight={1}>
              <TextField
                sx={{
                  padding: "10px",
                }}
                label="Search User"
                type="text"
              />
                <MDButton variant="gradient" color="dark" sx={{margin: "10px"}}  >
                  Load
                </MDButton>
                <MDButton variant="outlined" color="dark" sx={{margin: "10px"}}>
                  Reset
                </MDButton>
              </MDBox>
              <MDBox height="100%" mt={2} lineHeight={1}>
                <MDButton variant="outlined" color="error" sx={{margin: "10px"}} onClick={()=>{navigate('/active-user')}}>
                  Active User
                </MDButton>
                <MDButton variant="outlined" color="warning" sx={{margin: "10px"}} onClick={()=>{navigate('/create-user')}}>
                  Create User
                </MDButton>
              </MDBox>
          </Grid>
          <Grid container spacing={3}>
             <Grid item xs={12} lg={12}>
              <Card sx={{ padding:"20px",boxShadow: "1px" }}>
                <Invoices />
              </Card>
            </Grid>
          </Grid>
        </Card>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default User;
