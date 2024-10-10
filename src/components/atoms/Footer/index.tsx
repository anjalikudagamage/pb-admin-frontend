import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import {
  Facebook,
  Twitter,
  RssFeed,
  Google,
  GitHub,
} from "@mui/icons-material";
import Img from "../../../assets/logo.png";
import {
  footerContainer,
  logo,
  companyName,
  linkSection,
  link,
  horizontalLine,
  iconSection,
  icon,
  copyright,
  logoImage,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Box sx={footerContainer}>
      <Grid container spacing={4} sx={linkSection}>
        <Grid item xs={12} sm={4}>
          <Box sx={logo}>
            <img src={Img} alt="Photobook Logo" style={logoImage} />
          </Box>
          <Typography variant="body2" sx={companyName}>
            CAPTURE YOUR MOMENTS
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Link href="#" sx={link}>
              PACKAGES
            </Link>
            <Link href="#" sx={link}>
              BOOK A SESSION
            </Link>
            <Link href="#" sx={link}>
              FAQs
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Link href="#" sx={link}>
              OUR PHOTOGRAPHERS
            </Link>
            <Link href="#" sx={link}>
              PORTFOLIO
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Link href="#" sx={link}>
              BLOG
            </Link>
            <Link href="#" sx={link}>
              TESTIMONIALS
            </Link>
            <Link href="#" sx={link}>
              SUPPORT
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Link href="#" sx={link}>
              ABOUT US
            </Link>
            <Link href="#" sx={link}>
              CONTACT US
            </Link>
            <Link href="#" sx={link}>
              TERMS OF SERVICE
            </Link>
            <Link href="#" sx={link}>
              PRIVACY POLICY
            </Link>
          </Grid>
        </Grid>
      </Grid>

      {/* Horizontal Line */}
      <Box sx={horizontalLine}></Box>

      <Box sx={iconSection}>
        <Facebook sx={icon} />
        <Twitter sx={icon} />
        <RssFeed sx={icon} />
        <Google sx={icon} />
        <GitHub sx={icon} />
      </Box>

      <Typography variant="body2" sx={copyright}>
        ©2024 PHOTOBOOK. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
