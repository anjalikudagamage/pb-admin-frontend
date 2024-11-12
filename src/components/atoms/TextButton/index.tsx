import React from "react";
import Button from "@mui/material/Button";
import { ButtonStyle } from "./styles";

interface IButtonProps {
  text: string;
  onClick?: () => void;
}

const TextButton: React.FC<IButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      sx={ButtonStyle}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default TextButton;
