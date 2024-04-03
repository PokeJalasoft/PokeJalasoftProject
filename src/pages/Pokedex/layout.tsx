import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
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
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(67, 102, 134)",
              color: "white",
              textTransform: "none",
              borderRadius: "50px",
              height: "30px",
              width: "100px",
              marginRight: "10px",
            }}
          >
            Previous
          </Button>
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
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
