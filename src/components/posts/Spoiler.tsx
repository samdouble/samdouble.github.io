import { useState } from 'react';

function Spoiler({
  children,
  shownText,
}: { children: string, shownText: string }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <span
      onClick={() => setIsRevealed(!isRevealed)}
      style={{
        backgroundColor: isRevealed ? 'transparent' : '#fff8d1',
        cursor: 'pointer',
      }}
    >
      { isRevealed ? children : shownText }
    </span>
  );
}

export default Spoiler;
