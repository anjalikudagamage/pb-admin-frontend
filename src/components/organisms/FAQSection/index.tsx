import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqContainerStyles, faqItemStyles, buttonContainerStyles, more } from './styles';
import TextButton from '../../atoms/TextButton';

const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={faqContainerStyles}>
      <Typography variant="h3" gutterBottom textAlign="center">
        We're here to answer all your photography questions.
      </Typography>
      <Typography variant="body1" gutterBottom textAlign="center">
        Whether you're a beginner or a pro, this section will help you learn more about photography and our services.
      </Typography>
      <Box sx={faqItemStyles}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What camera should I start with?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you're new to photography, we recommend starting with a DSLR or mirrorless camera with interchangeable lenses.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Do you offer photography workshops?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we offer a range of workshops for different skill levels, from beginners to advanced photographers.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How do I edit my photos?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We provide tutorials on various photo editing software, including Adobe Lightroom and Photoshop, to help you enhance your images.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Can you help with building a photography portfolio?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely! We offer services to help you build a professional portfolio that showcases your best work.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={buttonContainerStyles}>
        <Typography variant="body2" sx= {more}>Got any more questions?</Typography>
        <TextButton text="Search" />
      </Box>
    </Container>
  );
};

export default FAQSection;
