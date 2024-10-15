import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { modalContainer, popup, buttonContainer, okButtonStyle, loginButtonStyle } from './styles';
import { useNavigate } from "react-router-dom"; 

interface SignupPopupProps {
  open: boolean;
  onClose: () => void;
}

const SignupPopup: React.FC<SignupPopupProps> = ({
  open,
  onClose,
}) => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate("/login"); 
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalContainer}>
        <Box sx={popup}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            <strong>Thank You for Joining Us!</strong>
          </Typography>
          <Typography variant="body1" sx={{ marginY: 2, textAlign: 'center' }}>
            Your registration was successfully completed. 
            <br />
            Click the button below to login.
          </Typography>
          <Box sx={buttonContainer}>
            <Button variant="contained" onClick={onClose} sx={okButtonStyle}>
              OK
            </Button>
            <Button variant="outlined" onClick={handleLoginClick} sx={loginButtonStyle}>
              Go to Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignupPopup;