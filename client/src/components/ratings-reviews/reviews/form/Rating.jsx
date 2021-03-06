/* eslint-disable react/prop-types */
import React from 'react';
import StarRatings from 'react-star-ratings';

export default function Rating({ starRating, changeRating }) {
  return (
    <StarRatings
      changeRating={(userRating) => { changeRating(userRating); }}
      starDimension="22px"
      starSpacing="2px"
      starRatedColor="goldenrod"
      starHoverColor="goldenrod"
      starEmptyColor="#b1b3b2"
      rating={starRating}
      required
    />
  );
}
