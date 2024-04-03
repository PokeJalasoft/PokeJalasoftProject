import { Card, CardContent, Typography } from "@mui/material";
import CustomButton from "../../components/Button";

export default function BasicCard() {
  const handleNext = () => {
    console.log("Handle next button click")
  };

  const handlePrevious = () => {
    console.log("Handle previous button click")
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 500,
        minHeight: 800,
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
            width: 500,
            height: 500,
            backgroundColor: "white",
            marginBottom: "100px",
            marginTop: "100px",
          }}
        ></div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CustomButton label="Previous" onClick={handlePrevious} />
          <CustomButton label="Next" onClick={handleNext} />
        </div>
      </CardContent>
    </Card>
  );
}
