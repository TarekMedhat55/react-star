import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ReviewStars = ({
  review,
  rating,
}: {
  review: number;
  rating: number;
}) => {
  const tempStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <BsStarFill className="star-fill" />
        ) : rating >= number ? (
          <BsStarHalf className="star-half" />
        ) : (
          <BsStar className="star-empty" />
        )}
      </span>
    );
  });
  return (
    <div className="stars">
      <span> {tempStar}</span>
      {review && <span className="review">({review}) </span>}
    </div>
  );
};

export default ReviewStars;
