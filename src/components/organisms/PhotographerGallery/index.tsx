import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { galleryContainer, imageBox, titleStyles } from "./styles";
import Img from "../../../assets/images/photographer/gallery/image1.jpg"

const categories = [
  { title: "Paintings & Prints", imageUrl: Img },
  { title: "Photography", imageUrl: Img  },
  { title: "Drawings & Illustration", imageUrl: Img  },
  { title: "Digital Art", imageUrl: Img  },
  { title: "Sculptures & Carvings", imageUrl: Img },
  { title: "Ceramics & Pottery", imageUrl: Img }
];

const PhotographerGallery: React.FC = () => {
  return (
    <Box sx={galleryContainer}>
      <Typography variant="h4" sx={{ mb: 4, color: "#1A4870", fontSize: "40px", }}>
        Categories
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={imageBox}
              style={{ backgroundImage: `url(${category.imageUrl})` }}
            >
              <Typography variant="h6" sx={titleStyles}>
                {category.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PhotographerGallery;
