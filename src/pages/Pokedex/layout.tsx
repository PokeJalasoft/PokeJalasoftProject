import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <Card variant="outlined" sx={{ minWidth: 500, minHeight: 800, backgroundColor: 'rgb(244, 245, 248)' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Pokemon Web App
        </Typography>
      </CardContent>
    </Card>
  );
}
