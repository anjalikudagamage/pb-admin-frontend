import React from "react";
import { useLocation } from "react-router-dom";
import FAQSection from "../../organisms/FAQSection";
import QuiltedImageList from "../../organisms/PhotographerGallery";
import PackageTable from "../../organisms/PackageTable";
import ReviewSection from "../../organisms/ReviewSection";
import Navbar from "../../organisms/Navbar";
import { Typography } from "@mui/material";
import { sectionTitleStyle, photographerDetailsStyle } from "./styles";
import PhotographerImage from "../../organisms/PhotographerImage";
import Footer from "../../atoms/Footer";
import Img from "../../../assets/images/photographerCard/image1.jpg";

const photographers = [
  {
    photographerName: "Eternal Moments Photography",
    description:
      "Eternal Moments Photography is a modern photography studio specializing in capturing life's most precious moments with a creative and personalized touch.",
    packages: [
      {
        name: "Wedding Package",
        price: "$1500",
        features: ["Full-day coverage", "100 Edited Photos", "2 Locations"],
      },
      {
        name: "Event Package",
        price: "$500",
        features: ["2-hour session", "20 Edited Photos", "1 Location"],
      },
    ],
  },
  {
    photographerName: "Timeless Frames Photography",
    description:
      "Timeless Frames Photography focuses on capturing candid moments that last a lifetime. We specialize in portrait and event photography.",
    packages: [
      {
        name: "Portrait Package",
        price: "$800",
        features: ["3-hour session", "50 Edited Photos", "Outdoor/Studio"],
      },
      {
        name: "Event Package",
        price: "$700",
        features: ["5-hour session", "75 Edited Photos", "Unlimited Locations"],
      },
    ],
  },
  {
    photographerName: "Moments in Focus Photography",
    description:
      "Moments in Focus Photography delivers top-quality service with a creative flair. We specialize in family and commercial photography.",
    packages: [
      {
        name: "Family Portrait Package",
        price: "$1000",
        features: [
          "Full-day session",
          "75 Edited Photos",
          "1 Studio and 1 Outdoor Location",
        ],
      },
      {
        name: "Commercial Package",
        price: "$2000",
        features: ["Full-day shoot", "100 Edited Photos", "3 Locations"],
      },
    ],
  },
];

const commonImageUrl = Img;

const PhotographerDetailsPage: React.FC = () => {
  const location = useLocation();
  const selectedPhotographerName = location.state?.photographerName;
  const photographer = photographers.find(
    (p) => p.photographerName === selectedPhotographerName
  );

  if (!photographer) {
    return <div>No photographer data available.</div>;
  }

  return (
    <div>
      <Navbar />

      {/* Use common image for all photographers */}
      <PhotographerImage
        imageUrl={commonImageUrl}
        photographerName={photographer.photographerName}
        description={photographer.description}
      />

      <QuiltedImageList />

      <Typography sx={sectionTitleStyle}>About the Photographer</Typography>
      <Typography sx={photographerDetailsStyle}>
        {photographer.description}
      </Typography>

      {/* Dynamic Package Table */}
      <PackageTable packages={photographer.packages} />

      {/* Static Reviews and FAQs */}
      <ReviewSection
        reviews={[
          { author: "John", rating: 5, comment: "Loved the photos!" },
          {
            author: "Anna",
            rating: 4,
            comment: "Great work, would hire again!",
          },
        ]}
      />
      <FAQSection
        faqs={[
          {
            question: "Do you provide raw images?",
            answer: "No, we provide only edited images.",
          },
          {
            question: "Can you travel for events?",
            answer: "Yes, travel is possible for an additional cost.",
          },
        ]}
      />

      <Footer />
    </div>
  );
};

export default PhotographerDetailsPage;

