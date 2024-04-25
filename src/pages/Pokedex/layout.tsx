import { Card, CardContent } from "@mui/material";
import CustomButton from "../../components/Button";
import { ReactNode } from "react";

interface BasicCardProps {
  children: ReactNode;
  loadPrevious: () => void;
  loadNext: () => void;
  offset: number;
}

export default function BasicCard({ children, loadPrevious, loadNext, offset }: Readonly<BasicCardProps>) {
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo-500x313.png"
            alt="Pokemon Logo"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
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
          <CustomButton label="Previous" onClick={loadPrevious} isDisabled={offset === 0} />
          <CustomButton label="Next" onClick={loadNext} isDisabled={false} />
        </div>
      </CardContent>
    </Card>
  );
}
