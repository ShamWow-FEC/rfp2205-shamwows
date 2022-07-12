/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';

function ReviewsBody({ reviewBody, reviewImages }) {
  const [focused, setFocus] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [showMore, setShowMore] = useState(false);

  function handleClick(e) {
    const targetId = e.target.id;
    if (targetId === 'thumbnail') {
      setFocus(true);
      setImgUrl(e.target.src);
    }
    if (targetId === 'more') {
      e.preventDefault();
      setShowMore(true);
    }
  }

  return (
    <div>
      {focused && (
        <Lightbox
          imageLoadErrorMessage="This image failed to load"
          mainSrc={imgUrl}
          onCloseRequest={() => setFocus(false)}
        />
      )}
      {reviewBody.length > 250 && !showMore ? (
        <div>
          {reviewBody.slice(0, 249)}
          <a href="#" id="more" onClick={handleClick}>Show more</a>
        </div>
      ) : (
        <div>
          {reviewBody}
        </div>
      )}
      <div style={imageContainer}>
        {reviewImages.map((image) => (
          <Thumbnail key={image.id} src={image.url} onClick={handleClick} id="thumbnail" />
        ))}
      </div>
    </div>
  );
}

const imageContainer = {
  display: 'flex',
  gap: '20px',
};

const Thumbnail = styled.img`
  cursor: pointer;
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100px;
`;

export default ReviewsBody;