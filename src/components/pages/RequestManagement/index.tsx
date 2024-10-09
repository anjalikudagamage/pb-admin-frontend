import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
} from "@mui/material";
import {
  pageContainer,
  pageTitle,
  tableHeaderRow,
  statusBox,
  viewDetailsButton,
} from "./styles";
import Navbar from "../../organisms/Navbar";

interface BookingData {
  date: string;
  id: string;
  username: string;
  location: string;
  status: "Pending" | "Approved" | "Declined";
}

const data: BookingData[] = [
  {
    date: "10/09/2024",
    id: "66dea68bd6c995ef1796931c",
    username: "John Doe",
    location: "Unknown Area",
    status: "Pending",
  },
  {
    date: "11/08/2024",
    id: "66b61dbf3fec63c3cd0b0c01",
    username: "John Doe",
    location: "Unknown Area",
    status: "Declined",
  },
  {
    date: "19/07/2024",
    id: "66b5e9213fec63c3cd0b0bef",
    username: "John Doe",
    location: "Unknown Area",
    status: "Approved",
  },
];

const BookingTablePage: React.FC = () => (
  <>
    <Navbar />
    <Box sx={pageContainer}>
      <Typography variant="h4" sx={pageTitle}>
        Booking Requests
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={tableHeaderRow}>
              <TableCell>Date</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>
                  <Box sx={statusBox(row.status)}>{row.status}</Box>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" sx={viewDetailsButton}>
                    View details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </>
);

export default BookingTablePage;