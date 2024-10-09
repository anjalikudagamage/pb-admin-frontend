import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface PermitDetailsPopupProps {
  open: boolean;
  onClose: () => void;
  onApprove: () => void;
  onDecline: () => void;
  parkingArea: string;
  companyName: string;
  date: string;
}

const PermitDetailsPopup: React.FC<PermitDetailsPopupProps> = ({
  open,
  onClose,
  onApprove,
  onDecline,
  parkingArea,
  companyName,
  date,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Permit Details
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography>Parking Area: {parkingArea}</Typography>
        <Typography>Company name: {companyName}</Typography>
        <Typography>Date: {date}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onApprove}
          sx={{
            background: "linear-gradient(to right, #ff6ec4, #f9a962)",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(to right, #f76fa6, #f8b76b)",
            },
          }}
        >
          Approve
        </Button>
        <Button
          onClick={onDecline}
          sx={{
            background: "#FF6B6B",
            color: "#fff",
            "&:hover": {
              background: "#FF5A5A",
            },
          }}
        >
          Decline
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PermitDetailsPopup;
