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

import "./dashboard.css";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import { reportsLineChartData } from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Paper, Typography } from "@mui/material";
import PieChart from "examples/Charts/PieChart";

function Dashboard() {
  const [users, setUsers] = useState({});
  const [revenue, setRevenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentBetsCount, setCurrentBetsCount] = useState(null);
  // investment
  const [investmentToday, setInvestmentToday] = useState(null);
  const [investmentThisMonth, setInvestmentThisMonth] = useState(null);
  const [investmentThisYear, setInvestmentThisYear] = useState(null);
  const [investmentByDay, setInvestmentByDay] = useState([]);
  const [investmentByMonth, setInvestmentByMonth] = useState([]);
  const [investmentByYear, setInvestmentByYear] = useState([]);
  //Chart data
  const [dailyInvestment, setDailyInvestment] = useState(null);
  const [monthlyInvestment, setMonthlyInvestment] = useState(null);
  const [yearlyInvestment, setYearlyInvestment] = useState(null);
  // revenue
  const [revenueToday, setrevenueToday] = useState(null);
  const [revenueThisMonth, setrevenueThisMonth] = useState(null);
  const [revenueThisYear, setrevenueThisYear] = useState(null);
  const [revenueByDay, setRevenueByDay] = useState([]);
  const [revenueByMonth, setRevenueByMonth] = useState([]);
  const [revenueByYear, setRevenueByYear] = useState([]);
  //Chart data
  const [dailyRevenue, setDailyRevenue] = useState(null);
  const [monthlyRevenue, setMonthlyRevenue] = useState(null);
  const [yearlyRevenue, setYearlyRevenue] = useState(null);
  //piechart
  const userPie = {
    labels: ["Total Users", "Active Users", "Suspended Users", "Banned Users"],
    datasets: {
      label: "Yearly Investment",
      data: [
        users?.totalUsersCount,
        users?.activeUsersCount,
        users?.suspendedUsersCount,
        users?.bannedUsersCount,
      ],
    },
  };
  useEffect(() => {
    const apiPromises = [
      axios.get("http://localhost:4000/api/admin/totalUsers"),
      axios.get("http://localhost:4000/api/admin/getCurrentBets"),
      axios.get("http://localhost:4000/api/admin/totalRevenue"),
      axios.get("http://localhost:4000/api/admin/totalInvestmentToday"),
      axios.get("http://localhost:4000/api/admin/totalInvestmentThisMonth"),
      axios.get("http://localhost:4000/api/admin/totalInvestmentThisYear"),
      axios.get("http://localhost:4000/api/admin/totalRevenueToday"),
      axios.get("http://localhost:4000/api/admin/totalRevenueThisMonth"),
      axios.get("http://localhost:4000/api/admin/totalRevenueThisYear"),
      axios.get("http://localhost:4000/api/admin/totalInvestmentByDay"),
      axios.get("http://localhost:4000/api/admin/totalInvestmentByMonth"),
      axios.get("http://localhost:4000/api/admin/totalInvestmentByYear"),
      axios.get("http://localhost:4000/api/admin/totalRevenueByDay"),
      axios.get("http://localhost:4000/api/admin/totalRevenueByMonth"),
      axios.get("http://localhost:4000/api/admin/totalRevenueByYear"),
    ];
    Promise.all(apiPromises).then((responses) => {
      const [
        userData,
        currentBet,
        totalRevenueData,
        investmentTodayData,
        investmentMonthData,
        investmentYearData,
        revenueToday,
        revenueMonthData,
        revenueYearData,
        investmentDailyData,
        investmentMonthlyData,
        investmentYearlyData,
        revenueDailyData,
        revenueMonthlyData,
        revenueYearlyData,
      ] = responses;
      setUsers(userData?.data);
      setCurrentBetsCount(currentBet.data?.currentBets?.length);
      setRevenue(totalRevenueData.data?.revenue);
      setInvestmentToday(investmentTodayData.data?.totalInvestmentToday);
      setInvestmentThisMonth(investmentMonthData.data?.totalInvestmentThisMonth);
      setInvestmentThisYear(investmentYearData.data?.totalInvestmentThisYear);
      setrevenueToday(revenueToday.data?.totalRevenue);
      setrevenueThisMonth(revenueMonthData.data?.totalRevenue);
      setrevenueThisYear(revenueYearData.data?.totalRevenue);
      setInvestmentByDay(investmentDailyData.data?.dailyTotals);
      setInvestmentByMonth(investmentMonthlyData.data?.monthlyTotals);
      setInvestmentByYear(investmentYearlyData.data?.yearlyTotals);
      setRevenueByDay(revenueDailyData.data?.dailyRevenue);
      setRevenueByMonth(revenueMonthlyData.data?.monthlyRevenue);
      setRevenueByYear(revenueYearlyData.data?.yearlyRevenue);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    const {
      monthlyInvestment,
      dailyInvestment,
      yearlyInvestment,
      dailyRevenue,
      monthlyRevenue,
      yearlyRevenue,
    } = reportsLineChartData(
      investmentByDay,
      investmentByMonth,
      investmentByYear,
      revenueByDay,
      revenueByMonth,
      revenueByYear
    );
    setMonthlyInvestment(monthlyInvestment);
    setDailyInvestment(dailyInvestment);
    setYearlyInvestment(yearlyInvestment);
    setDailyRevenue(dailyRevenue);
    setMonthlyRevenue(monthlyRevenue);
    setYearlyRevenue(yearlyRevenue);
  }, [
    investmentByDay,
    investmentByMonth,
    investmentByYear,
    revenueByDay,
    revenueByMonth,
    revenueByYear,
  ]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* Top grid */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Current Bets"
                count={!isLoading ? currentBetsCount : <CircularProgress />}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Total Revenue"
                count={!isLoading ? revenue : <CircularProgress />}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="money"
                title="Today's Investment"
                count={!isLoading ? investmentToday : <CircularProgress />}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="person_add"
                title="Investment - Month"
                count={!isLoading ? investmentThisMonth : <CircularProgress />}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="light"
                icon="person_add"
                title="Investment - Year"
                count={!isLoading ? investmentThisYear : <CircularProgress />}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="leaderboard"
                title="Today's Revenue"
                count={!isLoading ? revenueToday : <CircularProgress />}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="person_add"
                title="Revenue - Month"
                count={!isLoading ? revenueThisMonth : <CircularProgress />}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="secondary"
                icon="person_add"
                title="Revenue - Year"
                count={!isLoading ? revenueThisYear : <CircularProgress />}
              />
            </MDBox>
          </Grid>
        </Grid>
        {/* Graphs */}
        <Typography ml={2} variant="h3">
          Investments
        </Typography>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="dark"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid> */}
            {!isLoading ? (
              <>
                <Grid item xs={12} md={12} lg={6}>
                  <MDBox mb={3}>
                    <ReportsLineChart
                      color="warning"
                      title="Daily Investment"
                      description="Investment data daily"
                      date="updated 4 min ago"
                      chart={dailyInvestment}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <MDBox mb={3}>
                    <ReportsLineChart
                      color="success"
                      title="Monthly Investment"
                      description="Investment data monthly"
                      chart={monthlyInvestment}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <MDBox mb={3}>
                    <ReportsLineChart
                      color="dark"
                      title="Yearly Investment"
                      description="Investment data yearly"
                      chart={yearlyInvestment}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <MDBox mb={3}>
                    <PieChart
                      color="dark"
                      title="User count"
                      description="Count of users according to their status"
                      chart={userPie}
                    />
                  </MDBox>
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                <CircularProgress />
              </Grid>
            )}
          </Grid>
        </MDBox>
        <Typography ml={2} variant="h3">
          Revenue
        </Typography>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="dark"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid> */}
            {!isLoading ? (
              <>
                <Grid item xs={12} md={12} lg={6}>
                  <MDBox mb={3} mt={0}>
                    <ReportsLineChart
                      color="info"
                      title="daily Revenue"
                      description="Revenue data daily"
                      chart={dailyRevenue}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <MDBox mb={3} mt={0}>
                    <ReportsLineChart
                      color="secondary"
                      title="montly revenue"
                      description="Revenue data montly"
                      chart={monthlyRevenue}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <MDBox mb={3} mt={0}>
                    <ReportsLineChart
                      color="dark"
                      title="Yearly revenue"
                      description="Revenue data yearly"
                      chart={yearlyRevenue}
                    />
                  </MDBox>
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                <CircularProgress />
              </Grid>
            )}
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
