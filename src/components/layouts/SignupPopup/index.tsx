import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from "@mui/material";
import { dialog, title, message, button } from "./styles";
import { useNavigate } from "react-router-dom";

interface SignupPopupProps {
  open: boolean;
  onClose: () => void;
}

const SignupPopup: React.FC<SignupPopupProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="signup-dialog-title"
      aria-describedby="signup-dialog-description"
      sx={dialog}
    >
      <DialogTitle id="signup-dialog-title" sx={title}>
        Thank You for Joining Us!
      </DialogTitle>
      <DialogContent sx={message}>
        <Typography variant="body1">
          Your registration was successfully completed.
          <br />
          Click the button below to login.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLoginClick} sx={button}>
          Go to Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignupPopup;
