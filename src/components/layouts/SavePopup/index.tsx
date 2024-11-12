import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { dialog, title, message, button } from "./styles";

interface PopupProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const SavePopup: React.FC<PopupProps> = ({
  open,
  message: popupMessage,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={dialog}
    >
      <DialogTitle id="alert-dialog-title" sx={title}>
        SUCCESS
      </DialogTitle>
      <DialogContent sx={message}>
        <p>{popupMessage}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={button}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SavePopup;
