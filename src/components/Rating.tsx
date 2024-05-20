interface Props {
  rating:number
}

const Rating = ({ rating }:Props) => {
  
  const renderStars = (rating:number) => {
      const filledStars = Math.floor(rating); // Number of filled stars
      const hasHalfStar = rating % 1 !== 0; // Check if there is a half star
        const stars = [];

        // Render filled stars
        for (let i = 0; i < filledStars; i++) {
            stars.push(<i key={i} className="bi bi-star-fill text-black"></i>);
        }

        // Render half star if needed
        if (hasHalfStar) {
            stars.push(<i key="half" className="bi bi-star-half text-black"></i>);
        }

        // Render remaining empty stars
        const remainingStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<i key={`empty-${i}`} className="bi bi-star text-black"></i>);
        }

        return stars;
    };

    return <div>{renderStars(rating)}</div>;
};

export default Rating;
