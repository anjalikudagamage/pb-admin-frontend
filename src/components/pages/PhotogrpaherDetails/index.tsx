import Navbar from "../../organisms/Navbar";
import PhotographerTable from "../../organisms/PhotographerTable";
import backgroundStyles from "./styles";
import { Box } from "@mui/material";

function PhotographerDetails() {
  return (
    <>
      <Navbar />
      <Box sx={backgroundStyles}>
        <PhotographerTable />
      </Box>
    </>
  );
}

export default PhotographerDetails;
