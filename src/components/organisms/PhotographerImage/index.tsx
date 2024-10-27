import React from "react";
import { Box, Typography } from "@mui/material";
import { heroContainer, title, subtitle } from "./styles";

interface PhotographerImageProps {
  imageUrl: string;
  photographerName: string;
  description: string;
}

const PhotographerImage: React.FC<PhotographerImageProps> = ({
  imageUrl,
  photographerName,
  description,
}) => {
  return (
    <Box sx={{ ...heroContainer, overflow: "hidden" }}>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <Typography variant="h4" sx={title}>
        {photographerName}
      </Typography>
      <Typography variant="h6" sx={subtitle}>
        {description}
      </Typography>
    </Box>
  );
};

export default PhotographerImage;
