import React, { useState } from "react";

const StarRating = ({ rating, onChange, isValid, theme }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleStarClick = (newRating) => {
    if (onChange) {
      onChange(newRating);
    }
  };

  const renderStar = (starValue) => {
    const filledStar = starValue <= rating;
    const halfStar = starValue === Math.floor(rating) + 0.5;
    const starClassName = `
      star
      ${filledStar ? "filled" : ""}
      ${halfStar ? "half" : ""}
      ${isValid ? "" : "invalid"}
    `;
    return (
      <span
        className={starClassName}
        onClick={() => handleStarClick(starValue)}
        onMouseEnter={() => setHoveredRating(starValue)}
        onMouseLeave={() => setHoveredRating(null)}
      >
        ★
      </span>
    );
  };

  const starContainerClassName = `star-container ${theme}`;

  return (
    <div className={starContainerClassName}>
      {renderStar(0.5)}
      {renderStar(1)}
      {renderStar(1.5)}
      {renderStar(2)}
      {renderStar(2.5)}
      {renderStar(3)}
      {renderStar(3.5)}
      {renderStar(4)}
      {renderStar(4.5)}
      {renderStar(5)}
      {!isValid && <div className="error-message">Invalid rating</div>}
    </div>
  );
};

export default StarRating;
