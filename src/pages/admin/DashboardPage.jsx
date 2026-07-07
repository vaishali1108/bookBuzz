import React from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

import Sidebar from "../../componets/common/Sidebar";

function DashboardPage() {
  const stats = [
    {
      title: "Total Members",
      value: "1,240",
      icon: <PeopleAltRoundedIcon />,
      bg: "#E8F1FF",
      color: "#2563EB",
    },
    {
      title: "Total Books",
      value: "3,560",
      icon: <MenuBookRoundedIcon />,
      bg: "#E9FBEF",
      color: "#16A34A",
    },
    {
      title: "Issued Books",
      value: "420",
      icon: <AssignmentTurnedInRoundedIcon />,
      bg: "#FFF4E5",
      color: "#F59E0B",
    },
    {
      title: "Overdue",
      value: "38",
      icon: <WarningAmberRoundedIcon />,
      bg: "#FEECEC",
      color: "#EF4444",
    },
  ];

  const activityTable = [
    { user: "Rahul Sharma", action: "Issued React Book", time: "2 hrs ago", status: "Issued" },
    { user: "Priya Patel", action: "Returned Node Guide", time: "5 hrs ago", status: "Returned" },
    { user: "Amit Verma", action: "Requested Book", time: "1 day ago", status: "Pending" },
    { user: "Neha Singh", action: "Issued UI/UX Book", time: "2 days ago", status: "Issued" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        sx={{
          p: 4,
          ml: 2,
          backgroundColor: "#f8fafc",
          minHeight: "100vh",
          width: "100%"
        }}
      >
        {/* HEADER */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 4,
            background: "linear-gradient(135deg,#0a517e,#1976d2)",
            color: "white",
          }}
        >
          <Typography variant="h3" fontWeight={600}>
            Welcome Back
          </Typography>

          <Typography sx={{ mt: 1, opacity: 0.9 }}>
            Manage Book Buzz
          </Typography>
        </Paper>

        {/* STATS */}
        <Grid container spacing={4}>
          {stats.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                sx={{
                  borderRadius: 4,
                  p: 2,
                  height: 150,
                  width: 200,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: 2,
                  mb: 4,
                }}
              >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography fontSize={14} color="text.secondary">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                    >
                      {item.value}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: 2,
                      background: item.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* TABLE SECTION */}
        <Grid item xs={12} lg={8.5}>

          {/* MAIN ACTIVITY TABLE */}
          <Grid item xs={12} mx={8}>
            <Card sx={{ borderRadius: 4, p: 2, border: "1px solid #eee" }}>
              <Typography fontWeight={700} mb={2}>
                Recent Activity
              </Typography>

              <TableContainer component={Paper} elevation={0}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><b>User</b></TableCell>
                      <TableCell><b>Action</b></TableCell>
                      <TableCell><b>Time</b></TableCell>
                      <TableCell><b>Status</b></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {activityTable.map((row, i) => (
                      <TableRow key={i} hover>
                        <TableCell>{row.user}</TableCell>
                        <TableCell>{row.action}</TableCell>
                        <TableCell>{row.time}</TableCell>
                        <TableCell>
                          <Chip
                            label={row.status}
                            size="small"
                            color={
                              row.status === "Issued"
                                ? "primary"
                                : row.status === "Returned"
                                  ? "success"
                                  : "warning"
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DashboardPage;