export const cardStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 3,
  borderRadius: 2,
  backgroundColor: "#fff",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  minHeight: "150px",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
  color: "white",
};

export const iconStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.5rem",
  marginBottom: 1,
  color: "primary.main",
};

export const valueStyles = {
  fontWeight: "bold",
};

export const labelStyles = {
  color: "textSecondary",
};

export const sectionTitleStyles = {
  marginY: 3,
  fontWeight: "bold",
  color: "textPrimary",
};
