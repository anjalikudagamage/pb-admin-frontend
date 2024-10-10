import React from 'react';
import { Avatar, Grid, Typography, Container,} from '@mui/material';

type Review = {
    name: string;
    image: string;
    review: string;
};

const reviews: Review[] = [
    {
        name: 'Evan Olsen',
        image: '/path/to/image1.jpg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
        name: 'Alice Tate',
        image: '/path/to/image2.jpg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
        name: 'Lee Phillips',
        image: '/path/to/image3.jpg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
];

const ReviewSection: React.FC = () => {
    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" padding="100px 0">
                {reviews.map((review, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
                        <Avatar
                            alt={review.name}
                            src={review.image}
                            sx={{ width: 150, height: 150, margin: '0 auto' }}
                        />
                        <Typography variant="h6" component="h2" gutterBottom>
                            {review.name}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {review.review}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ReviewSection;
