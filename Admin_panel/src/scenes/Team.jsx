


import React, { useState } from "react";
import { Box, useTheme, IconButton, InputBase, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataTeam } from "../data/mockData";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined, Search as SearchIcon } from "@mui/icons-material";
import Header from "../components/Header";

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering the data based on search input (case insensitive)
  const filteredTeam = mockDataTeam.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "age", headerName: "Age", type: "number", align: "left", headerAlign: "left" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width="60%"
          m="0 auto"
          display="flex"
          justifyContent="center"
          backgroundColor={access === "Admin" ? colors.greenAccent[600] : colors.greenAccent[700]}
          borderRadius="5px"
          p="0.2rem"
        >
          {access === "admin" && <AdminPanelSettingsOutlined />}
          {access === "manager" && <SecurityOutlined />}
          {access === "user" && <LockOpenOutlined />}
          <Typography color={colors.grey[100]} sx={{ ml: "0.2rem" }}>
            {access}
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box m="0.5rem 1rem">
      {/* Header & Search Bar in One Row */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Header title="TEAM" subtitle="Managing the team members" />
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px" width="30%">
          <InputBase
            type="text"
            placeholder="Search by name..."
            sx={{ ml: 2, flex: 1 }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton sx={{ p: 1 }} type="button">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Team Data Table */}
      <Box
        margin="0.5rem 1rem"
        m="2rem 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
          "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
          "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
          "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
        }}
      >
        <DataGrid rows={filteredTeam} columns={columns} />
      </Box>
    </Box>
  );
}

export default Team;

