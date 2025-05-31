import { useState } from 'react';

export default function Spoiler({
  children,
  shownText,
}: { children: string, shownText: string }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <span
      onClick={() => setIsRevealed(!isRevealed)}
      style={{
        backgroundColor: isRevealed ? '#fff8d1' : '#f2f2f2',
        cursor: 'pointer',
      }}
    >
      { isRevealed ? children : shownText }
    </span>
  );
}
