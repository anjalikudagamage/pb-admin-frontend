import React from 'react';
import { Box, Typography } from '@mui/material';
import { heroContainer, title, subtitle } from './styles';

interface PhotographerImageProps {
    imageUrl: string;
}

const PhotographerImage: React.FC<PhotographerImageProps> = ({ imageUrl }) => {
    return (
        <Box sx={{ ...heroContainer, backgroundImage: `url(${imageUrl})` }}>
            <Typography variant="h4" sx={title}>
                ETERNAL MOMENTS PHOTOGRAPHY
            </Typography>
            <Typography variant="h6" sx={subtitle}>
                At Eternal Moments Photography Studio, we specialize in capturing life's most cherished moments with elegance and authenticity.
            </Typography>
        </Box>
    );
}

export default PhotographerImage;
