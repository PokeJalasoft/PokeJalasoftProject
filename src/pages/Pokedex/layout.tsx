import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

interface BasicCardProps {
  children: ReactNode;
}

export default function BasicCard({ children }: BasicCardProps) {
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
        {children}
      </CardContent>
    </Card>
  );
}