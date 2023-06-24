import React, { useState } from "react";
import StarRating from "../components/starRating";

const App = () => {
  const [rating, setRating] = useState(3.5);
  const [isValid, setIsValid] = useState(true);
  const [theme, setTheme] = useState("light");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <StarRating
        rating={rating}
        onChange={handleRatingChange}
        isValid={isValid}
        theme={theme}
      />
      <div>
        <label>
          Theme:
          <select
            value={theme}
            onChange={(e) => handleThemeChange(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default App;
