import React from 'react';
import { Avatar, Grid, Typography, Container } from '@mui/material';

type Review = {
    author: string;
    image?: string; // Optional image field for reviews without images
    rating: number;
    comment: string;
};

interface ReviewSectionProps {
    reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" padding="100px 0">
                {reviews.map((review, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
                        <Avatar
                            alt={review.author}
                            src={review.image || '/default-avatar.jpg'} // Placeholder for missing images
                            sx={{ width: 150, height: 150, margin: '0 auto' }}
                        />
                        <Typography variant="h6" component="h2" gutterBottom>
                            {review.author}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {review.comment}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Rating: {review.rating} / 5
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ReviewSection;
