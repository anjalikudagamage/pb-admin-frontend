import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from '@mui/material';

interface BookingData {
  date: string;
  id: string;
  username: string;
  location: string;
  status: 'Pending' | 'Approved' | 'Declined';
}

const data: BookingData[] = [
  { date: '10/09/2024', id: '66dea68bd6c995ef1796931c', username: 'John Doe', location: 'Unknown Area', status: 'Pending' },
  { date: '11/08/2024', id: '66b61dbf3fec63c3cd0b0c01', username: 'John Doe', location: 'Unknown Area', status: 'Declined' },
  { date: '19/07/2024', id: '66b5e9213fec63c3cd0b0bef', username: 'John Doe', location: 'Unknown Area', status: 'Approved' },
];

const BookingTablePage: React.FC = () => (
  <Box 
    sx={{ 
      padding: '24px', 
      backgroundColor: '#F5F5F5', 
      minHeight: '100vh' 
    }}
  >
    {/* Page Title */}
    <Typography 
      variant="h4" 
      sx={{ 
        marginBottom: '16px', 
        color: '#344054' 
      }}
    >
      Booking Requests
    </Typography>

    {/* Table Container */}
    <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#ECFDF3' }}>
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
                <Box
                  sx={{
                    display: 'inline-block',
                    color:
                      row.status === 'Approved' ? '#17B26A' :
                      row.status === 'Declined' ? '#344054' :
                      '#667085',
                    backgroundColor:
                      row.status === 'Approved' ? '#ECFDF3' :
                      row.status === 'Declined' ? '#E0E0E0' :
                      '#E0E0E0',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  {row.status}
                </Box>
              </TableCell>
              <TableCell>
                <Button 
                  variant="outlined" 
                  sx={{ 
                    color: '#FF6B6B', 
                    borderColor: '#FF6B6B',
                    '&:hover': {
                      backgroundColor: '#FFEBEB',
                      borderColor: '#FF6B6B',
                    },
                    borderRadius: '8px'
                  }}
                >
                  View details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default BookingTablePage;
