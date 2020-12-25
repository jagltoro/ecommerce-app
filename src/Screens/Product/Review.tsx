import * as React from "react";
import { FontAwesome as Icon } from "@expo/vector-icons";

import { Box, Text } from "../../Components/Theme";
import RatingStars from "../../Components/RatingStars";

interface ReviewProps {
  review: {
    user: string;
    rating: number;
    ratingColor: string;
    review: string;
    date: string;
    colorSecondary: string;
  }
}

const Review = ({review: {user, rating, ratingColor, date, review, colorSecondary}}: ReviewProps) => {
  return (
    <Box marginBottom="m">
      <Text>{user}</Text>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginTop="s"
      >
        <RatingStars rating={rating} color={ratingColor} />
        <Text variant="secondary">{date}</Text>
      </Box>
      <Text variant="text">{review}</Text>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          style={{
            fontSize: 11,
            fontFamily: "SF-Regular",
            color: colorSecondary,
            marginTop: 5,
          }}
        >
          {Math.floor(Math.random() * (100 - 10) + 10)} people found this
          helpful
        </Text>
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <Text
            style={{
              fontSize: 11,
              fontFamily: "SF-Regular",
              color: colorSecondary,
              marginTop: 5,
            }}
          >
            Helpful
          </Text>
          <Icon
            name="thumbs-up"
            size={12}
            color={colorSecondary}
            style={{ marginLeft: 5, marginTop: 4 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
