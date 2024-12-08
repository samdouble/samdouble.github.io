import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function ScoreToStars({ score }: { score: number }) {
  return (
    <div>
      {
        Array.from({ length: Math.floor(score) }).map(() => (
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{
              color: 'gold',
            }}
          />
        ))
      }
      {
        (score % 1) ? (
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            size="lg"
            style={{
              color: 'gold',
            }}
          />
        ) : null
      }
      {
        Array.from({ length: 5 - Math.ceil(score) }).map(() => (
          <FontAwesomeIcon
            icon={faStarRegular}
            size="lg"
            style={{
              color: 'gold',
            }}
          />
        ))
      }
    </div>
  );
}

export default ScoreToStars;
