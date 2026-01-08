import Icon from 'components/Icon';

function ScoreToStars({ score }: { score: number }) {
  let color = 'red';
  if (score >= 4) {
    color = 'green';
  } else if (score >= 3) {
    color = 'gold';
  } else if (score >= 2) {
    color = 'orange';
  }
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
              color,
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
              color,
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
              color,
            }}
          />
        ))
      }
    </div>
  );
}

export default ScoreToStars;
