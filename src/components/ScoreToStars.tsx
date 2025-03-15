import Icon from 'components/Icon';

function ScoreToStars({ score }: { score: number }) {
  return (
    <div>
      {
        Array.from({
          length: Math.floor(score),
        }).map((_, index) => (
          <Icon
            key={index}
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
        Array.from({
          length: 5 - Math.ceil(score),
        }).map((_, index) => (
          <Icon
            key={index}
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
