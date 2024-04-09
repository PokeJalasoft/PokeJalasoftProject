import { Card, CardContent, Typography } from "@mui/material";
import CustomButton from "../../components/Button";
import { ReactNode } from "react";

interface BasicCardProps {
  children?: ReactNode;
}

export default function BasicCard({ children }: Readonly<BasicCardProps>) {
  const handleNext = () => {
    console.log("Handle next button click");
  };

  const handlePrevious = () => {
    console.log("Handle previous button click");
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 500,
        minHeight: 500,
        backgroundColor: "rgb(244, 245, 248)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Pokemon Web App
        </Typography>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center",
          }}
        >
          {children}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CustomButton label="Previous" onClick={handlePrevious} />
          <CustomButton label="Next" onClick={handleNext} />
        </div>
      </CardContent>
    </Card>
  );
}
