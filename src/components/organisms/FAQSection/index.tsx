import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqContainerStyles, faqItemStyles, buttonContainerStyles, more } from './styles';
import TextButton from '../../atoms/TextButton';

type FAQ = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
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
        {faqs.map((faq, index) => (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box sx={buttonContainerStyles}>
        <Typography variant="body2" sx={more}>Got any more questions?</Typography>
        <TextButton text="Search" />
      </Box>
    </Container>
  );
};

export default FAQSection;
