import * as React from "react";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Box } from "./Theme";

interface RatingStarsProps {
  rating: number;
  color: string;
}

const RatingStars = ({ rating, color }: RatingStarsProps) => {
  const fillRestOfStars = 5 - rating;
  return (
    <Box flexDirection="row" alignItems="center">
      {Array(rating)
        .fill(0)
        .map((_, i) => (
          <Icon
            key={i}
            color={color}
            style={{ marginRight: 2 }}
            name={"star"}
            size={10}
          />
        ))}
      {Array(fillRestOfStars)
        .fill(0)
        .map((_, i) => (
          <Icon
            key={i}
            color={color}
            style={{ marginRight: 2 }}
            name={"star"}
            size={10}
          />
        ))}
    </Box>
  );
};

export default RatingStars;