import React from 'react';
import Icon from 'components/Icon';

function ScoreToStars({ score }: { score: number }) {
  return (
    <div>
      {
        Array.from({ length: Math.floor(score) }).map(() => (
          <Icon
            name="star"
            size="lg"
            style={{
              color: 'gold',
            }}
          />
        ))
      }
      {
        (score % 1) ? (
          <Icon
            name="star-half"
            size="lg"
            style={{
              color: 'gold',
            }}
          />
        ) : null
      }
      {
        Array.from({ length: 5 - Math.ceil(score) }).map(() => (
          <Icon
            name="star-regular"
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
