export const container = {
  maxWidth: "90%",
  margin: "auto",
  padding: "20px",
  marginTop: "100px"
};

export const actionButtons = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
  mb: 3,
  
};

export const card = {
  backgroundColor: "#f8f8f8",
  marginBottom: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

export const cardHeader = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#333",
  borderBottom: "2px solid #ff4081", // Pink accent
  paddingBottom: "5px",
  marginBottom: "10px",
};

export const formField = {
  backgroundColor: "#e0f7fa", // Light blue accent
  borderRadius: "4px",
  marginBottom: "5px"
};

export const editButtonStyle = {
  backgroundImage: "linear-gradient(90deg, #FF6B6B, #FF6B6B)",
  color: "white",
  padding: "15px 45px",
  textAlign: "center",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  boxShadow: "0 0 8px #eee",
  borderRadius: "10px",
  width: "180px",
  height: "60px",
  "&:hover": {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  },
};

export const saveButtonStyle = {
  ...editButtonStyle,
  backgroundImage: "linear-gradient(90deg, #4CAF50, #4CAF50)", // Customize color if needed
};