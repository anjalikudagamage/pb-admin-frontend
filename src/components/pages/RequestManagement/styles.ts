import { SxProps } from "@mui/material";

export const pageContainer: SxProps = {
  padding: "24px",
  backgroundColor: "#F5F5F5",
  minHeight: "100vh",
  marginTop: '64px',
};

export const pageTitle: SxProps = {
  marginBottom: "16px",
  color: "#344054",
};

export const tableHeaderRow: SxProps = {
  backgroundColor: "#ECFDF3",
};

export const statusBox = (
  status: "Pending" | "Approved" | "Declined"
): SxProps => ({
  display: "inline-block",
  color:
    status === "Approved"
      ? "#17B26A"
      : status === "Declined"
      ? "#344054"
      : "#667085",
  backgroundColor: status === "Approved" ? "#ECFDF3" : "#E0E0E0",
  padding: "4px 12px",
  borderRadius: "16px",
  fontWeight: "bold",
});

export const viewDetailsButton: SxProps = {
  color: "#FF6B6B",
  borderColor: "#FF6B6B",
  "&:hover": {
    backgroundColor: "#FFEBEB",
    borderColor: "#FF6B6B",
  },
  borderRadius: "8px",
};
