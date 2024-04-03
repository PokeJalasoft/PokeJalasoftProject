import React from 'react';
import { Button } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "rgb(67, 102, 134)",
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
