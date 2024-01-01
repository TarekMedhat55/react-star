import { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

interface StarsProp {
  maxRating: number;
}
const Stars = ({ maxRating = 5 }: StarsProp) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <div style={{ display: "flex" }}>
        {Array.from({ length: maxRating }, (_, index) => {
          const currentRating = index + 1;
          const isFilled = tempRating
            ? tempRating >= currentRating
            : rating >= currentRating;

          return (
            <span
              className="rating-stars"
              key={index}
              onClick={() => setRating(currentRating)}
              onMouseEnter={() => setTempRating(currentRating)}
              onMouseLeave={() => setTempRating(0)}
            >
              {isFilled ? (
                <BsStarFill className="star-fill" />
              ) : (
                <BsStar className="star-empty" />
              )}
            </span>
          );
        })}
      </div>
      <div style={{ lineHeight: "1.4", margin: "0" }}>{tempRating || ""}</div>
    </div>
  );
};

export default Stars;
