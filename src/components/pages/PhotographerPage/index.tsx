import React from "react";
import FAQSection from "../../organisms/FAQSection";
import QuiltedImageList from "../../organisms/PhotographerGallery";
import PackageTable from "../../organisms/PackageTable";
import ReviewSection from "../../organisms/ReviewSection";
import Navbar from "../../organisms/Navbar";
import { Typography } from "@mui/material";
import Img from "../../../assets/images/photographer/image1.jpg"
import {
  sectionTitleStyle,
  photographerDetailsStyle,
} from "./styles";
import PhotographerImage from "../../organisms/PhotographerImage";
import Footer from "../../atoms/Footer";

const PhotographerDetailsPage: React.FC = () => {
  const photographer = {
    details:
      "Eternal Moments Photography is a modern photography studio specializing in capturing life's most precious moments with a creative and personalized touch. Founded in 2012, our studio has quickly become a go-to destination for clients seeking high-quality photography for weddings, engagements, portraits, and commercial projects. Nestled in the heart of the city, Sunset Studio features a state-of-the-art facility equipped with the latest camera technology, professional lighting setups, and a variety of customizable backdrops. Our team of skilled photographers and editors is passionate about storytelling through images, and we pride ourselves on creating a relaxed, fun environment where every client feels comfortable and confident in front of the camera. Whether it's a romantic couple's shoot, a lively family portrait, or a sleek corporate headshot, we are dedicated to delivering stunning results that exceed expectations.",
    packages: [
      {
        name: "Wedding Package",
        price: "$1500",
        details: "Includes full-day coverage...",
      },
      {
        name: "Portrait Package",
        price: "$500",
        details: "Includes a 2-hour session...",
      },
    ],
    reviews: [
      { author: "Alice", rating: 5, comment: "Amazing experience!" },
      { author: "Bob", rating: 4, comment: "Great photos, but a bit pricey." },
    ],
    faqs: [
      {
        question: "Do you travel for shoots?",
        answer: "Yes, I am available for travel.",
      },
      {
        question: "How long does it take to get the photos?",
        answer: "Typically within 2 weeks.",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <PhotographerImage imageUrl={Img}/>
      <QuiltedImageList />
      <Typography sx={sectionTitleStyle}>About the Photographer</Typography>
      <Typography sx={photographerDetailsStyle}>
        {photographer.details}
      </Typography>
      <PackageTable />
      <ReviewSection />
      <FAQSection />
      <Footer/>
    </div>
  );
};

export default PhotographerDetailsPage;
