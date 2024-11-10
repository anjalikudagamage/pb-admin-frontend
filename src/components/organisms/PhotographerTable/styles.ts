export const container = {
  maxWidth: "90%",
  margin: "auto",
  padding: "20px",
  marginTop: "60px",
};

export const actionButtons = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
  mb: 3,
};

export const card = {
  backgroundColor: "#FFF5F8",
  marginBottom: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
};

export const cardHeader = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#333",
  borderBottom: "2px solid #ff4081",
  paddingBottom: "5px",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
};

export const formField = {
  backgroundColor: "#f0fcfc",
  borderRadius: "6px",
  marginBottom: "5px",
};

export const editButtonStyle = {
  backgroundImage: "linear-gradient(90deg, #FF6B6B, #FF6B6B)",
  color: "white",
  padding: "15px 45px",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  '&:hover': {
    backgroundPosition: "right center",
    backgroundColor: "#FF6B6B",
  },
};

export const saveButtonStyle = {
  backgroundImage: "linear-gradient(90deg, #00796b, #4db6ac)",
  color: "white",
  padding: "15px 45px",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  '&:hover': {
    backgroundPosition: "right center",
    backgroundColor: "#4db6ac",
  },
};
