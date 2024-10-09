export const tableStyles = {
  minWidth: 650,
  "& .MuiTableCell-root": {
    borderBottom: "none",
  },
  "& .MuiTableHead-root": {
    backgroundColor: "#f5f5f5",
  },
  "& .MuiTableRow-root": {
    "&:nth-of-type(even)": {
      backgroundColor: "#f9f9f9",
    },
  },
};

export const statusStyles = {
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: "12px",
  backgroundColor: "#e8f5e9", 
  color: "#4caf50", 
  fontWeight: "bold",
  fontSize: "12px",
};
