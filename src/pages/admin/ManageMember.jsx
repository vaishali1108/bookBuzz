import React from 'react';
import Sidebar from '../../componets/common/Sidebar';
import {
    Box,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Chip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Search from '../../componets/common/Search';



function ManageMember(props) {
    const members = [
        {
            id: 1,
            name: "Rahul Sharma",
            email: "rahul@gmail.com",
            phone: "9876543210",
            status: "Active",
        },
        {
            id: 2,
            name: "Priya Patel",
            email: "priya@gmail.com",
            phone: "9123456780",
            status: "Inactive",
        },
        {
            id: 3,
            name: "Amit Verma",
            email: "amit@gmail.com",
            phone: "9988776655",
            status: "Active",
        },
    ];

    return (
        <>
            <Sidebar />
            <Box
                sx={{
                    ml: "210px",
                    p: 3,
                    width: "calc(100% - 210px)",
                    boxSizing: "border-box",
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                    }}
                >
                    <Typography variant="h4" fontWeight="bold">
                        Manage Members
                    </Typography>

                    <Button variant="contained">
                        Add Member
                    </Button>
                </Box>

                <Search shadow={"Search Member..."}/>

                {/* Table */}
                <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
                    <Table>
                        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Member</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {members.map((member) => (
                                <TableRow key={member.id} hover>
                                    <TableCell>{member.id}</TableCell>

                                    {/* Member Info */}
                                    <TableCell>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            {member.name}
                                        </Box>
                                    </TableCell>

                                    <TableCell>{member.email}</TableCell>
                                    <TableCell>{member.phone}</TableCell>

                                    {/* Status */}
                                    <TableCell>
                                        <Chip
                                            label={member.status}
                                            color={member.status === "Active" ? "success" : "default"}
                                            size="small"
                                        />
                                    </TableCell>

                                    {/* Actions */}
                                    <TableCell align="right">
                                        <IconButton>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>


        </>
    );
}

export default ManageMember;

