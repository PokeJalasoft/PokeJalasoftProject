import React from 'react';
import { Button } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick: () => void;
  isDisabled: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick, isDisabled }) => {
  return (
    <Button
      disabled={isDisabled}
      variant="contained"
      style={{
        backgroundColor: isDisabled ? "grey" : "rgb(67, 102, 134)",
        color: "white",
        textTransform: "none",
        borderRadius: "50px",
        height: "30px",
        width: "100px",
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
